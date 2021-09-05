$(document).ready(function () { 
    // open Request CONTENT Page 
    $('#requestExpenseBtn').on('click', function () {
        show_unresponded_request_table();
    })
});

//show pending requests table
$(document).ready(function () { 
  // open Request CONTENT Page 
  $('#pendingContributionBtn').on('click', function () {
    show_pending_table();
  })
});

function show_unresponded_request_table(){
  var tmr = Math.random();

  var inputs = [tmr];
  var data = JSON.stringify(inputs);


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {

    
    if (this.readyState == 4 && this.status == 200) {
        var returnedData = JSON.parse(this.responseText);
        
        var status = returnedData[0];

        var tableOfContributions;
        

        tableOfContributions = '<table class="table data-list-view" id="requestExpenseTable">';
        tableOfContributions += '<thead><tr>';
        tableOfContributions += '<th>Request Id</th><th>Expence Type</th><th>Request Amount</th><th>Date Requested</th><th>Date Responded</th><th>Request Status</th><th>ACTION</th>';
        tableOfContributions += '</tr></thead>';
        tableOfContributions += '<tbody>';

        if (status == 0) {
          var i;
          for (i = 1; i < returnedData.length; i++){

            var row_Id = returnedData[i][1];
            var row_ExpenceType = returnedData[i][2];
            var row_Status = returnedData[i][6];
            var row_Amount = "100000";
            var row_RequestDate = returnedData[i][4];
            var row_ResponseDate = returnedData[i][5];



            tableOfContributions += '<tr class="myTableRow" data-toggle="popover" data-content="Tart macaroon" data-trigger="click" data-original-title="Hover Triggered" row_Id="'+row_Id+'" row_ExpenceType="'+row_ExpenceType+'" row_Status="'+row_Status+'">';

            tableOfContributions += '<td class="contributionTypeData">' + row_Id + '</td>';
            tableOfContributions += '<td class="contributionTypeData">' + row_ExpenceType + '</td>';
            tableOfContributions += '<td class="contributionTypeData">' + row_Amount + '</td>';
            tableOfContributions += '<td class="contributionTypeData">' + row_RequestDate + '</td>';
            tableOfContributions += '<td class="contributionTypeData">' + row_ResponseDate + '</td>';

            if (row_Status == 0) {
                tableOfContributions += '<td class="contributionTypeData"><div class="chip chip-success"><div class="chip-body"><div class="chip-text">Completed</div></div></div></td>';
            }
            else if (row_Status == 1) {
                tableOfContributions += '<td class="contributionTypeData"><div class="chip chip-warning"><div class="chip-body"><div class="chip-text">Requested</div></div></div></td>';
            }
            else if (row_Status == 3) {
              tableOfContributions += '<td class="contributionTypeData"><div class="chip chip-success"><div class="chip-body"><div class="chip-text">Verified</div></div></div></td>';
            }
            else if (row_Status == 4) {
              tableOfContributions += '<td class="contributionTypeData"><div class="chip chip-danger"><div class="chip-body"><div class="chip-text">Rejected</div></div></div></td>';
            }
            else if (row_Status == 5) {
              tableOfContributions += '<td class="contributionTypeData"><div class="chip chip-success"><div class="chip-body"><div class="chip-text">Received</div></div></div></td>';
            }

            tableOfContributions += '<td class="contributionTypeDataAction"><span class="action-enable-contribution-type" title="enable"><i class="feather icon-eye"></i></span><span class="action-disable-contribution-type" title="disable"><i class="feather icon-eye-off"></i></span></td>';
          
            tableOfContributions += '</tr>';
          }
        }
        else {
          alert(status);
        }


        tableOfContributions += '</tbody>';
        tableOfContributions += '</table>';

        document.getElementById('requestTable').innerHTML = tableOfContributions;

        get_request_table_initializer();
    }  
  };
  
  xmlhttp.open("GET", "database/select_pending_expense_table.php?par=" + data, true);
  xmlhttp.send();
}

function get_request_table_initializer() {
    var requestDataListView = $("#requestExpenseTable").DataTable({
        responsive: false,
        columnDefs: [
          {
            orderable: true,
            targets: 0,
            // checkboxes: { selectRow: true }
          }
        ],
        dom:
          '<"top"<"actions action-btns"B><"action-filters"lf>><"clear">rt<"bottom"<"actions">p>',
        oLanguage: {
          sLengthMenu: "_MENU_",
          sSearch: ""
        },
        aLengthMenu: [[4, 10, 15, 20], [4, 10, 15, 20]],
        select: {
          style: "multi"
        },
        order: [[1, "asc"]],
        bInfo: false,
        pageLength: 4,
        buttons: [
          {
            text: "<i class='fas fa-plus'></i>Add New Request",
            action: function() {
                show_expense_type_list();
                $(this).removeClass("btn-secondary");
                document.getElementById('myOverlay').style.display = "block";
                document.getElementById('formCard').style.display = "block";
            },
            className: "btn-outline-primary"
          }
        ],
        initComplete: function(settings, json) {
          $(".dt-buttons .btn").removeClass("btn-secondary");
        }
    });
}

// handler

function handler() {
  return {
    fields: [],
    addNewField() {
      this.fields.push({
          txt1: '',
          txt2: ''
        });
    },
    removeField(index) {
        this.fields.splice(index, 1);
      }
  }
}


