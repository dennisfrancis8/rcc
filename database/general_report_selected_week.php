<?php
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $startDate = $data[0];
    $endDate = $data[1];

    class Contribution {
        public $cashContributionTypeName;
        public $total;
        public $calculatedTotalCash;
 
        function __construct(){
        }
    }

    

    $db = db_sonak_churchDatabase_connect();

    $returnData = array();

    $query =  "SELECT `cashContributionTypeName`, SUM(`totalCash`) AS total FROM cash_contribution WHERE `dateResponded` BETWEEN '$startDate' AND '$endDate' GROUP BY `cashContributionTypeName`";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            $contribution = new Contribution();
            $contribution->cashContributionTypeName = $row['cashContributionTypeName'];
            $contribution->total = number_format($row['total']);
            $contribution->calculatedTotalCash = $row['total'];
            
            array_push($returnData, $contribution);
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    }

    echo json_encode($returnData);

    mysqli_close($db);
?>