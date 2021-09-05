<?php 
    require '../database_conn.php';
    require '../definition.php';

    $data = json_decode($_REQUEST["par"]);

    $cType = $data[0];
    $userName = $data[1];
    $jumuiya = $data[2];
    $fifty = $data[3];
    $hundred = $data[4];
    $twoHundred = $data[5];
    $fiveHundred = $data[6];
    $thousand = $data[7];
    $twoThousand = $data[8];
    $fiveThousand = $data[9];
    $tenThousand = $data[10];
    $totalAmount = $data[11];
    $description = $data[12];
    $mass = $data[13];
    $today = $data[14];
    $contributionStatus = CONTRSTATUS['RECEIVED'];
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();

    $date = new DateTime(null, new DateTimeZone('Africa/Dar_es_Salaam'));
    $toda = $date->format('Y-m-d H:i:s');


    $query =  "INSERT INTO `cash_contribution`(`cashContributionTypeName`, `userId`, `jumuiyaId`, `massName`, `fiftyCoins`, `hundredCoins`, `twoHundredCoins`, `fiveHundredCoins`, `oneThousands`, `twoThousands`, `fiveThousands`, `tenThousands`, `totalCash`, `cashContributionDescription`, `dateRequested`, `dateResponded`, `cashContributionStatus`) VALUES ('$cType', '$userName', '$jumuiya', '$mass', $fifty, $hundred, $twoHundred, $fiveHundred, $thousand, $twoThousand, $fiveThousand, $tenThousand, $totalAmount, '$description', '$toda', '$today', $contributionStatus)";
    $result = mysqli_query($db, $query);

    if ($result == true) {
        array_push($returnData, STATUS['OK']);
    }
    else {
        array_push($returnData, STATUS['DB_FAILED']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>