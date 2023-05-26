<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "sankeertana.angara123@gmail.com";

  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  
  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  
  if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
  } else {
    echo "Unable to send the email. Please try again.";
  }
}
?>
