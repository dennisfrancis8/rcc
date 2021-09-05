<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $privilege = $data[0];
    $occupation = $data[1];
    $access = CONTRTYPEACCESS['WRITEONLY'];
    $cTStatus = CONTRTYPESTATUS['ACTIVATED'];

    class Ctype {
        public $cashContributionTypeName;
        public $cashContributionPrivilegeUid;
 
        function __construct(){
        }
    }

    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();


    $query =  "SELECT * FROM `cash_contibution_privilege` WHERE `privilegeName` = '$privilege' AND `occupationName` = '$occupation' AND NOT `userAccess` = $access";
    $result = mysqli_query($db, $query);

    if ($result->num_rows > 0) {
        array_push($returnData, STATUS['OK']);

        for($i = 0; $i < $result->num_rows; $i++) {
            $row = $result->fetch_assoc();

            $cTName = $row['cashContributionTypeName'];

            $query =  "SELECT * FROM `cash_contribution_type` WHERE `cashContributionTypeName` = '$cTName' AND `cashContributionTypeStatus` = $cTStatus";
            $results = mysqli_query($db, $query);

            if ($results->num_rows > 0) {
                $ctype = new Ctype();
                $ctype->cashContributionTypeName = $cTName;
                $ctype->cashContributionPrivilegeUid = $row['cashContributionPrivilegeUid'];
            
                array_push($returnData, $ctype);
            }
        }
    }
    else {
        array_push($returnData, STATUS['NOT_FOUND']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>