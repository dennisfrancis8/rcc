<?php 
    require '../database_conn.php';
    require '../definition.php';

    class Mass {
        public $massUid;
        public $massName;
        public $massNameStatus;
 
        function __construct(){
        }
    }

    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "SELECT * FROM `mass` ORDER BY `mass`.`massUid` ASC";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            $mass = new Mass();
            $mass->massUid = $row['massUid'];
            $mass->massName = $row['massName'];
            $mass->massNameStatus = $row['massNameStatus'];
        
            array_push($returnData, $mass);
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>