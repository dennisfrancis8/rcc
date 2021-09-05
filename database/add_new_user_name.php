<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $newUserId = $data[0];
    $newUserFirstName = $data[1];
    $newUserLastName = $data[2];
    $newUserJumuiyaNameId = $data[3];
    $newUserPrivilege = $data[4];
    $newUserOccupation = $data[5];
    $activeStatus = USERSTATUS['ACTIVATED'];
    $defaultPwd = "1234";
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "INSERT INTO `user`(`userId`, `jumuiyaId`, `userFirstName`, `userLastName`, `userPassword`, `userStatus`) VALUES ('$newUserId', '$newUserJumuiyaNameId', '$newUserFirstName', '$newUserLastName', '$defaultPwd', $activeStatus)";
    $result = mysqli_query($db, $query);

    if ($result == true) {
        $query =  "INSERT INTO `user_privilege_occupation`(`userId`, `privilegeName`, `occupationName`) VALUES ('$newUserId', '$newUserPrivilege', '$newUserOccupation')";
        $result1 = mysqli_query($db, $query);
        if ($result1 == true) {
            array_push($returnData, STATUS['OK']);
        }
        else {
            array_push($returnData, STATUS['DB_FAILED']);
            $query =  "DELETE FROM `user_privilege_occupation` WHERE `userId` = '$newUserId'";
            $result = mysqli_query($db, $query);
        }
    }
    else {
        array_push($returnData, STATUS['DB_FAILED']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>