// on abort expense form card
$('#abortExpenseForm').on('click', function () {
  document.getElementById('myOverlay').style.display = "none";
  document.getElementById('formCard').style.display = "none";
// on abort clear rows here
  
  
})

$(".hide-report-sidebar").on("click", function() {

  $(".add-new-data").removeClass("show");
  $(".overlay-bg").removeClass("show");
 
  

  document.getElementById("insertTotalCashCountField").disabled = false;

})


function display(value){
  if(value == 'Petty Cash'){
    document.getElementById('pettyCashInput').style.display = "block";
    
    document.getElementById('matumiziInput').style.display = "none";
    // onchange clear stays here 
  } else{
    document.getElementById('matumiziInput').style.display = "block";
    document.getElementById('pettyCashInput').style.display = "none";

    // on change clear stays here


  }
} 

function show_pending_table() {
  var tmr = Math.random();

  var inputs = [tmr];
  var data = JSON.stringify(inputs);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
          var returnedData = JSON.parse(this.responseText);
          var status = returnedData[0];
          var tableOfPending;

          tableOfPending = '<table class="table data-list-view" id="pendingContributionList">';
          tableOfPending += '<thead><tr>';
          tableOfPending += '<th>S/no</th><th>Item</th><th>Amount</th><th>ACTION</th>';
          tableOfPending += '</tr></thead>';
          tableOfPending += '<tbody>';

          if (status == 0) {
              var i;
              for (i = 1; i < returnedData.length; i++){

                  var row_Id = returnedData[i].cashContributionUid;
                  var row_senderId = returnedData[i].userId;
                  var row_contributorId = returnedData[i].jumuiyaId;
                  var row_massName = returnedData[i].massName;
                  var row_cType = returnedData[i].cashContributionTypeName;
                  var row_cAmount = returnedData[i].totalCash;
                  var row_dRequested = returnedData[i].dateRequested;


                  tableOfPending += '<tr class="myTableRow" row_Id="'+row_Id+'" row_senderId="'+row_senderId+'" row_cType="'+row_cType+'" row_cAmount="'+row_cAmount+'" row_dRequested="'+row_dRequested+'">';
                  tableOfPending += '<td class="cashData">' + row_senderId + '</td>';
                  tableOfPending += '<td class="cashData">' + row_contributorId + '</td>';
                  tableOfPending += '<td class="cashData">' + row_massName + '</td>';
                  tableOfPending += '<td class="cashData">' + row_cType + '</td>';
                  tableOfPending += '<td class="cashData">' + row_cAmount + '</td>';
                  tableOfPending += '<td class="cashData">' + row_dRequested + '</td>';

                  tableOfPending += '<td class="cashAction"><span class="action-verify" title="Verify" row_Id="'+row_Id+'"><i class="feather icon-check-square"></i></span><span class="action-deny" title="Deny" row_Id="'+row_Id+'"><i class="feather icon-x-square"></i></span><span class="action-redate" title="Redate" row_Id="'+row_Id+'"><i class="feather icon-clock"></i></span></td>';
                  tableOfPending += '</tr>';
              }
          }
          else {
          }
          tableOfPending += '</tbody>';
          tableOfPending += '</table>';

          document.getElementById('pendingContributionTable').innerHTML = tableOfPending;

          get_pending_table_initializer();
      }  
  };
  xmlhttp.open("GET", "database/select_pending_contributions_table.php?par=" + data, true);
  xmlhttp.send();
}


function get_pending_table_initializer() {
  var pendingDataListView = $("#pendingContributionList").DataTable({
      responsive: false,
      columnDefs: [
        {
          orderable: true,
          targets: 0,
          // checkboxes: { selectRow: true }
        }
      ],
      dom:
        '<"top"<"actions action-btns"B><"action-filters"lf>><"clear">rt<"bottom"<"actions">p>',
      oLanguage: {
        sLengthMenu: "_MENU_",
        sSearch: ""
      },
      aLengthMenu: [[4, 10, 15, 20], [4, 10, 15, 20]],
      select: {
        style: "multi"
      },
      order: [[1, "asc"]],
      bInfo: false,
      pageLength: 4,
      buttons: [
        {
          
        }
      ],
      initComplete: function(settings, json) {
        $(".dt-buttons .btn").removeClass("btn-secondary");
      }
  });
}

// dropdown expense type list
function show_expense_type_list() {
  var tmr = Math.random();

  var list;
  var inputs = [tmr];
  var data = JSON.stringify(inputs);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var returnedData = JSON.parse(this.responseText);
      var status = returnedData[0];
      alert(returnedData);

      if (status == 0) {
        list = '<select class="select2-theme form-control requestType" id="select2-theme" onchange="display(this.value)">';
        var choose = 0;
        list += '<option value="' + choose + '">';
        list += "Chagua aina ya matumizi";
        list += '</option>';

        for (var i = 1; i < returnedData.length; i++) {
          list += '<option value="' + returnedData[i][1] + '">';
          list += returnedData[i][1];
          list += '</option>';
        }

        list += '</select>';

        document.getElementById('requestSelect').innerHTML = list;
      }
    }
  };
  xmlhttp.open("GET", "database/select_request_type_name.php?par=" + data, true);
  xmlhttp.send();
}