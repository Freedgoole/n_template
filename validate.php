<?php 
    $email = $_POST['email'];
    $os = array("freedgoole@gmail.com", "test@test.com", "Irix@gmail.com", "Linux@ranbler.ee");
    if (in_array($email, $os)) {
        echo "Успешно $email";
    } else {
        echo "Нет такого: $email";
    }
?>