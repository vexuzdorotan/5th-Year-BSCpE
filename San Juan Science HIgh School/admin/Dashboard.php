<?php
    session_start();
    if($_SESSION['id'] === null || $_SESSION['access'] != "admin"){
        header('Location: ../Portal.php');
    }
?>

<!DOCTYPE html>
<html>

<head>
    <title>JuanSci Dashboard</title>
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
                        <a class="sub-li active" href="#">Overview</a>
                        <a class="sub-li" href="Dashboard_1.php">Students</a>
                        <a class="sub-li" href="Dashboard_2.php">Employees</a>
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
            <div class="count student">
                <p class="number">1,234</p>
                <p class="title">student</p>
                <p class="subtitle">Total Students</p>
            </div>
            <div class="count teacher">
                <p class="number">56</p>
                <p class="title">teacher</p>
                <p class="subtitle">Total Teachers</p>
            </div>
            <div class="count section">
                <p class="number">31</p>
                <p class="title">section</p>
                <p class="subtitle">Total Sections</p>
            </div>
            <div class="count room">
                <p class="number">12</p>
                <p class="title">room</p>
                <p class="subtitle">Rooms Available</p>
            </div>
            
        </div>
       
    </div>



</body>

</html>