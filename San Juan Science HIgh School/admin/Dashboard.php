<?php
    session_start();
    if($_SESSION['id'] === null || $_SESSION['access'] != "admin"){
        header('Location: ../Portal.php');
    }

    //Overview INFO
    require "../php/ConnectToDB.php";

    $stmt = $db->prepare("SELECT COUNT(LRNNum) FROM student");
    $stmt->execute();
    $numberOfStudents = $stmt->fetch()[0];
    $stmt = $db->prepare("SELECT COUNT(EmployeeNum) FROM teacher");
    $stmt->execute();
    $numberOfTeachers = $stmt->fetch()[0];
    $stmt = $db->prepare("SELECT COUNT(SectionNum) FROM section");
    $stmt->execute();
    $numberOfSections = $stmt->fetch()[0];
    $stmt = $db->prepare("SELECT COUNT(RoomNum) FROM room");
    $stmt->execute();
    $numberOfRooms = $stmt->fetch()[0];
    $stmt->closeCursor();
    // echo $numberOfStudents;
?>
<!-- <script type="text/javascript">
    console.log("<?php echo($_SESSION['id'])?>".split("-")[0]);
</script> -->
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
                <!--<li><a href="../Home.html" class="main-li"><i class="fas fa-home"></i>Home</a></li>-->
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
                <li><a href="../portal.php" class="main-li"><i class="fas fa-sign-out-alt" style="transform: rotate(180deg)"></i>Logout</a></li>
            </ul>
        </nav>
        <div class="content">
            <div class="count student">
                <p class="number"><?php echo $numberOfStudents;?></p>
                <p class="title">student</p>
                <p class="subtitle">Total Students</p>
            </div>
            <div class="count teacher">
                <p class="number"><?php echo $numberOfTeachers;?></p>
                <p class="title">teacher</p>
                <p class="subtitle">Total Teachers</p>
            </div>
            <div class="count section">
                <a href="Section.php">
                <p class="number"><?php echo $numberOfSections;?></p>
                <p class="title">section</p>
                <p class="subtitle">Total Sections</p></a>
            </div>
            <div class="count room">
                <a href="Room.php">
                <p class="number"><?php echo $numberOfRooms;?></p>
                <p class="title">room</p>
                <p class="subtitle">Rooms Available</p></a>
            </div>
            
        </div>
       
    </div>



</body>

</html>