// Weather Service — server-side only (imported by API routes)

/**
 * Weather Service — fetches real-time weather data from Open-Meteo API
 * (Free, open-source, NO API key required)
 * Covers Indian cities relevant to KavachPay's parametric insurance.
 */

export interface CityWeather {
  city: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  rainMm: number;
  aqi: number | null;
  description: string;
  weatherCode: number;
  timestamp: string;
}

export interface ParametricAlert {
  city: string;
  triggerType: 'Heavy Rain' | 'Extreme Heat' | 'Poor Air Quality' | 'High Wind';
  severity: 'Medium' | 'High' | 'Critical';
  value: number;
  threshold: number;
  unit: string;
  description: string;
}

// Indian cities to monitor
const MONITORED_CITIES = [
  // Tier 1 Cities
  { name: 'Mumbai', lat: 19.076, lon: 72.8777 },
  { name: 'Delhi', lat: 28.6139, lon: 77.209 },
  { name: 'Bangalore', lat: 12.9716, lon: 77.5946 },
  { name: 'Hyderabad', lat: 17.385, lon: 78.4867 },
  { name: 'Chennai', lat: 13.0827, lon: 80.2707 },
  { name: 'Kolkata', lat: 22.5726, lon: 88.3639 },
  { name: 'Pune', lat: 18.5204, lon: 73.8567 },
  { name: 'Ahmedabad', lat: 23.0225, lon: 72.5714 },
  // Tier 2 Cities
  { name: 'Jaipur', lat: 26.9124, lon: 75.7873 },
  { name: 'Lucknow', lat: 26.8467, lon: 80.9462 },
  { name: 'Kanpur', lat: 26.4499, lon: 80.3319 },
  { name: 'Nagpur', lat: 21.1458, lon: 79.0882 },
  { name: 'Indore', lat: 22.7196, lon: 75.8577 },
  { name: 'Thane', lat: 19.2183, lon: 72.9781 },
  { name: 'Bhopal', lat: 23.2599, lon: 77.4126 },
  { name: 'Visakhapatnam', lat: 17.6868, lon: 83.2185 },
  { name: 'Vadodara', lat: 22.3072, lon: 73.1812 },
  { name: 'Ghaziabad', lat: 28.6692, lon: 77.4538 },
  { name: 'Ludhiana', lat: 30.9010, lon: 75.8573 },
  { name: 'Agra', lat: 27.1767, lon: 78.0081 },
  { name: 'Nashik', lat: 19.9975, lon: 73.7898 },
  { name: 'Faridabad', lat: 28.4089, lon: 77.3178 },
  { name: 'Meerut', lat: 28.9845, lon: 77.7064 },
  { name: 'Rajkot', lat: 22.3039, lon: 70.8022 },
  // Major State Cities
  { name: 'Surat', lat: 21.1702, lon: 72.8311 },
  { name: 'Patna', lat: 25.5941, lon: 85.1376 },
  { name: 'Varanasi', lat: 25.3176, lon: 83.0104 },
  { name: 'Allahabad', lat: 25.4358, lon: 81.8463 },
  { name: 'Ranchi', lat: 23.3441, lon: 85.3096 },
  { name: 'Guwahati', lat: 26.1445, lon: 91.7362 },
  { name: 'Chandigarh', lat: 30.7333, lon: 76.7794 },
  { name: 'Mysore', lat: 12.2958, lon: 76.6394 },
  { name: 'Coimbatore', lat: 11.0168, lon: 76.9558 },
  { name: 'Kochi', lat: 9.9312, lon: 76.2673 },
  { name: 'Thiruvananthapuram', lat: 8.5241, lon: 76.9366 },
  { name: 'Mangalore', lat: 12.9141, lon: 74.8560 },
  { name: 'Madurai', lat: 9.9252, lon: 78.1198 },
  { name: 'Trichy', lat: 10.7905, lon: 78.7047 },
  { name: 'Salem', lat: 11.6643, lon: 78.1460 },
  { name: 'Vijayawada', lat: 16.5062, lon: 80.6480 },
  { name: 'Guntur', lat: 16.3067, lon: 80.4365 },
  { name: 'Nellore', lat: 14.4426, lon: 79.9865 },
  { name: 'Tirupati', lat: 13.6288, lon: 79.4192 },
  { name: 'Warangal', lat: 17.9784, lon: 79.5941 },
  { name: 'Khammam', lat: 17.2477, lon: 80.1514 },
  { name: 'Karimnagar', lat: 18.4392, lon: 79.1288 },
  { name: 'Hubli', lat: 15.3647, lon: 75.1239 },
  { name: 'Belgaum', lat: 15.8497, lon: 74.4977 },
  { name: 'Gulbarga', lat: 17.3297, lon: 76.8343 },
  { name: 'Davangere', lat: 14.4644, lon: 75.9218 },
  { name: 'Shimoga', lat: 13.9313, lon: 75.5679 },
  { name: 'Udupi', lat: 13.3409, lon: 74.7421 },
  { name: 'Bellary', lat: 15.1394, lon: 76.9214 },
  // NCR/Delhi Suburbs
  { name: 'Noida', lat: 28.5355, lon: 77.3910 },
  { name: 'Gurgaon', lat: 28.4595, lon: 77.0266 },
  { name: 'Greater Noida', lat: 28.4744, lon: 77.5040 },
  { name: 'Navi Mumbai', lat: 19.0330, lon: 73.0297 },
  { name: 'Kalyan', lat: 19.2416, lon: 73.1295 },
  { name: 'Dombivli', lat: 19.2187, lon: 73.0867 },
  { name: 'Vasai', lat: 19.3919, lon: 72.8307 },
  // Maharashtra Cities
  { name: 'Aurangabad', lat: 19.8762, lon: 75.3433 },
  { name: 'Nanded', lat: 19.1383, lon: 77.3210 },
  { name: 'Kolhapur', lat: 16.7050, lon: 74.2433 },
  { name: 'Solapur', lat: 17.6599, lon: 75.9064 },
  { name: 'Amravati', lat: 20.9374, lon: 77.7796 },
  { name: 'Jalgaon', lat: 21.0077, lon: 75.5626 },
  { name: 'Dhule', lat: 20.9042, lon: 74.7749 },
  // Madhya Pradesh Cities
  { name: 'Gwalior', lat: 26.2183, lon: 78.1828 },
  { name: 'Jabalpur', lat: 23.1815, lon: 79.9864 },
  { name: 'Ujjain', lat: 23.1765, lon: 75.7885 },
  { name: 'Sagar', lat: 23.8388, lon: 78.7378 },
  { name: 'Dewas', lat: 22.9676, lon: 76.0554 },
  { name: 'Satna', lat: 24.6005, lon: 80.8322 },
  { name: 'Ratlam', lat: 23.3315, lon: 75.0376 },
  // Chhattisgarh Cities
  { name: 'Raipur', lat: 21.2514, lon: 81.6296 },
  { name: 'Bhilai', lat: 21.1938, lon: 81.3509 },
  { name: 'Korba', lat: 22.3595, lon: 82.7501 },
  { name: 'Bilaspur', lat: 22.0797, lon: 82.1409 },
  { name: 'Durg', lat: 21.1905, lon: 81.2849 },
  { name: 'Rajnandgaon', lat: 21.0976, lon: 81.0338 },
  { name: 'Jagdalpur', lat: 19.0745, lon: 82.0387 },
  // Odisha Cities
  { name: 'Bhubaneswar', lat: 20.2961, lon: 85.8245 },
  { name: 'Cuttack', lat: 20.4625, lon: 85.8828 },
  { name: 'Rourkela', lat: 22.2604, lon: 84.8536 },
  { name: 'Berhampur', lat: 19.3140, lon: 84.7941 },
  { name: 'Sambalpur', lat: 21.4669, lon: 83.9756 },
  { name: 'Puri', lat: 19.8135, lon: 85.8312 },
  { name: 'Balasore', lat: 21.4933, lon: 86.9333 },
  // Uttarakhand Cities
  { name: 'Dehradun', lat: 30.3165, lon: 78.0322 },
  { name: 'Haridwar', lat: 29.9457, lon: 78.1642 },
  { name: 'Roorkee', lat: 29.8543, lon: 77.8880 },
  { name: 'Haldwani', lat: 29.2148, lon: 79.5283 },
  { name: 'Rudrapur', lat: 28.9749, lon: 79.4142 },
  { name: 'Kashipur', lat: 29.2136, lon: 78.9569 },
  { name: 'Pithoragarh', lat: 29.5833, lon: 80.2167 },
  // Himachal Pradesh Cities
  { name: 'Shimla', lat: 31.1048, lon: 77.1734 },
  { name: 'Manali', lat: 32.2432, lon: 77.1892 },
  { name: 'Dharamshala', lat: 32.2190, lon: 76.3234 },
  { name: 'Solan', lat: 30.9045, lon: 77.0963 },
  { name: 'Mandi', lat: 31.7088, lon: 76.9320 },
  { name: 'Kullu', lat: 31.9579, lon: 77.1095 },
  { name: 'Una', lat: 31.4685, lon: 76.2697 },
  // J&K Cities
  { name: 'Jammu', lat: 32.7266, lon: 74.8570 },
  { name: 'Srinagar', lat: 34.0837, lon: 74.7973 },
  { name: 'Anantnag', lat: 33.7305, lon: 75.1445 },
  { name: 'Baramulla', lat: 34.2020, lon: 74.3430 },
  { name: 'Sopore', lat: 34.2868, lon: 74.4664 },
  { name: 'Pulwama', lat: 33.8740, lon: 74.8834 },
  { name: 'Udhampur', lat: 32.9179, lon: 75.1416 },
  // Punjab Cities
  { name: 'Amritsar', lat: 31.6330, lon: 74.8723 },
  { name: 'Jalandhar', lat: 31.3260, lon: 75.5762 },
  { name: 'Patiala', lat: 30.3398, lon: 76.3869 },
  { name: 'Bathinda', lat: 30.2110, lon: 74.9455 },
  { name: 'Mohali', lat: 30.6928, lon: 76.7378 },
  { name: 'Pathankot', lat: 32.2643, lon: 75.6421 },
  { name: 'Firozpur', lat: 30.9331, lon: 74.6095 },
  // Haryana Cities
  { name: 'Karnal', lat: 29.6857, lon: 76.9905 },
  { name: 'Panipat', lat: 29.3919, lon: 76.9695 },
  { name: 'Hisar', lat: 29.1492, lon: 75.7217 },
  { name: 'Rohtak', lat: 28.8955, lon: 76.6066 },
  { name: 'Yamunanagar', lat: 30.1290, lon: 77.2674 },
  // Jharkhand Cities
  { name: 'Dhanbad', lat: 23.7957, lon: 86.4304 },
  { name: 'Jamshedpur', lat: 22.8046, lon: 86.2029 },
  { name: 'Bokaro', lat: 23.6693, lon: 86.1511 },
  { name: 'Hazaribagh', lat: 23.9927, lon: 85.3633 },
  { name: 'Deoghar', lat: 24.4806, lon: 86.6943 },
  { name: 'Giridih', lat: 24.1913, lon: 86.2999 },
  { name: 'Ramgarh', lat: 23.6524, lon: 85.5635 },
  // Rajasthan Cities
  { name: 'Kota', lat: 25.2138, lon: 75.8648 },
  { name: 'Udaipur', lat: 24.5854, lon: 73.7125 },
  { name: 'Jodhpur', lat: 26.2389, lon: 73.0243 },
  { name: 'Bikaner', lat: 28.0229, lon: 73.3119 },
  { name: 'Ajmer', lat: 26.4499, lon: 74.6399 },
  { name: 'Bhilwara', lat: 25.3407, lon: 74.6317 },
  { name: 'Alwar', lat: 27.5525, lon: 76.6346 },
  // West Bengal Cities
  { name: 'Siliguri', lat: 26.7271, lon: 88.3953 },
  { name: 'Durgapur', lat: 23.5204, lon: 87.3119 },
  { name: 'Asansol', lat: 23.6739, lon: 86.9524 },
  { name: 'Howrah', lat: 22.5958, lon: 88.2636 },
  { name: 'Kharagpur', lat: 22.3460, lon: 87.2320 },
  { name: 'Malda', lat: 25.0108, lon: 88.1411 },
  { name: 'Darjeeling', lat: 27.0360, lon: 88.2627 },
  // Northeast Cities
  { name: 'Imphal', lat: 24.8170, lon: 93.9368 },
  { name: 'Shillong', lat: 25.5788, lon: 91.8933 },
  { name: 'Aizawl', lat: 23.7271, lon: 92.7176 },
  { name: 'Agartala', lat: 23.8315, lon: 91.2868 },
  { name: 'Kohima', lat: 25.6747, lon: 94.1100 },
  { name: 'Itanagar', lat: 27.0844, lon: 93.6053 },
  { name: 'Gangtok', lat: 27.3314, lon: 88.6138 },
  // Goa Cities
  { name: 'Panaji', lat: 15.4909, lon: 73.8278 },
  { name: 'Margao', lat: 15.2716, lon: 73.9583 },
  { name: 'Vasco', lat: 15.4024, lon: 73.8167 },
  { name: 'Mapusa', lat: 15.5921, lon: 73.8090 },
  { name: 'Ponda', lat: 15.4055, lon: 74.0103 },
  { name: 'Bicholim', lat: 15.5917, lon: 73.9487 },
  { name: 'Curchorem', lat: 15.2614, lon: 74.1085 },
];

