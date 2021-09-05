<?php
  	require '../database_conn.php';
	require '../definition.php';

  	$data = json_decode($_REQUEST["par"]);
  
  	$returnData = array(); 

  	$db = db_sonak_churchDatabase_connect();

 	$sql = "SELECT * FROM `request`";
	$result = mysqli_query($db, $sql);
	if (mysqli_num_rows($result) > 0) {
        array_push($returnData, STATUS['OK']);
 		 // output data of each row
 		while($row = mysqli_fetch_array( $result, MYSQLI_NUM)) {
    		array_push($returnData,$row);
 	 	}
		
	}	
	else {
        array_push($returnData, STATUS['NOT_FOUND']);
	}
	
	echo json_encode($returnData);

?>