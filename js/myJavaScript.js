var loggedinUserId;
var loggedinUserUId;
var loggedinUserPriviledge;
var loggedinUserOccupationName;
var contributionId;
var selectedMassId;
var selectedcontributionTypeId;
var selectedKandaId;
var selectedJumuiyaId;
var selectedJumuiyaKandaId;
var selectedJumuiyaLastName;
var selectedJumuiyaFirstName;
var selectedUserId;
var selectedUserJumuiyaId;
var selectedUserLastName;
var selectedUserFirstName;
var userOccupationPriviledgeUid;
var privilegeLength;
var receiptJumuiyaName;
















document.getElementById("insertFiftyCoinCountField").addEventListener("keyup", calculate_cash);
document.getElementById("insertHundredCoinCountField").addEventListener("keyup", calculate_cash);
document.getElementById("insertTwoHundredCoinCountField").addEventListener("keyup", calculate_cash);
document.getElementById("insertFiveHundredCoinCountField").addEventListener("keyup", calculate_cash);
document.getElementById("insertOneThousandCountField").addEventListener("keyup", calculate_cash);
document.getElementById("insertTwoThousandCountField").addEventListener("keyup", calculate_cash);
document.getElementById("insertFiveThousandCountField").addEventListener("keyup", calculate_cash);
document.getElementById("insertTenThousandCountField").addEventListener("keyup", calculate_cash);
document.getElementById("viewReportBtn").addEventListener("click", show_contribution_report_table);
document.getElementById("sendContributionRequestBtn").addEventListener("click", send_contribution_request);
document.getElementById("receiptContributionRequestBtn").addEventListener("click", send_contribution_and_print_receipt_request);
document.getElementById("insertTotalCashCountField").addEventListener("focus", open_calculator);








