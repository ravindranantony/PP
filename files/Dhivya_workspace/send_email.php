<?php 
if(isset($_POST['submit'])){
    $to = "dhivya2291@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From:" . $from;
    $sent = mail($to,$subject,$message,$headers);
    if ($sent) {
        echo 'Email sent successfully.';
    } else {
        echo 'Failed to send email.';
    }
} else {
    header('Location: Contact.html');
}
?>