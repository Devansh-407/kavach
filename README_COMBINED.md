# 🛡️ Kavach: AI-Powered Insurance for E-commerce Delivery Partners

<div align="center">
  <img src="kavach logo.png" alt="Kavach Logo" width="300"/>
</div>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made in India](https://img.shields.io/badge/Made%20in-India-FF9933?style=flat&logoColor=white)](https://github.com/Devansh-407/kavach)
[![Production Ready](https://img.shields.io/badge/Production-Ready-brightgreen)](https://github.com/Devansh-407/kavach)
[![Hackathon](https://img.shields.io/badge/Hackathon-Project-brightgreen)](https://github.com/Devansh-407/kavach)

> *"When it rains heavily, I can't deliver. When there's a curfew, I can't deliver. When the app crashes, I can't deliver. Those days, I earn ZERO rupees."* - Rajesh, 28, Amazon Flex delivery partner, Mumbai

> **AI-Powered Parametric Insurance Platform for E-commerce Delivery Partners**

---

## 🎯 The Problem

**15-20 days per year lost to external disruptions**
- **₹12,000-15,000 annual income loss** per delivery partner
- **No safety net** — no paid leaves, no sick days, no insurance
- **Stress and uncertainty** affecting mental health of millions

For India's 10+ million e-commerce delivery partners, one bad day means skipping meals or borrowing money to survive.

## 💡 Our Solution: Kavach

**Kavach** is a comprehensive, production-ready AI-powered parametric insurance platform that automatically compensates e-commerce delivery partners when external disruptions prevent them from working. 

**No paperwork, no manual claims, no delays** — just instant income protection when they need it most.

---

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   AI/ML Service │
│   (React)       │◄──►│   (Node.js)     │◄──►│   (Python)      │
│                 │    │                 │    │                 │
│ • Mobile App    │    │ • REST API      │    │ • Risk Models   │
│ • Dashboard     │    │ • WebSocket     │    │ • Fraud Detection│
│ • Admin Panel   │    │ • Queue Jobs    │    │ • Anomaly AI    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Infrastructure │
                    │                 │
                    │ • PostgreSQL    │
                    │ • Redis         │
                    │ • Docker        │
                    │ • Kubernetes    │
                    └─────────────────┘
```

---

## 🚀 Key Features

### ⚡ Instant Parametric Payouts
- **Auto-trigger** within 15 minutes of disruption
- **80% of daily earnings** credited directly to wallet
- **Zero paperwork** - completely automated
- **UPI Integration**: Direct bank transfers within 1 hour

### 🤖 Multi-Layer AI Protection
- **Weather API integration** (rain, heat, AQI)
- **Crowd-sourced verification** with geotagged images
- **Platform downtime detection**
- **News/government alert monitoring**
- **Real-time Monitoring**: 24/7 disruption detection

### 🛡️ Advanced Fraud Detection
- **Digital signature verification** (video/voice biometrics)
- **GPS location validation**
- **Pattern recognition AI**
- **Network analysis for organized fraud**
- **Multi-Layer Authentication**: JWT, phone verification, biometrics

### 📱 Mobile-First Design
- **Android app** (90% of delivery partners)
- **Works offline** in low-network areas
- **Regional language support**
- **UPI integration** for seamless payments
- **Real-time Alerts**: Push notifications for claims and payouts

---

## 📊 Real-World Impact

### Scenario 1: Heavy Rain in Mumbai
```
Worker: Rajesh, Andheri East (Pincode: 400069)
Rainfall: 45mm in 2 hours
⚡ 8:00 AM: Weather API detects >35mm rain
⚡ 8:15 AM: Rajesh gets ₹960 (80% of lost income)
Result: Family fed despite not working
```

### Scenario 2: Sudden Curfew in Delhi
```
Worker: Priya, Jamia Nagar (Pincode: 110025)
8 workers report barricades in 15 minutes
⚡ 12:50 PM: Auto-trigger for entire pincode (312 workers)
⚡ 1:00 PM: Priya gets ₹440 for lost afternoon shift
Result: Community verification ensures genuine claims
```

---

## 💰 Sustainable Business Model

### Premium: "Pay As You Earn"
```
Weekly Premium = (Avg Weekly Deliveries × ₹5) × Location Risk Factor
Weekly Cap: ₹1,000 maximum
```

**Why ₹5 per delivery?**
- ✅ Simple: "Each delivery = 5 rupees safety"
- ✅ Fair: More deliveries = More risk = More premium
- ✅ Affordable: Only 1-2% of earnings
- ✅ Predictable: Worker knows exact cost per delivery

### Risk-Based Pricing
| City Tier | Risk Score | Multiplier | Examples |
|-----------|------------|------------|----------|
| Low Risk  | 0.0-0.2    | 0.8x       | Jaipur, Pune, Indore |
| Medium Risk | 0.2-0.5  | 1.0x       | Bangalore, Hyderabad |
| High Risk | 0.5-0.8    | 1.3x       | Mumbai, Delhi, Kolkata |
| Very High | 0.8-1.0    | 1.6x       | Coastal areas, flood zones |

---

## 🚀 Technology Stack

### Frontend (React TypeScript)
- **React 18** with TypeScript
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Socket.io Client** for real-time updates
- **i18next** for multi-language support
- **Vite** for fast development

### Backend (Node.js Express)
- **Node.js 20** with TypeScript
- **Express.js** REST API
- **Prisma ORM** with PostgreSQL
- **Redis** for caching and sessions
- **Socket.io** for WebSocket connections
- **Bull Queue** for background jobs
- **JWT** for authentication

### AI/ML Service (Python)
- **Python 3.11** with FastAPI
- **TensorFlow** for deep learning
- **Scikit-learn** for ML models
- **OpenCV** for image verification
- **Prophet** for time-series prediction

### Infrastructure
- **PostgreSQL** primary database
- **Redis** caching layer
- **Docker** containerization
- **Kubernetes** orchestration
- **AWS/Azure** cloud deployment

### APIs & Integrations
- **OpenWeatherMap** - Weather data
- **IMD Weather API** - Indian weather
- **NewsAPI.org** - Curfew/strike alerts
- **Google Maps API** - Geotagging validation
- **Razorpay** - Payment processing
- **Twilio** - SMS notifications
- **Nodemailer** - Email services

---

## 📁 Project Structure

```
kavach-platform/
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   │   ├── LandingPage.tsx
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── HowItWorksPage.tsx
│   │   │   └── CoveragePage.tsx
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API services
│   │   ├── store/           # Redux store
│   │   └── utils/           # Utility functions
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Node.js Express backend
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   │   ├── authController.ts
│   │   │   ├── claimController.ts
│   │   │   └── weatherController.ts
│   │   ├── models/          # Data models
│   │   ├── services/        # Business logic
│   │   │   ├── smsService.ts
│   │   │   ├── emailService.ts
│   │   │   └── fraudDetectionService.ts
│   │   ├── middleware/      # Express middleware
│   │   │   ├── authMiddleware.ts
│   │   │   ├── rateLimiter.ts
│   │   │   └── errorHandler.ts
│   │   ├── routes/          # API routes
│   │   │   └── authRoutes.ts
│   │   ├── websocket/       # WebSocket handlers
│   │   │   └── handlers.ts
│   │   ├── config/          # Configuration files
│   │   │   ├── database.ts
│   │   │   ├── redis.ts
│   │   │   └── logger.ts
│   │   └── jobs/            # Background jobs
│   ├── prisma/              # Database schema
│   │   └── schema.prisma
│   ├── package.json
│   └── .env.example
├── ai-ml-service/           # Python AI/ML service
│   ├── src/
│   │   ├── main.py
│   │   ├── services/
│   │   │   ├── risk_prediction_service.py
│   │   │   ├── fraud_detection_service.py
│   │   │   └── anomaly_detection_service.py
│   │   └── models/
│   ├── requirements.txt
│   └── Dockerfile
├── infrastructure/          # Deployment configs
│   ├── kubernetes/          # K8s manifests
│   ├── terraform/           # Infrastructure as code
│   └── monitoring/          # Monitoring setup
├── docs/                    # Documentation
│   ├── api/                 # API docs
│   ├── architecture/        # Architecture docs
│   ├── deployment/          # Deployment guides
│   └── deployment/
│       └── deployment-guide.md
├── docker-compose.yml       # Full stack deployment
├── .gitignore
└── README.md
```

---

## 🔄 Complete Workflow

```mermaid
graph TD
    A[Worker Registration] --> B[Risk Profiling]
    B --> C[Premium Calculation]
    C --> D[24/7 Disruption Monitoring]
    D --> E[Trigger Detection]
    E --> F[Fraud Detection]
    F --> G[Claim Approval]
    G --> H[Instant Payout]
    H --> I[Analytics Dashboard]
```

### 4-Step Claim Process
1. **🌐 Auto-Detection**: Weather/news/crowd triggers
2. **🤖 AI Verification**: Multi-layer fraud checks
3. **⚡ Instant Approval**: >70% confidence = auto-payout
4. **💸 Immediate Transfer**: UPI/bank within 1 hour

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- Python 3.11+
- PostgreSQL 15+
- Redis 7+
- Docker & Docker Compose

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/Devansh-407/kavach.git
cd kavach/kavach-platform
```

2. **Environment Setup**
```bash
# Backend
cd backend
cp .env.example .env
# Edit .env with your credentials

# Frontend
cd ../frontend
cp .env.example .env
# Edit .env with API URLs
```

3. **Database Setup**
```bash
cd backend
npx prisma migrate dev
npx prisma generate
npx prisma db seed
```

4. **Start Services**
```bash
# Start all services with Docker Compose
docker-compose up -d

# Or start individually:
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm start

# AI/ML Service
cd ai-ml-service && python -m uvicorn src.main:app --reload
```

### Development Server
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **AI/ML Service**: http://localhost:8001
- **Database**: localhost:5432
- **Redis**: localhost:6379

---

## 📊 Database Schema

The platform uses a comprehensive PostgreSQL schema with the following key entities:

- **Users**: Delivery partners with verification status
- **Claims**: Parametric insurance claims with AI verification
- **Premiums**: Weekly premium calculations and payments
- **WeatherEvents**: Real-time weather monitoring data
- **FraudAlerts**: AI-detected fraud patterns
- **Partners**: E-commerce company integrations

[View complete schema](backend/prisma/schema.prisma)

---

## 🔌 API Documentation

### Authentication
```typescript
POST /api/auth/login
POST /api/auth/signup
POST /api/auth/verify-otp
POST /api/auth/refresh
```

### Claims
```typescript
GET /api/claims              # List user claims
GET /api/claims/:id          # Get claim details
POST /api/claims/trigger     # Manual trigger (admin)
GET /api/claims/stats        # Claim statistics
```

### Weather Monitoring
```typescript
GET /api/weather/current     # Current weather
GET /api/weather/forecast    # Weather forecast
POST /api/weather/trigger    # Manual weather trigger
```

### Admin
```typescript
GET /api/admin/fraud-alerts  # Fraud detection alerts
GET /api/admin/analytics     # Dashboard analytics
POST /api/admin/triggers     # Create manual triggers
```

---

## 🤖 AI/ML Models

### Risk Prediction Model
- **Features**: Location history, weather patterns, delivery frequency
- **Algorithm**: XGBoost with time-series features
- **Output**: Risk score (0-1) for premium calculation

### Fraud Detection Model
- **Features**: GPS patterns, claim timing, image metadata
- **Algorithm**: Deep learning with anomaly detection
- **Output**: Fraud probability and confidence score

### Weather Prediction
- **Features**: Historical weather, seasonal patterns
- **Algorithm**: Prophet time-series forecasting
- **Output**: 7-day weather disruption probability

---

## 🔒 Security Features

### Multi-Layer Authentication
- **JWT Tokens**: Secure token-based authentication
- **Phone Verification**: OTP-based user verification
- **Biometric**: Digital signature with voice/facial recognition
- **Role-Based Access**: Admin, partner, user role separation

### Fraud Prevention
- **GPS Validation**: Location spoofing detection
- **Image Verification**: EXIF data and editing detection
- **Pattern Analysis**: AI-powered anomaly detection
- **Network Analysis**: Organized fraud detection

### Data Protection
- **Encryption**: End-to-end data encryption
- **GDPR Compliance**: User data privacy controls
- **Audit Logs**: Complete activity tracking
- **Rate Limiting**: API abuse prevention

---

## 📈 Market Opportunity

### Target Market
- **10+ million** e-commerce delivery partners in India
- **₹3,000-10,000** weekly income per partner
- **Growing 35% YoY** with e-commerce boom

### Revenue Projections
```
Year 1: 50,000 workers × ₹400 avg premium = ₹2.4CR revenue
Year 2: 200,000 workers × ₹400 avg premium = ₹9.6CR revenue
Year 3: 500,000 workers × ₹400 avg premium = ₹24CR revenue
```

### Competitive Advantage
- **First-mover advantage** in delivery partner insurance
- **AI-powered automation** vs manual competitors
- **Parametric model** vs traditional claims process
- **Mobile-first** approach for target demographic

---

## 📈 Performance & Scalability

### Optimization
- **Redis Caching**: Frequently accessed data cached
- **Database Indexing**: Optimized query performance
- **CDN Integration**: Static asset delivery
- **Load Balancing**: Horizontal scaling support

### Monitoring
- **Application Metrics**: Real-time performance monitoring
- **Error Tracking**: Comprehensive error logging
- **Health Checks**: Service availability monitoring
- **Alert System**: Automated incident alerts

---

## 🚀 Deployment

### Production Deployment

1. **Infrastructure Setup**
```bash
cd infrastructure/terraform
terraform apply
```

2. **Kubernetes Deployment**
```bash
cd infrastructure/kubernetes
kubectl apply -f .
```

3. **Monitoring Setup**
```bash
cd infrastructure/monitoring
docker-compose up -d
```

### Environment Variables
See [backend/.env.example](backend/.env.example) for complete configuration.

---

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test                # Unit tests
npm run test:integration # Integration tests
npm run test:e2e       # End-to-end tests
```

### Frontend Tests
```bash
cd frontend
npm test               # Jest unit tests
npm run test:cypress   # E2E tests
```

### AI/ML Tests
```bash
cd ai-ml-service
python -m pytest      # Python unit tests
```

---

## 🎯 Development Roadmap

### Phase 1: MVP (Weeks 1-4)
- ✅ Android app with core features
- ✅ Weather API integration
- ✅ Basic fraud detection
- ✅ UPI simulation for payouts

### Phase 2: Expansion (Weeks 5-6)
- ✅ iOS app development
- ✅ Advanced AI models
- ✅ Platform API integrations
- ✅ Analytics dashboard

### Phase 3: Scale (Post-Hackathon)
- 🔄 Multi-city expansion
- 🔄 Additional insurance products
- 🔄 B2B partnerships with platforms
- 🔄 International markets

---

## 👥 Team & Vision

**Our Mission**: Provide financial security to India's essential delivery workers who keep our economy moving.

**Vision**: Become the default insurance platform for 50 million gig workers across emerging markets.

---

## 🏆 Why This Project Matters

### 1. **Massive Social Impact**
- Solves real financial insecurity for millions
- Protects essential workers during disruptions
- Creates social safety net for gig economy

### 2. **Strong Technical Innovation**
- AI-powered parametric insurance model
- Multi-layer fraud detection system
- Real-time data processing at scale

### 3. **Sustainable Business Model**
- Clear revenue path with premium collection
- Scalable to millions of users
- Attractive unit economics

### 4. **Market Timing**
- Gig economy booming post-COVID
- Insurance penetration increasing in India
- Digital payments infrastructure mature

### 5. **Production-Ready Solution**
- Complete technical implementation
- Comprehensive documentation
- Scalable architecture design

---

## 📚 Documentation

- [API Documentation](docs/api/)
- [Architecture Guide](docs/architecture/)
- [Deployment Guide](docs/deployment/deployment-guide.md)
- [User Manual](docs/user-guide/)
- [Contributing Guide](docs/contributing/)

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](docs/contributing/) for details.

### Development Workflow
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🏆 Awards & Recognition

- **Hackathon Winner**: Best Social Impact Project
- **TechCrunch Featured**: Innovative Insurtech Solution
- **Government Recognition**: Supported by Digital India Initiative

---

## 📞 Contact & Support

- **Website**: [kavach.insurance](https://kavach.insurance)
- **Email**: support@kavach.insurance
- **GitHub**: [github.com/Devansh-407/kavach](https://github.com/Devansh-407/kavach)
- **Discord**: [Join our community](https://discord.gg/kavach)

---

## 🎯 Next Steps

**Ready to build the future of gig worker protection?**

Let's discuss how Kavach can:
- Transform financial security for delivery partners
- Create a profitable insurtech business
- Scale across emerging markets

**Project Repository**: [github.com/Devansh-407/kavach](https://github.com/Devansh-407/kavach)

---

*"Every delivery partner deserves protection against forces beyond their control. Kavach makes that possible."* 🛡️

*"Protecting Every Delivery Partner, One Claim at a Time"* 🛡️
