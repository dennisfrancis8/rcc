<?php
    include_once 'login.php';
?>

<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
    <!-- BEGIN: Head-->

    <head>
        <title>MSHIKAMANO PARISH</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
        <meta name="description" content="Vuexy admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
        <meta name="keywords" content="admin template, Vuexy admin template, dashboard template, flat admin template, responsive admin template, web app">
        <meta name="author" content="PIXINVENT">
        <!-- <link rel="apple-touch-icon" href="../../../app-assets/images/ico/apple-icon-120.png"> -->
        <link rel="shortcut icon" type="image/x-icon" href="img/church2.jpg">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600" rel="stylesheet">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

        <!-- BEGIN: Vendor CSS-->
        <link rel="stylesheet" type="text/css" href="css/vendor/vendors.min.css">
        <link rel="stylesheet" type="text/css" href="css/datatables.min.css">
        <!-- END: Vendor CSS-->

        <!-- BEGIN: Theme CSS-->
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="css/bootstrap-extended.css">
        <link rel="stylesheet" type="text/css" href="css/colors.css">
        <link rel="stylesheet" type="text/css" href="css/components.css">
        <link rel="stylesheet" type="text/css" href="css/semi-dark-layout.css">

        <!-- BEGIN: Page CSS-->
        <link rel="stylesheet" type="text/css" href="css/vertical-menu.css">
        <link rel="stylesheet" type="text/css" href="css/data-list-view.css">
        <link rel="stylesheet" type="text/css" href="css/form-validation.css">
        <link rel="stylesheet" type="text/css" href="css/palette-gradient.css">
        <!-- END: Page CSS-->

        <!-- BEGIN: Custom CSS-->
        <link rel="stylesheet" type="text/css" href="asset/css/style.css">
        <!-- END: Custom CSS-->

    </head>
    <!-- END: Head-->

