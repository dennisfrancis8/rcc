<?php 
    require '../database_conn.php';
    require '../definition.php';

    class Privilege {
        public $privilegeUid;
        public $privilegeName;
 
        function __construct(){
        }
    }

    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "SELECT * FROM `privilege` WHERE 1 ORDER BY `privilegeName` ASC";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            $privilege = new Privilege();
            $privilege->privilegeUid = $row['privilegeUid'];
            $privilege->privilegeName = $row['privilegeName'];
        
            array_push($returnData, $privilege);
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>