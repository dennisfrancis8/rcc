<?php
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $userName = $data[0];

    class User {
        public $userUid;
        public $userId;
        public $jumuiyaId;
        public $userFirstName;
        public $userLastName;
        public $userPassword;
        public $userStatus;
        public $occupationName;

        function __construct(){
        }
    }


    $db = db_sonak_churchDatabase_connect();

    $returnData = array();
    
    
    $query = "SELECT user.*, user_privilege_occupation.* FROM `user`, `user_privilege_occupation` WHERE user_privilege_occupation.userId = user.userId AND user.userId = '$userName'";
    $result = $db->query($query);
                

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $user = new User();
        $user->userUid = $row['userUid'];
        $user->userId = $row['userId'];
        $user->jumuiyaId = $row['jumuiyaId'];
        $user->userFirstName = $row['userFirstName'];
        $user->userLastName = $row['userLastName'];
        $user->userPassword = $row['userPassword'];
        $user->userStatus = $row['userStatus'];
        $user->occupationName = $row['occupationName'];

        array_push($returnData, STATUS['OK']);
        array_push($returnData, $user);
    }
           
    echo json_encode($returnData);

    mysqli_close($db);
?>