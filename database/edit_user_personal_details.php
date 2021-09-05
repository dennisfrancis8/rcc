<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $userId = $data[0];
    $userFname = $data[1];
    $userLname = $data[2];

    $db = db_sonak_churchDatabase_connect();

    $returnData = array();

    $query =  "UPDATE `user` SET `userFirstName` = '$userFname', `userLastName` = '$userLname' WHERE `userId` = '$userId'";
    $result = mysqli_query($db, $query);

    if ($result == true) {
        array_push($returnData, STATUS['OK']);
    }
    else {
        //error
        array_push($returnData, STATUS['NOT_FOUND']);
    }

    echo json_encode($returnData);

    mysqli_close($db);
?>