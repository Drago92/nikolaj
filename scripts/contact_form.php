<?php
if($_POST){
    $name = $_POST['name'];
    $firma = $_POST['firma'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $emailTo = $_POST['emailTo'];
    $betreff = $_POST['betreff'];
    $address = $_POST['address'];

    //send email
    if(mail($emailTo, $betreff, $message. "\n\n" .$firma. "\n" .$address, "From: " .$name. " <" .$email. ">")){
        echo "Vielen Dank für Ihre Anfrage. Wir werden sie bald kontaktieren.";
    } else {
        echo 'Es tut uns Leid, aber die Email wurde nicht verschickt.';
    };
} else {
    echo 'Es ist ein Fehler aufgetreten.';
};
?>