<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $emailTo = $_POST['emailTo'];

    //send email
    if(mail(.$emailTo, "From: " .$email, $message)){
        echo "Vielen Dank für Ihre Anfrage. Wir werden sie bald kontaktieren.";
    } else {
        echo 'Es tut uns Leid, aber die Email wurde nicht verschickt.';
    }
} else {
    echo 'Es ist ein Fehler aufgetreten.';
}
?>