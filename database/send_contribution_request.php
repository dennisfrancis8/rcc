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
    $contributionStatus = CONTRSTATUS['PENDING'];
    $idAuto = null;
    
    $db = db_sonak_churchDatabase_connect();

    $returnData = array();

    $date = new DateTime(null, new DateTimeZone('Africa/Dar_es_Salaam'));
    $today = $date->format('Y-m-d H:i:s');

    while (true) {

        $idAuto = rand(10000001, 99999999);

        $query =  "SELECT * FROM `cash_contribution` WHERE `receiptNumber` = $idAuto";
        $result = mysqli_query($db, $query);

        if ($result->num_rows == 0) {
            // Id is Valid
            break;
        }
    }


    $query =  "INSERT INTO `cash_contribution`(`cashContributionTypeName`, `userId`, `jumuiyaId`, `massName`, `receiptNumber`, `fiftyCoins`, `hundredCoins`, `twoHundredCoins`, `fiveHundredCoins`, `oneThousands`, `twoThousands`, `fiveThousands`, `tenThousands`, `totalCash`, `cashContributionDescription`, `dateRequested`, `cashContributionStatus`) VALUES ('$cType', '$userName', '$jumuiya', '$mass', '$idAuto', $fifty, $hundred, $twoHundred, $fiveHundred, $thousand, $twoThousand, $fiveThousand, $tenThousand, $totalAmount, '$description', '$today', $contributionStatus)";
    $result = mysqli_query($db, $query);

    if ($result == true) {
        array_push($returnData, STATUS['OK']);
        array_push($returnData, $idAuto);
    }
    else {
        array_push($returnData, STATUS['DB_FAILED']);
    } 


    echo json_encode($returnData);

    mysqli_close($db);
?>