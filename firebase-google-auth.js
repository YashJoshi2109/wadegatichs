// Replace with your Google Cloud Console API client IDII
const clientId =
  "367081023101-20oa44onra18ru34lg5of2dqkvco32j0.apps.googleusercontent.com"; // Replace with your actual client ID
const allowedEmails = [
  "yashjosh7486@gmail.com",
  "yash212479@gmail.com.com" /* Add your 28 allowed emails here */,
];
const scope = "https://www.googleapis.com/auth/userinfo.profile"; // Specify the scope of access

// Load the Google Sign-In API
gapi.load("auth2", function () {
  gapi.auth2.init({
    client_id: clientId,
  });
});

// Sign in with Google
function signInWithGoogle() {
  gapi.auth2
    .getAuthInstance()
    .signIn()
    .then(function (googleUser) {
      const profile = googleUser.getBasicProfile();
      const userEmail = profile.getEmail();
      if (allowedEmails.includes(userEmail)) {
        // User's email is in the allowed list - access granted.
        document.getElementById("message").textContent =
          "Access granted. Redirecting...";
        alert("successfully done");
        // Perform a redirect to the desired page.
        window.location.href = "blog.html";
      } else {
        // User's email is not in the allowed list - access denied.
        document.getElementById("message").textContent =
          "Your email is not registered. Contact administrator for inquiries.";
        signOutGoogleUser();
      }
    });
}

// Sign out the user
function signOutGoogleUser() {
  gapi.auth2
    .getAuthInstance()
    .signOut()
    .then(function () {
      alert("Signout success");
      console.log("User signed out.");
    });
}

// Attach click event to the "Sign in with Google" button
document
  .getElementById("google-signin-button")
  .addEventListener("click", signInWithGoogle);
