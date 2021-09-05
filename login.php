<?php
    include 'database_conn.php';
    include 'session.php';

    $activated = 0;
    
    class Login {
        public $privilegeName;
        public $occupationName;


        function __construct(){
        }
    }


    $db = db_sonak_churchDatabase_connect();

    if (isset($_POST['submit'])) {
        if (isset($_POST['username']) && isset($_POST['password'])) {
    		$username = mysqli_real_escape_string($db, $_POST['username']);
    		$password = mysqli_real_escape_string($db, $_POST['password']);

            if (!empty($username) && !empty($password)){
                $query = "SELECT * FROM `user` WHERE `userId` = '$username' AND `userPassword` = '$password' AND `userStatus` =  $activated";
                $result = $db->query($query);
                

                if ($result->num_rows > 0) {
                    $query = "SELECT * FROM `user_privilege_occupation` WHERE `userId` = '$username'";
                    $result = $db->query($query);

                    if ($result->num_rows > 0) {
                        $row = $result->fetch_assoc();
                        $_SESSION["privilegeName"] = $row['privilegeName'];
                        $_SESSION["occupationName"] = $row['occupationName'];
                        $_SESSION["isLoggedIn"] = true;
                        header('Location: index.php');
                    }
                    else {
                        header('Location: index.php');
                    // echo 'no privilege';
                    }
                }
                else{
                    header('Location: index.php');
                    // echo 'incorrect password or username';
                }
            }
            else {
                header('Location: index.php');
                // echo 'Please Enter Your Credentials';
            }

        }
    }
?>