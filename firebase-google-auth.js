import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAodPgiFnkKAgBCW0aKS66B1BR-SyYNy0I",
  authDomain: "fir-392d9.firebaseapp.com",
  projectId: "fir-392d9",
  storageBucket: "fir-392d9.appspot.com",
  messagingSenderId: "118631651835",
  appId: "1:118631651835:web:e254c0440476eb19f8935e",
};

// Initialize Firebase with your configuration
const auth = getAuth();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const googleLoginButton = document.getElementById("google-login-button");
const messageDiv = document.getElementById("message");

googleLoginButton.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      // Successfully logged in with Google
      const user = userCredential.user;
      messageDiv.innerText = "Welcome, " + user.displayName + "!";
      alert("Successfully logged in");
    })
    .catch((error) => {
      // Handle login errors
      messageDiv.innerText = "Google login failed. " + error.message;
    });
});
