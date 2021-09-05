document.getElementById("printReceiptBtn").addEventListener("click", print_receipt);

function print_receipt() {
    var printingContents = document.getElementById('receiptNzima').innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printingContents;

    window.print();

    document.body.innerHTML = originalContents;
}

// document.getElementById("viewRequests").addEventListener("click", show_unverified_table);

// $('#viewRequestBtn').on('click', function () {
//     show_unverified_table();
// })



// function show_unverified_table() {
//     var tmr = Math.random();

//     var inputs = [loggedinUserId, tmr];
//     var data = JSON.stringify(inputs);

//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//             var returnedData = JSON.parse(this.responseText);
//             var status = returnedData[0];

//             var tableOfUnverified;

//             tableOfUnverified = '<table class="table data-list-view" id="contributionTable">';
//             tableOfUnverified += '<thead><tr>';
//             tableOfUnverified += '<th>TYPE</th><th>MASS</th><th>JUMUIYA</th><th>AMOUNT</th><th>DESCRIPTION</th><th>REQUEST DATE</th><th>RESPONSE DATE</th><th>STATUS</th><th>ACTION</th>';
//             tableOfUnverified += '</tr></thead>';
//             tableOfUnverified += '<tbody>';

//             if (status == 0) {
//                 var i;
//                 for (i = 1; i < returnedData.length; i++){

//                     var row_Id = returnedData[i].cashContributionUid;
//                     var row_cType = returnedData[i].cashContributionTypeName;
//                     var row_jumuiyaName =  returnedData[i].jumuiyaFirstName + " " + returnedData[i].jumuiyaLastName;
//                     var row_massName = returnedData[i].massName;
//                     var row_cAmount = returnedData[i].totalCash;
//                     var row_cDescription = returnedData[i].cashContributionDescription;
//                     var row_dRequested = returnedData[i].dateRequested;
//                     var row_dResponded = returnedData[i].dateResponded;
//                     if (row_dResponded == null) {
//                         row_dResponded = "Not Yet";
//                     }
//                     var row_Status = returnedData[i].cashContributionStatus;



//                     tableOfUnverified += '<tr class="myTableRow" row_Id="'+row_Id+'" row_cType="'+row_cType+'" row_cAmount="'+row_cAmount+'" row_dRequested="'+row_dRequested+'" row_dResponded="'+row_dResponded+'" row_Status="'+row_Status+'">';
//                     tableOfUnverified += '<td class="cashData">' + row_cType + '</td>';
//                     tableOfUnverified += '<td class="cashData">' + row_massName + '</td>';
//                     tableOfUnverified += '<td class="cashData">' + row_jumuiyaName + '</td>';
//                     tableOfUnverified += '<td class="cashData">' + row_cAmount + '</td>';
//                     tableOfUnverified += '<td class="cashData">' + row_cDescription + '</td>';
//                     tableOfUnverified += '<td class="cashData">' + row_dRequested + '</td>';
//                     tableOfUnverified += '<td class="cashData">' + row_dResponded + '</td>';


//                     if (row_Status == 0) {
//                         tableOfUnverified += '<td class="cashData"><div class="chip chip-success"><div class="chip-body"><div class="chip-text">Received</div></div></div></td>';
//                     }
//                     else if (row_Status == 1) {
//                         tableOfUnverified += '<td class="cashData"><div class="chip chip-warning"><div class="chip-body"><div class="chip-text">Pending</div></div></div></td>';
//                     }
//                     else if (row_Status == 2) {
//                         tableOfUnverified += '<td class="cashData"><div class="chip chip-danger"><div class="chip-body"><div class="chip-text">Rejected</div></div></div></td>';
//                     }

//                     tableOfUnverified += '<td class="cashAction"><span class="action-delete" title="delete" row_Id="'+row_Id+'"><i class="far fa-trash-alt"></i></span></td>';
                  
//                     tableOfUnverified += '</tr>';
//                 }
//             }
//             else {
//             }


//             tableOfUnverified += '</tbody>';
//             tableOfUnverified += '</table>';

//             document.getElementById('checkContributionTable').innerHTML = tableOfUnverified;

//             get_contribution_table_initializer();
//         }  
//     };
//     xmlhttp.open("GET", "database/select_unverified_contribution_table.php?par=" + data, true);
//     xmlhttp.send();
// }