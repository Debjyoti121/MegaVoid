# CropWise

A React Native mobile app built with Expo that helps farmers make smarter decisions through AI-powered crop recommendations, real-time weather data, IoT sensor integration, and live market prices.

## Features

- **AI Crop Recommendations** — Uses Google Gemini to estimate soil nutrients (N, P, K, pH) from field conditions and recommend the best crops
- **Live Weather** — Location-based weather with animated conditions (sunny, rainy, cloudy, etc.)
- **IoT Sensor Dashboard** — Real-time soil moisture, temperature, and humidity from connected field sensors
- **Market Prices** — Live commodity prices with search and filtering
- **Field Management** — Track and manage multiple fields
- **Bilingual UI** — Greetings and interface support for English and Hindi
- **Authentication** — Secure sign-up and login powered by Supabase

## Tech Stack

- **Framework**: Expo (React Native) with file-based routing via Expo Router
- **Backend**: Supabase (auth + database)
- **AI**: Google Gemini API (`gemini-2.5-flash-lite`)
- **Animations**: Lottie, Moti, Framer Motion, React Native Reanimated
- **Fonts**: Poppins, Lexend (via Expo Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Android/iOS device or emulator

### Installation

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root with your API keys:

   ```env
   EXPO_SUPABASE_URL=your_supabase_url
   EXPO_SUPABASE_ANON_KEY=your_supabase_anon_key
   EXPO_PUBLIC_WEATHER_API_KEY=your_weather_api_key
   EXPO_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   ```

3. Start the development server:

   ```bash
   npx expo start
   ```

### Running on a Device

After starting the dev server, you can open the app in:

- **Expo Go** — scan the QR code (limited features)
- **Android emulator** — press `a` in the terminal
- **iOS simulator** — press `i` in the terminal
- **Development build** — for full native feature support

## Project Structure

```
app/
  (tabs)/
    home.jsx          # Weather, IoT data, AI health check
    recommendation.jsx # Live market prices
    fields/           # Field management
    help.jsx          # Help & support
  login.jsx
  signUp.jsx
  welcome.jsx
components/           # Reusable UI components
services/
  geminiService.js    # Gemini AI integration
  weatherService.js   # Weather API
  iotService.js       # IoT sensor data
  marketPriceService.js
  cropRecommendationService.js
  userService.js
```

## Environment Variables

| Variable | Description |
|---|---|
| `EXPO_SUPABASE_URL` | Supabase project URL |
| `EXPO_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `EXPO_PUBLIC_WEATHER_API_KEY` | Weather API key |
| `EXPO_PUBLIC_GEMINI_API_KEY` | Google Gemini API key |

## Related Repositories

- **IoT Backend** — [Debjyoti121/IOT-device-backend](https://github.com/Debjyoti121/IOT-device-backend)
- **Crop Engine** — [Debjyoti121/Crop-Engine](https://github.com/Debjyoti121/Crop-Engine)
