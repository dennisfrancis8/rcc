<?php
	
    DEFINE('HOSTNAME', 'localhost');
    DEFINE('USERNAME', 'root');
    DEFINE('PASSWORD', 'root');
    DEFINE('DATABASE', 'Church2');
    
    
    function db_sonak_churchDatabase_connect(){
        $con = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE) or die('CONNECTION TO AQUANAK DATABASE FAILED!');
        return $con;
    }

?>