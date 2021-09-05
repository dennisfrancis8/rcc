<?php
include_once 'login.php';
?>

<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <title>MATUMIZI</title>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>

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
    <?php if (!isset($_SESSION["privilegeName"]) && !isset($_SESSION["occupationName"]) && !isset($_SESSION["isLoggedIn"])) : ?>
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
    <?php if ($_SESSION["privilegeName"] == "PAROKIA" && isset($_SESSION["isLoggedIn"])) : ?>
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
                            <h2 class="brand-text mb-0">CHURCH</h2>
                        </a>
                    </li>
                    <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>
                </ul>
            </div>
            <div class="shadow-bottom"></div>
            <div class="main-menu-content">
                <div class="sidenavUser">
                    <div class="usernamePhoto">
                        <img src="img/user.jpg" alt="user">
                        <span class="username" id="loggedInUserFullName">Loading...</span>
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
                    <li class=" navigation-header"><span>MATUMIZI</span></li>
                    <li class=" nav-item"><a onclick="open_content_page('viewRequests')" id="requestExpenseBtn"><i class="feather icon-file"></i><span class="menu-title" data-i18n="View Report">Add Requests</span></a></li>
                    <li class=" nav-item"><a onclick="open_content_page('pendingContributionContentPage')" id="pendingContributionBtn"><i class="feather icon-file"></i><span class="menu-title" data-i18n="pending Request">Pending Requests</span></a></li><br>
                    <li class=" navigation-header"><span>MATUMIZI TYPE</span></li>
                    <li class=" nav-item"><a onclick="open_content_page('pendingContributionContentPage')" id="pendingContributionBtn"><i class="feather icon-file"></i><span class="menu-title" data-i18n="pending Request">Matumizi Type</span></a></li><br>
                    <li class=" nav-item"><a onclick="open_content_page('balancePage')" id="balancebtn"><i class="feather icon-file"></i><span class="menu-title" data-i18n="View Report">Balance</span></a></li><br>
                </ul>
            </div>
        </div>
        <!-- END: Main Menu-->

        <!-- BEGIN: Content-->
        <div class="app-content content">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper">
                <div class="content-header row"></div>
                <div class="content-body">
                    <!-- CHECK CONTRIBUTION Content Page section start -->
                    <div class="contentPages" id="viewRequests">
                        <section id="check-contribution-data-list-view" class="data-list-view-header">
                            <!-- check Requests  DataTable starts -->
                            <div class="table-responsive">
                                <div id="requestTable"></div>
                            </div>
                            <!-- check Contribution DataTable ends -->
                        </section>
                    </div>
                    <!-- Pending  Content Page section start -->
                    <div class="contentPages" id="pendingContributionContentPage">
                        <section id="check-contribution-data-list-view" class="data-list-view-header">
                            <!-- check Contribution DataTable starts -->
                            <div class="table-responsive">
                                <div id="pendingContributionTable"></div>
                            </div>
                            <!-- check Contribution DataTable ends -->
                        </section>
                    </div>

                    <div class="contentPages" id="balancePage">
                        <section id="check-contribution-data-list-view" class="data-list-view-header">
                            <!-- check Contribution DataTable starts -->
                            <div class="table-responsive">
                                <div id=""></div>
                            </div>
                            <!-- check Contribution DataTable ends -->
                        </section>
                    </div>

                    <!-- overlay div-->
                    <div class="w3-overlay w3-animate-opacity w3-display-container" id="myOverlay" style="z-index: 15; width: 100%; height: 100%; cursor:pointer; display: none;">
                        <div class="col-xl-8 col-md-8 col-sm-8 w3-display-middle contentPages" id="formCard" style="display: none;">
                            <div class="card ">
                                <div class="card-header"></div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-4 ">
                                                <div class="text-bold-600 font-medium-2">
                                                    <p>Matumizi ya Kanisa</p>
                                                </div>
                                                <div class="form-group">
                                                    <div id="requestSelect"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row" x-data="handler()" style="display: none;" id="matumiziInput">
                                        <div class="col" style="overflow: auto;">
                                            <table class="table table-bordered align-items-center table-sm">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Item</th>
                                                        <th>Amount</th>
                                                        <th>Remove</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <template x-for="(field, index) in fields" :key="index">
                                                        <tr id='rowItems'>
                                                            <td x-text="index + 1"></td>
                                                            <td><input x-model="field.txt1" type="text" name="txt1[]" class="form-control "></td>
                                                            <td><input x-model="field.txt2" type="text" name="txt2[]" class="form-control "></td>

                                                            <td><button type="button" class="btn btn-danger btn-small" @click="removeField(index)">&times;</button></td>
                                                        </tr>
                                                    </template>
                                                </tbody>

                                                <tfoot>
                                                    <tr>
                                                        <td colspan="4" class="text-right"><button type="button" class="btn btn-info" @click="addNewField()">+ Add Row</button></td>

                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>

                                    <!-- petty cash div -->
                                    <div class="position-relative has-icon-left col-md-8 requestType" style="display:none;" id="pettyCashInput">
                                        <input type="text" id="fname-icon" class="form-control" name="fname-icon" placeholder="Enter Amount">
                                        <div class="form-control-position">
                                            <i class="feather icon-wind"></i>
                                        </div>
                                    </div>

                                    <div class="card-btns d-flex justify-content-between mt-2">
                                        <button class="btn gradient-light-primary text-black" id="submitExpenseForm">Send</button>
                                        <!-- testing hover -->
                                        
                                        <!-- testing hover -->
                                        <button class="btn btn-outline-primary abortContributionActions" id="abortExpenseForm">Abort</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END: Content-->
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
    <script src="js/matumiziScript.js"></script>
    <!-- END Main JS-->

    <!-- BEGIN: Main JS-->
    <script src="js/myJavaScript.js"></script>
    <!-- END Main JS-->

    <!-- BEGIN: Main JS-->
    <script src="myScript.js"></script>
    <!-- END Main JS-->

    <!-- BEGIN: Page JS-->
    <script src="/js/popover.js"></script>
    <script src="/js/popover.min.js"></script>
    <script src="/js/vendors.min.js"></script>
    <!-- END: Page JS-->



</body>
<!-- END: Body-->

</html>