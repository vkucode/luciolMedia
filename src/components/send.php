<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];
    $message = $data['message'];

    // Set the recipient email address
    $to = 'contact@luciolemedia.fr';

    // Build the email subject
    $subject = "New Contact from $name";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $name <$email>";

    // Send the email
    $sent = mail($to, $subject, $email_content, $headers);

    if ($sent) {
        echo json_encode(['sent' => true]);
    } else {
        echo json_encode(['sent' => false]);
    }
} else {
    echo json_encode(['sent' => false]);
}
?>
