<html>
    <body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = $_POST["email"]; // Replace with your email address
  $from = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $headers = "From: $from\r\n" .
             "Reply-To: $from\r\n" .
             "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
  } else {
    echo "Failed to send email.";
  }
}
?>
</body>
</html>