<!-- BEGIN: Body-->

    <body class="vertical-layout vertical-menu-modern semi-dark-layout 2-columns  navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" data-layout="semi-dark-layout" onload="on_page_load()">
        <?php if ( !isset($_SESSION["privilegeName"]) && !isset($_SESSION["occupationName"]) && !isset($_SESSION["isLoggedIn"])): ?>
            <!--Login Section-->
            <div>
                <!-- Login Form-->
                <div class="loginPageForm" style="margin-left: 150px; margin-top: 180px">
                    <section class="row flexbox-container">
                        <div class="col-xl-8 col-11 d-flex justify-content-center">
                            <div class="card bg-authentication rounded-0 mb-0">
                                <div class="row m-0">
                                    <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-0 py-0">
                                        <img src="img/church1.jpg" alt="branding logo">
                                    </div>
                                    <div class="col-lg-6 col-12 p-0">
                                        <div class="card rounded-0 mb-0 px-2">
                                            <div class="card-header pb-1">
                                                <div class="card-title">
                                                    <h4 class="mb-0">Login</h4>
                                                </div>
                                            </div>
                                            <p class="px-2" id="loginWelcome">Welcome, Please login to your account.</p>
                                            <div class="card-content">
                                                <div class="card-body pt-1">
                                                    <form method="POST" action="login.php" novalidate>
                                                        <fieldset class="form-label-group form-group position-relative has-icon-left">
                                                            <div class="controls">
                                                                <input name="username" type="text" class="form-control" id="userName" placeholder="UserId">
                                                            </div>
                                                            <div class="form-control-position">
                                                                <i class="far fa-user"></i>
                                                            </div>
                                                            <label for="user-name">Username</label>
                                                        </fieldset>
    
                                                        <fieldset class="form-label-group form-group position-relative has-icon-left">
                                                            <div class="controls">
                                                                <input name="password" type="password" class="form-control" id="passwd" placeholder="Password" minlength="4" data-validation-required-message="Password has to contain more than 3 characters">
                                                            </div>
                                                            <div class="form-control-position">
                                                                <i class="fas fa-lock"></i>
                                                            </div>
                                                            <label for="user-password">Password</label>
                                                        </fieldset>
                                                        <button type="Submit" name="submit" id="loginBtn" onclick="save_login_user_id()" class="btn btn-primary float-right btn-inline mb-1">Login</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- END: LoginContent-->
                </div>
            </div>
        <?php endif; ?>

        <!-- PAROKIA USER PAGE -->
        <?php if ($_SESSION["privilegeName"] == "PAROKIA" && isset($_SESSION["isLoggedIn"])): ?>
            <!-- BEGIN: Header-->
            <nav class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
                <div class="navbar-wrapper">
                    <div class="navbar-container content">
                        <div class="navbar-collapse" id="navbar-mobile">
                            <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                                <ul class="nav navbar-nav">
                                    <li class="nav-item mobile-menu d-xl-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ficon feather icon-menu"></i></a></li>
                                </ul>
                            </div>
                            <ul class="nav navbar-nav float-right">
                                <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-expand"><i class="ficon feather icon-maximize"></i></a></li>
                                <!-- <li class="nav-item nav-search"><a class="nav-link nav-link-search"><i class="ficon feather icon-search"></i></a>
                                    <div class="search-input">
                                        <div class="search-input-icon"><i class="feather icon-search primary"></i></div>
                                        <input class="input" type="text" placeholder="Explore Parokia..." tabindex="-1" data-search="template-list">
                                        <div class="search-input-close"><i class="feather icon-x"></i></div>
                                        <ul class="search-list search-list-main"></ul>
                                    </div>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- END: Header-->


            <!-- BEGIN: Main Menu-->
            <div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
                <div class="navbar-header">
                    <ul class="nav navbar-nav flex-row">
                        <li class="nav-item mr-auto"><a class="navbar-brand" href="../../../html/ltr/vertical-menu-template-semi-dark/index.html">
                            <h2 class="brand-text mb-0">CHURCH</h2></a>
                        </li>
                        <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>
                    </ul>
                </div>
                <div class="shadow-bottom"></div>
                <div class="main-menu-content">
                    <div class="sidenavUser">
                        <div class="usernamePhoto">
                            <img src="img/user.jpg" alt="user">
                            <span class="username" id = "loggedInUserFullName">Loading...</span>
                        </div>
                        <div class="userMenu">
                            <button class="sidenavUserBtn" type="button" title="Settings" id="loggedInUserSettingBtn" onclick="open_content_page('loggedInUserSettingContentPage')">
                                <span class="feather icon-settings" aria-hidden="true"></span>
                            </button>
                            <form method="POST" action="sign_out.php">
                                <button class="sidenavUserBtn" type="submit" name="sign_out" title="Sign out">
                                    <span class="feather icon-log-out" aria-hidden="true"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                        <li class=" nav-item"><a href="index.html"><i class="feather icon-home"></i><span class="menu-title" data-i18n="Dashboard">Dashboard</span><span class="badge badge badge-warning badge-pill float-right mr-2">2</span></a>
                            <ul class="menu-content">
                                <li><a onclick="open_content_page('dashboardContentPage')"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Analytics">Analytics</span></a>
                                </li>
                                <li><a onclick="open_content_page('dashboardContentPage')"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="eCommerce">eCommerce</span></a>
                                </li>
                            </ul>
                        </li>

                        <?php if(($_SESSION["occupationName"] == "MWEKAHAZINA-PAROKIA") && isset($_SESSION["isLoggedIn"])): ?>
                            <li class=" navigation-header"><span>MASS & CONTRIBUTION TYPES</span></li>

                            <li class=" nav-item"><a onclick="open_content_page('massContentPage')" id = "massInfoBtn"><i class="feather icon-gitlab"></i><span class="menu-title" data-i18n="Mass">Mass</span></a></li>
                            <li class=" nav-item"><a onclick="open_content_page('contributionTypesContentPage')" id = "contributionTypeInfoBtn"><i class="feather icon-command"></i><span class="menu-title" data-i18n="Contribution Types">Contribution Types</span></a></li>

                            <li class=" navigation-header"><span>ACCOUNTS & PRIVILEGES</span></li>

                            <li class=" nav-item"><a href="#"><i class="feather icon-zap"></i><span class="menu-title" data-i18n="Accounts">Accounts</span></a>
                                <ul class="menu-content">
                                    <li><a onclick="open_content_page('kandaContentPage')" id="kandaInfoBtn"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Kanda">Kanda</span></a>
                                    </li>
                                    <li><a onclick="open_content_page('jumuiyaContentPage')" id="jumuiyaInfoBtn"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Jumuiya">Jumuiya</span></a>
                                    </li>
                                    <li><a onclick="open_content_page('userContentPage')" id="userInfoBtn"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="User">User</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li class=" nav-item"><a href="#"><i class="feather icon-layers"></i><span class="menu-title" data-i18n="Privilege">Privilege</span></a>
                                <ul class="menu-content">
                                    <li><a onclick="open_content_page('privilegeContentPage')" id="privilegeInfoBtn"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Privilege">Privilege</span></a>
                                    </li>
                                    <li><a onclick="open_content_page('occupationContentPage')" id="occupationInfoBtn"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Occupation">Occupation</span></a>
                                    </li>
                                </ul>
                            </li>
                        <?php endif; ?>

                        <li class=" navigation-header"><span>CONTRIBUTIONS</span></li>

                        <!-- <li class=" nav-item"><a onclick="open_content_page('newContributionContentPage')" id="newContributionBtn"><i class="feather icon-plus-circle"></i><span class="menu-title">New Contribution</span></a></li> -->
                        <li class=" nav-item"><a onclick="open_content_page('checkContributionContentPage')" id="checkContributionBtn"><i class="feather icon-plus-circle"></i><span class="menu-title" data-i18n="Add & Check Contribution">Add & Check Contribution</span></a>
                        </li>

                        <li class=" navigation-header"><span>REPORTS</span></li>
                    
                        <li class=" nav-item"><a onclick="open_content_page('pendingContributionContentPag')" id="pendingContributionBt"><i class="feather icon-aperture"></i><span class="menu-title" data-i18n="Pending Contributions">Pending Contributions</span></a>
                        </li>
                        <li class=" nav-item"><a onclick="open_content_page('viewReportContentPage')" id="reportContributionBtn"><i class="feather icon-file"></i><span class="menu-title" data-i18n="View Report">View Report</span></a>
                        </li>
                        <li class=" navigation-header"><span>MATUMIZI</span></li>
                        <li class=" nav-item"><a href="matumizi.php" target=”_blank” id = "massInfoBtn"><i class="feather icon-package"></i><span class="menu-title" data-i18n="Mass">Matumizi</span></a></li>
                    </ul>
                </div>
            </div>
            <!-- END: Main Menu-->

            <!-- BEGIN: Content-->
            <div class="app-content content">
                <div class="content-overlay"></div>
                <div class="header-navbar-shadow"></div>
                <div class="content-wrapper">
                    <div class="content-header row">
                    </div>
                    <div class="content-body">
                        <!-- Setting section start -->
                        <div class="container-fluid contentPages" id="loggedInUserSettingContentPage">
                            <!-- account setting page start -->
                            <section id="page-account-settings">
                                <div class="row">
                                    <!-- left menu section -->
                                    <div class="col-md-3 mb-2 mb-md-0">
                                        <ul class="nav nav-pills flex-column mt-md-0 mt-1">
                                            <li class="nav-item">
                                                <a class="nav-link d-flex py-75 active" id="account-pill-general" data-toggle="pill" href="#account-vertical-general" aria-expanded="true">
                                                    <i class="fas fa-globe mr-50 font-medium-3"></i>
                                                    General
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link d-flex py-75" id="account-pill-password" data-toggle="pill" href="#account-vertical-password" aria-expanded="false">
                                                    <i class="fas fa-lock mr-50 font-medium-3"></i>
                                                    Change Password
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- right content section -->
                                    <div class="col-md-9">
                                        <div class="card">
                                            <div class="card-content">
                                                <div class="card-body">
                                                    <div class="tab-content">
                                                        <div role="tabpanel" class="tab-pane active" id="account-vertical-general" aria-labelledby="account-pill-general" aria-expanded="true">
                                                            <form class="myForms" id="loggedInUserPersonalDetailsUpdateForm" novalidate>
                                                                <div class="row">
                                                                    <div class="col-12">
                                                                        <div class="form-group">
                                                                            <div class="controls">
                                                                                <label for="account-firstname">First Name</label>
                                                                                <input type="text" class="form-control" id="account-firstname" placeholder="First Name" required data-validation-required-message="This First Name field is required">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <div class="form-group">
                                                                            <div class="controls">
                                                                                <label for="account-lastname">Last Name</label>
                                                                                <input type="text" class="form-control" id="account-lastname" placeholder="Last Name" required data-validation-required-message="This last name field is required">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 d-flex flex-sm-row flex-column justify-content-end">
                                                                        <button type="submit" class="btn btn-primary mr-sm-1 mb-1 mb-sm-0" id="updateloggedInUserPersonalDetails">Save
                                                                            changes</button>
                                                                        <button type="reset" class="btn btn-outline-danger">Cancel</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="tab-pane" id="account-vertical-password" role="tabpanel" aria-labelledby="account-pill-password" aria-expanded="false">
                                                            <form id="loggedInUserPasswordUpdateForm" novalidate>
                                                                <div class="row">
                                                                    <div class="col-12">
                                                                        <div class="form-group">
                                                                            <div class="controls">
                                                                                <label for="account-old-password">Old Password</label>
                                                                                <input type="password" class="form-control" id="account-old-password" required placeholder="Old Password" data-validation-required-message="Please Fill this Field">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <div class="form-group">
                                                                            <div class="controls">
                                                                                <label for="account-new-password">New Password</label>
                                                                                <input type="password" name="password" id="account-new-password" class="form-control" placeholder="New Password" required data-validation-required-message="Please Fill this Field" minlength="4">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <div class="form-group">
                                                                            <div class="controls">
                                                                                <label for="account-retype-new-password">Retype New
                                                                                    Password</label>
                                                                                <input type="password" name="con-password" class="form-control" required id="account-retype-new-password" data-validation-match-match="password" placeholder="New Password" data-validation-required-message="Please Fill this Field" minlength="4">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 d-flex flex-sm-row flex-column justify-content-end">
                                                                        <button type="submit" class="btn btn-primary mr-sm-1 mb-1 mb-sm-0"  id="updateloggedInUserPassword">Save
                                                                            changes</button>
                                                                        <button type="reset" class="btn btn-outline-warning">Cancel</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <!-- account setting page end -->
                        </div>
                        <!-- Setting section End -->

                        
                        <!-- DASHBOARD Content Page section start -->
                        <div class="contentPages" id="dashboardContentPage">
                            <p>This is Dashboard Content Page</p>
                        </div>

                        <!-- INSERT NEW CONTRIBUTION Content Page section start -->
                        <!-- <div class="contentPages" id="newContributionContentPage">
                            <section id="new-contribution-data-list-view" class="data-list-view-header">
                                
                            </section>
                        </div> -->

                        <!-- MASS Content Page section start -->
                        <div class="contentPages" id="massContentPage">
                            <section id="mass-table-data-list-view" class="data-list-view-header">
                                <!-- MASS DataTable starts -->
                                <div class="table-responsive">
                                    <div id="massTable"></div>
                                </div>
                                <!-- MASS DataTable ends -->

                                <!-- add new mass sidebar starts -->
                                <div class="add-new-data-sidebar">
                                    <div class="overlay-bg"></div>
                                    <div class="add-new-data" id="addNewMassSideBar">
                                        <div class="div mt-2 px-2 d-flex new-data-title justify-content-between">
                                            <div>
                                                <h4 class="text-uppercase">Insert Mass Data</h4>
                                            </div>
                                            <div class="hide-data-sidebar">
                                                <i class="feather icon-x"></i>
                                            </div>
                                        </div>
                                        <div class="data-items pb-3">
                                            <div class="data-fields px-2 mt-3">
                                                <div class="row">
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertMassNameField">Mass Name</label>
                                                        <input type="text" class="form-control" id="insertMassNameField">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-data-footer d-flex justify-content-around px-3 mt-2">
                                            <div class="add-data-btn">
                                                <button class="btn btn-primary" id="addMassBtn">Add</button>
                                            </div>
                                            <div class="cancel-data-btn">
                                                <button class="btn btn-outline-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- add new mass sidebar ends -->
                            </section>
                        </div>
                        <!-- MASS Content Page section Ends -->

                        <!-- CONTRIBUTION TYPES Content Page section start -->
                        <div class="contentPages" id="contributionTypesContentPage">
                            <section id="contribution-type-table-data-list-view" class="data-list-view-header">
                                <!-- CONTRIBUTION TYPES DataTable starts -->
                                <div class="table-responsive">
                                    <div id="contributionTypesTable"></div>
                                </div>
                                <!-- CONTRIBUTION TYPES DataTable ends -->

                                <!-- add new CONTRIBUTION TYPES sidebar starts -->
                                <div class="add-new-data-sidebar">
                                    <div class="overlay-bg"></div>
                                    <div class="add-new-data" id="addNewContributionTypeSideBar">
                                        <div class="div mt-2 px-2 d-flex new-data-title justify-content-between">
                                            <div>
                                                <h4 class="text-uppercase">Insert Contribution Type Data</h4>
                                            </div>
                                            <div class="hide-data-sidebar">
                                                <i class="feather icon-x"></i>
                                            </div>
                                        </div>
                                        <div class="data-items pb-3 newDataItems" id="addNewContributionDataItems">
                                            <div class="data-fields px-2 mt-3">
                                                <div class="row">
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertContributionTypeNameField">Contribution Type</label>
                                                        <input type="text" class="form-control" id="insertContributionTypeNameField">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-data-footer d-flex justify-content-around px-3 mt-2">
                                            <div class="add-data-btn">
                                                <button class="btn btn-primary" id="addContributionTypeBtn">Add</button>
                                            </div>
                                            <div class="cancel-data-btn">
                                                <button class="btn btn-outline-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- add new CONTRIBUTION TYPES sidebar ends -->
                            </section>
                        </div>
                        <!-- CONTRIBUTION TYPES Content Page section Ends -->

                        <!-- KANDA Content Page section start -->
                        <div class="contentPages" id="kandaContentPage">
                            <section id="kanda-table-data-list-view" class="data-list-view-header">
                                <!-- KANDA DataTable starts -->
                                <div class="table-responsive">
                                    <div id="kandaTable"></div>
                                </div>
                                <!-- KANDA DataTable ends -->

                                <!-- add new KANDA sidebar starts -->
                                <div class="add-new-data-sidebar">
                                    <div class="overlay-bg"></div>
                                    <div class="add-new-data" id="addNewKandaSideBar">
                                        <div class="div mt-2 px-2 d-flex new-data-title justify-content-between">
                                            <div>
                                                <h4 class="text-uppercase">Insert Kanda Data</h4>
                                            </div>
                                            <div class="hide-data-sidebar">
                                                <i class="feather icon-x"></i>
                                            </div>
                                        </div>
                                        <div class="data-items pb-3 newDataItems" id="addNewKandaDataItems">
                                            <div class="data-fields px-2 mt-3">
                                                <div class="row">
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewKandaIdField">Kanda Id</label>
                                                        <input type="text" class="form-control" id="insertNewKandaIdField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewKandaTitleField">Kanda Title</label>
                                                        <input type="text" class="form-control" id="insertNewKandaTitleField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewKandaNameField">Kanda Name</label>
                                                        <input type="text" class="form-control" id="insertNewKandaNameField">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-data-footer d-flex justify-content-around px-3 mt-2">
                                            <div class="add-data-btn">
                                                <button class="btn btn-primary" id="addKandaBtn">Add</button>
                                            </div>
                                            <div class="cancel-data-btn">
                                                <button class="btn btn-outline-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- add new KANDA sidebar ends -->
                            </section>
                        </div>
                        <!-- KANDA Content Page section Ends -->

                        <!-- JUMUIYA Content Page section start -->
                        <div class="contentPages" id="jumuiyaContentPage">
                            <section id="jumuiya-table-data-list-view" class="data-list-view-header">
                                <!-- JUMUIYA DataTable starts -->
                                <div class="table-responsive">
                                    <div id="jumuiyaTable"></div>
                                </div>
                                <!-- JUMUIYA DataTable ends -->

                                <!-- add new JUMUIYA sidebar starts -->
                                <div class="add-new-data-sidebar">
                                    <div class="overlay-bg"></div>
                                    <div class="add-new-data" id="addNewJumuiyaSideBar">
                                        <div class="div mt-2 px-2 d-flex new-data-title justify-content-between">
                                            <div>
                                                <h4 class="text-uppercase">Insert Jumuiya Data</h4>
                                            </div>
                                            <div class="hide-data-sidebar">
                                                <i class="feather icon-x"></i>
                                            </div>
                                        </div>
                                        <div class="data-items pb-3 newDataItems" id="addNewJumuiyaDataItems">
                                            <div class="data-fields px-2 mt-3">
                                                <div class="row">
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewJumuiyaIdField">Jumuiya Id</label>
                                                        <input type="text" class="form-control" id="insertNewJumuiyaIdField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewJumuiyaTitleField">Jumuiya Title</label>
                                                        <input type="text" class="form-control" id="insertNewJumuiyaTitleField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewJumuiyaNameField">Jumuiya Name</label>
                                                        <input type="text" class="form-control" id="insertNewJumuiyaNameField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewJumuiyaKandaNameField">Kanda Name</label>
                                                        <div id="addJumuiyaKandaNameDiv"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-data-footer d-flex justify-content-around px-3 mt-2">
                                            <div class="add-data-btn">
                                                <button class="btn btn-primary" id="addJumuiyaBtn">Add</button>
                                            </div>
                                            <div class="cancel-data-btn">
                                                <button class="btn btn-outline-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- add new JUMUIYA sidebar ends -->

                                <!-- edit JUMUIYA sidebar starts -->
                                <div class="add-new-data-sidebar">
                                    <div class="overlay-bg"></div>
                                    <div class="add-new-data" id="editJumuiyaSideBar">
                                        <div class="div mt-2 px-2 d-flex new-data-title justify-content-between">
                                            <div>
                                                <h4 class="text-uppercase">Edit Jumuiya Data</h4>
                                            </div>
                                            <div class="hide-data-sidebar">
                                                <i class="feather icon-x"></i>
                                            </div>
                                        </div>
                                        <div class="data-items pb-3 newDataItems" id="editJumuiyaDataItems">
                                            <div class="data-fields px-2 mt-3">
                                                <div class="row">
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="editJumuiyaIdField">Jumuiya Id</label>
                                                        <input type="text" class="form-control" id="editJumuiyaIdField" disabled>
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="editJumuiyaTitleField">Jumuiya Title</label>
                                                        <input type="text" class="form-control" id="editJumuiyaTitleField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="editJumuiyaNameField">Jumuiya Name</label>
                                                        <input type="text" class="form-control" id="editJumuiyaNameField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="editJumuiyaKandaNameField">Kanda Name</label>
                                                        <div id="editJumuiyaKandaNameDiv"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-data-footer d-flex justify-content-around px-3 mt-2">
                                            <div class="add-data-btn">
                                                <button class="btn btn-primary" id="editJumuiyaBtn">Edit</button>
                                            </div>
                                            <div class="cancel-data-btn">
                                                <button class="btn btn-outline-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- edit JUMUIYA sidebar ends -->
                            </section>
                        </div>
                        <!-- JUMUIYA TYPES Content Page section Ends -->

                        <!-- USER Content Page section start -->
                        <div class="contentPages" id="userContentPage">
                            <section id="user-table-data-list-view" class="data-list-view-header">
                                <!-- USER DataTable starts -->
                                <div class="table-responsive">
                                    <div id="userTable"></div>
                                </div>
                                <!-- USER DataTable ends -->

                                <!-- add new USER sidebar starts -->
                                <div class="add-new-data-sidebar">
                                    <div class="overlay-bg"></div>
                                    <div class="add-new-data" id="addNewUserSideBar">
                                        <div class="div mt-2 px-2 d-flex new-data-title justify-content-between">
                                            <div>
                                                <h4 class="text-uppercase">Insert User Data</h4>
                                            </div>
                                            <div class="hide-data-sidebar">
                                                <i class="feather icon-x"></i>
                                            </div>
                                        </div>
                                        <div class="data-items pb-3 newDataItems" id="addNewUserDataItems">
                                            <div class="data-fields px-2 mt-3">
                                                <div class="row">
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewUserIdField">User Id</label>
                                                        <input type="text" class="form-control" id="insertNewUserIdField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewUserFirstNameField">First Name</label>
                                                        <input type="text" class="form-control" id="insertNewUserFirstNameField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewUserLastNameField">Last Name</label>
                                                        <input type="text" class="form-control" id="insertNewUserLastNameField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewUserJumuiyaNameField">Jumuiya Name</label>
                                                        <div id="addUserJumuiyaNameDiv"></div>
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewUserPrivilegeField">Privilege</label>
                                                        <div id="addUserPrivilegeDiv">
                                                            <select class="form-control">
                                                                <option value="privilegeDefaultValue">Loading...</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertNewUserOccupationField">Occupation</label>
                                                        <div id="addUserOccupationDiv">
                                                            <select class="form-control" >
                                                                <option value="defaultValue">Choose the Privilege First</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-data-footer d-flex justify-content-around px-3 mt-2">
                                            <div class="add-data-btn">
                                                <button class="btn btn-primary" id="addUserBtn">Add</button>
                                            </div>
                                            <div class="cancel-data-btn">
                                                <button class="btn btn-outline-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- add new USER sidebar ends -->

                                <!-- edit USER sidebar starts -->
                                <div class="add-new-data-sidebar">
                                    <div class="overlay-bg"></div>
                                    <div class="add-new-data" id="editUserSideBar">
                                        <div class="div mt-2 px-2 d-flex new-data-title justify-content-between">
                                            <div>
                                                <h4 class="text-uppercase">Edit User Data</h4>
                                            </div>
                                            <div class="hide-data-sidebar">
                                                <i class="feather icon-x"></i>
                                            </div>
                                        </div>
                                        <div class="data-items pb-3 newDataItems" id="editUserDataItems">
                                            <div class="data-fields px-2 mt-3">
                                                <div class="row">
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="editUserIdField">User Id</label>
                                                        <input type="text" class="form-control" id="editUserIdField" disabled>
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="editUserFirstNameField">First Name</label>
                                                        <input type="text" class="form-control" id="editUserFirstNameField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="editUserLastNameField">Last Name</label>
                                                        <input type="text" class="form-control" id="editUserLastNameField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="editUserJumuiyaNameField">Jumuiya Name</label>
                                                        <div id="editUserJumuiyaNameDiv"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-data-footer d-flex justify-content-around px-3 mt-2">
                                            <div class="add-data-btn">
                                                <button class="btn btn-primary" id="editUserBtn">Edit</button>
                                            </div>
                                            <div class="cancel-data-btn">
                                                <button class="btn btn-outline-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- edit USER sidebar ends -->
                            </section>
                        </div>
                        <!-- USER TYPES Content Page section Ends -->

                        <!-- PRIVILEGE Content Page section start -->
                        <div class="contentPages" id="privilegeContentPage">
                            <p>This is PRIVILEGE Content Page</p>
                        </div>
                        <!-- PRIVILEGE TYPES Content Page section Ends -->

                        <!-- OCCUPATION Content Page section start -->
                        <div class="contentPages" id="occupationContentPage">
                            <p>This is OCCUPATION Content Page</p>
                        </div>
                        <!-- OCCUPATION TYPES Content Page section Ends -->

                        <!-- CHECK CONTRIBUTION Content Page section start -->
                        <div class="contentPages" id="checkContributionContentPage">
                            <section id="check-contribution-data-list-view" class="data-list-view-header">
                                <!-- check Contribution DataTable starts -->
                                <div class="table-responsive">
                                    <div id="checkContributionTable"></div>
                                </div>
                                <!-- check Contribution DataTable ends -->

                                <!-- add new sidebar starts -->
                                <div class="add-new-data-sidebar">
                                    <div class="overlay-bg"></div>
                                    <div class="add-new-data" id="checkContributionSideBar">
                                        <div class="div mt-2 px-2 d-flex new-data-title justify-content-between">
                                            <div>
                                                <h4 class="text-uppercase">Insert Cash Data</h4>
                                            </div>
                                            <div class="hide-data-sidebar">
                                                <i class="feather icon-x"></i>
                                            </div>
                                        </div>
                                        <div class="data-items pb-3 newDataItems" id="checkContributionDataItems">
                                            <div class="data-fields px-2 mt-3">
                                                <div class="row">
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="cashContributionType">Contribution Type</label>
                                                        <div id="cashContributionType"></div>
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="jumuiyaName">Jumuiya/Contributor Name</label>
                                                        <div id="jumuiyaName"></div>
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="massName">Mass Name</label>
                                                        <div id="massName"></div>
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertTotalCashCountField">Total Cash</label>
                                                        <input type="text" class="form-control" id="insertTotalCashCountField">
                                                    </div>
                                                    <!-- <div class="col-sm-12 data-field-col">
                                                        <label for="verifyReportStartDate">Contribution Date</label>
                                                        <input type="date" value = "YYYY-MM-DD" class="form-control" name="ContributinReportStartDate" id="verifyReportStartDate">
                                                    </div> -->
                                                    <div class="form-body" id="contributionDescriptionTextArea">
                                                        <div class="form-group">
                                                            <label for="insertContributionDescriptionField" class="sr-only">Cash Description</label>
                                                            <textarea id="insertContributionDescriptionField" rows="3" class="form-control text-uppercase" name="message" placeholder="Enter Description"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-data-footer d-flex justify-content-around px-3 mt-2">
                                            <div class="add-data-btn">
                                                <button class="btn btn-primary" id="sendContributionRequestBtn">Send</button>
                                            </div>
                                            <div class="add-data-btn">
                                                <button class="btn btn-primary" id="receiptContributionRequestBtn">Receipt</button>
                                            </div>
                                            <div class="cancel-data-btn">
                                                <button class="btn btn-outline-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- add new sidebar ends -->

                                
                            </section>

                            <section id="chec-contribution-data-list-view" class="data-list-view-header">
                                <!-- calculate contribution sidebar starts -->
                                <div class="add-new-data-sidebar">
                                    <div class="overlay-bg"></div>
                                    <div class="add-new-data" id="calculateContributionSideBar">
                                        <div class="div mt-2 px-2 d-flex new-data-title justify-content-between">
                                            <div>
                                                <h4 class="text-uppercase">Calculator</h4>
                                            </div>
                                        </div>
                                        <div class="data-items myData pb-3">
                                            <div class="data-fields px-2 mt-3">
                                                <div class="row">
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertFiftyCoinCountField">50 Coins</label>
                                                        <input type="text" class="form-control" id="insertFiftyCoinCountField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertHundredCoinCountField">100 Coins</label>
                                                        <input type="text" class="form-control" id="insertHundredCoinCountField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertTwoHundredCoinCountField">200 Coins</label>
                                                        <input type="text" class="form-control" id="insertTwoHundredCoinCountField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertFiveHundredCoinCountField">500 Coins</label>
                                                        <input type="text" class="form-control" id="insertFiveHundredCoinCountField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertOneThousandCountField">1000 Notes</label>
                                                        <input type="text" class="form-control" id="insertOneThousandCountField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertTwoThousandCountField">2000 Notes</label>
                                                        <input type="text" class="form-control" id="insertTwoThousandCountField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertFiveThousandCountField">5000 Notes</label>
                                                        <input type="text" class="form-control" id="insertFiveThousandCountField">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="insertTenThousandCountField">10000 Notes</label>
                                                        <input type="text" class="form-control" id="insertTenThousandCountField">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- calculate contribution sidebar ends -->
                            </section>
                        </div>
                        

                        <!-- PENDING CONTRIBUTION Content Page section start --> 
                        <div class="contentPages" id="pendingContributionContentPage">
                            <section id="pending-contribution-data-list-view" class="data-list-view-header">
                                <!-- pending Contribution DataTable starts -->
                                <div class="table-responsive">
                                    <div id="pendingContributionTable"></div>
                                </div>
                                <!-- pending Contribution DataTable ends -->
                            </section>
                        </div>

                        <!-- VIEW REPORT Content Page section start -->
                        <div class="contentPages" id="viewReportContentPage">
                            <!-- Column selectors with Export Options and print table for Contibution Report-->
                            <section id="column-selectors" style="display: none;">

                                <!-- Print general Report Table Button -->
                                <div class="ml-1" align="left"><button class="btn btn-outline-primary" id="printProjectReportTableBtn" onclick="printReport('specificReportPrint')" title="print"><i class="feather icon-printer"></i>Print</button></div>

                                <div id="specificReportPrint">
                                    <div>
                                        Report Type: <label class="font-weight-bolder" style="font-size: 15px;" id="selectedReportTypeLabel">Loading...</label><br><br>
                                        Mass Name: <label class="font-weight-bolder" style="font-size: 15px;" id="selectedMassNameLabel">Loading...</label><br><br>
                                        Report Time Range: From <label class="font-weight-bolder" style="font-size: 15px;" id="selectedReportStartDateLabel">Loading...</label> To <label class="font-weight-bolder" style="font-size: 15px;" id="selectedReportEndDateLabel">Loading...</label><br><br>
                                        Total Cash Collected for Selected Report: <label class="font-weight-bolder" style="font-size: 25px;" id="selectedReportTotalCashLabel">Loading...</label><br><br>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-content">
                                                    <div class="card-body card-dashboard">
                                                        <div class="table-responsive">
                                                            <div id="contributionReportTableDiv">Loading Table Report...</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <!-- Column selectors with Export Options and print table -->

                            <!-- Row grouping report for general contrubition of a particular sunday -->
                            <section id="row-grouping" style="display: none;">
                                <!-- Print general Report Table Button -->
                                <div class="ml-1" align="left"><button class="btn btn-outline-primary" id="printProjectReportTableBtn" onclick="printReport('generalReportPrint')" title="print"><i class="feather icon-printer"></i>Print</button></div>


                                <div class="row" id="generalReportPrint">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">General Report from <label class="font-weight-bolder" style="font-size: 20px;" id = "selectedDateForGeneralReport">Loading...</label> to <label class="font-weight-bolder" style="font-size: 20px;" id = "selectedEndDateForGeneralReport">Loading...</label> </h4><br><br>
                                                <h4 class="card-title">Total Cash <label class="font-weight-bolder" style="font-size: 25px;" id = "cashTotalGeneral">Loading...</label> </h4>
                                            </div>
                                            <div class="card-content">
                                                <div class="card-body card-dashboard">
                                                    <div class="table-responsive">
                                                        <div id="generalContributionReportTableDiv">Loading Table General Report...</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <!-- Row grouping -->


                            <section id="report-contribution-data-list-view" class="data-list-view-header">
                                <!-- choose report sidebar starts -->
                                <div class="add-new-data-sidebar">
                                    <div class="overlay-bg"></div>
                                    <div class="add-new-data" id="reportContributionSideBar">
                                        <div class="div mt-2 px-2 d-flex new-data-title justify-content-between">
                                            <div>
                                                <h4 class="text-uppercase">Choose Report</h4>
                                            </div>
                                            <div class="hide-report-sidebar">
                                                <i class="feather icon-x"></i>
                                            </div>
                                        </div>
                                        <div class="data-items pb-3" id="myDataItems">
                                            <div class="data-fields px-2 mt-3">
                                                <div class="row">
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="cashContributionType">Contribution Type</label>
                                                        <div id="reportCashContributionType"></div>
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="massNameReport">Mass Name</label>
                                                        <div id="massNameReport"></div>
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="viewContributionReportStartDate">Start Date</label>
                                                        <input type="date" value = "YYYY-MM-DD" class="form-control" name="ContributionReportStartDate" id="viewContributionReportStartDate">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <label for="viewContributionReportEndDate">End Date</label>
                                                        <input type="date" value = "YYYY-MM-DD" class="form-control" name="ContributionReportEndDate" id="viewContributionReportEndDate">
                                                    </div>
                                                    <div class="col-sm-12 data-field-col">
                                                        <!-- Custom Radio Buttons start -->
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <ul class="list-unstyled mb-0">
                                                                    <li class="d-inline-block mr-2">
                                                                        <fieldset>
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input" name="customRadio" id="withoutDescriptionRadioButton" checked>
                                                                                <label class="custom-control-label" for="withoutDescriptionRadioButton">Without Description</label>
                                                                            </div>
                                                                        </fieldset>
                                                                    </li>
                                                                    <li class="d-inline-block mr-2">
                                                                        <fieldset>
                                                                            <div class="custom-control custom-radio">
                                                                                <input type="radio" class="custom-control-input" name="customRadio" id="withDescriptionRadioButton">
                                                                                <label class="custom-control-label" for="withDescriptionRadioButton">With Description</label>
                                                                            </div>
                                                                        </fieldset>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <!-- Custom Radio Buttons end -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-data-footer d-flex justify-content-around px-3 mt-2">
                                            <div class="add-data-btn">
                                                <button class="btn btn-primary" id="viewReportBtn">View</button>
                                            </div>
                                            <div class="add-data-btn">
                                                <button class="btn btn-outline-primary" id="viewGeneralReportBtn">General Report</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- choose report sidebar ends -->
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <!-- END: Content-->

            <!-- overlay div-->
            <div class="w3-overlay w3-animate-opacity w3-display-container" id="myOverlay" style="z-index: 1; width: 100%; height: 100%; cursor:pointer; display: none;">
                <!-- STARTS: The div containing enabling mass card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="enableMassCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>ENABLE MASS</h5>
                                <p class="card-text  mb-0">Are you sure you want to enable this Mass?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueEnableMassBtn">Enable</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortEnableMassBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing enabling mass card  with an overlay div-->

                <!-- STARTS: The div containing disabling mass card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="disableMassCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>DISABLE MASS</h5>
                                <p class="card-text  mb-0">Are you sure you want to disable this Mass?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueDisableMassBtn">Disable</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortDisableMassBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing disabling mass card  with an overlay div-->

                <!-- STARTS: The div containing enabling contribution type card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="enableContributionTypeCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>ENABLE CONTRIBUTION TYPE</h5>
                                <p class="card-text  mb-0">Are you sure you want to enable this Contribution Type?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueEnableContributionTypeBtn">Enable</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortEnableContributionTypeBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing enabling contribution type card  with an overlay div-->

                <!-- STARTS: The div containing disabling contribution type card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="disableContributionTypeCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>DISABLE CONTRIBUTION TYPE</h5>
                                <p class="card-text  mb-0">Are you sure you want to disable this Contribution Type?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueDisableContributionTypeBtn">Disable</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortDisableContributionTypeBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing disabling contribution type card  with an overlay div-->

                <!-- STARTS: The div containing delete kanda card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="deleteKandaCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>DELETE KANDA</h5>
                                <p class="card-text  mb-0">Are you sure you want to delete this Kanda?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueDeleteKandaBtn">Delete</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortDeleteKandaBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing delete kanda card  with an overlay div-->

                <!-- STARTS: The div containing enabling jumuiya card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="enableJumuiyaCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>ENABLE JUMUIYA</h5>
                                <p class="card-text  mb-0">Are you sure you want to enable this Jumuiya?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueEnableJumuiyaBtn">Enable</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortEnableJumuiyaBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing enabling jumuiya card  with an overlay div-->

                <!-- STARTS: The div containing disabling jumuiya card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="disableJumuiyaCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>DISABLE JUMUIYA</h5>
                                <p class="card-text  mb-0">Are you sure you want to disable this Jumuiya?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueDisableJumuiyaBtn">Disable</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortDisableJumuiyaBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing disabling jumuiya card  with an overlay div-->

                <!-- STARTS: The div containing enabling user card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="enableUserCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>ENABLE USER</h5>
                                <p class="card-text  mb-0">Are you sure you want to enable this User?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueEnableUserBtn">Enable</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortEnableUserBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing enabling user card  with an overlay div-->

                <!-- STARTS: The div containing disabling user card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="disableUserCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>DISABLE USER</h5>
                                <p class="card-text  mb-0">Are you sure you want to disable this User?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueDisableUserBtn">Disable</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortDisableUserBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing disabling user card  with an overlay div-->

                <!-- STARTS: The div containing viewing user info card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="viewUserInfoCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>VIEW USER PRIVILEGE & OCCUPATION </h5>
                                <div class="col-sm-12 data-field-col">
                                    <label for="viewUserPrivilegeField">Privilege</label>
                                    <div id="viewUserPrivilegeDiv">
                                        <select class="form-control">
                                            <option value="viewPrivilegeDefaultValue">Loading...</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12 data-field-col">
                                    <label for="viewUserOccupationField">Occupation</label>
                                    <input type="text" class="form-control" id="viewUserOccupationField" disabled>
                                </div>

                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueRemoveUserInfoBtn">Remove</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortViewUserInfoBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing viewing user info card  with an overlay div-->

                <!-- STARTS: The div containing add user info card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="addUserInfoCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>ADD USER PRIVILEGE & OCCUPATION </h5>
                                <div class="col-sm-12 data-field-col">
                                    <label for="addUserPrivilegeField">Privilege</label>
                                    <div id="addUserPrivilegeDiv">
                                        <select class="form-control">
                                            <option value="addPrivilegeDefaultValue">Loading...</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12 data-field-col">
                                    <label for="addUserOccupationField">Occupation</label>
                                    <div id="addUserOccupationDiv">
                                        <select class="form-control">
                                            <option value="addOccupationDefaultValue">Loading...</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueAddUserInfoBtn">Add</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortAddUserInfoBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing add user info card  with an overlay div-->

                <!-- STARTS: The div containing delete contribution card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="deleteContributionCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>DELETE CONTRIBUTION</h5>
                                <p class="card-text  mb-0">Are you sure you want to delete this Contribution?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueDeleteContributionBtn">Delete</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortDeleteContributionBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing delete contribution card  with an overlay div-->

                <!-- STARTS: The div containing verify contribution card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="verifyContributionCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>VERIFY CONTRIBUTION</h5>
                                <p class="card-text  mb-0">Are you sure you want to verify this Contribution?</p>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueVerifyContributionBtn">Verify</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortVerifyContributionBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing verify contribution card  with an overlay div-->

                <!-- STARTS: receipt pop up-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="receiptCard" style="display: none;">
                    <form class="card" method="POST" action="example.php" novalidate>
                        <div class="card-content">
                            <div class="card-body">
                                <h5>RECEIPT INFORMATION</h5>
                                <div class="col-sm-12 data-field-col">
                                    <label for="receiptCardFullName">Full Name</label>
                                    <input name = "payerName" type="text" class="form-control" id="receiptCardFullName">
                                </div>
                                <div class="col-sm-12 data-field-col" id="receiptCardJumuiyaNameDiv">
                                    <label for="receiptCardJumuiyaName">Jumuiya Name</label>
                                    <input name = "jName" type="text" class="form-control" id="receiptCardJumuiyaName">
                                </div>
                                <div class="col-sm-12 data-field-col"style="display: none;">
                                    <label for="receiptCardContributionType">Contribution Type</label>
                                    <input name = "contType" type="text" class="form-control" id="receiptCardContributionType">
                                </div>
                                <div class="col-sm-12 data-field-col"style="display: none;">
                                    <label for="receiptCardDescription">Description</label>
                                    <input name = "desc" value = "-" type="text" class="form-control" id="receiptCardDescription">
                                </div>
                                <div class="col-sm-12 data-field-col"style="display: none;">
                                    <label for="receiptCardAmount">Amount</label>
                                    <input name = "amount" type="text" class="form-control" id="receiptCardAmount">
                                </div>
                                <div class="col-sm-12 data-field-col"style="display: none;">
                                    <label for="receiptCardUserId">UserId</label>
                                    <input name = "userID" type="text" class="form-control" id="receiptCardUserId">
                                </div>
                                <div class="col-sm-12 data-field-col"style="display: none;">
                                    <label for="receiptCardReceiptNo">Receipt Number</label>
                                    <input name = "receipt" type="text" class="form-control" id="receiptCardReceiptNo">
                                </div>

                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button type="Submit" name="submit" class="btn gradient-light-primary text-black" id="printReceiptCardBtn">Print</button>
                                    <button type="reset" class="btn btn-outline-primary abortContributionActions" id="abortReceiptCardBtn">Abort</button>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>
                <!-- ENDS:receipt pop up-->

                <!-- STARTS: The div containing Decline contribution card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="declineContributionCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>DECLINE CONTRIBUTION</h5>
                                <p class="card-text  mb-0">Are you sure you want to decline this Contribution?</p>
                                <div class="form-body" id="contributionDeclineReasonTextArea">
                                    <div class="form-group">
                                        <label for="insertContributionDeclineReasonTextArea" class="sr-only">Decline Reason</label>
                                        <textarea id="insertContributionDeclineReasonTextArea" rows="3" class="form-control text-uppercase" name="message" placeholder="Enter Reason"></textarea>
                                    </div>
                                </div>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueDeclineContributionBtn">Decline</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortDeclineContributionBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing verify contribution card  with an overlay div-->

                <!-- STARTS: The div containing Redate contribution card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="redateContributionCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>RE-DATE CONTRIBUTION</h5>
                                <div class="col-sm-12 data-field-col">
                                    <label for="redateContributionReportDate">Choose Date</label>
                                    <input type="date" value = "YYYY-MM-DD" class="form-control" name="contributionReportDate" id="redateContributionReportDate">
                                </div>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueRedateContributionBtn">Re-Date</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortRedateContributionBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing Redate contribution card  with an overlay div-->

                <!-- STARTS: The div containing choose date for general contribution report card  with an overlay div-->
                <div class="col-xl-4 col-md-6 col-sm-12 w3-display-middle" id="generalReportDateContributionCard" style="display: none;">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5>GENERAL REPORT DATE</h5>
                                <div class="col-sm-12 data-field-col">
                                    <label for="generalReportContributionDate">Choose Start Date</label>
                                    <input type="date" value = "YYYY-MM-DD" class="form-control" name="contributionGeneralReportDate" id="generalReportContributionDate">
                                </div>
                                <div class="col-sm-12 data-field-col">
                                    <label for="generalReportContributionEndDate">Choose Date</label>
                                    <input type="date" value = "YYYY-MM-DD" class="form-control" name="contributionGeneralReportEndDate" id="generalReportContributionEndDate">
                                </div>
                                <div class="card-btns d-flex justify-content-between mt-2">
                                    <button class="btn gradient-light-primary text-black" id="continueGeneralReportContributionBtn">View</button>
                                    <button class="btn btn-outline-primary abortContributionActions" id="abortgeneralReportContributionBtn">Abort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ENDS: The div containing  choose date for general contribution report card  with an overlay div-->
            </div>
            <!-- END: overlayDiv-->

            

            

            <div class="sidenav-overlay"></div>
            <div class="drag-target"></div>

            <!-- BEGIN: Footer-->
            <!-- <footer class="footer footer-static footer-light">
                <p class="clearfix blue-grey lighten-2 mb-0"><span class="float-md-left d-block d-md-inline-block mt-25">COPYRIGHT &copy; 2019<a class="text-bold-800 grey darken-2" href="https://1.envato.market/pixinvent_portfolio" target="_blank">Pixinvent,</a>All rights Reserved</span><span class="float-md-right d-none d-md-block">Hand-crafted & Made with<i class="feather icon-heart pink"></i></span>
                    <button class="btn btn-primary btn-icon scroll-top" type="button"><i class="feather icon-arrow-up"></i></button>
                </p>
            </footer> -->
            <!-- END: Footer-->

        <?php endif; ?>
        <!-- END: PAROKIA USER PAGE -->


        <!-- BEGIN: Vendor JS-->
        <script src="js/vendors.min.js"></script>
        <!-- BEGIN Vendor JS-->

        <!-- BEGIN: Page Vendor JS-->
        <script src="js/datatables.min.js"></script>
        <script src="js/datatables.buttons.min.js"></script>
        <script src="js/datatables.bootstrap4.min.js"></script>
        <script src="js/buttons.bootstrap.min.js"></script>
        <script src="js/jqBootstrapValidation.js"></script>
        <script src="js/pdfmake.min.js"></script>
        <script src="js/vfs_fonts.js"></script>
        <script src="js/buttons.html5.min.js"></script>
        <script src="js/buttons.print.min.js"></script>
        <script src="js/sweetalert2.all.min.js"></script>
        <!-- END: Page Vendor JS-->

        <!-- BEGIN: Theme JS-->
        <script src="js/app-menu.js"></script>
        <script src="js/app.js"></script>
        <script src="js/components.js"></script>
        <!-- END: Theme JS-->

        <!-- BEGIN: Page JS-->
        <script src="js/form-validation.js"></script>
        <!-- END: Page JS-->

        <!-- BEGIN: Main JS-->
        <script src="js/myJavaScript.js"></script>
        <!-- END Main JS-->

    </body>
    <!-- END: Body-->

</html>