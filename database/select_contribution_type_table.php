<?php 
    require '../database_conn.php';
    require '../definition.php';

    class ContributionType {
        public $cashContributionTypeUid;
        public $cashContributionTypeName;
        public $cashContributionTypeStatus;
 
        function __construct(){
        }
    }

    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "SELECT * FROM `cash_contribution_type` WHERE 1";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();
            $contributionType = new ContributionType();
            $contributionType->cashContributionTypeUid = $row['cashContributionTypeUid'];
            $contributionType->cashContributionTypeName = $row['cashContributionTypeName'];
            $contributionType->cashContributionTypeStatus = $row['cashContributionTypeStatus'];
        
            array_push($returnData, $contributionType);
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>