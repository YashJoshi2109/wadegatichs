<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Compose the email message
  $email_message = "Name: $name\n";
  $email_message .= "Email: $email\n";
  $email_message .= "Subject: $subject\n\n";
  $email_message .= "Message:\n$message";

  // Send the email (using the mail() function)
  $to = "recipient@example.com"; // Replace with the recipient's email address
  $headers = "From: $email";
  if (mail($to, $subject, $email_message, $headers)) {
    echo "Email sent successfully.";
  } else {
    echo "Error sending email.";
  }
} else {
  echo "Invalid request.";
}
?>