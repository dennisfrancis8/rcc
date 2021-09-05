<?php 
    require '../database_conn.php';
    require '../definition.php';

    class Kanda {
        public $kandaId;
        public $kandaFirstName;
        public $kandaLastName;
 
        function __construct(){
        }
    }

    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "SELECT * FROM `kanda` WHERE 1";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            $generalKandaId = $row['kandaId'];
            if ($generalKandaId == "ALL") {
                # do nothing...
            }
            else {
                $kanda = new Kanda();
                $kanda->kandaId = $generalKandaId;
                $kanda->kandaFirstName = $row['kandaFirstName'];
                $kanda->kandaLastName = $row['kandaLastName'];
            
                array_push($returnData, $kanda);
            }
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>