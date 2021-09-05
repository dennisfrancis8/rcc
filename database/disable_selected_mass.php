<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $massId = $data[0];
    $mStatus = MASSSTATUS['DEACTIVATED'];
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "UPDATE `mass` SET `massNameStatus` = $mStatus WHERE `massUid` = $massId";
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