document.addEventListener("DOMContentLoaded", function () {
  // Import the functions you need from the SDKs you need
  const firebaseConfig = {
    apiKey: "AIzaSyAodPgiFnkKAgBCW0aKS66B1BR-SyYNy0I",
    authDomain: "fir-392d9.firebaseapp.com",
    projectId: "fir-392d9",
    storageBucket: "fir-392d9.appspot.com",
    messagingSenderId: "118631651835",
    appId: "1:118631651835:web:e254c0440476eb19f8935e",
    measurementId: "G-7X19HSHVQD",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Create a Google Sign-In provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  // Add event listener for Google Sign-In
  const googleSigninButton = document.getElementById("google-signin");
  googleSigninButton.addEventListener("click", function () {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        // Check if the signed-in user's email is in your predefined list of email IDs.
        const allowedEmails = [
          "yashjosh7486@gmail.com",
          "user2@example.com",
          // Add your 28 allowed emails here
        ];
        const signedInUserEmail = result.user.email;
        if (allowedEmails.includes(signedInUserEmail)) {
          alert("Sign-in successful for " + signedInUserEmail);
          // Redirect to the desired page
          window.location.href = "blog.html";
        } else {
          alert("Unauthorized email. Access denied.");
          firebase.auth().signOut();
        }
      })
      .catch(function (error) {
        alert("Error in sending emails");
        console.error(error);
      });
  });
});
