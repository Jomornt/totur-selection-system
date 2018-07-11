
<?php
/*
	修改密码
 */ 
	session_start();
	error_reporting(E_ALL^E_NOTICE);
    $userID = $_SESSION['userID'];
    $personType = $_SESSION['personType'];
    $newPW = $_POST['newPW'];
    $oldPW = $_POST['oldPW'];
	require_once('connect.php');
	//验证密码是否正确
	$query = "select password from $personType where id = $userID";
	$result = db_connection($query);
	$row = mysqli_fetch_row($result);
	if($row[0] == $oldPW){
		echo "1";//密码正确
		//修改密码
		$query = "update $personType set password = $newPW where id = $userID";
		db_connection($query); 
	}
	else{
		echo "0";//密码错误
	}
?>