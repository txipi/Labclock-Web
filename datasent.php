<?php
	//data to be filled
	//<configuration>
	$fromEmailAdress = "server@labpsico.com";
	$toEmailAdress = "garaizar@deusto.es";
	$experimentCode = "LIBET-001 - WEB";
	$subjectEmail = "EXPERIMENTAL DATA: " . experimentCode . " //" + date;
	$domain = "deusto.es";
	//</configuration>

	//program variables
	$extraHeaders = "From: " . $fromEmailAdress . "\r\n" .
		"To: " . $toEmailAdress . "\r\n" .
		"Subject: " . $subjectEmail . "\r\n" .
		"X-Mailer: PHP " . $domain;

	$referer = $_SERVER['HTTP_REFERER'];
	if (getenv(HTTP_X_FORWARDED_FOR))
	{
		$ipAddress = getenv(HTTP_X_FORWARDED_FOR);
	}
	else 
	{
		$ipAddress = getenv(REMOTE_ADDR);
	}

	$domainPolicy = strpos($referer, $domain);
	if ($domainPolicy != false) 
	{
		$bodyEmail = $experimentCode . "," . $ipAddress . "," . $_POST["experimentData"];

		if (mail($toEmailAddress, $subjectEmail, $bodyEmail, $extraHeaders)) 
		{
			echo("<p>Data sent!</p>");
		} 
		else 
		{
			echo("<p>Error sending data...</p>");
		}
	}
	else
	{
		echo("<p>Domain policy error</p>");
	}
?>
