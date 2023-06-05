<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Here, you can add code to process the form data as per your requirements.
  // You may send an email, store it in a database, or perform any other desired action.

  // Example code to send an email using the mail() function
  $to = "your-email@example.com";
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for your message!";
  } else {
    echo "Error sending the message. Please try again.";
  }
}
?>
