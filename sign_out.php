<?php
    include 'session.php';
    if (isset($_POST['sign_out'])) {
        $_SESSION = array();
        session_destroy();
        header("Location:  index.php");
    }