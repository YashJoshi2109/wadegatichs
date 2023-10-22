document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("register-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    // You can add your authentication logic here.
    Emaillist = ["yashjosh7486@gmail.com", "yash212479@gmail.com"];
    // Example:
    if (Emaillist.includes(email)) {
      alert("Login successful!");
      // Redirect to another page
      //   window.location.href = "blog.html";
      // Redirect to another page or perform further actions.
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
});
