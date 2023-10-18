const googleLoginButton = document.getElementById("google-login-button");

const allowedEmails = [
  "yashjosh7486@gmail.com",
  "email2@example.com",
  // Add the 28 allowed email addresses here
];

googleLoginButton.addEventListener("click", () => {
  const clientId = "367081023101-20oa44onra18ru34lg5of2dqkvco32j0"; // Replace with your Google Cloud Console API client ID
  const redirectUri = "https://yashjoshi2109.github.io/wadegatichs/login.html/"; // Set your redirect URI
  const scope = "https://www.googleapis.com/auth/userinfo.profile"; // Specify the scope of access

  // Create the Google Sign-In URL
  const authUrl = `https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

  // Redirect to the Google Sign-In URL
  window.location.href = authUrl;
});

// Function to handle the Google Sign-In response
function handleGoogleSignInResponse() {
  gapi.load("auth2", function () {
    gapi.auth2
      .init({
        client_id: "367081023101-20oa44onra18ru34lg5of2dqkvco32j0", // Replace with your Google Cloud Console API client ID
      })
      .then(() => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signIn().then(() => {
          const signedInUser = auth2.currentUser.get();
          const signedInUserEmail = signedInUser.getBasicProfile().getEmail();
          if (allowedEmails.includes(signedInUserEmail)) {
            // Redirect to the desired page
            window.location.href = "blog.html";
          } else {
            alert(
              "Your email is not registered in Wadegati CHS. Contact secretary/chairman/treasurer for inquiries."
            );
          }
        });
      });
  });
}
