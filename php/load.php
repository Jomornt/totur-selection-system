
<?php
/*
登陆时候密码验证
 */
	error_reporting(E_ALL^E_NOTICE);
	session_start();
	$personType = $_POST['client'];//登陆类型：学生、老师、管理员
	$userID = $_POST['userID'];
	$inPassWord = $_POST['passWord'];
	$query = "select * from $personType where id = '$userID' and password = '$inPassWord'";
	if(db_connection($query)->num_rows == 1){
		$_SESSION['userID'] = $userID;
		$_SESSION['personType'] = $personType;
	    header("Location:../$personType.html");
	}
	else{
	    exit('登录失败！密码错误或用户名不存在！点击此处 <a href="javascript:history.back(-1);">返回</a> 重试');  
	}
	function db_connection($query){
        $conn = mysqli_connect("localhost", "root", "", "worksql");
        if (mysqli_connect_errno()) {
     		echo "Could not connect to database.";
     		exit();
        }
        return $conn->query($query); 
    }

?>