document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    // You can add your authentication logic here.
    // Example:
    if (email === "wadegati" && name === "wadegati") {
      alert("Login successful!");
      // Redirect to another page
      window.location.href = "blog.html";
      // Redirect to another page or perform further actions.
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
});
