<?php 
    require '../database_conn.php';
    require '../definition.php';

    class User {
        public $userId;
        public $jumuiyaId;
        public $userFirstName;
        public $userLastName;
        public $userStatus;
 
        function __construct(){
        }
    }

    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "SELECT * FROM `user` WHERE 1";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            
            $user = new User();
            $user->userId = $row['userId'];
            $user->jumuiyaId = $row['jumuiyaId'];
            $user->userFirstName = $row['userFirstName'];
            $user->userLastName = $row['userLastName'];
            $user->userStatus = $row['userStatus'];
        
            array_push($returnData, $user);
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>