<?php
	session_start();
	session_unset();
?>
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>JuanSci Portal</title>
    <link rel="stylesheet" type="text/css" href="css/Portal.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
    <link rel="icon" href="pictures/logo.png">
</head>
<body>
	<img src="pictures/logodesign.jpg" class="logo">
	<div class="mycontainer">
		<div class="header float-right">
			<a href="#" class="header-link float-right">HELP</a>
			<span class="separator">|</span>
			<a href="#" class="header-link float-right">POLICY</a>
			<br/>
			<p class="h5 mb-1 float-right">LOGIN TO JUANSCI Portal</p><br/>
			<p class="header-text float-right"><span class="text-light">-----</span>Enter your username and password to continue</p>
		</div>
		<div class="login-form">
			<p class="h6"><label for="Username">User Name: </label>
				<input type="text" name="Username" class="float-right"/>
			</p>
			<p class="h6"><label for="Password">Password:</label>
				<input type="password" name="Password" class="float-right"/>
			</p>
			<p class="h6" id="verify" style="display: none;"><label for="VerifyPassword">Verify:</label>
				<input type="password" name="VerifyPassword" class="float-right"/>
			</p>
			<p class="h6"><label for="account">Log In As:</label>
				<select name="account">
					<option>Admin</option>
					<option>Teacher</option>
					<option>Student</option>
				</select>
			</p>
			<p class="h6">
			<!-- <a href="dashboards/Overview.html"><button class="rounded-pill" type="submit">LOGIN</button></a> -->
			<button class="rounded-pill" type="submit">LOGIN</button></a>
			<button class="rounded-pill" type="submit">RESET</button>
			</p>
		</div>
	</div>
	<div class="footer">
		<p class="footer-text">© 2019 - San Juan Science High School. All Rights Reserved</p>
	</div>
<script type="text/javascript" src="js/ajax.js"></script>
<script type="text/javascript" src="js/cms.js"></script>
<script type="text/javascript" src="js/Authenticate.js"></script>
</body>
</html>
