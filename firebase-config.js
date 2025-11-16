// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB6FAMgqHcccsqce4R5nd8y0YVggc3aHbY",
  authDomain: "clinique-parfum.firebaseapp.com",
  databaseURL: "https://clinique-parfum-default-rtdb.firebaseio.com/",
  projectId: "clinique-parfum",
  storageBucket: "clinique-parfum.firebasestorage.app",
  messagingSenderId: "569473208892",
  appId: "1:569473208892:web:f009390a8631fc164ce939",
  measurementId: "G-XW3R3D64PR"
};

// Initialize
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Admin password (global)
const ADMIN_PASSWORD = "admin123"; // change
