<?php

	// if the caller pressed anything but 1 to 6 send them back
	//if($_REQUEST['Digits'] = '1' and $_REQUEST['Digits'] != '2' and $_REQUEST['Digits'] != '3' and $_REQUEST['Digits'] != '4' and $_REQUEST['Digits'] != '5' and $_REQUEST['Digits'] != '6') {
	//	header("Location: superdialler.php");
	//	die;
	//}
	
	// otherwise call the appropriate person 
	header("content-type: text/xml");
	echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
?>
<Response>
<?php if ($_REQUEST['Digits'] == '1') { ?>
	<Dial>+($_REQUEST['Digits']</Dial>
	<Say>The call failed or the remote party hung up.  Goodbye.</Say>
<?php } ?>
</Response>