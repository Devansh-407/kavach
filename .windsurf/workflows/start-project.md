---
description: How to start the KavachPay AI development server
---

## Prerequisites

- Node.js 18+ installed
- Firebase project with Firestore enabled
- Google AI API key (Gemini 2.5 Flash)

## Environment Setup

Create a `.env.local` file in the project root with:

```env
# AI
GOOGLE_GENAI_API_KEY=your_gemini_api_key

# Firebase (Client-side)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# Legacy (Optional)
MONGODB_URI=your_mongodb_connection_string
```

## Start Development Server

// turbo
1. Navigate to project directory
cd d:\KavachAI\kavach

// turbo
2. Install dependencies (if not already done)
npm install

// turbo
3. Start the Next.js development server
npm run dev

The application will be available at `http://localhost:9002`

## Additional Commands

| Command | Purpose |
|---------|---------|
| `npm run genkit:dev` | Start Genkit AI development server |
| `npm run genkit:watch` | Start Genkit with file watching |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Key Application URLs

- **Landing Page**: http://localhost:9002/
- **Login**: http://localhost:9002/login
- **Dashboard**: http://localhost:9002/dashboard
- **Claims**: http://localhost:9002/claims
- **Policy**: http://localhost:9002/policy
- **Admin**: http://localhost:9002/admin
