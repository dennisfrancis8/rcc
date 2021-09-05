<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $contributionId = $data[0];
    $received = CONTRSTATUS['RECEIVED'];
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();

    $date = new DateTime(null, new DateTimeZone('Africa/Dar_es_Salaam'));
    $today = $date->format('Y-m-d H:i:s');


    $query =  "UPDATE `cash_contribution` SET `dateResponded` = '$today', `cashContributionStatus` = $received WHERE `cashContributionUid` = $contributionId";
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