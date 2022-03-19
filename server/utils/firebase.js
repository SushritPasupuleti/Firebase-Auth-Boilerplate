const admin = require('firebase-admin')

admin.initializeApp({
    apiKey: process.env.API_FIREBASE_API_KEY,
    authDomain: process.env.API_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.API_FIREBASE_PROJECT_ID,
    storageBucket: process.env.API_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.API_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.API_FIREBASE_APP_ID,
});

module.exports = admin;