<?php
    function insert_new_user($receivedUserId, $receivedJumuiyaName, $receivedUserFirstName, $receivedUserLastName, $password, $uStatus, $db) {
        $query = "INSERT INTO `user`(`userId`, `jumuiyaId`, `userFirstName`, `userLastName`, `userPassword`, `userStatus`) VALUES ('$receivedUserId', '$receivedJumuiyaName', '$receivedUserFirstName', '$receivedUserLastName', '$password', $uStatus)";
        $result = mysqli_query($db, $query);
        
        if ($result == true) {
            $Status = STATUS['OK'];
        }
        else {
            $Status = STATUS['DB_FAILED'];
        }
        return $Status;
    }
    
    function insert_user_privilege_occupation($receivedUserId, $uPrivilege, $uOccupation, $db) {
        $query = "INSERT INTO `user_privilege_occupation`(`userId`, `privilegeName`, `occupationName`) VALUES ('$receivedUserId', '$uPrivilege', '$uOccupation')";
        $result = mysqli_query($db, $query);
        
        if ($result === true) {
            $Status = STATUS['OK'];
        }
        else {
            $Status = STATUS['DB_FAILED'];
        }
        return $Status;
    }
    
    function delete_new_user($receivedUserId, $db) {
        $query = "DELETE FROM `user` WHERE `userId` = '$receivedUserId'";
        $result = mysqli_query($db, $query);
    }

?>