<?php
    session_start();
    if($_SESSION['id'] === null || $_SESSION['access'] != "teacher"){
        header('Location: ../Portal.php');
    }

    include '../php/Header_User.php';
?>

<!DOCTYPE html>
<html>

<head>
    <title>JuanSci Dashboard</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="../css/newDashboard.css" />
    <link rel="icon" href="../pictures/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>
    <center><img src="../pictures/logodesign.jpg" class="logo" /></center>
    <div class="mycontainer">

        <div class="header float-right">
			<a href="#" class="header-link float-right">HELP</a>
			<span class="separator">|</span>
            <a href="#" class="header-link float-right">POLICY</a>
            <span class="separator">|</span>
            <a href="../Portal.php" class="header-link float-right">LOGOUT</a>
			<br/>
			<p class="h5 mb-1 float-right bd">JuanSci Portal - MAIN MENU</p><br/>
			<p class="header-text float-right"><span class="name" id="name">
                <?php echo 'Welcome, ' . $honorific . $fullname?></span></p>
        </div>
        </br>
        <div class="row content">
            <div class="col option">
                <a href="Schedule.php">
                    <img src="../pictures/sched.png" class="img-opt">
                </a>
                <p class="label">Check Schedule</p>
            </div>  
            <div class="col option">
                <a href="Grade_Subject.php">
                    <img src="../pictures/gradesubject.png" class="img-opt">
                </a>
                <p class="label">Grade Students on Subjects</p>
            </div>
            <div class="col option">
                <a href="Grade_Values.php">
                   <img src="../pictures/gradevalue.png" class="img-opt">
                </a>
                <p class="label">Grade Students on Values</p>
            </div>
            <div class="col option">
                <a href="../php/Grade_View.php">
                    <img src="../pictures/print.png" class="img-opt">
                </a>
                <p class="label">Print Student Grades</p>
            </div>
        </div>


    </div>

    <div class="footer">
		<p class="footer-text">© 2020 - San Juan Science High School. All Rights Reserved</p>
	</div>
    


</body>

</html>