// WARNING: DO NOT COMMIT THIS FILE TO GITHUB!
// This file is used to configure Firebase.
// The `apiKey` is read from a secure environment variable (`process.env.API_KEY`).
// You need to fill in the other details from your Firebase project console.
//
// To get your Firebase config:
// 1. Go to your Firebase project console.
// 2. Click the gear icon > Project settings.
// 3. In the "Your apps" card, select the app for which you need the config.
// 4. Under "Firebase SDK snippet", select "Config", copy the properties,
//    but keep the apiKey line as is.

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};