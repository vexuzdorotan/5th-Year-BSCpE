<?php
session_start();
if($_SESSION['id'] === null || $_SESSION['access'] != "admin"){
    header('Location: ../Portal.php');
}
?>
<!DOCTYPE html>
<html>

<head>
    <title>Dashboard - Employees</title>
    <script type="text/javascript" src="../js/jquery-3.4.1.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="../css/Dashboard.css" />
    <link rel="stylesheet" type="text/css" href="../css/all.css" />
    <link rel="icon" href="../pictures/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body class="bg-light">
    <center><img src="../pictures/logodesign.jpg" class="logo" /></center>
    <div class="my-container">
        <nav class="menu">
            <ul>
                <li><a href="../Home.html" class="main-li"><i class="fas fa-home"></i>Home</a></li>
                <li><a href="" class="main-li"><i class="fas fa-desktop"></i>Dashboard</a>
                    <div class="sub-div">
                        <a class="sub-li" href="Dashboard.php">Overview</a>
                        <a class="sub-li" href="Dashboard_1.php">Students</a>
                        <a class="sub-li  active" href="#">Employees</a>
                        <a class="sub-li" href="Dashboard_3.php">Schedules</a>
                        <a class="sub-li" href="SubjectCode.php">Subjects</a>
                        <a class="sub-li" href="Section.php">Sections</a>
                        <a class="sub-li" href="Room.php">Rooms</a>
                    </div>
                </li>
                <li><a href="" class="main-li"><i class="fas fa-cog"></i>Settings</a></li>
            </ul>
        </nav>
        <div class="content">
            <div class="option">
                <a href="Employee_Registration.php">
                    <img src="../pictures/add-employee.png" class="img-opt">
                    <p>add employee</p>
                </a>
            </div>
            <div class="option">
                <a href="#">
                    <img src="../pictures/employees.png" class="img-opt">
                    <p>list of employees</p>
                </a>
            </div>
            <div class="option">
                <a href="#">
                    <img src="../pictures/teachersz.png" class="img-opt">
                    <p>list of teachers</p>
                </a>
            </div>
        <!---
            <div class="option">
                <a href="../admin/">
                    <img src="../pictures/grade.png" class="img-opt">
                    <p>add grade</p>
                </a>
            </div>
        -->


        </div>
    </div>


    <script type="text/javascript" src="../js/Dashboard.js"></script>
</body>

</html>