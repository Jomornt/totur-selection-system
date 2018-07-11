<?php
/*
学生选择导师
 */
    session_start();
    $stuId = $_SESSION['userID'];
    $tutorID = $_POST['tutorID'];
    error_reporting(E_ALL^E_NOTICE);
    require_once('connect.php');
    $query = "select state from students where id = $stuId";
    $result = db_connection($query);
    $row = mysqli_fetch_row($result);
    if($row[0] == "未选"){
    	$query = "update students set state = '待定',tutorId = $tutorID where id = $stuId";
    	db_connection($query);
    	echo 1;
    }else{
    	echo 0;
    }
?>