
<?php
	/*
	教师通过学生的请求
	 */
    session_start();
    error_reporting(E_ALL^E_NOTICE);
    $userID = $_SESSION['userID'];
    $id = $_POST['id'];
    require_once('connect.php');
    $query = "update students set state = '选定' where id = $id";
    $result = db_connection($query);
    echo "1";
    exit();
?>