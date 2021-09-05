<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $privilegeValue = $data[0];

    class Occupation {
        public $occupationUid;
        public $occupationName;
        public $privilegeName;
 
        function __construct(){
        }
    }

    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "SELECT * FROM `occupation` WHERE `privilegeName` = '$privilegeValue' ORDER BY `occupationName` ASC";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            $occupation = new Occupation();
            $occupation->occupationUid = $row['occupationUid'];
            $occupation->occupationName = $row['occupationName'];
            $occupation->privilegeName = $row['privilegeName'];
        
            array_push($returnData, $occupation);
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>