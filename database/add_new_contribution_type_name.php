<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $cTypeName = $data[0];
    $cStatus = CONTRTYPESTATUS['ACTIVATED'];
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "INSERT INTO `cash_contribution_type`(`cashContributionTypeName`, `cashContributionTypeStatus`) VALUES ('$cTypeName', $cStatus)";
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