<?php
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $cType = $data[0];
    $cMassName = $data[1];
    $startDate = $data[2];
    $endDate = $data[3];
    $received = CONTRSTATUS['RECEIVED'];

    class Contribution {
        public $cashContributionUid;
        public $cashContributionTypeName;
        public $userId;
        public $jumuiyaId;
        public $date;
        public $massName;
        public $jumuiyaFirstName;
        public $jumuiyaLastName;
        public $kandaFirstName;
        public $kandaLastName;
        public $oneThousands;
        public $twoThousands;
        public $fiveThousands;
        public $tenThousands;
        public $totalCash;
        public $calculatedTotalCash;
        public $cashContributionDescription;
        public $dateRequested;
        public $dateResponded;
        public $cashContributionStatus;
 
        function __construct(){
        }
    }

    

    $db = db_sonak_churchDatabase_connect();

    $returnData = array();

    $query =  "SELECT cash_contribution.*, jumuiya.*, kanda.*, (CAST(`dateResponded` AS date)) As date FROM `cash_contribution`, jumuiya, kanda WHERE cash_contribution.jumuiyaId = jumuiya.jumuiyaId AND jumuiya.kandaId = kanda.kandaId AND cash_contribution.cashContributionTypeName = '$cType' AND cash_contribution.massName = '$cMassName' AND cash_contribution.cashContributionStatus = $received AND cash_contribution.dateResponded BETWEEN '$startDate' AND '$endDate'";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            $contribution = new Contribution();
            $contribution->massName = $row['massName'];
            $contribution->cashContributionTypeName = $row['cashContributionTypeName'];
            $contribution->totalCash = number_format($row['totalCash']);
            $contribution->calculatedTotalCash = $row['totalCash'];
            $contribution->date = $row['date'];
            $contribution->jumuiyaFirstName = $row['jumuiyaFirstName'];
            $contribution->jumuiyaLastName = $row['jumuiyaLastName'];
            $contribution->kandaFirstName = $row['kandaFirstName'];
            $contribution->kandaLastName = $row['kandaLastName'];
            $contribution->cashContributionDescription = $row['cashContributionDescription'];
            
            array_push($returnData, $contribution);
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    }

    echo json_encode($returnData);

    mysqli_close($db);
?>