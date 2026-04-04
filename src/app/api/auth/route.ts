import { NextResponse } from 'next/server';
import { MockAuthService, DEMO_CREDENTIALS } from '@/lib/mock-auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, action, firstName, lastName, phone } = body;
    
    console.log(`[MOCK AUTH API] Request received: action=${action}, email=${email}`);

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    if (action === 'register') {
      const result = await MockAuthService.register(
        email,
        password,
        firstName,
        lastName,
        phone
      );

      if (!result.success) {
        return NextResponse.json(
          { success: false, error: result.error },
          { status: 409 }
        );
      }

      return NextResponse.json({
        success: true,
        action: 'registered',
        workerId: result.userId,
        worker: result.user,
        message: result.message,
      });
    }

    // Login
    const result = await MockAuthService.login(email, password);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      action: 'login',
      workerId: result.userId,
      worker: {
        ...result.user,
        persona: null,
      },
      message: result.message,
      demo: {
        note: 'Using mock authentication for demo',
        demoCredentials: DEMO_CREDENTIALS,
      }
    });

  } catch (error: any) {
    console.error('[MOCK AUTH API] Error:', error);
    
    return NextResponse.json(
      { success: false, error: error.message || 'Authentication failed' },
      { status: 500 }
    );
  }
}
