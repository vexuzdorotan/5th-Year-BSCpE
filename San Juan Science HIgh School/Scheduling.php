<!DOCTYPE html>
<html>
<head>
	<title>Scheduling</title>
	<style type="text/css">
		thead, td, table{
			border: 1px solid black;
		}
		table{
			border-collapse: collapse;
		}
		table *{
			text-align: center;
		}
	</style>
	<link rel="stylesheet" type="text/css" href="css/modal.css"/>
</head>
<body>
	<div id="modal">
		<div id="modal-content">
			<span id="close" onclick="closeModal(document.getElementById('modal-body'));">&times;</span>
			<div id="modal-header">
				<h2 id="modal-title"></h2>
			</div>
			<div id= "modal-body">
			</div>
			<div id="modal-footer">	
			</div>
		</div>
	</div>
	<p><input type="text" id="txt_SectionNum" style="display: none;"/>
		<label for="">Section Name: <input type="text" id="txt_SectionName" required/></label>
		<button>&check;</button>
	</p>
	<p>Grade Level: <span id="txt_GradeLevel"></span></p>
	<p>Adviser: <span id="txt_Adviser"></span></p>
	<table>
		<thead>
			<tr>
				<td>TIME</td>
				<td>Monday</td>
				<td>Tuesday</td>
				<td>Wednesday</td>
				<td>Thursday</td>
				<td>Friday</td>
			</tr>
		</thead>
			<tr>
				<td>6:00-7:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>7:00-8:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>8:00-9:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>9:00-9:20</td>
				<!-- AM BREAK -->
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>9:20-10:20</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>10:20-11:20</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>11:20-12:20</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>12:20-1:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>1:00-2:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>2:00-3:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>3:00-4:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		<tbody>
			
		</tbody>
	</table>
	<!-- <button>SUBMIT</button> -->
	<button>RESET</button>
<script type="text/javascript" src="js/ajax.js"></script>
<script type="text/javascript" src="js/utility.js"></script>
<script type="text/javascript" src="js/cms.js"></script>
<script type="text/javascript" src="js/Scheduling.js"></script>
<script type="text/javascript" src="js/modal.js"></script>
</body>
</html>