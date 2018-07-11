<?php
/*
教师端教师查询老师信息和自己信息
 */
    session_start();
    $userID = $_SESSION['userID'];
    require_once('connect.php');
    //选择消息的输出
	$query = "select * from students where state = '待定' and tutorId = $userID";
	$result = db_connection($query);
    $waitStu = array();
    while($row = mysqli_fetch_array($result, MYSQL_ASSOC))
    {
        array_push($waitStu, array("id"=>$row["id"],"name" =>$row["name"],"sex" =>$row["sex"], "major"=>$row["major"], "classId"=>$row["classId"],"phone"=>$row["phone"],"pic"=>$row["pic"]));
    }


    //学生信息的输出
    $query = "select * from students where tutorId = $userID and state = '选定'";
    $result = db_connection($query);
    $students = array();
    while($row = mysqli_fetch_array($result, MYSQL_ASSOC))
    {
        array_push($students,array("id"=>$row["id"],"name" =>$row["name"],"sex" =>$row["sex"], "major"=>$row["major"], "classId"=>$row["classId"],"phone"=>$row["phone"],"pic"=>$row["pic"]));
    }

    
    //教师个人信息的输出
    $query = "select * from teacher where id = $userID";
    $result = db_connection($query);
    $teacher = array();
    while($row = mysqli_fetch_array($result, MYSQL_ASSOC))
    {
        array_push($teacher, array("name"=>$row["name"], "sex" =>$row["sex"], "position"=>$row["position"], "direction"=>$row["direction"],"phone"=>$row["phone"],"id"=>$row["id"],"pic"=>$row["pic"]));
    }
    echo json_encode(array("waitStu" => $waitStu,"students" => $students,"teacher" => $teacher));

?>
