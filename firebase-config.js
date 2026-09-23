// ============================================================
// FIREBASE CONFIG — OPTIONAL
// 1) Go to https://console.firebase.google.com → Create project
// 2) Project settings → Add app (Web) → copy the config object
// 3) Paste it below, replacing the empty strings.
// 4) In Firebase Console → Build → Firestore Database → Create database.
// If you leave apiKey empty, the site still works fully —
// scores are just saved in the browser only (localStorage) or,
// if GOOGLE_SCRIPT_URL below is set, sent to your Google Sheet instead.
// ============================================================

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Optional alternative/second backend: a deployed Google Apps Script
// Web App URL (see /google-apps-script/Code.gs for the matching backend).
// Example: "https://script.google.com/macros/s/XXXXXXXX/exec"
const GOOGLE_SCRIPT_URL = "";

let db = null;
if (firebaseConfig.apiKey) {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
  } catch (e) {
    console.warn("Firebase not initialized:", e);
  }
}
