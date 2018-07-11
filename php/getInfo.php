<?php
/*
获取通知信息
 */
    session_start();
    error_reporting(E_ALL^E_NOTICE);
    $stuId = $_SESSION['userID'];
    require_once('connect.php');
    $personType = $_SESSION['personType'];
    if($personType == 'teacher')
    	$recipient = 'T';
    else
    	$recipient = 'S';
    $id = 1;
	$query = "select * from message where recipient = '$recipient'";
	$result = db_connection($query);
    $info = array();
    while($row = mysqli_fetch_array($result, MYSQL_ASSOC))
    {
        array_push($info, array("id"=>$id, "title" =>$row["title"],"time"=>$row["time"],"info" =>$row["info"]));
        $id++;
    }
    echo json_encode(array("info" => $info));

?>
