<?php
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $userName = $data[0];
    $pending = CONTRSTATUS['PENDING'];

    class Contribution {
        public $cashContributionUid;
        public $cashContributionTypeName;
        public $userId;
        public $jumuiyaId;
        public $massName;
        public $fiftyCoins;
        public $hundredCoins;
        public $twoHundredCoins;
        public $fiveHundredCoins;
        public $oneThousands;
        public $twoThousands;
        public $fiveThousands;
        public $tenThousands;
        public $totalCash;
        public $cashContributionDescription;
        public $dateRequested;
        public $dateResponded;
        public $cashContributionStatus;
 
        function __construct(){
        }
    }

    

    $db = db_sonak_churchDatabase_connect();

    $returnData = array();

    $query =  "SELECT * FROM `cash_contribution` WHERE  `cashContributionStatus` = $pending";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            $contribution = new Contribution();
            $contribution->cashContributionUid = $row['cashContributionUid'];
            $contribution->cashContributionTypeName = $row['cashContributionTypeName'];
            $contribution->userId = $row['userId'];
            $contribution->jumuiyaId = $row['jumuiyaId'];
            $contribution->massName = $row['massName'];
            $contribution->totalCash = number_format($row['totalCash']);
            $contribution->dateRequested = $row['dateRequested'];
            
            array_push($returnData, $contribution);
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    }

    echo json_encode($returnData);

    mysqli_close($db);
?>