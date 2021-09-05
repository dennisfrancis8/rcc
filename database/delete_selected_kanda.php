<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $kandaId = $data[0];
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "DELETE FROM `kanda` WHERE `kandaId` = '$kandaId'";
    $result = mysqli_query($db, $query);

    if ($result == true) {
        array_push($returnData, STATUS['OK']);
    }
    else {
        array_push($returnData, STATUS['DB_FAILED']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>