<?php 
$name=$_POST['user_name'];
$user_email=$_POST['user_email'];
$ad1=$_POST['geo_anketa1'];
$ad2=$_POST['geo_anketa2'];
$ad3=$_POST['geo_anketa3'];
$ad4=$_POST['geo_anketa4'];
$ad5=$_POST['geo_anketa5'];
$ad6=$_POST['geo_anketa6'];
$ad7=$_POST['geo_anketa7'];
$ad8=$_POST['geo_anketa8'];
$ad9=$_POST['geo_anketa9'];
$ad10=$_POST['geo_anketa10'];
$select_age=$_POST['select_age'];
$select_sport=$_POST['select_sport'];
$select_shpagat=$_POST['select_shpagat'];
$form = $_POST['form_anketa'];
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
//$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'lokosov12@inbox.ru';                 // SMTP username
$mail->Password = '199818pht';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->setFrom('lokosov12@inbox.ru');
$mail->addAddress('stretchlf@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Анкета';
$mail->Body    = 'Имя отправителя: '.$name. '<br>'.
				 'Email отправителя: '.$user_email. '<br> <br>'.
				 'Что ожидает получить: '.$ad1.$ad2.$ad3.$ad4.$ad5.$ad6.$ad7.$ad8.$ad9.$ad10.'<br> <br>'.
				 'Возраст: '.$select_age.'<br>'.
				 'Отношение к спорту: '.$select_sport.'<br>'.
				 'Отношение к шпагату: '.$select_shpagat
;
$mail->AltBody = 'Это сообщение в формате plain text';
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	header('location: thanks.html');
}
?>