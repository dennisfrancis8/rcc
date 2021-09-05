<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $newUserId = $data[0];
    $newUserFirstName = $data[1];
    $newUserLastName = $data[2];
    $newUserJumuiyaNameId = $data[3];
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "UPDATE `user` SET `jumuiyaId` = '$newUserJumuiyaNameId', `userFirstName` = '$newUserFirstName', `userLastName` = '$newUserLastName' WHERE `userId` = '$newUserId'";
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