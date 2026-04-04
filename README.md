<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/Gemini-2.5%20Flash-blue?style=for-the-badge&logo=google" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=for-the-badge&logo=firebase" alt="Firebase" />
  <img src="https://img.shields.io/badge/Parametric-AI%20Insurance-8B5CF6?style=for-the-badge" alt="Parametric AI Insurance" />
</p>

<h1 align="center">🛡️ Kavach </h1>
<p align="center">
  <strong>When the storm hits, your income shouldn't stop.</strong><br/>
  <em>AI-powered parametric protection for India's gig workers.</em>
</p>

---

## 💭 Why We Built This

Every monsoon in Mumbai, thousands of delivery partners face an impossible choice: brave flooded roads or lose a day's income. In Delhi summers, riders push through 45°C heat because they can't afford not to. **This shouldn't be normal.**

KavachPay was built on a simple belief: gig workers deserve protection that works as fast as they do. No claim forms. No 30-day waiting periods. Just instant payouts when life gets in the way of work.

---

## ⚡ What Makes Us Different

Traditional insurance asks you to prove you were hurt. **We trust the data.**

| The Old Way | The KavachPay Way |
|-------------|-------------------|
| File a claim, wait weeks | Payout triggers automatically in **~4 minutes** |
| Pay monthly premiums you can't afford | Micro-premiums from **₹15-40/week** |
| One policy for everyone | AI-personalized to your city, zone & delivery type |
| Call centers and paperwork | Zero-touch parametric triggers |
| Rejections and disputes | Transparent, data-driven decisions |

---

## 🎯 Target Personas

| Persona | Platforms | Key Risk |
|---|---|---|
| 🏍️ **Food Delivery** | Zomato, Swiggy | Peak lunch/dinner rain |
| 🛒 **Grocery / Q-Commerce** | Zepto, Blinkit, Dunzo | Waterlogging, flash floods |
| 📦 **E-Commerce** | Amazon, Flipkart | Transit blockage, curfews |

---

## 🔄 How It Actually Works

**Rahul's Story:**
```
Monday: Signs up → Picks Mumbai + Food Delivery → AI quotes ₹28/week
   ↓
Friday 2PM: Monsoon hits, 12mm rain detected in his zone
   ↓
2:04 PM: System auto-creates claim, ₹500 sent to his UPI
   ↓
2:05 PM: Notification pops up: "Storm protection activated. Money sent."
```

**That's it.** No forms. No calls. No waiting for approval.

---

## 🌦️ The Engine Behind the Scenes

We watch **5 live signals** across 100+ Indian cities, 24/7:

| What We Watch | Data Source | Trigger Point |
|---------------|-------------|---------------|
| 🌧️ Heavy Rainfall | Open-Meteo Live API | > 8mm/hour |
| 🌡️ Extreme Heat | Open-Meteo Live API | > 42°C |
| 🌫️ Toxic Air Quality | Open-Meteo AQI API | > 400 AQI |
| 🌊 Flood Alerts | IMD Simulated Data | Orange+ warning |
| 🚫 Civil Disruptions | News/Alert APIs | High severity |

When any threshold is crossed, affected workers get paid. Automatically.

---

## 🧠 How Your Premium Is Calculated

Our AI looks at 5 factors to price your weekly protection:

```
┌────────────────────────────────────────────────────────────┐
│  🌧️ Seasonal Risk         Mumbai in July = higher risk     │
│  🏘️ Zone Safety           Your area's disaster history    │
│  🏅 Your Loyalty          6 weeks no claims = discount     │
│  🌩️ Weather Forecast      Storm coming? Slight adjustment  │
│  🍕 Work Type             Food vs Grocery vs E-commerce    │
└────────────────────────────────────────────────────────────┘
                         ↓
              Your Rate: ₹15-40/week
```

Every factor is shown to you. No hidden fees. No surprises.

---

## 🛡️ Keeping It Honest

We verify every claim automatically:
- ✅ **Location check** — Were you actually in the affected zone?
- ✅ **Duplicate guard** — Preventing double-claims for same event
- ✅ **Activity proof** — Were you working when disruption hit?

Good workers get faster payouts. Fraud gets blocked.

---

## 🛠️ Built With

| Layer | Tech | Purpose |
|-------|------|---------|
| **Frontend** | Next.js 15 + React 19 | Fast, responsive web app |
| **AI Brain** | Gemini 2.5 Flash | Pricing, chat, fraud detection |
| **Database** | Firebase Firestore | Real-time everything |
| **Insurance Core** | Guidewire Cloud | Policy & claims management |
| **Payments** | UPI Deep Links | Instant wallet transfers |
| **Weather Data** | Open-Meteo | Free, reliable, global |

---

## 📱 Screens You'll Use

| Route | What It Does |
|-------|--------------|
| `/` | Learn about us, get started |
| `/onboarding` | 4-step signup: Info → Persona → AI Quote → Activate |
| `/dashboard` | Your policy, payouts, live weather alerts |
| `/policy` | See exactly how your premium was calculated |
| `/claims` | History + one-tap manual report (if auto-misses) |
| `/chat` | AI support, available 24/7 |

---

## 🚀 Get It Running

```bash
# 1. Install dependencies
cd kavach
npm install

# 2. Create your env file
cp .env.example .env.local
# Edit .env.local with your Firebase & Google AI keys

# 3. Start the dev server
npm run dev
# Open http://localhost:9002
```

**Requirements:** Node.js 18+, Firebase project, Google AI API key.

---

## 📊 The Numbers

- ⚡ **~4 min** — Average payout time
- 🌆 **100+** — Cities monitored across India
- 💰 **₹15-40** — Weekly premiums most workers pay
- 🎯 **Zero** — Paperwork required
- 🛡️ **100%** — Data-driven, transparent decisions

---



