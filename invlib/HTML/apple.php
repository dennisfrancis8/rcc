<?php
// (A) HTML HEADER & STYLES

use Mpdf\Tag\Center;

$this->data = "<!DOCTYPE html><html><head><style>".
"html,body{font-family:sans-serif}#invoice{max-width:800px;margin:0 auto}#billship,#company,#items{width:100%;border-collapse:collapse}#company td,#billship td,#items td,#items th{padding:15px}#company,#billship{margin-bottom:30px}#company img{max-width:180px;height:auto}#bigi{font-size:28px;color:black}#billship{background-color:#defa3e;color:#000000}#billship td{width:33%}#items th{text-align:left;border-top:2px solid grey;border-bottom:2px solid grey}#items td{border-bottom:1px solid grey}.idesc{color:#ca3f3f}.ttl{font-weight:700}.right{text-align:right}#notes{margin-top:30px;font-size:.95em}".
"</style><link rel='stylesheet' href='stylesx.css'></head><body ><div id='invoice'>";

$this->data .= "<div class='ml-1' align='right'><button class='btn btn-outline-primary' id='printReceiptBtn' title='print'><i class='feather icon-printer'></i>Print</button></div>";

// (B) COMPANY
$this->data .= "<div id='receiptNzima'><div><img src = capture.jpg width = '100%'></div><br><br><br>";	
//$this->data .= "<div id='bigi'>RISITI</div>";

// (C) BILL TO
$this->data .= "<table id='billship'><tr><td><strong>IMETOLEWA NA. </strong><br>";
foreach ($this->billto as $b) {
    $this->data .= "<strong>$b[0]:</strong> $b[1]<br>";
}

// (D) SHIP TO
$this->data .= "</td><td><strong>IMETOLEWA KWA. </strong><br>";
foreach ($this->shipto as $s) {
    $this->data .= "<strong>$s[0]:</strong> $s[1]<br>";
}

// (E) INVOICE INFO
$this->data .= "</td><td>";
foreach ($this->head as $i) {
	$this->data .= "<strong>$i[0]:</strong> $i[1]<br>";
}
$this->data .= "</td></tr></table>";
	$total = 0;
// (F) ITEMS
$this->data .= "<table id='items'><tr><th align='center'>Aina ya Mchango</th><th align='center'>Kiasi</th><th align='center'>Maelezo</th></tr>";
foreach ($this->items as $i) {
	$numFormat = number_format($i[1]);
	$this->data .= "<tr><td>" . $i[0] . "</td><td>TShs. " . $numFormat . "/=</td><td>" . $i[2] . "</td></tr>";
	$total += $i[1];
}



// (G) TOTALS
$this->data .= "<tr class='ttl'><td class='right' colspan='2'>Jumla Kuu</td><td>Tshs. " . number_format($total)  . "/=</td></tr>";
$this->data .= "</table>";




// (H) NOTES
if (count($this->notes)>0) {
	$this->data .= "<div id='notes'>";
	foreach ($this->notes as $n) {
		$this->data .= $n."<br>";
	}
	$this->data .= "</div></div>";
}

$this->data .= "<script src='myscript.js'></script>";

// (I) CLOSE
$this->data .= "</div></body></html>";