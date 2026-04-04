import { NextResponse } from 'next/server';
import { FirestoreService } from '@/lib/firestore-service';
import { where, Timestamp } from 'firebase/firestore';

// City metadata for Location creation
const CITY_META: Record<string, { state: string; coordinates: string }> = {
  // Tier 1 Cities
  Mumbai: { state: 'Maharashtra', coordinates: '19.076,72.8777' },
  Delhi: { state: 'Delhi', coordinates: '28.6139,77.209' },
  Bangalore: { state: 'Karnataka', coordinates: '12.9716,77.5946' },
  Hyderabad: { state: 'Telangana', coordinates: '17.385,78.4867' },
  Chennai: { state: 'Tamil Nadu', coordinates: '13.0827,80.2707' },
  Kolkata: { state: 'West Bengal', coordinates: '22.5726,88.3639' },
  Pune: { state: 'Maharashtra', coordinates: '18.5204,73.8567' },
  Ahmedabad: { state: 'Gujarat', coordinates: '23.0225,72.5714' },
  // Tier 2 Cities
  Jaipur: { state: 'Rajasthan', coordinates: '26.9124,75.7873' },
  Lucknow: { state: 'Uttar Pradesh', coordinates: '26.8467,80.9462' },
  Kanpur: { state: 'Uttar Pradesh', coordinates: '26.4499,80.3319' },
  Nagpur: { state: 'Maharashtra', coordinates: '21.1458,79.0882' },
  Indore: { state: 'Madhya Pradesh', coordinates: '22.7196,75.8577' },
  Thane: { state: 'Maharashtra', coordinates: '19.2183,72.9781' },
  Bhopal: { state: 'Madhya Pradesh', coordinates: '23.2599,77.4126' },
  Visakhapatnam: { state: 'Andhra Pradesh', coordinates: '17.6868,83.2185' },
  Vadodara: { state: 'Gujarat', coordinates: '22.3072,73.1812' },
  Ghaziabad: { state: 'Uttar Pradesh', coordinates: '28.6692,77.4538' },
  Ludhiana: { state: 'Punjab', coordinates: '30.9010,75.8573' },
  Agra: { state: 'Uttar Pradesh', coordinates: '27.1767,78.0081' },
  Nashik: { state: 'Maharashtra', coordinates: '19.9975,73.7898' },
  Faridabad: { state: 'Haryana', coordinates: '28.4089,77.3178' },
  Meerut: { state: 'Uttar Pradesh', coordinates: '28.9845,77.7064' },
  Rajkot: { state: 'Gujarat', coordinates: '22.3039,70.8022' },
  // Major State Cities
  Surat: { state: 'Gujarat', coordinates: '21.1702,72.8311' },
  Patna: { state: 'Bihar', coordinates: '25.5941,85.1376' },
  Varanasi: { state: 'Uttar Pradesh', coordinates: '25.3176,83.0104' },
  Allahabad: { state: 'Uttar Pradesh', coordinates: '25.4358,81.8463' },
  Ranchi: { state: 'Jharkhand', coordinates: '23.3441,85.3096' },
  Guwahati: { state: 'Assam', coordinates: '26.1445,91.7362' },
  Chandigarh: { state: 'Chandigarh', coordinates: '30.7333,76.7794' },
  Mysore: { state: 'Karnataka', coordinates: '12.2958,76.6394' },
  Coimbatore: { state: 'Tamil Nadu', coordinates: '11.0168,76.9558' },
  Kochi: { state: 'Kerala', coordinates: '9.9312,76.2673' },
  Thiruvananthapuram: { state: 'Kerala', coordinates: '8.5241,76.9366' },
  Mangalore: { state: 'Karnataka', coordinates: '12.9141,74.8560' },
  Madurai: { state: 'Tamil Nadu', coordinates: '9.9252,78.1198' },
  Trichy: { state: 'Tamil Nadu', coordinates: '10.7905,78.7047' },
  Salem: { state: 'Tamil Nadu', coordinates: '11.6643,78.1460' },
  Vijayawada: { state: 'Andhra Pradesh', coordinates: '16.5062,80.6480' },
  Guntur: { state: 'Andhra Pradesh', coordinates: '16.3067,80.4365' },
  Nellore: { state: 'Andhra Pradesh', coordinates: '14.4426,79.9865' },
  Tirupati: { state: 'Andhra Pradesh', coordinates: '13.6288,79.4192' },
  Warangal: { state: 'Telangana', coordinates: '17.9784,79.5941' },
  Khammam: { state: 'Telangana', coordinates: '17.2477,80.1514' },
  Karimnagar: { state: 'Telangana', coordinates: '18.4392,79.1288' },
  Hubli: { state: 'Karnataka', coordinates: '15.3647,75.1239' },
  Belgaum: { state: 'Karnataka', coordinates: '15.8497,74.4977' },
  Gulbarga: { state: 'Karnataka', coordinates: '17.3297,76.8343' },
  Davangere: { state: 'Karnataka', coordinates: '14.4644,75.9218' },
  Shimoga: { state: 'Karnataka', coordinates: '13.9313,75.5679' },
  Udupi: { state: 'Karnataka', coordinates: '13.3409,74.7421' },
  Bellary: { state: 'Karnataka', coordinates: '15.1394,76.9214' },
  // NCR/Delhi Suburbs
  Noida: { state: 'Uttar Pradesh', coordinates: '28.5355,77.3910' },
  Gurgaon: { state: 'Haryana', coordinates: '28.4595,77.0266' },
  'Greater Noida': { state: 'Uttar Pradesh', coordinates: '28.4744,77.5040' },
  'Navi Mumbai': { state: 'Maharashtra', coordinates: '19.0330,73.0297' },
  Kalyan: { state: 'Maharashtra', coordinates: '19.2416,73.1295' },
  Dombivli: { state: 'Maharashtra', coordinates: '19.2187,73.0867' },
  Vasai: { state: 'Maharashtra', coordinates: '19.3919,72.8307' },
  // Maharashtra Cities
  Aurangabad: { state: 'Maharashtra', coordinates: '19.8762,75.3433' },
  Nanded: { state: 'Maharashtra', coordinates: '19.1383,77.3210' },
  Kolhapur: { state: 'Maharashtra', coordinates: '16.7050,74.2433' },
  Solapur: { state: 'Maharashtra', coordinates: '17.6599,75.9064' },
  Amravati: { state: 'Maharashtra', coordinates: '20.9374,77.7796' },
  Jalgaon: { state: 'Maharashtra', coordinates: '21.0077,75.5626' },
  Dhule: { state: 'Maharashtra', coordinates: '20.9042,74.7749' },
  // Madhya Pradesh Cities
  Gwalior: { state: 'Madhya Pradesh', coordinates: '26.2183,78.1828' },
  Jabalpur: { state: 'Madhya Pradesh', coordinates: '23.1815,79.9864' },
  Ujjain: { state: 'Madhya Pradesh', coordinates: '23.1765,75.7885' },
  Sagar: { state: 'Madhya Pradesh', coordinates: '23.8388,78.7378' },
  Dewas: { state: 'Madhya Pradesh', coordinates: '22.9676,76.0554' },
  Satna: { state: 'Madhya Pradesh', coordinates: '24.6005,80.8322' },
  Ratlam: { state: 'Madhya Pradesh', coordinates: '23.3315,75.0376' },
  // Chhattisgarh Cities
  Raipur: { state: 'Chhattisgarh', coordinates: '21.2514,81.6296' },
  Bhilai: { state: 'Chhattisgarh', coordinates: '21.1938,81.3509' },
  Korba: { state: 'Chhattisgarh', coordinates: '22.3595,82.7501' },
  Bilaspur: { state: 'Chhattisgarh', coordinates: '22.0797,82.1409' },
  Durg: { state: 'Chhattisgarh', coordinates: '21.1905,81.2849' },
  Rajnandgaon: { state: 'Chhattisgarh', coordinates: '21.0976,81.0338' },
  Jagdalpur: { state: 'Chhattisgarh', coordinates: '19.0745,82.0387' },
  // Odisha Cities
  Bhubaneswar: { state: 'Odisha', coordinates: '20.2961,85.8245' },
  Cuttack: { state: 'Odisha', coordinates: '20.4625,85.8828' },
  Rourkela: { state: 'Odisha', coordinates: '22.2604,84.8536' },
  Berhampur: { state: 'Odisha', coordinates: '19.3140,84.7941' },
  Sambalpur: { state: 'Odisha', coordinates: '21.4669,83.9756' },
  Puri: { state: 'Odisha', coordinates: '19.8135,85.8312' },
  Balasore: { state: 'Odisha', coordinates: '21.4933,86.9333' },
  // Uttarakhand Cities
  Dehradun: { state: 'Uttarakhand', coordinates: '30.3165,78.0322' },
  Haridwar: { state: 'Uttarakhand', coordinates: '29.9457,78.1642' },
  Roorkee: { state: 'Uttarakhand', coordinates: '29.8543,77.8880' },
  Haldwani: { state: 'Uttarakhand', coordinates: '29.2148,79.5283' },
  Rudrapur: { state: 'Uttarakhand', coordinates: '28.9749,79.4142' },
  Kashipur: { state: 'Uttarakhand', coordinates: '29.2136,78.9569' },
  Pithoragarh: { state: 'Uttarakhand', coordinates: '29.5833,80.2167' },
  // Himachal Pradesh Cities
  Shimla: { state: 'Himachal Pradesh', coordinates: '31.1048,77.1734' },
  Manali: { state: 'Himachal Pradesh', coordinates: '32.2432,77.1892' },
  Dharamshala: { state: 'Himachal Pradesh', coordinates: '32.2190,76.3234' },
  Solan: { state: 'Himachal Pradesh', coordinates: '30.9045,77.0963' },
  Mandi: { state: 'Himachal Pradesh', coordinates: '31.7088,76.9320' },
  Kullu: { state: 'Himachal Pradesh', coordinates: '31.9579,77.1095' },
  Una: { state: 'Himachal Pradesh', coordinates: '31.4685,76.2697' },
  // J&K Cities
  Jammu: { state: 'Jammu and Kashmir', coordinates: '32.7266,74.8570' },
  Srinagar: { state: 'Jammu and Kashmir', coordinates: '34.0837,74.7973' },
  Anantnag: { state: 'Jammu and Kashmir', coordinates: '33.7305,75.1445' },
  Baramulla: { state: 'Jammu and Kashmir', coordinates: '34.2020,74.3430' },
  Sopore: { state: 'Jammu and Kashmir', coordinates: '34.2868,74.4664' },
  Pulwama: { state: 'Jammu and Kashmir', coordinates: '33.8740,74.8834' },
  Udhampur: { state: 'Jammu and Kashmir', coordinates: '32.9179,75.1416' },
  // Punjab Cities
  Amritsar: { state: 'Punjab', coordinates: '31.6330,74.8723' },
  Jalandhar: { state: 'Punjab', coordinates: '31.3260,75.5762' },
  Patiala: { state: 'Punjab', coordinates: '30.3398,76.3869' },
  Bathinda: { state: 'Punjab', coordinates: '30.2110,74.9455' },
  Mohali: { state: 'Punjab', coordinates: '30.6928,76.7378' },
  Pathankot: { state: 'Punjab', coordinates: '32.2643,75.6421' },
  Firozpur: { state: 'Punjab', coordinates: '30.9331,74.6095' },
  // Haryana Cities
  Karnal: { state: 'Haryana', coordinates: '29.6857,76.9905' },
  Panipat: { state: 'Haryana', coordinates: '29.3919,76.9695' },
  Hisar: { state: 'Haryana', coordinates: '29.1492,75.7217' },
  Rohtak: { state: 'Haryana', coordinates: '28.8955,76.6066' },
  Yamunanagar: { state: 'Haryana', coordinates: '30.1290,77.2674' },
  // Jharkhand Cities
  Dhanbad: { state: 'Jharkhand', coordinates: '23.7957,86.4304' },
  Jamshedpur: { state: 'Jharkhand', coordinates: '22.8046,86.2029' },
  Bokaro: { state: 'Jharkhand', coordinates: '23.6693,86.1511' },
  Hazaribagh: { state: 'Jharkhand', coordinates: '23.9927,85.3633' },
  Deoghar: { state: 'Jharkhand', coordinates: '24.4806,86.6943' },
  Giridih: { state: 'Jharkhand', coordinates: '24.1913,86.2999' },
  Ramgarh: { state: 'Jharkhand', coordinates: '23.6524,85.5635' },
  // Rajasthan Cities
  Kota: { state: 'Rajasthan', coordinates: '25.2138,75.8648' },
  Udaipur: { state: 'Rajasthan', coordinates: '24.5854,73.7125' },
  Jodhpur: { state: 'Rajasthan', coordinates: '26.2389,73.0243' },
  Bikaner: { state: 'Rajasthan', coordinates: '28.0229,73.3119' },
  Ajmer: { state: 'Rajasthan', coordinates: '26.4499,74.6399' },
  Bhilwara: { state: 'Rajasthan', coordinates: '25.3407,74.6317' },
  Alwar: { state: 'Rajasthan', coordinates: '27.5525,76.6346' },
  // West Bengal Cities
  Siliguri: { state: 'West Bengal', coordinates: '26.7271,88.3953' },
  Durgapur: { state: 'West Bengal', coordinates: '23.5204,87.3119' },
  Asansol: { state: 'West Bengal', coordinates: '23.6739,86.9524' },
  Howrah: { state: 'West Bengal', coordinates: '22.5958,88.2636' },
  Kharagpur: { state: 'West Bengal', coordinates: '22.3460,87.2320' },
  Malda: { state: 'West Bengal', coordinates: '25.0108,88.1411' },
  Darjeeling: { state: 'West Bengal', coordinates: '27.0360,88.2627' },
  // Northeast Cities
  Imphal: { state: 'Manipur', coordinates: '24.8170,93.9368' },
  Shillong: { state: 'Meghalaya', coordinates: '25.5788,91.8933' },
  Aizawl: { state: 'Mizoram', coordinates: '23.7271,92.7176' },
  Agartala: { state: 'Tripura', coordinates: '23.8315,91.2868' },
  Kohima: { state: 'Nagaland', coordinates: '25.6747,94.1100' },
  Itanagar: { state: 'Arunachal Pradesh', coordinates: '27.0844,93.6053' },
  Gangtok: { state: 'Sikkim', coordinates: '27.3314,88.6138' },
  // Goa Cities
  Panaji: { state: 'Goa', coordinates: '15.4909,73.8278' },
  Margao: { state: 'Goa', coordinates: '15.2716,73.9583' },
  Vasco: { state: 'Goa', coordinates: '15.4024,73.8167' },
  Mapusa: { state: 'Goa', coordinates: '15.5921,73.8090' },
  Ponda: { state: 'Goa', coordinates: '15.4055,74.0103' },
  Bicholim: { state: 'Goa', coordinates: '15.5917,73.9487' },
  Curchorem: { state: 'Goa', coordinates: '15.2614,74.1085' },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName, lastName, email, phone, upiId, persona,
      city, weeklyPremium, riskFactors, explanation,
      guidewirePolicyId,
    } = body;

    // 1. Find or create Location in Firestore
    const cityMeta = CITY_META[city] || { state: city, coordinates: '0,0' };
    let location = await FirestoreService.findOne('locations', [where('city', '==', city)]);
    
    if (!location) {
      location = await FirestoreService.addDocument('locations', {
        name: city,
        city,
        state: cityMeta.state,
        country: 'India',
        coordinates: cityMeta.coordinates,
        description: `${city}, ${cityMeta.state}`,
      });
    }

    // 2. Find or create GigWorker (or find existing by email) in Firestore
    let worker = await FirestoreService.findOne<any>('workers', [where('email', '==', email)]);
    
    if (!worker) {
      worker = await FirestoreService.addDocument('workers', {
        externalAuthId: `AUTH_${Date.now()}`,
        firstName,
        lastName,
        email,
        phoneNumber: phone,
        upiId: upiId || 'NOT_SET',
        deliveryPartnerCategory: [persona],
        onboardingDate: Timestamp.now(),
        isActive: true,
      });
    } else {
      // Update existing worker with persona if not already set or changed
      await FirestoreService.updateDocument('workers', worker.id, {
        deliveryPartnerCategory: [persona],
        firstName: firstName || worker.firstName,
        lastName: lastName || worker.lastName,
        phoneNumber: phone || worker.phoneNumber,
        upiId: upiId || worker.upiId || 'NOT_SET',
      });
    }

    // 3. Create RiskProfile in Firestore
    const riskProfile = await FirestoreService.addDocument('riskProfiles', {
      gigWorkerId: worker.id,
      locationId: location.id,
      riskScore: Math.round(weeklyPremium * 2.5),
      predictedDisruptionLikelihood: riskFactors?.join(', ') || 'Standard',
      lastCalculatedDate: Timestamp.now(),
      effectiveDate: Timestamp.now(),
    });

    // 4. Create InsurancePolicy in Firestore
    const now = new Date();
    const endDate = new Date(now);
    endDate.setDate(endDate.getDate() + 7);
    const paymentDue = new Date(now);
    paymentDue.setDate(paymentDue.getDate() + 7);

    const policy = await FirestoreService.addDocument('policies', {
      gigWorkerId: worker.id,
      policyStartDate: Timestamp.fromDate(now),
      policyEndDate: Timestamp.fromDate(endDate),
      premiumAmount: weeklyPremium,
      coverageAmountPerDay: 500,
      coverageAmountTotal: 3500,
      status: 'Active',
      paymentDueDate: Timestamp.fromDate(paymentDue),
      isPaid: true,
      riskProfileId: riskProfile.id,
      coveredLocationId: location.id,
    });

    // 5. Call Guidewire PolicyCenter mock
    let policyCenterId = guidewirePolicyId || `GW-PC-${Math.floor(Math.random() * 90000) + 10000}`;

    return NextResponse.json({
      success: true,
      workerId: worker.id,
      policyId: policy.id,
      policyCenterId,
      locationId: location.id,
      riskProfileId: riskProfile.id,
      message: 'Onboarding completed! Worker, policy, and risk profile saved to Firestore.',
    });
  } catch (error: any) {
    console.error('Onboarding API error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to save onboarding data' },
      { status: 500 }
    );
  }
}