$(document).ready(function () { 
    // open pending Contribution page
    $('#pendingContributionBtn').on('click', function () {
        show_pending_table();
    })

    // open check Contribution page
    $('#checkContributionBtn').on('click', function () {
        show_unverified_table();
    })

    // open mass content page
    $('#massInfoBtn').on('click', function () {
        show_mass_table();
    })

    // open Contribution Types content page
    $('#contributionTypeInfoBtn').on('click', function () {
        show_contribution_types_table();
    })

    // open Kanda content page
    $('#kandaInfoBtn').on('click', function () {
        show_kanda_table();
    })

    // open Jumuiya content page
    $('#jumuiyaInfoBtn').on('click', function () {
        show_jumuiya_table();
    })

    // open Jumuiya content page
    $('#userInfoBtn').on('click', function () {
        show_user_table();
    })

    // open Jumuiya content page
    $('#userInfoBtn').on('click', function () {
        show_unresponded_request_table();
    })

    // abort Contribution actions 
    $('.abortContributionActions').on('click', function () {
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('verifyContributionCard').style.display = "none";
        document.getElementById('redateContributionCard').style.display = "none";
        document.getElementById('declineContributionCard').style.display = "none";
        document.getElementById('deleteContributionCard').style.display = "none";
        document.getElementById('enableMassCard').style.display = "none";
        document.getElementById('disableMassCard').style.display = "none";
        document.getElementById('enableContributionTypeCard').style.display = "none";
        document.getElementById('disableContributionTypeCard').style.display = "none";
        document.getElementById('deleteKandaCard').style.display = "none";
        document.getElementById('enableJumuiyaCard').style.display = "none";
        document.getElementById('disableJumuiyaCard').style.display = "none";
        document.getElementById('enableUserCard').style.display = "none";
        document.getElementById('disableUserCard').style.display = "none";
        document.getElementById('viewUserInfoCard').style.display = "none";
        document.getElementById('addUserInfoCard').style.display = "none";
    })

    // on continue enabling mass 
    $('#continueEnableMassBtn').on('click', function () {
        enable_selected_mass();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('enableMassCard').style.display = "none";
    })

    // on continue disabling mass 
    $('#continueDisableMassBtn').on('click', function () {
        disable_selected_mass();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('disableMassCard').style.display = "none";
    })

    // on continue enabling contribution Type 
    $('#continueEnableContributionTypeBtn').on('click', function () {
        enable_selected_contribution_type();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('enableContributionTypeCard').style.display = "none";
    })

    // on continue disabling contribution Type 
    $('#continueDisableContributionTypeBtn').on('click', function () {
        disable_selected_contribution_type();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('disableContributionTypeCard').style.display = "none";
    })

    // on continue delete kanda 
    $('#continueDeleteKandaBtn').on('click', function () {
        delete_selected_kanda();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('deleteKandaCard').style.display = "none";
    })

    // on continue enabling Jumuiya 
    $('#continueEnableJumuiyaBtn').on('click', function () {
        enable_selected_jumuiya();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('enableJumuiyaCard').style.display = "none";
    })

    // on continue disabling jumuiya 
    $('#continueDisableJumuiyaBtn').on('click', function () {
        disable_selected_jumuiya();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('disableJumuiyaCard').style.display = "none";
    })

    // on continue enabling User 
    $('#continueEnableUserBtn').on('click', function () {
        enable_selected_user();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('enableUserCard').style.display = "none";
    })

    // on continue disabling User 
    $('#continueDisableUserBtn').on('click', function () {
        disable_selected_user();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('disableUserCard').style.display = "none";
    })

    // on continue remove User privilege 
    $('#continueRemoveUserInfoBtn').on('click', function () {
        if (privilegeLength > 2) {
            remove_selected_user_privilege();
            document.getElementById('myOverlay').style.display = "none";
            document.getElementById('viewUserInfoCard').style.display = "none";
            document.getElementById('viewUserOccupationField').value = "Loading...";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " User has to have atleast 1 privilege!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })

    // on delete Contribution 
    $('#continueDeleteContributionBtn').on('click', function () {
        delete_selected_contribution();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('deleteContributionCard').style.display = "none";
    })

    // on Verify Contribution 
    $('#continueVerifyContributionBtn').on('click', function () {
        verify_selected_contribution();
        document.getElementById('myOverlay').style.display = "none";
        document.getElementById('verifyContributionCard').style.display = "none";
    })

    // on Decline Contribution 
    $('#continueDeclineContributionBtn').on('click', function () {
        if (document.getElementById('insertContributionDeclineReasonTextArea').value != "") {
            decline_selected_contribution();
            document.getElementById('myOverlay').style.display = "none";
            document.getElementById('declineContributionCard').style.display = "none";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " Please enter reason for the decline!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })

    // on Redate Contribution 
    $('#continueRedateContributionBtn').on('click', function () {
        if (document.getElementById('redateContributionReportDate').value != "") {
            redate_selected_contribution();
            document.getElementById('myOverlay').style.display = "none";
            document.getElementById('redateContributionCard').style.display = "none";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " Please select the date from the calendar!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })

    // on add new mass 
    $('#addMassBtn').on('click', function () {
        $(".add-new-data").removeClass("show")
        $(".overlay-bg").removeClass("show")
        add_new_mass_name();
    })

    // on add new contribution type 
    $('#addContributionTypeBtn').on('click', function () {
        $(".add-new-data").removeClass("show")
        $(".overlay-bg").removeClass("show")
        add_new_contribution_type_name();
    })

    // on add new kanda 
    $('#addKandaBtn').on('click', function () {
        $(".add-new-data").removeClass("show")
        $(".overlay-bg").removeClass("show")
        add_new_kanda_name();
    })

    // on add new Jumuiya 
    $('#addJumuiyaBtn').on('click', function () {
        $(".add-new-data").removeClass("show")
        $(".overlay-bg").removeClass("show")
        add_new_jumuiya_name();
    })

    // on edit existing Jumuiya 
    $('#editJumuiyaBtn').on('click', function () {
        $(".add-new-data").removeClass("show")
        $(".overlay-bg").removeClass("show")
        edit_jumuiya_info();
    })

    // on add new user 
    $('#addUserBtn').on('click', function () {
        add_new_user_name();
    })

    // on edit existing user 
    $('#editUserBtn').on('click', function () {
        $(".add-new-data").removeClass("show")
        $(".overlay-bg").removeClass("show")
        edit_user_info();
    })

    
    // on request of general Contribution report weekly 
    $('#viewGeneralReportBtn').on('click', function () {
        $(".add-new-data").removeClass("show")
        $(".overlay-bg").removeClass("show")
        document.getElementById('myOverlay').style.display = "block";
        document.getElementById('generalReportDateContributionCard').style.display = "block";
    })

    // on VIEW GENERAL REPORT Contribution 
    $('#continueGeneralReportContributionBtn').on('click', function () {
        if (document.getElementById('generalReportContributionDate').value != "") {
            general_report_selected_week();
            document.getElementById('myOverlay').style.display = "none";
            document.getElementById('generalReportDateContributionCard').style.display = "none";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " Please select the date from the calendar!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })

    // open Contribution Report page
    $('#reportContributionBtn').on('click', function () {
        get_report_contribution_type_list();
        // get_contribution_type_list();
        get_report_mass_list();
        $("#reportContributionSideBar").addClass("show")
        $(".overlay-bg").addClass("show")
    })

    // Close sidebar
    $(".hide-data-sidebar, .cancel-data-btn").on("click", function() {
        $(".add-new-data").removeClass("show")
        $(".overlay-bg").removeClass("show")
        $('#insertFiftyCoinCountField').val("");
        $('#insertHundredCoinCountField').val("");
        $('#insertTwoHundredCoinCountField').val("");
        $('#insertFiveHundredCoinCountField').val("");
        $('#insertOneThousandCountField').val("");
        $('#insertTwoThousandCountField').val("");
        $('#insertFiveThousandCountField').val("");
        $('#insertTenThousandCountField').val("");
        $('#insertTotalCashCountField').val("");
        $('#insertMassNameField').val("");
        $('#insertContributionTypeNameField').val("");
        $('#insertNewKandaIdField').val("");
        $('#insertNewKandaTitleField').val("");
        $('#insertNewKandaNameField').val("");
        $('#insertNewJumuiyaIdField').val("");
        $('#insertNewJumuiyaTitleField').val("");
        $('#insertNewJumuiyaNameField').val("");
        $('#editJumuiyaIdField').val("");
        $('#editJumuiyaTitleField').val("");
        $('#editJumuiyaNameField').val("");
        $('#insertNewUserIdField').val("");
        $('#insertNewUserFirstNameField').val("");
        $('#insertNewUserLastNameField').val("");
        $('#editUserIdField').val("");
        $('#editUserFirstNameField').val("");
        $('#editUserLastNameField').val("");

        document.getElementById("insertTotalCashCountField").disabled = false;
    })

    // Scrollbar
    if ($(".data-items").length > 0) {
        new PerfectScrollbar(".data-items", { wheelPropagation: false })
    }

    // Scrollbar
    if ($(".myData").length > 0) {
        new PerfectScrollbar(".myData", { wheelPropagation: false })
    }

    // On enabling mass
    // $(document).on('click', '.action-enable-mass', function(event) {
    //     event.preventDefault();
    //     var table_row = $(this).closest('tr');

    //     var selectedMassStatus = table_row.attr('row_Status');

    //     if (selectedMassStatus == 1) {
    //         selectedMassId = table_row.attr('row_Id');
    //         document.getElementById('myOverlay').style.display = "block";
    //         document.getElementById('enableMassCard').style.display = "block";
    //     }
    //     else {
    //         Swal.fire({
    //             title: "Error!",
    //             text: " This Mass is already enabled!",
    //             type: "error",
    //             confirmButtonClass: 'btn btn-primary',
    //             buttonsStyling: false,
    //         });
    //     }
    // })  

    $(document).on('click', '.action-enable-mass', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        var selectedMassStatus = table_row.attr('row_Status');

        if (selectedMassStatus == 1) {
            
            selectedMassId = table_row.attr('row_Id');
            document.getElementById('matumiziInput').style.display = "block"
            document.getElementById('myOverlay').style.display = "block";
            document.getElementById('enableMassCard').style.display = "block";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This Request is inactive!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })  

    // On disabling mass
    $(document).on('click', '.action-disable-mass', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        var selectedMassStatus = table_row.attr('row_Status');

        if (selectedMassStatus == 0) {
            selectedMassId = table_row.attr('row_Id');
            document.getElementById('myOverlay').style.display = "block";
            document.getElementById('disableMassCard').style.display = "block";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This Mass is already disabled!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })

    // On enabling contribution type
    $(document).on('click', '.action-enable-contribution-type', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        var selectedcontributionTypeStatus = table_row.attr('row_Status');

        if (selectedcontributionTypeStatus == 1) {
            selectedcontributionTypeId = table_row.attr('row_Id');
            document.getElementById('myOverlay').style.display = "block";
            document.getElementById('enableContributionTypeCard').style.display = "block";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This Contribution Type is already enabled!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })  

    // On disabling contribution type
    $(document).on('click', '.action-disable-contribution-type', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        var selectedcontributionTypeStatus = table_row.attr('row_Status');

        if (selectedcontributionTypeStatus == 0) {
            selectedcontributionTypeId = table_row.attr('row_Id');
            document.getElementById('myOverlay').style.display = "block";
            document.getElementById('disableContributionTypeCard').style.display = "block";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This Contribution Type is already disabled!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })

    // On edit jumuiya
    $(document).on('click', '.action-edit-jumuiya', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        var selectedJumuiyaId = table_row.attr('row_Id');
        selectedJumuiyaKandaId = table_row.attr('row_kandaId');
        selectedJumuiyaLastName = table_row.attr('row_jumuiyaLastName');
        selectedJumuiyaFirstName = table_row.attr('row_jumuiyaFirstName');
        var selectedJumuiyaStatus = table_row.attr('row_Status');

        if (selectedJumuiyaStatus == 0) {
            $('#editJumuiyaIdField').val(selectedJumuiyaId);
            $('#editJumuiyaTitleField').val(selectedJumuiyaFirstName);
            $('#editJumuiyaNameField').val(selectedJumuiyaLastName);
            get_edit_jumuiya_kanda_list();
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This Jumuiya is disabled!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })

    // On enabling jumuiya
    $(document).on('click', '.action-enable-jumuiya', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        var selectedJumuiyaStatus = table_row.attr('row_Status');

        if (selectedJumuiyaStatus == 1) {
            selectedJumuiyaId = table_row.attr('row_Id');
            document.getElementById('myOverlay').style.display = "block";
            document.getElementById('enableJumuiyaCard').style.display = "block";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This Jumuiya is already enabled!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })  

    // On disabling jumuiya
    $(document).on('click', '.action-disable-jumuiya', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        var selectedJumuiyaStatus = table_row.attr('row_Status');

        if (selectedJumuiyaStatus == 0) {
            selectedJumuiyaId = table_row.attr('row_Id');
            document.getElementById('myOverlay').style.display = "block";
            document.getElementById('disableJumuiyaCard').style.display = "block";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This Jumuiya is already disabled!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })

    // On edit user
    $(document).on('click', '.action-edit-user', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        selectedUserId = table_row.attr('row_Id');
        selectedUserJumuiyaId = table_row.attr('row_jumuiyaId');
        selectedUserLastName = table_row.attr('row_userLastName');
        selectedUserFirstName = table_row.attr('row_userFirstName');
        var selectedUserStatus = table_row.attr('row_Status');

        if (selectedUserStatus == 0) {
            $('#editUserIdField').val(selectedUserId);
            $('#editUserFirstNameField').val(selectedUserFirstName);
            $('#editUserLastNameField').val(selectedUserLastName);
            get_edit_user_jumuiya_list();
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This user is disabled!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })

    // On enabling user
    $(document).on('click', '.action-enable-user', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        var selectedUserStatus = table_row.attr('row_Status');

        if (selectedUserStatus == 1) {
            selectedUserId = table_row.attr('row_Id');
            document.getElementById('myOverlay').style.display = "block";
            document.getElementById('enableUserCard').style.display = "block";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This User is already enabled!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })  

    // On disabling user
    $(document).on('click', '.action-disable-user', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        var selectedUserStatus = table_row.attr('row_Status');

        if (selectedUserStatus == 0) {
            selectedUserId = table_row.attr('row_Id');
            document.getElementById('myOverlay').style.display = "block";
            document.getElementById('disableUserCard').style.display = "block";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This User is already disabled!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })

    // On Delete kanda
    $(document).on('click', '.action-delete-kanda', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        selectedKandaId = table_row.attr('row_Id');
        document.getElementById('myOverlay').style.display = "block";
        document.getElementById('deleteKandaCard').style.display = "block";
    })

    // on view User Privileges and Occupations
    $(document).on('click', '.userData', function(event) {
        event.preventDefault();

        var table_row = $(this).closest('tr');

        var selectedUserStatus = table_row.attr('row_Status');

        if (selectedUserStatus == 0) {
            document.getElementById('viewUserOccupationField').value = "Loading...";
            selectedUserId = table_row.attr('row_id');
            get_view_privilege_list();
            document.getElementById('myOverlay').style.display = "block";
            document.getElementById('viewUserInfoCard').style.display = "block";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " This user is disabled!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
    })


    // On Verify senders contribution
    $(document).on('click', '.action-verify', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        contributionId = table_row.attr('row_Id');
        document.getElementById('myOverlay').style.display = "block";
        document.getElementById('verifyContributionCard').style.display = "block";
    })  

    // On Redate senders contribution
    $(document).on('click', '.action-redate', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        contributionId = table_row.attr('row_Id');
        document.getElementById('myOverlay').style.display = "block";
        document.getElementById('redateContributionCard').style.display = "block";
    })

    // On Decline senders contribution
    $(document).on('click', '.action-deny', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');

        contributionId = table_row.attr('row_Id');
        document.getElementById('myOverlay').style.display = "block";
        document.getElementById('declineContributionCard').style.display = "block";
    })

    //On Delete senders contribution
    $(document).on('click', '.action-delete', function(event) {
        event.preventDefault();
        var table_row = $(this).closest('tr');
        var selectedUnverifiedContributionStatus = table_row.attr('row_aStatus');

        if (selectedUnverifiedContributionStatus != 0) {

            contributionId = table_row.attr('row_Id');
            document.getElementById('myOverlay').style.display = "block";
            document.getElementById('deleteContributionCard').style.display = "block";
        }
        else {
            Swal.fire({
                title: "Error!",
                text: " You cannot delete this info!",
                type: "error",
                confirmButtonClass: 'btn btn-primary',
                buttonsStyling: false,
            });
        }
        
    //  $(this).closest('td').parent('tr').fadeOut();
    })
});

// prevent update user personal Data form from reloading after submission
$("#loggedInUserPersonalDetailsUpdateForm").submit(function(e) {
    e.preventDefault();
    edit_user_personal_details();
});

// Edit User Personal Data Function
function edit_user_personal_details() {
    var userFname = document.getElementById('account-firstname').value;
    var userLname = document.getElementById('account-lastname').value;
    var tmr = Math.random();


    var input = [loggedinUserId, userFname, userLname, tmr];
    var data = JSON.stringify(input);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                document.getElementById('loggedInUserFullName').innerHTML = userFname + " " + userLname;
                Swal.fire({
                    title: "Congratulations!",
                    text: "Staff Info has been Updated successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " Staff is Not Found!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/edit_user_personal_details.php?par=" + data, true);
    xmlhttp.send();
}


// Edit User Password Function
function edit_user_password() {
    var userOldPassword = document.getElementById('account-old-password').value;
    var userNewPassword = document.getElementById('account-new-password').value;
    var tmr = Math.random();

    var input = [loggedinUserId, userOldPassword, userNewPassword, tmr];
    var data = JSON.stringify(input);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            alert(responseData[0]);
            if (responseData[0] == 0) {
                document.getElementById('account-old-password').value = "";
                document.getElementById('account-new-password').value = "";
                document.getElementById('account-retype-new-password').value = "";
                Swal.fire({
                    title: "Congratulations!",
                    text: "Your Password has been Updated successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " Old Password is not correct!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/edit_user_password.php?par=" + data, true);
    xmlhttp.send();
}

// prevent update user Password form from reloading after submission
$("#loggedInUserPasswordUpdateForm").submit(function(e) {
    e.preventDefault();
    edit_user_password();
});


//save UserId for the person who has logged in for the purpose of getting his details
function save_login_user_id() {
    var loginUserId = document.getElementById('userName').value;
    localStorage.setItem("localLoginUserId", loginUserId);
}

// function for executiing methods that has o be executedd when the page is been reloaded or loaded 
//for the first time after user has successfully logged in to the system
function on_page_load() {
    get_logged_in_user_data();
}

// function for getting the information of user that has logged in to the system
function get_logged_in_user_data() {
    var loginUserId = localStorage.getItem("localLoginUserId");
    var tmr = Math.random();

    if (loginUserId != "") {
        var inputs = [loginUserId, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var returnedData = JSON.parse(this.responseText);
                var status = returnedData[0];
                if (status == 0) {
                    loggedinUserId = returnedData[1].userId;
                    loggedinUserUId = returnedData[1].userUid;
                    loggedinUserOccupationName = returnedData[1].occupationName;
                    loggedinUserPriviledge = "PAROKIA";
                    var loggedinUserFirstName = returnedData[1].userFirstName;
                    var loggedinUserLastName = returnedData[1].userLastName;
                    document.getElementById('loggedInUserFullName').innerHTML = loggedinUserFirstName + " " + loggedinUserLastName;
                    // get_home_page_data();
                }
            }
        };
        xmlhttp.open("GET", "database/get_logged_in_user_data.php?par=" + data, true);
        xmlhttp.send();
    }
}


// close all content pages and open the selected one
function open_content_page(contentPageId) {
    var i;
    var x = document.getElementsByClassName("contentPages");
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById(contentPageId).style.display = "block";
}

// function for initiallizing show_unverified_table method
function get_contribution_table_initializer() {
    var contributionDataListView = $("#contributionTable").DataTable({
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
            text: "<i class='fas fa-plus'></i> Add New",
            action: function() {
                $(this).removeClass("btn-secondary");
                get_contribution_type_list();
                get_jumuiya_list();
                get_mass_list();
                $("#checkContributionSideBar").addClass("show")
                $(".overlay-bg").addClass("show")
            },
            className: "btn-outline-primary"
          }
        ],
        initComplete: function(settings, json) {
          $(".dt-buttons .btn").removeClass("btn-secondary");
        }
    });
}

// function for initiallizing show_mass_table method
function get_mass_table_initializer() {
    var massDataListView = $("#massNamesTable").DataTable({
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
            text: "<i class='fas fa-plus'></i> Add New",
            action: function() {
                $(this).removeClass("btn-secondary");
                $("#addNewMassSideBar").addClass("show")
                $(".overlay-bg").addClass("show")
            },
            className: "btn-outline-primary"
          }
        ],
        initComplete: function(settings, json) {
          $(".dt-buttons .btn").removeClass("btn-secondary");
        }
    });
}

function get_contribution_type_table_initializer() {
    var contributionTypesDataListView = $("#contributionTypeNamesTable").DataTable({
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
            text: "<i class='fas fa-plus'></i> Add New",
            action: function() {
                $(this).removeClass("btn-secondary");
                $("#addNewContributionTypeSideBar").addClass("show")
                $(".overlay-bg").addClass("show")
            },
            className: "btn-outline-primary"
          }
        ],
        initComplete: function(settings, json) {
          $(".dt-buttons .btn").removeClass("btn-secondary");
        }
    });
}

function get_kanda_table_initializer() {
    var kandaDataListView = $("#kandaNamesTable").DataTable({
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
            text: "<i class='fas fa-plus'></i> Add New",
            action: function() {
                $(this).removeClass("btn-secondary");
                $("#addNewKandaSideBar").addClass("show")
                $(".overlay-bg").addClass("show")
            },
            className: "btn-outline-primary"
          }
        ],
        initComplete: function(settings, json) {
          $(".dt-buttons .btn").removeClass("btn-secondary");
        }
    });
}

function get_jumuiya_table_initializer() {
    var jumuiyaDataListView = $("#jumuiyaNamesTable").DataTable({
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
            text: "<i class='fas fa-plus'></i> Add New",
            action: function() {
                $(this).removeClass("btn-secondary");
                get_kanda_list();
                $("#addNewJumuiyaSideBar").addClass("show")
                $(".overlay-bg").addClass("show")
            },
            className: "btn-outline-primary"
          }
        ],
        initComplete: function(settings, json) {
          $(".dt-buttons .btn").removeClass("btn-secondary");
        }
    });
}

function get_user_table_initializer() {
    var userDataListView = $("#userNamesTable").DataTable({
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
            text: "<i class='fas fa-plus'></i> Add New",
            action: function() {
                $(this).removeClass("btn-secondary");
                get_user_jumuiya_list();
                get_user_privilege_list();
                $("#addNewUserSideBar").addClass("show")
                $(".overlay-bg").addClass("show")
            },
            className: "btn-outline-primary"
          }
        ],
        initComplete: function(settings, json) {
          $(".dt-buttons .btn").removeClass("btn-secondary");
        }
    });
}

// function for initiallizing show_pending_table method
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

// construct and display dynamic unverified contributions table Function
function show_unverified_table() {
    var tmr = Math.random();

    var inputs = [loggedinUserId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            var tableOfUnverified;

            tableOfUnverified = '<table class="table data-list-view" id="contributionTable">';
            tableOfUnverified += '<thead><tr>';
            tableOfUnverified += '<th>TYPE</th><th>MASS</th><th>JUMUIYA</th><th>AMOUNT</th><th>DESCRIPTION</th><th>REQUEST DATE</th><th>RESPONSE DATE</th><th>STATUS</th><th>ACTION</th>';
            tableOfUnverified += '</tr></thead>';
            tableOfUnverified += '<tbody>';

            if (status == 0) {
                var i;
                for (i = 1; i < returnedData.length; i++){

                    var row_Id = returnedData[i].cashContributionUid;
                    var row_cType = returnedData[i].cashContributionTypeName;
                    var row_jumuiyaName =  returnedData[i].jumuiyaFirstName + " " + returnedData[i].jumuiyaLastName;
                    var row_massName = returnedData[i].massName;
                    var row_cAmount = returnedData[i].totalCash;
                    var row_cDescription = returnedData[i].cashContributionDescription;
                    var row_dRequested = returnedData[i].dateRequested;
                    var row_dResponded = returnedData[i].dateResponded;
                    if (row_dResponded == null) {
                        row_dResponded = "Not Yet";
                    }
                    var row_Status = returnedData[i].cashContributionStatus;



                    tableOfUnverified += '<tr class="myTableRow" row_Id="'+row_Id+'" row_cType="'+row_cType+'" row_cAmount="'+row_cAmount+'" row_dRequested="'+row_dRequested+'" row_dResponded="'+row_dResponded+'" row_Status="'+row_Status+'">';
                    tableOfUnverified += '<td class="cashData">' + row_cType + '</td>';
                    tableOfUnverified += '<td class="cashData">' + row_massName + '</td>';
                    tableOfUnverified += '<td class="cashData">' + row_jumuiyaName + '</td>';
                    tableOfUnverified += '<td class="cashData">' + row_cAmount + '</td>';
                    tableOfUnverified += '<td class="cashData">' + row_cDescription + '</td>';
                    tableOfUnverified += '<td class="cashData">' + row_dRequested + '</td>';
                    tableOfUnverified += '<td class="cashData">' + row_dResponded + '</td>';


                    if (row_Status == 0) {
                        tableOfUnverified += '<td class="cashData"><div class="chip chip-success"><div class="chip-body"><div class="chip-text">Received</div></div></div></td>';
                    }
                    else if (row_Status == 1) {
                        tableOfUnverified += '<td class="cashData"><div class="chip chip-warning"><div class="chip-body"><div class="chip-text">Pending</div></div></div></td>';
                    }
                    else if (row_Status == 2) {
                        tableOfUnverified += '<td class="cashData"><div class="chip chip-danger"><div class="chip-body"><div class="chip-text">Rejected</div></div></div></td>';
                    }

                    tableOfUnverified += '<td class="cashAction"><span class="action-delete" title="delete" row_Id="'+row_Id+'"><i class="far fa-trash-alt"></i></span></td>';
                  
                    tableOfUnverified += '</tr>';
                }
            }
            else {
            }


            tableOfUnverified += '</tbody>';
            tableOfUnverified += '</table>';

            document.getElementById('checkContributionTable').innerHTML = tableOfUnverified;

            get_contribution_table_initializer();
        }  
    };
    xmlhttp.open("GET", "database/select_unverified_contribution_table.php?par=" + data, true);
    xmlhttp.send();
}

