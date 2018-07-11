
<?php
/*
管理员发送通知信息
 */
    error_reporting(E_ALL^E_NOTICE);
    $recipient = $_POST['recipient'];
    $info = $_POST['info'];
    $title = $_POST['title'];
    require_once('connect.php');
    $query = "insert into message (info,recipient,time,title) values ('$info','$recipient',now(),'$title')";
    db_connection($query);
    echo "1";
?>