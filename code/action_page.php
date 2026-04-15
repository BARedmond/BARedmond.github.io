<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize input data
    $fullName = htmlspecialchars(strip_tags(trim($_POST["fullname"])));
    $email    = htmlspecialchars(strip_tags(trim($_POST["emailaddr"])));
    $phone    = htmlspecialchars(strip_tags(trim($_POST["phonenum"])));
    $message  = htmlspecialchars(strip_tags(trim($_POST["subject"])));

    // Email destination
    $to = "BryceARedmond@LaurelCrownUSA.com"; // <-- Change to your actual email address
    $subjectLine = "New Contact Form Submission from $fullName";

    // Build the message
    $emailContent = "You received a new message from your website contact form:\n\n";
    $emailContent .= "Name: $fullName\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Phone: $phone\n\n";
    $emailContent .= "Message:\n$message\n";

    // Email headers
    $headers = "From: no-reply@yourdomain.com"; // Optional: use a domain-based sender
    $headers .= "\r\nReply-To: $email";

    // Send the email
    if (mail($to, $subjectLine, $emailContent, $headers)) {
        echo "<h3>Thank you, $fullName! Thank you for reaching out to The Laurel Crown American Home Company; We will be in touch.</h3>";
    } else {
        echo "<h3>Oops! Something went wrong. Please try again later.</h3>";
    }

} else {
    echo "<h3>Invalid request.</h3>";
}
?>
