<?php


// (A) LOAD INVOICR
    require "invlib/invoicr.php";
    require 'database_conn.php';
    require 'definition.php';

    $uID = $_POST['userID'];
    $contributor = $_POST['jName'];
    $payer = $_POST['payerName'];
    $contributionType = $_POST['contType'];
    $contributionAmount = $_POST['amount'];
    $contributionDesc = $_POST['desc'];
    $receiptNo = $_POST['receipt'];

    try {
        $time = new DateTime(null, new DateTimeZone('Africa/Dar_es_Salaam'));
        $currentTime = $time->format('Y-m-d H:i:s');
    }
    catch (Exception $e) {
    }

    $db = db_sonak_churchDatabase_connect();

    $query =  "UPDATE `cash_contribution` SET `receiptReceiver` = '$payer', `receiptPrintDate` = '$currentTime' WHERE `receiptNumber` = '$receiptNo'";
    $result = mysqli_query($db, $query);

    if ($result == true) {
        if (isset($_POST['submit'])) {
            $userId = $uID;
            $contributorName = $contributor;
            $payerName = $payer;
            $Receipt_no = $receiptNo;
            $IssueDate = $currentTime;
            $receivedItems = [
                [$contributionType, $contributionAmount, $contributionDesc]
            ];


            // (B) SET INVOICE DATA
            // (B1) COMPANY INFORMATION
            /* RECOMMENDED TO JUST PERMANENTLY CODE INTO INVOICR/INVOICR.PHP > LINE 13
            $invoicr->set("company", [
                "http://localhost/code-boxx-logo.png",
                "D:/http/code-boxx-logo.png",
                "Code Boxx",
                "Street Address, City, State, Zip",
                "Phone: xxx-xxx-xxx | Fax: xxx-xxx-xxx",
                "https://code-boxx.com",
                "doge@code-boxx.com"
            ]); */

            // (B2) INVOICE HEADER
            $invoicr->set("head", [["TAARIFA YA RISITI ", ""], ["Namba ya Risiti", "$Receipt_no"], ["Tarehe Iliyotolewa", "$IssueDate"]]);

            // (B3) BILL TO
            $invoicr->set("billto", [
                ["ID", "$userId "]
            ]);

            // (B4) SHIP TO
            $invoicr->set("shipto", [
                ["Mpokea Risiti", "$payerName"],
                ["(Wa)Mchangiaji", "$contributorName"]
                
            ]);

            // (B5) ITEMS - ADD ONE-BY-ONE
            $items = $receivedItems;
            // foreach ($items as $i) { $invoicr->add("items", $i); }

            // (B6) ITEMS - OR SET ALL AT ONCE
            $invoicr->set("items", $items);

            // (B7) TOTALS
            $invoicr->set("totals", [
                ["SUB-TOTAL", "$108.00"],
                ["DISCOUNT 10%", "-$10.80"],
                ["GRAND TOTAL", "$97.20"]
            ]);

            // (B8) NOTES, IF ANY
            $invoicr->set("notes", [
                "<strong>Muhuri na Saini: " . "</strong><div style='border-color:#FFFFFF;'><br><br><br><br></div>"
            ]);

            // (C) OUTPUT
            // (C1) CHOOSE A TEMPLATE
            $invoicr->template("apple");
            // $invoicr->template("blueberry");
            // $invoicr->template("lime");
            // $invoicr->template("simple");
            // $invoicr->template("strawberry");

            // (C2) OUTPUT IN HTML
            // DEFAULT : DISPLAY IN BROWSER
            // 1 : DISPLAY IN BROWSER
            // 2 : FORCE DOWNLOAD
            // 3 : SAVE ON SERVER
            $invoicr->outputHTML();
            // $invoicr->outputHTML(1);
            // $invoicr->outputHTML(2, "invoice.html");
            // $invoicr->outputHTML(3, __DIR__ . DIRECTORY_SEPARATOR . "invoice.html");

            // (C3) OUTPUT IN PDF
            // DEFAULT : DISPLAY IN BROWSER
            // 1 : DISPLAY IN BROWSER
            // 2 : FORCE DOWNLOAD
            // 3 : SAVE ON SERVER
            // $invoicr->outputPDF();
            // $invoicr->outputPDF(1);
            // $invoicr->outputPDF(2, "invoice.pdf");
            // $invoicr->outputPDF(3, __DIR__ . DIRECTORY_SEPARATOR . "invoice.pdf");

            // (C4) OUTPUT IN DOCS
            // DEFAULT : FORCE DOWNLOAD
            // 1 : FORCE DOWNLOAD
            // 2 : SAVE ON SERVER
            // $invoicr->outputDOCX();
            // $invoicr->outputDOCX(1, "invoice.docx");
            // $invoicr->outputDOCX(2, __DIR__ . DIRECTORY_SEPARATOR . "invoice.docx");

            // (D) USE RESET() IF YOU WANT TO CREATE ANOTHER ONE AFFTER THIS
            // $invoicr->reset();
        }
    }