function add_new_mass_name() {
    var newMassName = document.getElementById('insertMassNameField').value;
    var tmr = Math.random();

    if (newMassName == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the Mass name!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else {
        var inputs = [newMassName, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                var responseData = JSON.parse(this.responseText);
                if (responseData[0] == 0) {
                    show_mass_table();
                    Swal.fire({
                        title: "Congratulations!",
                        text: "Mass has been Added Successfully!",
                        type: "success",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
                else if (responseData[0] == 2) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/add_new_mass_name.php?par=" + data, true);
        xmlhttp.send();
    }
}

function add_new_contribution_type_name() {
    var newContributionTypeName = document.getElementById('insertContributionTypeNameField').value;
    var tmr = Math.random();

    if (newContributionTypeName == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the Contribution Type name!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else {
        var inputs = [newContributionTypeName, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                var responseData = JSON.parse(this.responseText);
                if (responseData[0] == 0) {
                    show_contribution_types_table();
                    Swal.fire({
                        title: "Congratulations!",
                        text: "Contribution Type has been Added Successfully!",
                        type: "success",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
                else if (responseData[0] == 2) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/add_new_contribution_type_name.php?par=" + data, true);
        xmlhttp.send();
    }
}

function add_new_kanda_name() {
    var newKandaId = document.getElementById('insertNewKandaIdField').value;
    var newKandaTitle = document.getElementById('insertNewKandaTitleField').value;
    var newKandaName = document.getElementById('insertNewKandaNameField').value;
    var tmr = Math.random();

    if (newKandaId == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the Kanda ID!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (newKandaTitle == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the Kanda Title!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (newKandaName == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the Kanda Name!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    } 
    else {
        var inputs = [newKandaId, newKandaTitle, newKandaName, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                var responseData = JSON.parse(this.responseText);
                if (responseData[0] == 0) {
                    show_kanda_table();
                    Swal.fire({
                        title: "Congratulations!",
                        text: "Kanda has been Added Successfully!",
                        type: "success",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
                else if (responseData[0] == 2) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/add_new_kanda_name.php?par=" + data, true);
        xmlhttp.send();
    }
}

function add_new_jumuiya_name() {
    var newJumuiyaId = document.getElementById('insertNewJumuiyaIdField').value;
    var newJumuiyaTitle = document.getElementById('insertNewJumuiyaTitleField').value;
    var newJumuiyaName = document.getElementById('insertNewJumuiyaNameField').value;
    var newJumuiyaKandaNameId = document.getElementById('insertNewJumuiyaKandaNameField').value;
    var tmr = Math.random();

    if (newJumuiyaId == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the Jumuiya ID!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (newJumuiyaTitle == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the Jumuiya Title!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (newJumuiyaName == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the Jumuiya Name!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    } 
    else if (newJumuiyaKandaNameId == "NONE") {
        Swal.fire({
            title: "Error!",
            text: " Please select Kanda for the new Jumuiya!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    } 
    else {
        var inputs = [newJumuiyaId, newJumuiyaTitle, newJumuiyaName, newJumuiyaKandaNameId, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                var responseData = JSON.parse(this.responseText);
                if (responseData[0] == 0) {
                    show_jumuiya_table();
                    Swal.fire({
                        title: "Congratulations!",
                        text: "Jumuiya has been Added Successfully!",
                        type: "success",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
                else if (responseData[0] == 2) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/add_new_jumuiya_name.php?par=" + data, true);
        xmlhttp.send();
    }
}

function edit_jumuiya_info() {
    var editJumuiyaId = document.getElementById('editJumuiyaIdField').value;
    var editJumuiyaTitle = document.getElementById('editJumuiyaTitleField').value;
    var editJumuiyaName = document.getElementById('editJumuiyaNameField').value;
    var editJumuiyaKandaNameId = document.getElementById('editJumuiyaKandaNameField').value;
    var kandaFull = "Kanda " + editJumuiyaKandaNameId;
    var tmr = Math.random();
    
    if (editJumuiyaTitle == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the Jumuiya Title!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (editJumuiyaName == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the Jumuiya Name!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    } 
    else if (kandaFull == selectedJumuiyaKandaId && editJumuiyaTitle == selectedJumuiyaFirstName && editJumuiyaName == selectedJumuiyaLastName) {
        Swal.fire({
            title: "Error!",
            text: " You have not changed any Jumuiya Info!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    } 
    else {
        var inputs = [editJumuiyaId, editJumuiyaTitle, editJumuiyaName, editJumuiyaKandaNameId, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                var responseData = JSON.parse(this.responseText);
                if (responseData[0] == 0) {
                    show_jumuiya_table();
                    Swal.fire({
                        title: "Congratulations!",
                        text: "Jumuiya has been Edited Successfully!",
                        type: "success",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
                else if (responseData[0] == 2) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/edit_jumuiya_info.php?par=" + data, true);
        xmlhttp.send();
    }
}

function add_new_user_name() {
    var newUserId = document.getElementById('insertNewUserIdField').value;
    var newUserFirstName = document.getElementById('insertNewUserFirstNameField').value;
    var newUserLastName = document.getElementById('insertNewUserLastNameField').value;
    var newUserJumuiyaNameId = document.getElementById('insertNewUserJumuiyaNameField').value;
    var newUserPrivelege = document.getElementById('insertNewUserPrivilegeField').value;
    var newUserOccupation = document.getElementById('insertNewUserOccupationField').value;
    var tmr = Math.random();

    if (newUserId == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the User ID!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (newUserFirstName == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the User First Name!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (newUserLastName == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the User Last Name!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    } 
    else if (newUserJumuiyaNameId == "NONE") {
        Swal.fire({
            title: "Error!",
            text: " Please select Jumuiya for the new User!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    } 
    else if (newUserPrivelege == "privilegeDefaultValue") {
        Swal.fire({
            title: "Error!",
            text: " Please reload page for privilege selections!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (newUserPrivelege == "NONE") {
        Swal.fire({
            title: "Error!",
            text: " Please set Privilege for the new User!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (newUserOccupation == "NONE") {
        Swal.fire({
            title: "Error!",
            text: " Please set Occupation for the new User!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (newUserOccupation == "defaultValue") {
        Swal.fire({
            title: "Error!",
            text: " Please set Privilege & Occupation for the new User!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else {
        var inputs = [newUserId, newUserFirstName, newUserLastName, newUserJumuiyaNameId, newUserPrivelege, newUserOccupation, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                var responseData = JSON.parse(this.responseText);
                if (responseData[0] == 0) {
                    show_user_table();
                    Swal.fire({
                        title: "Congratulations!",
                        text: "User has been Added Successfully!",
                        type: "success",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                    $(".add-new-data").removeClass("show");
                    $(".overlay-bg").removeClass("show");
                }
                else if (responseData[0] == 2) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/add_new_user_name.php?par=" + data, true);
        xmlhttp.send();
    }
}

function edit_user_info() {
    var editUserId = document.getElementById('editUserIdField').value;
    var editUserFirstName = document.getElementById('editUserFirstNameField').value;
    var editUserLastName = document.getElementById('editUserLastNameField').value;
    var editUserJumuiyaNameId = document.getElementById('editUserJumuiyaNameField').value;
    var tmr = Math.random();
    
    if (editUserFirstName == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the User Name!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (editUserLastName == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter the User Name!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    } 
    else if (editUserJumuiyaNameId == selectedUserJumuiyaId && editUserFirstName == selectedUserFirstName && editUserLastName == selectedUserLastName) {
        Swal.fire({
            title: "Error!",
            text: " You have not changed any User Info!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    } 
    else {
        var inputs = [editUserId, editUserFirstName, editUserLastName, editUserJumuiyaNameId, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                var responseData = JSON.parse(this.responseText);
                if (responseData[0] == 0) {
                    show_user_table();
                    Swal.fire({
                        title: "Congratulations!",
                        text: "User has been Edited Successfully!",
                        type: "success",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
                else if (responseData[0] == 2) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/edit_user_info.php?par=" + data, true);
        xmlhttp.send();
    }
}

// construct and display dynamic MASS table Function
function show_mass_table() {
    var tmr = Math.random();

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            var tableOfMass;

            tableOfMass = '<table class="table data-list-view" id="massNamesTable">';
            tableOfMass += '<thead><tr>';
            tableOfMass += '<th>SNo</th><th>MASS NAME</th><th>STATUS</th><th>ACTION</th>';
            tableOfMass += '</tr></thead>';
            tableOfMass += '<tbody>';

            if (status == 0) {
                var i;
                for (i = 1; i < returnedData.length; i++){

                    var row_Id = returnedData[i].massUid;
                    var row_massName = returnedData[i].massName;
                    var row_Status = returnedData[i].massNameStatus;



                    tableOfMass += '<tr class="myTableRow" row_Id="'+row_Id+'" row_massName="'+row_massName+'" row_Status="'+row_Status+'">';

                    tableOfMass += '<td class="massData">' + i + '</td>';
                    tableOfMass += '<td class="massData">' + row_massName + '</td>';


                    if (row_Status == 0) {
                        tableOfMass += '<td class="massData"><div class="chip chip-success"><div class="chip-body"><div class="chip-text">Active</div></div></div></td>';
                    }
                    else if (row_Status == 1) {
                        tableOfMass += '<td class="massData"><div class="chip chip-danger"><div class="chip-body"><div class="chip-text">Inactive</div></div></div></td>';
                    }

                    tableOfMass += '<td class="massAction"><span class="action-enable-mass" title="enable"><i class="feather icon-eye"></i></span><span class="action-disable-mass" title="disable"><i class="feather icon-eye-off"></i></span></td>';
                  
                    tableOfMass += '</tr>';
                }
            }
            else {
            }


            tableOfMass += '</tbody>';
            tableOfMass += '</table>';

            document.getElementById('massTable').innerHTML = tableOfMass;

            get_mass_table_initializer();
        }  
    };
    xmlhttp.open("GET", "database/select_mass_table.php?par=" + data, true);
    xmlhttp.send();
}

function show_contribution_types_table() {
    var tmr = Math.random();

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            var tableOfContributions;

            tableOfContributions = '<table class="table data-list-view" id="contributionTypeNamesTable">';
            tableOfContributions += '<thead><tr>';
            tableOfContributions += '<th>SNo</th><th>CONTRIBUTION TYPE</th><th>STATUS</th><th>ACTION</th>';
            tableOfContributions += '</tr></thead>';
            tableOfContributions += '<tbody>';

            if (status == 0) {
                var i;
                for (i = 1; i < returnedData.length; i++){

                    var row_Id = returnedData[i].cashContributionTypeUid;
                    var row_ContributionType = returnedData[i].cashContributionTypeName;
                    var row_Status = returnedData[i].cashContributionTypeStatus;



                    tableOfContributions += '<tr class="myTableRow" row_Id="'+row_Id+'" row_ContributionType="'+row_ContributionType+'" row_Status="'+row_Status+'">';

                    tableOfContributions += '<td class="contributionTypeData">' + i + '</td>';
                    tableOfContributions += '<td class="contributionTypeData">' + row_ContributionType + '</td>';


                    if (row_Status == 0) {
                        tableOfContributions += '<td class="contributionTypeData"><div class="chip chip-success"><div class="chip-body"><div class="chip-text">Active</div></div></div></td>';
                    }
                    else if (row_Status == 1) {
                        tableOfContributions += '<td class="contributionTypeData"><div class="chip chip-danger"><div class="chip-body"><div class="chip-text">Inactive</div></div></div></td>';
                    }

                    tableOfContributions += '<td class="contributionTypeDataAction"><span class="action-enable-contribution-type" title="enable"><i class="feather icon-eye"></i></span><span class="action-disable-contribution-type" title="disable"><i class="feather icon-eye-off"></i></span></td>';
                  
                    tableOfContributions += '</tr>';
                }
            }
            else {
            }


            tableOfContributions += '</tbody>';
            tableOfContributions += '</table>';

            document.getElementById('contributionTypesTable').innerHTML = tableOfContributions;

            get_contribution_type_table_initializer();
        }  
    };
    xmlhttp.open("GET", "database/select_contribution_type_table.php?par=" + data, true);
    xmlhttp.send();
}

function show_kanda_table() {
    var tmr = Math.random();

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            var tableOfKanda;

            tableOfKanda = '<table class="table data-list-view" id="kandaNamesTable">';
            tableOfKanda += '<thead><tr>';
            tableOfKanda += '<th>KANDA ID</th><th>KANDA NAME</th><th>ACTION</th>';
            tableOfKanda += '</tr></thead>';
            tableOfKanda += '<tbody>';

            if (status == 0) {
                var i;
                for (i = 1; i < returnedData.length; i++){

                    var row_Id = returnedData[i].kandaId;
                    var row_kandaName = returnedData[i].kandaFirstName + " " + returnedData[i].kandaLastName;



                    tableOfKanda += '<tr class="myTableRow" row_Id="'+row_Id+'" row_kandaName="'+row_kandaName+'">';

                    tableOfKanda += '<td class="kandaData">' + row_Id + '</td>';
                    tableOfKanda += '<td class="kandaData">' + row_kandaName + '</td>';


                    tableOfKanda += '<td class="kandaAction"><span class="action-delete-kanda" title="delete"><i class="far fa-trash-alt"></i></span></td>';
                  
                    tableOfKanda += '</tr>';
                }
            }
            else {
            }


            tableOfKanda += '</tbody>';
            tableOfKanda += '</table>';

            document.getElementById('kandaTable').innerHTML = tableOfKanda;

            get_kanda_table_initializer();
        }  
    };
    xmlhttp.open("GET", "database/select_kanda_table.php?par=" + data, true);
    xmlhttp.send();
}

function show_jumuiya_table() {
    var tmr = Math.random();

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            var tableOfJumuiya;

            tableOfJumuiya = '<table class="table data-list-view" id="jumuiyaNamesTable">';
            tableOfJumuiya += '<thead><tr>';
            tableOfJumuiya += '<th>JUMUIYA NAME</th><th>KANDA</th><th>JUMUIYA STATUS</th><th>ACTION</th>';
            tableOfJumuiya += '</tr></thead>';
            tableOfJumuiya += '<tbody>';

            if (status == 0) {
                var i;
                for (i = 1; i < returnedData.length; i++){

                    var row_Id = returnedData[i].jumuiyaId;
                    var row_kandaId = "Kanda " + returnedData[i].kandaId;
                    var row_jumuiyaName = returnedData[i].jumuiyaFirstName + " " + returnedData[i].jumuiyaLastName;
                    var row_jumuiyaFirstName = returnedData[i].jumuiyaFirstName;
                    var row_jumuiyaLastName = returnedData[i].jumuiyaLastName;
                    var row_Status = returnedData[i].jumuiyaStatus;



                    tableOfJumuiya += '<tr class="myTableRow" row_Id="'+row_Id+'" row_kandaId="'+row_kandaId+'" row_jumuiyaName="'+row_jumuiyaName+'" row_jumuiyaFirstName="'+row_jumuiyaFirstName+'" row_jumuiyaLastName="'+row_jumuiyaLastName+'" row_Status="'+row_Status+'">';

                    tableOfJumuiya += '<td class="jumuiyaData">' + row_jumuiyaName + '</td>';
                    tableOfJumuiya += '<td class="jumuiyaData">' + row_kandaId + '</td>';

                    if (row_Status == 0) {
                        tableOfJumuiya += '<td class="jumuiyaData"><div class="chip chip-success"><div class="chip-body"><div class="chip-text">Active</div></div></div></td>';
                    }
                    else if (row_Status == 1) {
                        tableOfJumuiya += '<td class="jumuiyaData"><div class="chip chip-danger"><div class="chip-body"><div class="chip-text">Inactive</div></div></div></td>';
                    }


                    tableOfJumuiya += '<td class="jumuiyaAction"><span class="action-edit-jumuiya" title="edit"><i class="far fa-edit"></i></span><span class="action-enable-jumuiya" title="enable"><i class="feather icon-eye"></i></span><span class="action-disable-jumuiya" title="disable"><i class="feather icon-eye-off"></i></span></td>';
                  
                    tableOfJumuiya += '</tr>';
                }
            }
            else {
            }


            tableOfJumuiya += '</tbody>';
            tableOfJumuiya += '</table>';

            document.getElementById('jumuiyaTable').innerHTML = tableOfJumuiya;

            get_jumuiya_table_initializer();
        }  
    };
    xmlhttp.open("GET", "database/select_jumuiya_table.php?par=" + data, true);
    xmlhttp.send();
}

function show_user_table() {
    var tmr = Math.random();

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            var tableOfUser;

            tableOfUser = '<table class="table data-list-view" id="userNamesTable">';
            tableOfUser += '<thead><tr>';
            tableOfUser += '<th>ID</th><th>FULL NAME</th><th>JUMUIYA</th><th>STATUS</th><th>ACTION</th>';
            tableOfUser += '</tr></thead>';
            tableOfUser += '<tbody>';

            if (status == 0) {
                var i;
                for (i = 1; i < returnedData.length; i++){

                    var row_Id = returnedData[i].userId;
                    var row_jumuiyaId = returnedData[i].jumuiyaId;
                    var row_userFirstName = returnedData[i].userFirstName;
                    var row_userLastName = returnedData[i].userLastName;
                    var row_userFullName = row_userFirstName + " " + row_userLastName;
                    var row_Status = returnedData[i].userStatus;



                    tableOfUser += '<tr class="myTableRow" row_Id="'+row_Id+'" row_jumuiyaId="'+row_jumuiyaId+'" row_userFirstName="'+row_userFirstName+'" row_userLastName="'+row_userLastName+'" row_userFullName="'+row_userFullName+'" row_Status="'+row_Status+'">';

                    tableOfUser += '<td class="userData">' + row_Id + '</td>';
                    tableOfUser += '<td class="userData">' + row_userFullName + '</td>';
                    tableOfUser += '<td class="userData">' + row_jumuiyaId + '</td>';

                    if (row_Status == 0) {
                        tableOfUser += '<td class="userData"><div class="chip chip-success"><div class="chip-body"><div class="chip-text">Active</div></div></div></td>';
                    }
                    else if (row_Status == 1) {
                        tableOfUser += '<td class="userData"><div class="chip chip-danger"><div class="chip-body"><div class="chip-text">Inactive</div></div></div></td>';
                    }


                    tableOfUser += '<td class="userAction"><span class="action-edit-user" title="edit"><i class="far fa-edit"></i></span><span class="action-enable-user" title="enable"><i class="feather icon-eye"></i></span><span class="action-disable-user" title="disable"><i class="feather icon-eye-off"></i></span></td>';
                  
                    tableOfUser += '</tr>';
                }
            }
            else {
            }


            tableOfUser += '</tbody>';
            tableOfUser += '</table>';

            document.getElementById('userTable').innerHTML = tableOfUser;

            get_user_table_initializer();
        }  
    };
    xmlhttp.open("GET", "database/select_user_table.php?par=" + data, true);
    xmlhttp.send();
}

// construct and display dynamic pending contributions table Function
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
            tableOfPending += '<th>SENDER</th><th>CONTRIBUTOR</th><th>MASS</th><th>TYPE</th><th>AMOUNT</th><th>REQUEST DATE</th><th>ACTION</th>';
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

//function calculate cash values
function calculate_cash() {
    var fiftyCoins = document.getElementById('insertFiftyCoinCountField').value;
    var hundredCoins = document.getElementById('insertHundredCoinCountField').value;
    var twoHundredCoins = document.getElementById('insertTwoHundredCoinCountField').value;
    var fiveHundredCoins = document.getElementById('insertFiveHundredCoinCountField').value;
    var oneThousands = document.getElementById('insertOneThousandCountField').value;
    var twoThousands = document.getElementById('insertTwoThousandCountField').value;
    var fiveThousands = document.getElementById('insertFiveThousandCountField').value;
    var tenThousands = document.getElementById('insertTenThousandCountField').value;

    if (fiftyCoins == "" && hundredCoins == "" && twoHundredCoins == "" && fiveHundredCoins == "" && oneThousands == "" && twoThousands == "" && fiveThousands == "" && tenThousands == "") {
        document.getElementById("insertTotalCashCountField").disabled = false;
        document.getElementById('insertTotalCashCountField').value = "";
    }
    else {
        document.getElementById("insertTotalCashCountField").disabled = true;


        var total = (fiftyCoins * 50) + (hundredCoins * 100) + (twoHundredCoins * 200) + (fiveHundredCoins * 500) + (oneThousands * 1000) + (twoThousands * 2000) + (fiveThousands * 5000) + (tenThousands * 10000);

        document.getElementById('insertTotalCashCountField').value = total;
    }
}

// function for getting list of contribution type on Report page
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

// function for getting list of contribution type on Add and Check contribution page
function get_contribution_type_list() {
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
                list = '<select class="form-control" id="listContributionType">';

                var choose = 0;
                list += '<option value="' + choose + '">';
                // list += 0;
                // list += '>';
                list += "Choose Contribution Type";
                list += '</option>';

                for (var i = 1; i < returnedData.length; i++) {
                    list += '<option value="' + returnedData[i].cashContributionTypeName + '">';
                    // list += returnedData[i].cashContributionTypeName;
                    // list += '>';
                    list += returnedData[i].cashContributionTypeName;
                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('cashContributionType').innerHTML = list;
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of contribution type!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_contribution_type_list.php?par=" + data, true);
    xmlhttp.send();
}

// function for getting list of kanda on add new jumiya side bar page
function get_kanda_list() {
    var tmr = Math.random();

    var list;

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                list = '<select class="form-control" id="insertNewJumuiyaKandaNameField">';
                var notApplicable = "NONE";

                list += '<option value="' + notApplicable + '">';

                list += "Select Kanda for the new Jumuiya";
                list += '</option>';

                for (var i = 1; i < returnedData.length; i++) {
                    var kandaFullName = returnedData[i].kandaFirstName + " " + returnedData[i].kandaLastName;

                    list += '<option value="' + returnedData[i].kandaId + '">';

                    list += kandaFullName;

                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('addJumuiyaKandaNameDiv').innerHTML = list;

                $("#addNewJumuiyaSideBar").addClass("show");
                $(".overlay-bg").addClass("show");
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of kanda!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_kanda_list.php?par=" + data, true);
    xmlhttp.send();
}

// function for getting list of kanda on edit jumiya side bar page
function get_edit_jumuiya_kanda_list() {
    var tmr = Math.random();

    var list;

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                list = '<select class="form-control" id="editJumuiyaKandaNameField">';

                for (var i = 1; i < returnedData.length; i++) {
                    var kandaFullName = returnedData[i].kandaFirstName + " " + returnedData[i].kandaLastName;
                    var newKandaId = "Kanda " + returnedData[i].kandaId;

                    list += '<option value="' + returnedData[i].kandaId + '"';

                    if (selectedJumuiyaKandaId == newKandaId) {
                        list += ' selected';
                    }

                    list += '>';

                    list += kandaFullName;

                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('editJumuiyaKandaNameDiv').innerHTML = list;

                $("#editJumuiyaSideBar").addClass("show");
                $(".overlay-bg").addClass("show");
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of kanda!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_kanda_list.php?par=" + data, true);
    xmlhttp.send();
}

// function for getting list of jumuiya on edit user side bar page
function get_edit_user_jumuiya_list() {
    var tmr = Math.random();

    var list;

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                list = '<select class="form-control" id="editUserJumuiyaNameField">';

                for (var i = 1; i < returnedData.length; i++) {
                    list += '<option value="' + returnedData[i].jumuiyaId + '"';

                    if (selectedUserJumuiyaId == returnedData[i].jumuiyaId) {
                        list += ' selected';
                    }

                    list += '>';

                    list += returnedData[i].jumuiyaFirstName + ' ' + returnedData[i].jumuiyaLastName;
                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('editUserJumuiyaNameDiv').innerHTML = list;
                
                $("#editUserSideBar").addClass("show");
                $(".overlay-bg").addClass("show");
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of jumuiya!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_jumuiya_list.php?par=" + data, true);
    xmlhttp.send();
}

// function for getting list of mass on Report page
function get_report_mass_list() {
    var tmr = Math.random();

    var list;

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                list = '<select class="form-control" id="reportListMass">';
                var notApplicable = "N/A";
                list += '<option value="' + notApplicable + '">';
                // list += "N/A";
                // list += '>';
                list += "NONE";
                list += '</option>';

                for (var i = 1; i < returnedData.length; i++) {
                    list += '<option value="' + returnedData[i].massName + '">';
                    // list += returnedData[i].massName;
                    // list += '>';
                    if (returnedData[i].massName == "CHILDREN MASS") {
                        list += "CHILDREN'S MASS";
                    }
                    else{
                        list += returnedData[i].massName;
                    }
                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('massNameReport').innerHTML = list;
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of mass!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_mass_list.php?par=" + data, true);
    xmlhttp.send();
}

// function for getting list of mass on Add and Check contribution page
function get_mass_list() {
    var tmr = Math.random();

    var list;

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                list = '<select class="form-control" id="listMass">';

                var notApplicable = "N/A";
                list += '<option value="' + notApplicable + '">';
                // list += "N/A";
                // list += '>';
                list += "NONE";
                list += '</option>';

                for (var i = 1; i < returnedData.length; i++) {
                    list += '<option value="' + returnedData[i].massName + '">';
                    // list += returnedData[i].massName;
                    // list += '>';
                    if (returnedData[i].massName == "CHILDREN MASS") {
                        list += "CHILDREN'S MASS";
                    }
                    else{
                        list += returnedData[i].massName;
                    }
                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('massName').innerHTML = list;
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of mass!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_mass_list.php?par=" + data, true);
    xmlhttp.send();
}

function get_contribution_report_table_row_grouping_initiallizer() {
    var groupingTable = $('.row-grouping').DataTable({
        "columnDefs": [{
            "visible": false,
            "targets": 2
        }],
        "order": [
            [2, 'asc']
        ],
        "displayLength": 10,
        "drawCallback": function(settings) {
            var api = this.api();
            var rows = api.rows({
                page: 'current'
            }).nodes();
            var last = null;

            api.column(2, {
                page: 'current'
            }).data().each(function(group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="group font-weight-bolder" style="font-size: 30px;"><td colspan="5">' + group + '</td></tr>'
                    );

                    last = group;
                }
            });
        }
    });

    $('.row-grouping tbody').on('click', 'tr.group', function() {
        var currentOrder = groupingTable.order()[0];
        if (currentOrder[0] === 2 && currentOrder[1] === 'asc') {
            groupingTable.order([2, 'desc']).draw();
        }
        else {
            groupingTable.order([2, 'asc']).draw();
        }
    });
}

// function for initiallizing show_contribution_report_table()
function get_contribution_report_table_initiallizer() {
    var staffVoucherTableView = $('#generalContributionReportTable').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            // {
            //     extend: 'copyHtml5',
            //     exportOptions: {
            //         columns: [ 0, ':visible' ]
            //     }
            // },
            // {
            //     extend: 'pdfHtml5',
            //     exportOptions: {
            //         columns: ':visible'
            //     }
            // },
            // {
            //     text: 'JSON',
            //     action: function ( e, dt, button, config ) {
            //         var data = dt.buttons.exportData();

            //         $.fn.dataTable.fileSave(
            //             new Blob( [ JSON.stringify( data ) ] ),
            //             'Export.json'
            //         );
            //     }
            // },
            // {
            //     extend: 'print',
            //     exportOptions: {
            //         columns: ':visible'
            //     }
            // }
        ]
    });
}

// function for showing a particular report depending on the user request
function show_contribution_report_table() {
    var contributionTypeList = document.getElementById('reportListContributionType').value;
    var massList = document.getElementById('reportListMass').value;
    var contributionReportStartDate = document.getElementById('viewContributionReportStartDate').value;
    var myContributionReportEndDate = document.getElementById("viewContributionReportEndDate").value;
    var contributionReportEndDate = document.getElementById("viewContributionReportEndDate").value + ' 23:59:59';
    var withoutDescriptionStatus = document.getElementById("withoutDescriptionRadioButton").checked;
    var withDescriptionStatus = document.getElementById("withDescriptionRadioButton").checked;
    var tmr = Math.random();

    if (contributionTypeList == "0") {
        Swal.fire({
            title: "Error!",
            text: " Please choose contribution type from the list!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (contributionReportStartDate == "") {
        Swal.fire({
            title: "Error!",
            text: " Please choose starting date for your report from the calendar!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (myContributionReportEndDate == "") {
        Swal.fire({
            title: "Error!",
            text: " Please choose end date for your report from the calendar!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else {

        var inputs = [contributionTypeList, massList, contributionReportStartDate, contributionReportEndDate, tmr];
        var data = JSON.stringify(inputs);


        var tableOfContributionReport;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var returnedData = JSON.parse(this.responseText);
                
                if (withoutDescriptionStatus == true) {
                    tableOfContributionReport = '<table class="table row-grouping table-striped dataex-html5-selectors" id="contributionReportTable">';
                    tableOfContributionReport += '<thead><tr><th>SNo.</th><th>CONTRIBUTOR</th><th>DATE</th><th>CONTRIBUTION</th></tr></thead>';
                    tableOfContributionReport += '<tbody>';

                    var status = returnedData[0];
                    if (status == 0) {
                        var i;
                        var myCashTotal = 0;
                        for (i = 1; i < returnedData.length; i++){
                            var row_massName = returnedData[i].massName;
                            var row_cType = returnedData[i].cashContributionTypeName;
                            var row_cAmount = returnedData[i].totalCash;
                            var row_newCAmount = returnedData[i].calculatedTotalCash;
                            var row_dResponded = returnedData[i].date;
                            var row_contributorName = returnedData[i].jumuiyaFirstName + " " + returnedData[i].jumuiyaLastName;
                            var row_contributorKandaName = returnedData[i].kandaFirstName + " " + returnedData[i].kandaLastName;
                            var row_cDescription = returnedData[i].cashContributionDescription;


                            tableOfContributionReport += '<tr>';
                            tableOfContributionReport += '<td>' + i + '</td>';
                            tableOfContributionReport += '<td>' + row_contributorName + '</td>';
                            tableOfContributionReport += '<td>' + row_dResponded + '</td>';
                            // tableOfContributionReport += '<td>' + row_contributorKandaName + '</td>';
                            // tableOfContributionReport += '<td>' + row_massName + '</td>';
                            tableOfContributionReport += '<td>' + row_cAmount + '</td>';
                            // tableOfContributionReport += '<td>' + row_cDescription + '</td>';
                            tableOfContributionReport += '</tr>';


                            myCashTotal = myCashTotal + Number(row_newCAmount);
                        }

                        myCashTotal = myCashTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                    
                    else if (status ==  1) {
                    }
                    $(".add-new-data").removeClass("show");
                    $(".overlay-bg").removeClass("show");

                    tableOfContributionReport += '</tbody>';

                    tableOfContributionReport += '<tfoot><tr>';
                    tableOfContributionReport += '<th>SNo.</th><th>CONTRIBUTOR</th><th>DATE</th><th>CONTRIBUTION</th>';
                    tableOfContributionReport += '</tr></tfoot>';
                    tableOfContributionReport += '</table>';
                }
                else if (withDescriptionStatus == true) {
                    tableOfContributionReport = '<table class="table row-grouping table-striped dataex-html5-selectors" id="contributionReportTable">';
                    tableOfContributionReport += '<thead><tr><th>SNo.</th><th>CONTRIBUTOR</th><th>DATE</th><th>CONTRIBUTION</th><th>DESCRIPTION</th></tr></thead>';
                    tableOfContributionReport += '<tbody>';

                    var status = returnedData[0];
                    if (status == 0) {
                        var i;
                        var myCashTotal = 0;
                        for (i = 1; i < returnedData.length; i++){
                            var row_massName = returnedData[i].massName;
                            var row_cType = returnedData[i].cashContributionTypeName;
                            var row_cAmount = returnedData[i].totalCash;
                            var row_newCAmount = returnedData[i].calculatedTotalCash;
                            var row_dResponded = returnedData[i].date;
                            var row_contributorName = returnedData[i].jumuiyaFirstName + " " + returnedData[i].jumuiyaLastName;
                            var row_contributorKandaName = returnedData[i].kandaFirstName + " " + returnedData[i].kandaLastName;
                            var row_cDescription = returnedData[i].cashContributionDescription;


                            tableOfContributionReport += '<tr>';
                            tableOfContributionReport += '<td>' + i + '</td>';
                            tableOfContributionReport += '<td>' + row_contributorName + '</td>';
                            tableOfContributionReport += '<td>' + row_dResponded + '</td>';
                            // tableOfContributionReport += '<td>' + row_contributorKandaName + '</td>';
                            // tableOfContributionReport += '<td>' + row_massName + '</td>';
                            tableOfContributionReport += '<td>' + row_cAmount + '</td>';
                            tableOfContributionReport += '<td>' + row_cDescription + '</td>';
                            tableOfContributionReport += '</tr>';


                            myCashTotal = myCashTotal + Number(row_newCAmount);
                        }

                        myCashTotal = myCashTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                    
                    else if (status ==  1) {
                    }
                    $(".add-new-data").removeClass("show");
                    $(".overlay-bg").removeClass("show");

                    tableOfContributionReport += '</tbody>';

                    tableOfContributionReport += '<tfoot><tr>';
                    tableOfContributionReport += '<th>SNo.</th><th>CONTRIBUTOR</th><th>DATE</th><th>CONTRIBUTION</th><th>DESCRIPTION</th>';
                    tableOfContributionReport += '</tr></tfoot>';
                    tableOfContributionReport += '</table>';
                }

                document.getElementById('contributionReportTableDiv').innerHTML = tableOfContributionReport;
                document.getElementById('selectedReportTypeLabel').innerHTML = contributionTypeList;
                document.getElementById('selectedReportStartDateLabel').innerHTML = contributionReportStartDate;
                document.getElementById('selectedReportEndDateLabel').innerHTML = myContributionReportEndDate;
                document.getElementById('selectedReportTotalCashLabel').innerHTML = myCashTotal;
                document.getElementById('selectedMassNameLabel').innerHTML = massList;
                document.getElementById('column-selectors').style.display = "block";
                document.getElementById('row-grouping').style.display = "none";

                get_contribution_report_table_row_grouping_initiallizer();

                // get_contribution_report_table_initiallizer();
            } 
        };
        xmlhttp.open("GET", "database/show_contribution_report_table.php?par=" + data, true);
        xmlhttp.send();
    }
}

// function for getting a general report for a particular selected week
function general_report_selected_week() {
    var generalContributionReportStartDate = document.getElementById("generalReportContributionDate").value;
    var generalContributionReportEndDate = document.getElementById("generalReportContributionEndDate").value;
    var generalContributionReportEndtDate = document.getElementById("generalReportContributionEndDate").value + ' 23:59:59';
    var tmr = Math.random();

    var inputs = [generalContributionReportStartDate, generalContributionReportEndtDate, tmr];
    var data = JSON.stringify(inputs);


    var tableOfGeneralContributionReport;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
 
            document.getElementById("selectedDateForGeneralReport").innerHTML = generalContributionReportStartDate;
            document.getElementById("selectedEndDateForGeneralReport").innerHTML = generalContributionReportEndDate;
            
            tableOfGeneralContributionReport = '<table class="table table-striped dataex-html5-selectors" id="generalContributionReportTable">';
            tableOfGeneralContributionReport += '<thead><tr><th>SNo.</th><th>TYPE</th><th>AMOUNT</th></tr></thead>';
            tableOfGeneralContributionReport += '<tbody>';

            var status = returnedData[0];
            if (status == 0) {
                var i;
                var weekTotal = 0;
                for (i = 1; i < returnedData.length; i++){
                    var row_sno = i;
                    var row_cType = returnedData[i].cashContributionTypeName;
                    var row_cAmount = returnedData[i].total;
                    var row_newCAmount = returnedData[i].calculatedTotalCash;

                    tableOfGeneralContributionReport += '<tr>';
                    tableOfGeneralContributionReport += '<td>' + row_sno + '</td>';
                    tableOfGeneralContributionReport += '<td>' + row_cType + '</td>';
                    tableOfGeneralContributionReport += '<td>' + row_cAmount + '</td>';
                    tableOfGeneralContributionReport += '</tr>';

                    weekTotal = weekTotal + Number(row_newCAmount);
                }
                weekTotal = weekTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            
            else if (status ==  1) {
            }

            tableOfGeneralContributionReport += '</tbody>';

            tableOfGeneralContributionReport += '<tfoot><tr>';
            tableOfGeneralContributionReport += '<th>SNo.</th><th>TYPE</th><th>AMOUNT</th>';
            tableOfGeneralContributionReport += '</tr></tfoot>';
            tableOfGeneralContributionReport += '</table>';

            document.getElementById('generalContributionReportTableDiv').innerHTML = tableOfGeneralContributionReport;
            document.getElementById("selectedDateForGeneralReport").innerHTML = generalContributionReportStartDate;
            document.getElementById("cashTotalGeneral").innerHTML = weekTotal;
            document.getElementById('column-selectors').style.display = "none";
            document.getElementById('row-grouping').style.display = "block";

            get_contribution_report_table_initiallizer();
        } 
    };
    xmlhttp.open("GET", "database/general_report_selected_week.php?par=" + data, true);
    xmlhttp.send();
}

// function for getting list of jumuiya on Add and Check contribution page
function get_jumuiya_list() {
    var tmr = Math.random();

    var list;

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                list = '<select class="form-control" id="listJumuiya" onChange = "get_jumuiya_name(this);">';

                var wholeParishId = "WHOLE PARISH";
                var individualContributorId = "INDIVIDUAL";

                list += '<option value="' + wholeParishId + '">';
                list += 'WHOLE PARISH';
                list += '</option>';

                list += '<option value="' + individualContributorId + '">';
                list += 'INDIVIDUAL CONTRIBUTOR';
                list += '</option>';

                for (var i = 1; i < returnedData.length; i++) {
                    list += '<option value="' + returnedData[i].jumuiyaId + '">';
                    list += returnedData[i].jumuiyaFirstName + ' ' + returnedData[i].jumuiyaLastName;
                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('jumuiyaName').innerHTML = list;
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of jumuiya!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_jumuiya_list.php?par=" + data, true);
    xmlhttp.send();
}

// function for getting list of jumuiya on add new user sidebar page
function get_user_jumuiya_list() {
    var tmr = Math.random();

    var list;

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                list = '<select class="form-control" id="insertNewUserJumuiyaNameField">';
                var notApplicable = "NONE";

                list += '<option value="' + notApplicable + '">';

                list += "Select Jumuiya for the new User";
                list += '</option>';

                for (var i = 1; i < returnedData.length; i++) {
                    list += '<option value="' + returnedData[i].jumuiyaId + '">';
                    list += returnedData[i].jumuiyaFirstName + ' ' + returnedData[i].jumuiyaLastName;
                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('addUserJumuiyaNameDiv').innerHTML = list;
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of jumuiya!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_jumuiya_list.php?par=" + data, true);
    xmlhttp.send();
}

// function for getting list of privilege on add new user sidebar page
function get_user_privilege_list() {
    var tmr = Math.random();

    var list;

    var inputs = [tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                list = '<select class="form-control" id="insertNewUserPrivilegeField">';
                var notApplicable = "NONE";

                list += '<option value="' + notApplicable + '">';

                list += "Select Privilege for the new User";
                list += '</option>';

                for (var i = 1; i < returnedData.length; i++) {
                    list += '<option value="' + returnedData[i].privilegeName + '">';
                    list += returnedData[i].privilegeName;
                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('addUserPrivilegeDiv').innerHTML = list;


                document.getElementById("insertNewUserPrivilegeField").addEventListener("change", get_user_occupation_list);
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of privilege!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_privilege_list.php?par=" + data, true);
    xmlhttp.send();
}

// function for getting list of privilege on view user info card
function get_view_privilege_list() {
    var tmr = Math.random();

    var list;

    var inputs = [selectedUserId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                privilegeLength = returnedData.length;
                list = '<select class="form-control" id="viewUserPrivilegeField">';

                for (var i = 1; i < returnedData.length; i++) {
                    list += '<option value="' + returnedData[i].privilegeName + '">';
                    list += returnedData[i].privilegeName;
                    list += '</option>';
                }

                list += '</select>';

                document.getElementById('viewUserPrivilegeDiv').innerHTML = list;

                get_view_occupation_list();

                document.getElementById("viewUserPrivilegeField").addEventListener("change", get_view_occupation_list);
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of privilege!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_view_privilege_list.php?par=" + data, true);
    xmlhttp.send();
}


// function for getting list of occupation on add new user sidebar page
function get_user_occupation_list() {
    var privilegeValue = document.getElementById('insertNewUserPrivilegeField').value;
    var tmr = Math.random();

    var list;

    if (privilegeValue == "NONE") {
        list = '<select class="form-control" id="insertNewUserOccupationField">';
        var notApplicable = "NONE";

        list += '<option value="' + notApplicable + '">';

        list += "Choose the Privilege First";
        list += '</option>';

        list += '</select>';

        document.getElementById('addUserOccupationDiv').innerHTML = list;

        Swal.fire({
            title: "Error!",
            text: " You haven't selected required privilege!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else {
        var inputs = [privilegeValue, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var returnedData = JSON.parse(this.responseText);
                var status = returnedData[0];

                if (status == 0) {
                    list = '<select class="form-control" id="insertNewUserOccupationField">';
                    var notApplicable = "NONE";

                    list += '<option value="' + notApplicable + '">';

                    list += "Select Occupation for the new User";
                    list += '</option>';

                    for (var i = 1; i < returnedData.length; i++) {
                        list += '<option value="' + returnedData[i].occupationName + '">';
                        list += returnedData[i].occupationName;
                        list += '</option>';
                    }

                    list += '</select>';

                    document.getElementById('addUserOccupationDiv').innerHTML = list;
                }

                else if (status == 1) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong on list of occupation!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/get_occupation_list.php?par=" + data, true);
        xmlhttp.send();
    }
}

// function for getting list of occupation on view user info card
function get_view_occupation_list() {
    var privilegeValue = document.getElementById('viewUserPrivilegeField').value;
    var tmr = Math.random();

    var inputs = [selectedUserId, privilegeValue, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var returnedData = JSON.parse(this.responseText);
            var status = returnedData[0];

            if (status == 0) {
                document.getElementById('viewUserOccupationField').value = returnedData[1].occupationName;
                userOccupationPriviledgeUid = returnedData[1].userPrivilegeOccupationUid;
            }

            else if (status == 1) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong on list of occupation!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/get_view_occupation_list.php?par=" + data, true);
    xmlhttp.send();
}

// send contibution request function
function send_contribution_request() {
    var contributionType = document.getElementById('listContributionType').value;
    var jumuiyaName = document.getElementById('listJumuiya').value;
    var massName = document.getElementById('listMass').value;
    var fiftyCoins = document.getElementById('insertFiftyCoinCountField').value;
    var hundredCoins = document.getElementById('insertHundredCoinCountField').value;
    var twoHundredCoins = document.getElementById('insertTwoHundredCoinCountField').value;
    var fiveHundredCoins = document.getElementById('insertFiveHundredCoinCountField').value;
    var oneThousands = document.getElementById('insertOneThousandCountField').value;
    var twoThousands = document.getElementById('insertTwoThousandCountField').value;
    var fiveThousands = document.getElementById('insertFiveThousandCountField').value;
    var tenThousands = document.getElementById('insertTenThousandCountField').value;
    var total = document.getElementById('insertTotalCashCountField').value;
    var description = document.getElementById('insertContributionDescriptionField').value;



    if (fiftyCoins === "") {
        fiftyCoins = "null";
    } 
    if (hundredCoins === "") {
        hundredCoins = "null";
    } 
    if (twoHundredCoins === "") {
        twoHundredCoins = "null";
    } 
    if (fiveHundredCoins === "") {
        fiveHundredCoins = "null";
    } 
    if (oneThousands === "") {
        oneThousands = "null";
    } 
    if (twoThousands === "") {
        twoThousands = "null";
    } 
    if (fiveThousands === "") {
        fiveThousands = "null";
    } 
    if (tenThousands === "") {
        tenThousands = "null";
    } 
    if (description === "") {
        description = contributionType;
    }

    if (contributionType === "0") {
        Swal.fire({
            title: "Error!",
            text: " Please choose contribution type from the list!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (total === "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter amount!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (contributionType === "Other" && description === contributionType) {
        Swal.fire({
            title: "Error!",
            text: " Please enter description for the contribution!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (jumuiyaName === "INDIVIDUAL CONTRIBUTOR" && description === contributionType) {
        Swal.fire({
            title: "Error!",
            text: " Please enter description for the contributor!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else {
        var tmr = Math.random();

        var inputs = [contributionType, loggedinUserId, jumuiyaName, fiftyCoins, hundredCoins, twoHundredCoins, fiveHundredCoins, oneThousands, twoThousands, fiveThousands, tenThousands, total, description, massName, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var returnedData = JSON.parse(this.responseText);
                var status = returnedData[0];

                if (status == 0) {
                    show_unverified_table();
                    Swal.fire({
                        title: "Congratulations!",
                        text: "You have sent the contribution successfully!",
                        type: "success",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                    $('#insertFiftyCoinCountField').val("");
                    $('#insertHundredCoinCountField').val("");
                    $('#insertTwoHundredCoinCountField').val("");
                    $('#insertFiveHundredCoinCountField').val("");
                    $('#insertOneThousandCountField').val("");
                    $('#insertTwoThousandCountField').val("");
                    $('#insertFiveThousandCountField').val("");
                    $('#insertTenThousandCountField').val("");
                    $('#insertTotalCashCountField').val("");

                    document.getElementById("insertTotalCashCountField").disabled = false;
                }

                else if (status == 2) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/send_contribution_request.php?par=" + data, true);
        xmlhttp.send();
    }
}


//DISPLAY PRINT CARD FUNCTION
function display_desired_print_form(){
    // document.getElementById("receiptCardJumuiyaName").disabled = true;
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("receiptCard").style.display = "block";
}





// send contibution request function
function send_contribution_and_print_receipt_request() {
    var contributionType = document.getElementById('listContributionType').value;
    var jumuiyaName = document.getElementById('listJumuiya').value;
    var massName = document.getElementById('listMass').value;
    var fiftyCoins = document.getElementById('insertFiftyCoinCountField').value;
    var hundredCoins = document.getElementById('insertHundredCoinCountField').value;
    var twoHundredCoins = document.getElementById('insertTwoHundredCoinCountField').value;
    var fiveHundredCoins = document.getElementById('insertFiveHundredCoinCountField').value;
    var oneThousands = document.getElementById('insertOneThousandCountField').value;
    var twoThousands = document.getElementById('insertTwoThousandCountField').value;
    var fiveThousands = document.getElementById('insertFiveThousandCountField').value;
    var tenThousands = document.getElementById('insertTenThousandCountField').value;
    var total = document.getElementById('insertTotalCashCountField').value;
    var description = document.getElementById('insertContributionDescriptionField').value;

    document.getElementById('receiptCardContributionType').value = contributionType;
    document.getElementById('receiptCardAmount').value = total;
    if (description === "") {
        document.getElementById('receiptCardDescription').value = "-";
        description = contributionType;
    }
    else {
        document.getElementById('receiptCardDescription').value = description;
    }
    document.getElementById('receiptCardUserId').value = loggedinUserUId;

    if (jumuiyaName === "INDIVIDUAL") {
        document.getElementById('receiptCardFullName').required = true;
    }
    else {
        document.getElementById('receiptCardJumuiyaName').value = receiptJumuiyaName;
        document.getElementById("receiptCardJumuiyaNameDiv").style.display = "none";
    }





    if (fiftyCoins === "") {
        fiftyCoins = "null";
    }
    if (hundredCoins === "") {
        hundredCoins = "null";
    }
    if (twoHundredCoins === "") {
        twoHundredCoins = "null";
    }
    if (fiveHundredCoins === "") {
        fiveHundredCoins = "null";
    }
    if (oneThousands === "") {
        oneThousands = "null";
    }
    if (twoThousands === "") {
        twoThousands = "null";
    }
    if (fiveThousands === "") {
        fiveThousands = "null";
    }
    if (tenThousands === "") {
        tenThousands = "null";
    }

    if (contributionType === "0") {
        Swal.fire({
            title: "Error!",
            text: " Please choose contribution type from the list!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (total === "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter amount!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (contributionType === "Other" && description === contributionType) {
        Swal.fire({
            title: "Error!",
            text: " Please enter description for the contribution!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (jumuiyaName === "INDIVIDUAL" && description === contributionType) {
        Swal.fire({
            title: "Error!",
            text: " Please enter description for the contributor!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else {
        var tmr = Math.random();

        var inputs = [contributionType, loggedinUserId, jumuiyaName, fiftyCoins, hundredCoins, twoHundredCoins, fiveHundredCoins, oneThousands, twoThousands, fiveThousands, tenThousands, total, description, massName, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var returnedData = JSON.parse(this.responseText);
                var status = returnedData[0];

                if (status == 0) {
                    show_unverified_table();
                    $(".add-new-data").removeClass("show");
                    $(".overlay-bg").removeClass("show");
                    document.getElementById('receiptCardReceiptNo').value = returnedData[1];
                    display_desired_print_form();
                    $('#insertFiftyCoinCountField').val("");
                    $('#insertHundredCoinCountField').val("");
                    $('#insertTwoHundredCoinCountField').val("");
                    $('#insertFiveHundredCoinCountField').val("");
                    $('#insertOneThousandCountField').val("");
                    $('#insertTwoThousandCountField').val("");
                    $('#insertFiveThousandCountField').val("");
                    $('#insertTenThousandCountField').val("");
                    $('#insertTotalCashCountField').val("");

                    document.getElementById("insertTotalCashCountField").disabled = false;
                }

                else if (status == 2) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/send_contribution_request.php?par=" + data, true);
        xmlhttp.send();
    }

}

function get_jumuiya_name(val) {
    receiptJumuiyaName = val.options[val.selectedIndex].text;
}

// send and verify contibution request function
function send_contribution_requests() {
    var contributionType = document.getElementById('listContributionType').value;
    var jumuiyaName = document.getElementById('listJumuiya').value;
    var massName = document.getElementById('listMass').value;
    var fiftyCoins = document.getElementById('insertFiftyCoinCountField').value;
    var hundredCoins = document.getElementById('insertHundredCoinCountField').value;
    var twoHundredCoins = document.getElementById('insertTwoHundredCoinCountField').value;
    var fiveHundredCoins = document.getElementById('insertFiveHundredCoinCountField').value;
    var oneThousands = document.getElementById('insertOneThousandCountField').value;
    var twoThousands = document.getElementById('insertTwoThousandCountField').value;
    var fiveThousands = document.getElementById('insertFiveThousandCountField').value;
    var tenThousands = document.getElementById('insertTenThousandCountField').value;
    var total = document.getElementById('insertTotalCashCountField').value;
    var description = document.getElementById('insertContributionDescriptionField').value;
    var cDate = document.getElementById('verifyReportStartDate').value;



    if (fiftyCoins == "") {
        fiftyCoins = "null";
    } 
    if (hundredCoins == "") {
        hundredCoins = "null";
    } 
    if (twoHundredCoins == "") {
        twoHundredCoins = "null";
    } 
    if (fiveHundredCoins == "") {
        fiveHundredCoins = "null";
    } 
    if (oneThousands == "") {
        oneThousands = "null";
    } 
    if (twoThousands == "") {
        twoThousands = "null";
    } 
    if (fiveThousands == "") {
        fiveThousands = "null";
    } 
    if (tenThousands == "") {
        tenThousands = "null";
    } 
    if (description == "") {
        description = contributionType;
    }

    if (contributionType == "0") {
        Swal.fire({
            title: "Error!",
            text: " Please choose contribution type from the list!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else if (total == "") {
        Swal.fire({
            title: "Error!",
            text: " Please enter amount!",
            type: "error",
            confirmButtonClass: 'btn btn-primary',
            buttonsStyling: false,
        });
    }
    else {
        var tmr = Math.random();

        var inputs = [contributionType, loggedinUserId, jumuiyaName, fiftyCoins, hundredCoins, twoHundredCoins, fiveHundredCoins, oneThousands, twoThousands, fiveThousands, tenThousands, total, description, massName, cDate, tmr];
        var data = JSON.stringify(inputs);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var returnedData = JSON.parse(this.responseText);
                var status = returnedData[0];

                if (status == 0) {
                    // show_unverified_table();
                    Swal.fire({
                        title: "Congratulations!",
                        text: "You have sent the contribution successfully!",
                        type: "success",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                    $('#insertFiftyCoinCountField').val("");
                    $('#insertHundredCoinCountField').val("");
                    $('#insertTwoHundredCoinCountField').val("");
                    $('#insertFiveHundredCoinCountField').val("");
                    $('#insertOneThousandCountField').val("");
                    $('#insertTwoThousandCountField').val("");
                    $('#insertFiveThousandCountField').val("");
                    $('#insertTenThousandCountField').val("");
                    $('#insertTotalCashCountField').val("");

                    document.getElementById("insertTotalCashCountField").disabled = false;
                }

                else if (status == 2) {
                    Swal.fire({
                        title: "Error!",
                        text: " something went wrong!",
                        type: "error",
                        confirmButtonClass: 'btn btn-primary',
                        buttonsStyling: false,
                    });
                }
            }
        };
        xmlhttp.open("GET", "database/send_contribution_requests.php?par=" + data, true);
        xmlhttp.send();
    }
}

// open calculator sideBar function
function open_calculator() {
    $("#calculateContributionSideBar").addClass("show")
}

// function for deleting the selected kanda
function delete_selected_kanda() {
    var tmr = Math.random();


    var inputs = [selectedKandaId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_kanda_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Kanda has been Deleted Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/delete_selected_kanda.php?par=" + data, true);
    xmlhttp.send();
}

// function for deleting the selected contribution
function delete_selected_contribution() {
    var tmr = Math.random();


    var inputs = [contributionId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_unverified_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Contribution has been Deleted Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/delete_selected_contribution.php?par=" + data, true);
    xmlhttp.send();
}

// function for verifying the selected contribution
function verify_selected_contribution() {
    var tmr = Math.random();


    var inputs = [contributionId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_pending_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Contribution has been Verified Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/verify_selected_contribution.php?par=" + data, true);
    xmlhttp.send();
}

// function for declining the selected contribution
function decline_selected_contribution() {
    var reason = document.getElementById('insertContributionDeclineReasonTextArea').value;
    var tmr = Math.random();


    var inputs = [contributionId, reason, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_pending_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Contribution has been Declined Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/decline_selected_contribution.php?par=" + data, true);
    xmlhttp.send();
}

// function for redating and verifying the selected contribution
function redate_selected_contribution() {
    var date = document.getElementById('redateContributionReportDate').value + ' 12:00:00';
    var tmr = Math.random();


    var inputs = [contributionId, date, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_pending_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Contribution has been Redated & Verified Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/redate_selected_contribution.php?par=" + data, true);
    xmlhttp.send();
}

function enable_selected_mass() {
    var tmr = Math.random();


    var inputs = [selectedMassId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_mass_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Mass has been Enabled Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/enable_selected_mass.php?par=" + data, true);
    xmlhttp.send();
}

function disable_selected_mass() {
    var tmr = Math.random();


    var inputs = [selectedMassId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_mass_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Mass has been Disabled Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/disable_selected_mass.php?par=" + data, true);
    xmlhttp.send();
}

function enable_selected_contribution_type() {
    var tmr = Math.random();


    var inputs = [selectedcontributionTypeId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_contribution_types_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Contribution Type has been Enabled Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/enable_selected_contribution_type.php?par=" + data, true);
    xmlhttp.send();
}

function disable_selected_contribution_type() {
    var tmr = Math.random();


    var inputs = [selectedcontributionTypeId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_contribution_types_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Contribution Type has been Disabled Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/disable_selected_contribution_type.php?par=" + data, true);
    xmlhttp.send();
}

function enable_selected_jumuiya() {
    var tmr = Math.random();


    var inputs = [selectedJumuiyaId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_jumuiya_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Jumuiya has been Enabled Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/enable_selected_jumuiya.php?par=" + data, true);
    xmlhttp.send();
}

function disable_selected_jumuiya() {
    var tmr = Math.random();


    var inputs = [selectedJumuiyaId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_jumuiya_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "Jumuiya has been Disabled Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/disable_selected_jumuiya.php?par=" + data, true);
    xmlhttp.send();
}

function enable_selected_user() {
    var tmr = Math.random();


    var inputs = [selectedUserId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_user_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "User has been Enabled Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/enable_selected_user.php?par=" + data, true);
    xmlhttp.send();
}

function disable_selected_user() {
    var tmr = Math.random();


    var inputs = [selectedUserId, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                show_user_table();
                Swal.fire({
                    title: "Congratulations!",
                    text: "User has been Disabled Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
        }
    };
    xmlhttp.open("GET", "database/disable_selected_user.php?par=" + data, true);
    xmlhttp.send();
}

function remove_selected_user_privilege() {
    var tmr = Math.random();


    var inputs = [userOccupationPriviledgeUid, tmr];
    var data = JSON.stringify(inputs);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            if (responseData[0] == 0) {
                get_view_privilege_list();
                Swal.fire({
                    title: "Congratulations!",
                    text: "User privilege has been Disabled Successfully!",
                    type: "success",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            else if (responseData[0] == 2) {
                Swal.fire({
                    title: "Error!",
                    text: " something went wrong!",
                    type: "error",
                    confirmButtonClass: 'btn btn-primary',
                    buttonsStyling: false,
                });
            }
            var list;
            list = '<select class="form-control">';
            var notApplicable = "NONE";

            list += '<option value="' + notApplicable + '">';

            list += "Loading...";
            list += '</option>';

            list += '</select>';

            document.getElementById('viewUserPrivilegeDiv').innerHTML = list;
        }
    };
    xmlhttp.open("GET", "database/remove_selected_user_privilege.php?par=" + data, true);
    xmlhttp.send();
}

function printReport(tableName) {
    var printingContents = document.getElementById(tableName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printingContents;

    window.print();

    document.body.innerHTML = originalContents;
}

// function printReport() {
//     var printingContents = document.getElementById(tableName).innerHTML;
//     var originalContents = document.body.innerHTML;

//     document.body.innerHTML = printingContents;

//     window.print();

//     document.body.innerHTML = originalContents;
// }

