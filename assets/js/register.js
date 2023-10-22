document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const serviceID = "default_service";
    const templateID = "template_2hf3xob";

    if (!isValidEmail(email)) {
      alert("Invalid email format. Please provide a valid email.");
      return;
    }

    // List of allowed email addresses
    const emailList = ["yashjosh7486@gmail.com", "yash212479@gmail.com"];

    if (emailList.includes(email)) {
      // Send email only if the email is in the list
      const message = () => {
        emailjs.send(serviceID, templateID, {
          from_name: "Wadegati CHS",
          email: email,
          name: name,
        });
        alert("Check your mail for username & password!");
        window.location.href = "login.html"; // Redirect to another page
      };

      message();
    } else {
      alert("Email address not authorized. Please try again.");
    }
  });
});

function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}
