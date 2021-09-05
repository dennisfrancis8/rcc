<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $userId = $data[0];
    $uStatus = USERSTATUS['DEACTIVATED'];
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "UPDATE `user` SET `userStatus` = '$uStatus' WHERE `userId` = '$userId'";
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