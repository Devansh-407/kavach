import { NextResponse } from 'next/server';
import { FirestoreService } from '@/lib/firestore-service';
import { where, Timestamp } from 'firebase/firestore';
import { generateUpiIntent } from '@/lib/upi-utils';

// POST /api/claims - Create manual claim
export async function POST(request: Request) {
  try {
    const { workerId, description, claimAmount, triggerType } = await request.json();

    if (!workerId || !description) {
      return NextResponse.json(
        { success: false, error: 'workerId and description are required' },
        { status: 400 }
      );
    }

    // Fetch worker and active policy
    const worker = await FirestoreService.getDocument<any>('workers', workerId);
    if (!worker) {
      return NextResponse.json({ success: false, error: 'Worker not found' }, { status: 404 });
    }

    const policies = await FirestoreService.findMany<any>('policies', [
      where('gigWorkerId', '==', workerId),
      where('status', '==', 'Active')
    ]);
    const policy = policies[0];

    if (!policy) {
      return NextResponse.json({ success: false, error: 'No active policy found' }, { status: 404 });
    }

    const amount = claimAmount || policy.coverageAmountPerDay || 500;

    // Generate UPI payout URL
    const upiPayoutUrl = generateUpiIntent(
      worker.upiId || 'NOT_SET',
      `${worker.firstName} ${worker.lastName}`,
      amount
    );

    // Create claim
    const claim = await FirestoreService.addDocument('claims', {
      gigWorkerId: workerId,
      policyId: policy.id,
      claimDate: Timestamp.now(),
      status: 'Initiated',
      claimedLostIncomeAmount: amount,
      approvedPayoutAmount: 0,
      isAutomated: false,
      triggerSource: 'Manual',
      triggerType: triggerType || 'Manual Report',
      stimulationQuery: description,
      payoutUpiId: worker.upiId || 'NOT_SET',
      upiPayoutUrl,
      createdAt: Timestamp.now(),
      lastUpdatedDate: Timestamp.now()
    });

    return NextResponse.json({
      success: true,
      claimId: claim.id,
      message: 'Manual claim created successfully',
      status: 'Initiated'
    });

  } catch (error: any) {
    console.error('Create claim error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create claim' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const workerId = searchParams.get('workerId');

    if (!workerId) {
      return NextResponse.json(
        { success: false, error: 'workerId query parameter is required' },
        { status: 400 }
      );
    }

    // Fetch all claims for this worker (sorted in-memory to avoid composite index)
    const rawClaims = await FirestoreService.findMany<any>('claims', [
      where('gigWorkerId', '==', workerId),
    ]);
    
    // Sort by date descending in memory and limit to 50
    const claims = rawClaims
      .sort((a, b) => {
        const dateA = a.claimDate?.toDate?.()?.getTime() || 0;
        const dateB = b.claimDate?.toDate?.()?.getTime() || 0;
        return dateB - dateA;
      })
      .slice(0, 50);

    // Calculate statistics
    const totalClaims = claims.length;
    const paidClaims = claims.filter(c => c.status === 'Paid');
    const totalPayouts = paidClaims.reduce((sum, c) => sum + (c.approvedPayoutAmount || c.claimedLostIncomeAmount || 0), 0);
    const automatedClaims = claims.filter(c => c.isAutomated).length;
    const avgProcessingMs = paidClaims.length > 0 ? 252000 : 0; // ~4.2 min avg (simulated)

    // Enrich claims with disruption data
    const enrichedClaims = await Promise.all(
      claims.map(async (claim) => {
        let disruptionInfo = null;
        if (claim.disruptionEventId) {
          try {
            const disruption = await FirestoreService.getDocument<any>('disruptions', claim.disruptionEventId);
            if (disruption) {
              disruptionInfo = {
                type: disruption.type?.[0] || disruption.type,
                subType: disruption.subType,
                severity: disruption.severity?.[0] || disruption.severity,
                source: disruption.source,
              };
            }
          } catch { /* ignore */ }
        }

        return {
          id: claim.id,
          date: claim.claimDate?.toDate?.()?.toISOString() || claim.claimDate,
          status: claim.status,
          amount: claim.claimedLostIncomeAmount || 0,
          payout: claim.approvedPayoutAmount || 0,
          isAutomated: claim.isAutomated || false,
          triggerSource: claim.triggerSource || 'Manual',
          triggerType: claim.triggerType || disruptionInfo?.subType || 'Unknown',
          upiPayoutUrl: claim.upiPayoutUrl || null,
          fraudScore: claim.fraudScore || null,
          guidewireClaimId: `GW-CC-${claim.id.slice(-5).toUpperCase()}`,
          disruption: disruptionInfo,
        };
      })
    );

    return NextResponse.json({
      success: true,
      claims: enrichedClaims,
      stats: {
        totalClaims,
        paidClaims: paidClaims.length,
        totalPayouts,
        automatedClaims,
        automatedPercentage: totalClaims > 0 ? Math.round((automatedClaims / totalClaims) * 100) : 0,
        avgProcessingTime: '4.2 min',
        avgProcessingMs,
        successRate: totalClaims > 0 ? Math.round((paidClaims.length / totalClaims) * 100) : 0,
      },
    });
  } catch (error: any) {
    console.error('Claims API error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch claims' },
      { status: 500 }
    );
  }
}
