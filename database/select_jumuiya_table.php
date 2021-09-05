<?php 
    require '../database_conn.php';
    require '../definition.php';

    class Jumuiya {
        public $jumuiyaId;
        public $kandaId;
        public $jumuiyaFirstName;
        public $jumuiyaLastName;
        public $jumuiyaStatus;
 
        function __construct(){
        }
    }

    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "SELECT * FROM `jumuiya` WHERE 1";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            $generalJumuiyaId = $row['jumuiyaId'];
            if ($generalJumuiyaId == "WHOLE PARISH" || $generalJumuiyaId == "INDIVIDUAL") {
                # do nothing...
            }
            else {
                $jumuiya = new Jumuiya();
                $jumuiya->jumuiyaId = $generalJumuiyaId;
                $jumuiya->kandaId = $row['kandaId'];
                $jumuiya->jumuiyaStatus = $row['jumuiyaStatus'];
                $jumuiya->jumuiyaFirstName = $row['jumuiyaFirstName'];
                $jumuiya->jumuiyaLastName = $row['jumuiyaLastName'];
            
                array_push($returnData, $jumuiya);
            }
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>