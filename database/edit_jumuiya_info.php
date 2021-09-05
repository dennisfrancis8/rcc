<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $newJumuiyaId = $data[0];
    $newJumuiyaTitle = $data[1];
    $newJumuiyaName = $data[2];
    $newJumuiyaKandaNameId = $data[3];
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "UPDATE `jumuiya` SET `kandaId` = '$newJumuiyaKandaNameId', `jumuiyaFirstName` = '$newJumuiyaTitle', `jumuiyaLastName` = '$newJumuiyaName' WHERE `jumuiyaId` = '$newJumuiyaId'";
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