# expo-nativewind-template -- Expo + React Native + NativeWind Starter

This project is a customized Expo React Native app, based on the default Expo template with expo-router (file-based routing and tabs) and preconfigured with NativeWind + TailwindCSS for utility-first styling.

It can be used as a starter template for new React Native projects that need:

- Expo Router (file-based routing with layouts, nested routes, and tabs)
- NativeWind (TailwindCSS for React Native styling)
- Metro bundler configured to work with Tailwind
- TypeScript setup out of the box
- Dark mode support (via Expo useColorScheme)

---

## Features

- React Native + Expo -- managed workflow
- expo-router -- file-based navigation
  - app/\_layout.tsx --> root layout
  - app/(tabs)/\_layout.tsx --> tab navigation
- NativeWind (TailwindCSS) -- preconfigured for styling
  - global.css included and imported in root layout
  - tailwind.config.js with NativeWind preset
  - babel.config.js + metro.config.js updated
- TypeScript support with typed routes
- Dark/light theme support

---

## Prerequisites

- Node.js 18 or 20 (LTS recommended)
- Expo CLI (npx expo)
- Expo Go app installed on a physical device

---

## Getting Started

Clone this repo and install dependencies (if you are not using the GitHub template flow yet):

```bash
git clone https://github.com/johnmchale/expo-nativewind-template
cd expo-nativewind-template
npm install
```

Start the Expo development server:

```bash
npx expo start -c
```

Scan the QR code with the Expo Go app (iOS or Android) to preview the app.

---

## Development Notes

- The default template tabs are set up in app/(tabs)/, but the example index.tsx has been replaced with a NativeWind test screen. The tab bar may not be visible until you restore the default content.
- To restore the default tabs screen, replace the content of app/(tabs)/index.tsx with your preferred layout or the original example.

---

## File Highlights

- app/\_layout.tsx --> root layout, imports global.css
- app/(tabs)/\_layout.tsx --> bottom tab navigator
- global.css --> Tailwind entry point
- tailwind.config.js --> Tailwind + NativeWind config
- babel.config.js --> includes NativeWind preset
- metro.config.js --> wires Tailwind into Metro bundler
- nativewind-env.d.ts --> TypeScript types for NativeWind

---

## Example Screen (NativeWind Test)

```tsx
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-2xl font-bold text-blue-500">
        Hello from NativeWind!
      </Text>
      <Text className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Tailwind styles are working
      </Text>
    </View>
  );
}
```

---

## Using this as a template for your own project

This repository can be used as a GitHub template. To create your own project based on this template, follow these steps.

### 1) Mark this repo as a template (only if you are the owner)

1. Go to your repository on GitHub.
2. Click Settings.
3. Scroll to the Template repository section.
4. Check "Template repository".

Once marked as a template, others will see the "Use this template" button at the top of the repo.

### 2) Create your own repo from the template

1. On GitHub, click the green "Use this template" button at the top of this repo.
2. Choose a repository name (for example, myfinanceapp) and create it under your account.

### 3) Clone your new repository

```bash
git clone https://github.com/<your-username>/myfinanceapp.git
cd myfinanceapp
```

### 4) Update app.json

Update only these fields:

```json
{
  "expo": {
    "name": "myfinanceapp",
    "slug": "myfinanceapp",
    "scheme": "myfinanceapp"
  }
}
```

- name --> Human-readable app name (shown under the icon in Expo Go)
- slug --> Short identifier used by Expo internally
- scheme --> Deep link scheme (for example, myfinanceapp://)

### 5) Update package.json

Change the project name:

```json
{
  "name": "myfinanceapp"
}
```

### 6) Optional: Add iOS and Android identifiers for store builds

```json
{
  "expo": {
    "ios": { "bundleIdentifier": "com.mycompany.myfinanceapp" },
    "android": { "package": "com.mycompany.myfinanceapp" }
  }
}
```

### 7) Clear caches and restart

```bash
rm -rf node_modules
npm install
npx expo start -c
```

Your project has now been created from the template and configured under the new name.

---

# Expo Original README (for reference)

This is an Expo project created with create-expo-app.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app
   ```bash
   npx expo start
   ```

In the output, you will find options to open the app in a

- development build
- Android emulator
- iOS simulator
- Expo Go, a limited sandbox for trying out app development with Expo

## Get a fresh project

When you are ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the app-example directory and create a blank app directory where you can start developing.

## Learn more

- Expo documentation: https://docs.expo.dev
- Learn Expo tutorial: https://docs.expo.dev/tutorial/introduction

## Join the community

- Expo on GitHub: https://github.com/expo/expo
- Discord community: https://chat.expo.dev
