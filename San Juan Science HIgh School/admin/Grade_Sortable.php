<?php
     session_start();
     if($_SESSION['id'] === null || $_SESSION['access'] != "admin"){
         header('Location: ../Portal.php');
     }

     include '../php/Header_User.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arrange Grade Subjects</title>

    <link rel="stylesheet" type="text/css" href="../css/all.css" />
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="../css/merged-styles.css" />
    <link rel="icon" href="../pictures/logo.png" />
    
    <style>
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            width:50%;
            float:left;
        }

        li {
            cursor: move;
            margin: 1px;
            padding: 1% 10%;
            font-size: 100%;
            color: white;
            background-color: #800000;
        }

        .ghost {
            opacity: .4;
        }
    </style>
</head>

<body>
    <img src="../pictures/logodesign.jpg" class="logodesign hide-on-print">

    <div class="hide-on-print header mb-3">
        <legend class="h4 pl-0 pt-3 mb-0">ARRANGEMENT OF LEARNING AREAS ON THE REPORT CARD</legend>

        <div class="menu">
        <a href="#"><?php echo 'Welcome, ' . $honorific . $fullname?></a>|<a href="Dashboard.php">Menu</a>|<a href="../Portal.php">Logout</a>
        </div>
    </div>

    <div class="room-container">
        <div class="float-right">
            <label>Selected Grade Level:
                <select id="selectGradeLevel" onchange="wrapperGradeSortable.selectGradeLevel()">
                    <option selected value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </label>
        </div>

        <div class="row">
            <ul id="subjectList"></ul>
            <button id="btnSave">SAVE</button>
        </div>

        <div class="hide-on-print footer">
            <p class="footer-text">© 2020 - San Juan Science High School. All Rights Reserved</p>
        </div>
    </div>


    <script>let EmployeeNum = <?php echo $_SESSION['id']?></script>
    <script src="../js/ajax.js" type="text/javascript"></script>
    <script src="../js/utility.js" type="text/javascript"></script>
    <script src="../js/cms.js" type="text/javascript"></script>
    <script src="../js/Grade_Sortable.js" type="text/javascript"></script>
</body>

</html>