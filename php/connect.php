
<?php  
/*
连接数据库
 */
    define('DB_HOST', '127.0.0.1');
    define('DB_USER', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME','worksql');
    define('GW_UPLOADPATH', '../image/');
    define('GW_MAXFILESIZE', 65536);

    error_reporting(E_ALL^E_NOTICE);

    function db_connection($query){
        $conn = mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
        if (mysqli_connect_errno()) {
	        echo "Connect failed";
            exit();
        }
        $conn->query("set names 'utf8'");		
        return $conn->query($query);  // 执行查询
    }
?>
