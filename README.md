# First Native App 📱

A modern cross-platform mobile application built with **React Native**, **Expo SDK 57**, and **Expo Router**, styled using **NativeWind (Tailwind CSS)**.

---

## 🚀 Features

- **File-Based Routing**: Clean and scalable navigation using [Expo Router](https://docs.expo.dev/router/introduction).
- **Tab Navigation & Stack Navigation**:
  - 🏠 **Home Dashboard**: Overview of metrics and recent activity.
  - 📋 **Subscriptions**: Manage, view, and track recurring subscriptions and details.
  - 📊 **Insights**: Visual analytics and spending breakdowns.
  - ⚙️ **Settings**: User preferences and application configuration.
- **Authentication Flows**: Dedicated auth layouts with Sign In and Sign Up screens.
- **Onboarding Experience**: Smooth welcome flow for first-time users.
- **Modern Styling**: Utility-first styling powered by NativeWind and Tailwind CSS.
- **Cross-Platform Support**: Ready for iOS, Android, and Web with optimized performance.

---

## 🛠️ Tech Stack

- **Framework**: [Expo](https://expo.dev/) (SDK 57) / [React Native](https://reactnative.dev/)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [NativeWind](https://www.nativewind.dev/) / [Tailwind CSS](https://tailwindcss.com/)
- **Animations & Gestures**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) & [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- **Icons & UI**: [Expo Symbols](https://docs.expo.dev/versions/latest/sdk/symbols/), [Expo Glass Effect](https://docs.expo.dev/), [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/)

---

## 📁 Project Structure

```text
├── assets/                  # Static assets (images, fonts, splash screens)
├── src/
│   └── app/                 # Expo Router file-based screens and routes
│       ├── (auth)/          # Authentication routes (Sign In, Sign Up)
│       ├── (tabs)/          # Bottom tab navigation screens
│       │   ├── index.tsx    # Home screen
│       │   ├── subscriptions.tsx # Subscriptions list
│       │   ├── subscription/     # Subscription detail routes
│       │   ├── insights.tsx      # Spending & analytics insights
│       │   └── settings.tsx      # Settings & profile
│       ├── onboardingScreen.tsx  # Initial onboarding screen
│       └── _layout.tsx      # Root application layout
├── global.css               # Global Tailwind CSS styles
├── babel.config.js          # Babel configuration
├── metro.config.js          # Metro bundler config
├── tailwind.config.js       # PostCSS / Tailwind CSS configuration
├── app.json                 # Expo app configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [bun](https://bun.sh/)
- [Expo Go](https://expo.dev/go) app on your mobile device (iOS / Android) or an emulator/simulator setup

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/first_native-app.git
   cd first_native-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npx expo start
   ```

---

## 📱 Running the App

Once the development server is running:

- **iOS Simulator**: Press `i` in the terminal (macOS required).
- **Android Emulator**: Press `a` in the terminal.
- **Physical Device**: Scan the QR code in the terminal using the Expo Go app (Android) or Camera app (iOS).
- **Web**: Press `w` in the terminal.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npx expo start` / `npm start` | Starts the Expo development bundler |
| `npm run android` | Starts the app directly in an Android emulator/device |
| `npm run ios` | Starts the app directly in an iOS simulator/device |
| `npm run web` | Launches the web version of the application |
| `npx expo lint` | Runs ESLint to check for code quality and style issues |
| `npx tsc --noEmit` | Runs TypeScript type checking |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
