<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "../vendor/autoload.php";

if($_POST){
    $name = $_POST['name'];
    $firma = $_POST['firma'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $emailTo = $_POST['emailTo'];
    $betreff = $_POST['betreff'];
    $address = $_POST['address'];

    try {
        // Instanz der PHPMailer-Klasse erstellen
        $mail = new PHPMailer();

        // Authentifikation mittels SMTP
        $mail->isSMTP();
        $mail->SMTPAuth = true;

        // Login
        $mail->Host = "	smtp.ionos.de";
        $mail->Port = "465";
        $mail->Username = 'xxxxxxxx';
        $mail->Password = "xxxxxxx";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;


        // Absender
        $mail->setFrom($emailTo, "Kontaktformular: " .$name);
        // Empfänger, optional kann der Name mit angegeben werden
        $mail->addAddress($emailTo);

        $mail->isHTML(true);
        $mail->Subject = $betreff;
        $mail->Body = $message. "\n\nVON:\n" .$firma. "\n" .$name. "\n" .$address. "\nFrom: " .$name. " <" .$email. ">";

        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';

        //send email
        if($mail->send()){
            echo "Vielen Dank für Ihre Anfrage. Wir werden sie bald kontaktieren.";
        } else {
            echo 'Es tut uns Leid, aber die Email wurde nicht verschickt.';
        };

    } catch (Exception $e) {
        echo "Es tut uns Leid, aber die Email wurde nicht verschickt. Mailer Error: ".$mail->ErrorInfo;
    }
} else {
    echo 'Es ist ein Fehler aufgetreten.';
};
