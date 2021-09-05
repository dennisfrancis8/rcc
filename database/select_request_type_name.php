<?php 
    require '../database_conn.php';
    require '../definition.php';
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();

    $query =  "SELECT * FROM `expenseType`";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);
        // output data of each row
        while($row = mysqli_fetch_array( $result, MYSQLI_NUM)) {
           array_push($returnData,$row);
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>