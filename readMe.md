# Auth Example Expo

This project is an example of how to implement authentication, authorization, and session management in an Expo app.

## Features

- Authentication: Users can sign in to the app.
- Authorization: Controls access to certain parts of the app based on user roles.
- Session Management: Handles user sessions, including sign in and sign out.

## Tech Stack

- [Expo](https://expo.dev/): A framework and a platform for universal React applications.
- [React Native](https://reactnative.dev/): A framework for building native apps using React.
- [React Hook Form](https://react-hook-form.com/): A library to create forms in React.
- [Axios](https://axios-http.com/): A promise-based HTTP client for the browser and node.js.
- [UUID](https://www.npmjs.com/package/uuid): For the creation of RFC4122 UUIDs.
- [Expo Secure Store](https://docs.expo.dev/versions/latest/sdk/securestore/): A secure place to store sensitive data in an Expo app.

## Implementation

- The [`SessionProvider`](providers/SessionProvider.tsx) component uses the `useStorageState` hook to manage session state.
- The [`useSession`](hooks/useSession.ts) hook provides functions to sign in and sign out.
- The [`HomeScreen`](app/(app)/index.tsx) component uses the `useSession` hook to sign out.
- The [`CustomButton`](components/CustomButton.tsx) component is a reusable button component.

## Getting Started

1. Install the dependencies by running the following command in your terminal:

```bash
npm install
```

2. Start the Expo development server by running the following command:

```bash
npx expo start
```

3. Open the Expo app on your device and scan the QR code displayed in the terminal or in the Expo Dev Tools page that opens in your web browser.

For android: 

```bash
npm run android
```

For ios:

```bash
npm run ios
```


