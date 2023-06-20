<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'zyadwael366@gmail.com';
    $subject = 'New Contact Form Submission';
    $messageBody = "Name: $name\n\nEmail: $email\n\nMessage: $message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Thank you for your message! We'll get back to you shortly.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
