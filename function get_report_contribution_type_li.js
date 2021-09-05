function get_report_contribution_type_list() {
    var tmr = Math.random();

    var list;

    var inputs = [loggedinUserPriviledge, loggedinUserOccupationName, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                list = '<select class="form-control" id="reportListContributionType">';
                var choose = 0;
                list += '<option value="' + choose + '">';
                list += "Choose Contribution Type";
                list += '</option>';

                for (var i = 1; i < returnedData.length; i++) {
                    list += '<option value="' + returnedData[i].cashContributionTypeName + '">';
                    list += returnedData[i].cashContributionTypeName;
                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('reportCashContributionType').innerHTML = list;
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Sorry!",
                    text: " You dont have access to any report!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_report_contribution_type_list.php?par=" + data, true);
    xmlhttp.send();
}





$(".hide-report-sidebar, .cancel-data-btn").on("click", function() {

    $(".add-new-data").removeClass("show");
    $(".overlay-bg").removeClass("show");
   
    

    document.getElementById("insertTotalCashCountField").disabled = false;

})