// Parametric trigger thresholds
const THRESHOLDS = {
  HEAVY_RAIN_MM: 8,
  EXTREME_HEAT_C: 42,
  POOR_AQI: 400,
  HIGH_WIND_MS: 20,
};

// WMO Weather interpretation codes → description
function weatherCodeToDescription(code: number): string {
  const descriptions: Record<number, string> = {
    0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Foggy', 48: 'Rime fog',
    51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
    61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
    71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
    80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
    95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Thunderstorm with heavy hail',
  };
  return descriptions[code] || 'Unknown';
}

/**
 * Fetch current weather for a single city using Open-Meteo (free, no key)
 */
async function fetchCityWeather(city: { name: string; lat: number; lon: number }): Promise<CityWeather> {
  // Current weather from Open-Meteo
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,weather_code,wind_speed_10m&timezone=Asia/Kolkata`;
  
  const res = await fetch(weatherUrl, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`Open-Meteo error for ${city.name}: ${res.status}`);
  const data = await res.json();
  const current = data.current;

  // AQI from Open-Meteo Air Quality API (also free, no key)
  let aqi: number | null = null;
  try {
    const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${city.lat}&longitude=${city.lon}&current=pm2_5,indian_aqi`;
    const aqiRes = await fetch(aqiUrl, { next: { revalidate: 300 } });
    if (aqiRes.ok) {
      const aqiData = await aqiRes.json();
      aqi = aqiData.current?.indian_aqi ?? null;
    }
  } catch {
    // AQI is optional
  }

  return {
    city: city.name,
    temp: Math.round(current.temperature_2m * 10) / 10,
    feelsLike: Math.round(current.apparent_temperature * 10) / 10,
    humidity: current.relative_humidity_2m,
    windSpeed: Math.round((current.wind_speed_10m / 3.6) * 10) / 10, // km/h → m/s
    rainMm: current.rain || 0,
    aqi,
    description: weatherCodeToDescription(current.weather_code),
    weatherCode: current.weather_code,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Fetch weather for all monitored cities
 */
export async function fetchAllCitiesWeather(): Promise<CityWeather[]> {
  const results = await Promise.allSettled(
    MONITORED_CITIES.map(city => fetchCityWeather(city))
  );

  return results
    .filter((r): r is PromiseFulfilledResult<CityWeather> => r.status === 'fulfilled')
    .map(r => r.value);
}

/**
 * Detect parametric triggers from live weather data
 */
export function detectParametricAlerts(weatherData: CityWeather[]): ParametricAlert[] {
  const alerts: ParametricAlert[] = [];

  for (const w of weatherData) {
    if (w.rainMm > THRESHOLDS.HEAVY_RAIN_MM) {
      alerts.push({
        city: w.city,
        triggerType: 'Heavy Rain',
        severity: w.rainMm > 15 ? 'Critical' : 'High',
        value: w.rainMm,
        threshold: THRESHOLDS.HEAVY_RAIN_MM,
        unit: 'mm/hr',
        description: `Rainfall of ${w.rainMm}mm/hr detected in ${w.city}. Threshold: >${THRESHOLDS.HEAVY_RAIN_MM}mm/hr.`,
      });
    }

    if (w.temp > THRESHOLDS.EXTREME_HEAT_C) {
      alerts.push({
        city: w.city,
        triggerType: 'Extreme Heat',
        severity: w.temp > 45 ? 'Critical' : 'High',
        value: w.temp,
        threshold: THRESHOLDS.EXTREME_HEAT_C,
        unit: '°C',
        description: `Temperature of ${w.temp}°C recorded in ${w.city}. Threshold: >${THRESHOLDS.EXTREME_HEAT_C}°C.`,
      });
    }

    if (w.aqi && w.aqi > THRESHOLDS.POOR_AQI) {
      alerts.push({
        city: w.city,
        triggerType: 'Poor Air Quality',
        severity: w.aqi > 500 ? 'Critical' : 'High',
        value: w.aqi,
        threshold: THRESHOLDS.POOR_AQI,
        unit: 'AQI',
        description: `Indian AQI of ${w.aqi} in ${w.city}. Threshold: >${THRESHOLDS.POOR_AQI}.`,
      });
    }

    if (w.windSpeed > THRESHOLDS.HIGH_WIND_MS) {
      alerts.push({
        city: w.city,
        triggerType: 'High Wind',
        severity: w.windSpeed > 25 ? 'Critical' : 'High',
        value: w.windSpeed,
        threshold: THRESHOLDS.HIGH_WIND_MS,
        unit: 'm/s',
        description: `Wind speed of ${w.windSpeed}m/s in ${w.city}. Threshold: >${THRESHOLDS.HIGH_WIND_MS}m/s.`,
      });
    }
  }

  return alerts;
}

export { MONITORED_CITIES, THRESHOLDS };
