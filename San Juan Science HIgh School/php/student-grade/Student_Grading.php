<?php
// studentnum; name; gender; grade; section; teacher
// edit; save

if(!isset($_SESSION)) {
    session_start();
}
require '../ConnectToDB.php';

if (isset($_POST['ID'])) {
    $id = $_POST['ID'];
    $stmt = $db->query("SELECT * FROM student WHERE StudentNum = '$id'");
    $stmt->execute();
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Student Grading</title>

    <link rel="icon" href="../../pictures/logo.png" />
    <!-- <link rel="stylesheet" type="text/css" href="../../css/Entire.css"> -->
    <link rel="stylesheet" type="text/css" href="../../css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../../css/Student_Grading.css">
</head>

<body>
    <img src="../../pictures/logodesign.jpg" class="logodesign">
    <div class="header mb-3">
        <img src="../../pictures/JuanSci-Header.jpg" class="logodesign">
        <legend class="h4 pl-0 pt-3 mb-0">REPORT ON STUDENT'S PROGRESS IN LEARNING</legend>
        <div class="menu">
            <a href="#">Administrator</a>|<a href="../../Dashboard.html">Menu</a>|<a href="../../Portal.html">Logout</a>
        </div>
    </div>

    <form method="post">
        <input type="text" name="ID" id="student_id_search">
        <button type="submit">Find Student Number</button>
    </form>

    <div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Grade Level</th>
                </tr>
            </thead>

            <tbody>
            <?php if (isset($_POST['ID'])) {
                while($row = $stmt->fetch()) { ?>
                    <tr>
                        <td><?php echo $row['FirstName']; ?></td>
                        <td><?php echo $row['LastName']; ?></td>
                        <td><?php echo $row['Gender']; ?></td>
                        <td><?php echo $row['GradeLevel']; ?></td>
                    </tr>
                <?php }
            } ?>
            </tbody>
        </table>
    </div>
    
    <br />

    <div>
        <table id="table">
            <thead>
                <tr>
                    <th rowspan="2">LEARNING AREAS</th>
                    <th colspan="4">Quarterly Rating</th>
                    <th rowspan="2">FINAL RATING</th>
                    <th rowspan="2">REMARKS</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                </tr>
            </thead>

            <tbody>
                <tr id="fil">
                    <td>Filipino</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="filTotal">80</td>
                    <td></td>
                </tr>

                <tr id="eng">
                    <td>English</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="engTotal">80</td>
                    <td></td>
                </tr>

                <tr id="math">
                    <td>Mathematics</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="mathTotal">80</td>
                    <td></td>
                </tr>

                <tr id="sci">
                    <td>Science</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="sciTotal">80</td>
                    <td></td>
                </tr>

                <tr id="ap">
                    <td>Araling Panlipunan (AP)</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="apTotal">80</td>
                    <td></td>
                </tr>

                <tr id="esp">
                    <td>Edukasyon sa Pagpapakatao (EsP)</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="espTotal">80</td>
                    <td></td>
                </tr>

                <tr id="tle">
                    <td>Technology and Livelihood Education (TLE)</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="tleTotal">80</td>
                    <td></td>
                </tr>

                <tr id="mapeh">
                    <td>MAPEH</td>
                    <td><input type="number" value=80 min="65" max="100" disabled /></td>
                    <td><input type="number" value=80 min="65" max="100" disabled /></td>
                    <td><input type="number" value=80 min="65" max="100" disabled /></td>
                    <td><input type="number" value=80 min="65" max="100" disabled /></td>
                    <td id="mapehTotal">80</td>
                    <td></td>
                </tr>

                <tr id="music">
                    <td>&nbsp Music</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="musicTotal">80</td>
                    <td></td>
                </tr>

                <tr id="arts">
                    <td>&nbsp Arts</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="artsTotal">80</td>
                    <td></td>
                </tr>

                <tr id="pe">
                    <td>&nbsp Physical Education</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="peTotal">80</td>
                    <td></td>
                </tr>

                <tr id="health">
                    <td>&nbsp Health</td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td><input type="number" value=80 min="65" max="100" /></td>
                    <td id="healthTotal">80</td>
                    <td></td>
                </tr>

                <tr>
                    <td></td>
                    <td colspan="4">General Average</td>
                    <td id="gwa"></td>
                    <td></td>
                </tr>


            </tbody>
        </table>
    </div>

    <ul>
        <li>grade inputs are only 65-100</li>
        <li>if grades >= 75 {passed}. else {failed}</li>
        <li>mapeh = (music + arts + pe + health) / 4</li>
    </ul>

    <div class="footer">
        <img src="../../pictures/JuanSci-Footer.jpg" class="logodesign">
     	<p class="footer-text">© 2019 - San Juan Science High School. All Rights Reserved</p>
   	</div>

    <script src="../../js/Student_Grading.js" type="text/javascript"></script>
</body>

</html>