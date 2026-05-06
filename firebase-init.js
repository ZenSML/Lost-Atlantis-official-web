// Initialize Firebase using the config from config.js
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Make Firestore globally available
window.db = firebase.firestore();
console.log("Firebase initialized and connected to the mainframe.");
