<?php 
/*
    照片更改
 */
session_start();
$userID = $_SESSION['userID'];
$personType = $_SESSION['personType'];
require_once('connect.php');
if (isset($_POST['submit'])) 
{
    // Grab the score data from the POST
    $pic = $_FILES['pic']['name'];//被上传文件的名字
    $pic_type = $_FILES['pic']['type'];//被上传文件的类型
    $pic_size = $_FILES['pic']['size'];//被上传文件的大小
    if (!empty($pic)) 
    {
        if((($pic_type=='image/gif') || ($pic_type=='image/jpeg') || 
        ($pic_type=='image/pjpeg') || ($pic_type=='image/png')) && 
        ($pic_size>0) && ($pic_size<GW_MAXFILESIZE))
        {
            if($_FILES['pic']['error']==0)
            {
                // 定义新的文件名及路径（确保文件名不重复）
                $pic = time().$pic;        
                $target = GW_UPLOADPATH.$pic;
                // 把文件移到目标文件夹中
                if(move_uploaded_file($_FILES['pic']['tmp_name'], $target))
                {
                    // Connect to the database
                    $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

                    // Write the data to the database
                    $query = "UPDATE $personType SET pic = '$pic' WHERE id = $userID";
                    // echo $query;
                    mysqli_query($dbc, $query);
                    mysqli_close($dbc);
                    exit('修改成功！点击此处 <a href="javascript:history.back(-1);">返回</a>'); 
                    return;
                }else{
                    exit('图片加载失败！点击此处 <a href="javascript:history.back(-1);">返回</a> 重试'); 
                }
            }// 如果上传成功if结束  
        }else{
            exit('图片类型错误（gif，jprg，png）或图片大小不符('. (GW_MAXFILESIZE / 1024) . 'KB以内) 点击此处 <a href="javascript:history.back(-1);">返回</a> 重试'); 
        }
        @unlink($_FILES['pic']['tmp_name']);
    }// 如果不为空if结束
}
?>