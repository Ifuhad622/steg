<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Example: Send email (configure your server)
    $to = "info@slnsa.com.sl";
    $subject = "Contact Form Submission from $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting SLNSA.";
    } else {
        echo "Error sending message. Please try again.";
    }
}
?>