<?php

	
		
	// now greet the caller
	header("content-type: text/xml");
	echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
?>
<Response>
	<Say> Hello, connecting you now </Say>
	<Gather finishOnKey="#" action="superdialler-handle-key.php" method="POST">
	</Gather>
</Response>
