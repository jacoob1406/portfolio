<?php

$to = 'lem7jak@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ')';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ')';
$headers .= 'Content-Type: text/html; charset=utf-8';
mail($to, $subject, $message, $headers);
echo '<h1>Wiadomość wysłana :)</h1>';
?>