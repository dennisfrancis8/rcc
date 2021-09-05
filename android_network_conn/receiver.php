<?php
    require '../database_conn.php';
    require '../definition.php';
    require 'task.php';
    
    class User {
        public $status = 1;
        public $date = null;
 
        function __construct(){
        }
    }
    
    
    $jStatus = JUMUIYASTATUS['ACTIVATED'];
    $password = "1234";
    $uStatus = USERSTATUS['ACTIVATED'];
    $pContrStatus = CONTRSTATUS['PENDING'];

    $uPrivilege = "JUMUIYA";
    $uOccupation = "MWEKAHAZINA-JUMUIYA";

    
    // Check all available Content-Type
    $contentType = explode(';', $_SERVER['CONTENT_TYPE']);

    // Read body
    $rawBody = file_get_contents("php://input"); 
        
    // type conversion
    $json = (string) $rawBody;
    
    // decode raw data
    $obj = json_decode($json);

    # patch to local variables
    $Cmd = $obj->{'CM'};
    $receivedUserId  = $obj->jumuiyaCredentials->userId;
    $receivedUserFirstName = $obj->jumuiyaCredentials->userFirstName;
    $receivedUserLastName = $obj->jumuiyaCredentials->userLastName;
    $receivedJumuiyaName = $obj->jumuiyaCredentials->userJumuiyaName;

    
    
    $db = db_sonak_churchDatabase_connect();

    $query = "SELECT * FROM `jumuiya` WHERE `jumuiyaId` = '$receivedJumuiyaName' AND `jumuiyaStatus` = $jStatus";
    $result = mysqli_query($db, $query);

    $user = new User();
    
    # checking if jumuiya status is active 
    if ($result->num_rows > 0) {
        if ($Cmd == "REG_JUM") {
            # checking if userId already exists
            $query = "SELECT * FROM `user` WHERE `userId` = '$receivedUserId'";
            $result = mysqli_query($db, $query);

            if ($result->num_rows == 0) {

                # registering user into the database
                $insertUserQueryStatus = insert_new_user($receivedUserId, $receivedJumuiyaName, $receivedUserFirstName, $receivedUserLastName, $password, $uStatus, $db);
                
                if ($insertUserQueryStatus == STATUS['OK']) {
                    $insertUserPriviledgeQueryStatus = insert_user_privilege_occupation($receivedUserId, $uPrivilege, $uOccupation, $db);

                    if ($insertUserPriviledgeQueryStatus == STATUS['OK']) {
                        // send a json response by using encode function
                        $user->cmd = $Cmd;
                        $user->status = STATUS['OK'];
                        header('Content-Type: application/json; charset=UTF-8');
                        echo json_encode($user);
                    }
                    else {
                        // new user privilege occupation has not been added
                        delete_new_user($receivedUserId, $db);
                        $user->status = STATUS['ADD_USER_PRIVILEGE_OCCUPATION_FAILED'];
                        header('Content-Type: application/json; charset=UTF-8');
                        echo json_encode($user);
                    }
                }
                else {
                    // new user has not been added
                    $user->status = STATUS['ADD_USER_FAILED'];
                    header('Content-Type: application/json; charset=UTF-8');
                    echo json_encode($user);
                }
            }
            else {
               // new userID already exists
                $user->status = STATUS['USERID_EXISTS'];
                header('Content-Type: application/json; charset=UTF-8');
                echo json_encode($user); 
            }
        }
        
        else if ($Cmd == "INSERT_CONTRIBUTION") {
            #get the data sent from android
            $cTypeName = $obj->jumuiyaCredentials->cType;
            $amount = $obj->jumuiyaCredentials->insertedCash;
            $mass = "N/A";
            $description = $obj->jumuiyaCredentials->cType;
            $date = new DateTime(null, new DateTimeZone('Africa/Dar_es_Salaam'));
            $today = $date->format('Y-m-d H:i:s');



            #check if user is active
            $query = "SELECT * FROM `user` WHERE `userId` = '$receivedUserId' AND `userStatus` = $uStatus";
            $result = mysqli_query($db, $query);

            if ($result->num_rows > 0) {
                #insert contribution data
                $query = "INSERT INTO `cash_contribution`(`cashContributionTypeName`, `userId`, `jumuiyaId`, `massName`, `totalCash`, `cashContributionDescription`, `dateRequested`, `cashContributionStatus`) VALUES ('$cTypeName', '$receivedUserId', '$receivedJumuiyaName', '$mass', $amount, '$description', '$today', $pContrStatus)";
                $result = mysqli_query($db, $query);

                if ($result == true) {
                    # send a success method to the user (send all information received from the database)
                    $user->cmd = $Cmd;
                    $user->status = STATUS['OK'];
                    $user->date = $today;
                    header('Content-Type: application/json; charset=UTF-8');
                    echo json_encode($user);
                }
                else {
                    $Status = STATUS['DB_FAILED'];
                }
            }
            else {
                // user is deactivated
                $user->status = STATUS['USER_DEACTIVATED'];
                header('Content-Type: application/json; charset=UTF-8');
                echo json_encode($user);
            }
            
            
            
           
        }
    }
    else {
        // jumuiya is deactivated
        $user->status = STATUS['JUMUIYA_DEACTIVATED'];
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode($user);
    }
        
        
    mysqli_close($db);
?>