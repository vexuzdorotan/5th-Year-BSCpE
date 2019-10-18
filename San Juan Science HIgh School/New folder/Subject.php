<!DOCTYPE html>
<html>
<head>
	<title>Subject</title>
	<link rel="stylesheet" type="text/css" href="css/Entire.css">
	<style type="text/css">
		
		textarea{
			min-width: 95%;
			max-width: 95%;
		}
		
		body *{
			font-weight: bold;
		}

		div{
			border: 0.01em solid black;
			width: 49.95%;
			height: 45%;
		}	

	</style>
</head>
<body>
<div style="float: left;">
	<h1>Subject Creation</h1>
	<p><label for="SubName">Subject Name: <input type="text" name="SubName" id="SubName"/></label></p>
	<p><label for="SubDescri">Subject Description:</label></p>
	<textarea name="SubDescri" id="SubDescri"></textarea>
	<p><label for="GradeLevel">For Grade: <select id="GradeLevel" name="GradeLevel">
		<option selected="selected">Grade 7</option>
		<option>Grade 8</option>
		<option>Grade 9</option>
		<option>Grade 10</option>
	</select></label></p>
	<button id="CreateSub" name="CreateSub">Create</button>
</div>
<div style="float: right;">
	<h1>Scheduling</h1>
	<p><label for="Section">Section: <input type="search" name="Section" id="Section"></label></p>
	<p><label for="Subject">Subject: <select id="Subject" name="Subject">
		<option></option>
	</select></label></p>
	<p><label for="Day">Day: <select id="Day" name="Day">
		<option selected="selected">Monday</option>
		<option>Tuesday</option>
		<option>Wednesday</option>
		<option>Thursday</option>
		<option>Friday</option>
	</select></label></p>
	<p><label for="Hour">Hour: <select id="Hour" name="Hour">
		<option selected="selected">6:00-7:00</option>
		<option>7:00-8:00</option>
		<option>8:00 - 9:00</option>
		<option>10:20 - 11:20</option>
		<option>10:20 - 11:20</option>
		<option>10:20 - 11:20</option>
		<option>1:00 - 2:00</option>
		<option>2:00 - 3:00</option>
		<option>3:00 - 4:00</option>
	</select></label></p>
</div>
<div>
	
</div>
</body>
</html>