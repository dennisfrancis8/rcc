<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $uId = $data[0];

    class Userprivilegeoccupation {
        public $userPrivilegeOccupationUid;
        public $userId;
        public $privilegeName;
        public $occupationName;
 
        function __construct(){
        }
    }

    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "SELECT * FROM `user_privilege_occupation` WHERE `userId` = '$uId' ORDER BY `privilegeName` ASC";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            $userPrivilegeOccupation = new Userprivilegeoccupation();
            $userPrivilegeOccupation->userPrivilegeOccupationUid = $row['userPrivilegeOccupationUid'];
            $userPrivilegeOccupation->userId = $row['userId'];
            $userPrivilegeOccupation->privilegeName = $row['privilegeName'];
            $userPrivilegeOccupation->occupationName = $row['occupationName'];
        
            array_push($returnData, $userPrivilegeOccupation);
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>