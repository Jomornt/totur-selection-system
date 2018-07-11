<?php
/*
	管理员检索学生、教师信息
 */ 
    session_start();
    $userID = $_SESSION['userID'];
    require_once('connect.php');
    //教师信息的输出
    $userID= "123456";
	$query = "select * from teacher";
	$result = db_connection($query);
    $teachers = array();
    while($row = mysqli_fetch_array($result, MYSQL_ASSOC))
    {
        array_push($teachers, array("name"=>$row["name"], "sex" =>$row["sex"], "position"=>$row["position"], "direction"=>$row["direction"],"phone"=>$row["phone"],"id"=>$row["id"],"pic"=>$row["pic"]));
    }


    //学生信息的输出
    $query = "select * from students";
    $result = db_connection($query);
    $students = array();
    while($row = mysqli_fetch_array($result, MYSQL_ASSOC))
    {
        array_push($students, array("id"=>$row["id"],"name"=>$row["name"], "sex" =>$row["sex"], "major"=>$row["major"], "classId"=>$row["classId"],"phone"=>$row["phone"],"state"=>$row["state"],"tutorId"=>$row["tutorId"],"pic"=>$row["pic"]));
    }

    // 个人信息输出
    $query = "select * from manager where id = $userID";
    $result = db_connection($query);
    $admins = array();
    while($row = mysqli_fetch_array($result, MYSQL_ASSOC))
    {
        array_push($admins, array("id"=>$row["id"],"name"=>$row["name"],"pic"=>$row["pic"]));
    }
    echo json_encode(array("teachers" => $teachers,"students" => $students,"admins" => $admins));

?>
