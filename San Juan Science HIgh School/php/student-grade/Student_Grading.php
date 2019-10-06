<?php
// studentnum; name; gender; grade; section; teacher
// edit; save

if(!isset($_SESSION)) {
    session_start();
}
require '../ConnectToDB.php';

if (isset($_POST['StudentNum'])) {
    $id = $_POST['StudentNum'];
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
        <!--<img src="../../pictures/JuanSci-Header.jpg" class="logodesign">-->
        <legend class="h4 pl-0 pt-3 mb-0">REPORT ON STUDENT'S PROGRESS IN LEARNING</legend>
        <div class="menu">
            <a href="#">Administrator</a>|<a href="../../Dashboard.html">Menu</a>|<a href="../../Portal.html">Logout</a>
        </div>
    </div>
    <div class="my-container">
        <div class="float-right">
            <form method="post">
                <input type="text" name="StudentNum" id="StudentNum">
                <button type="submit">Find Student Number</button>
            </form>
        </div>

        <button class="rounded-pill" id="submitForm" name="submitForm">SUBMIT</button>

        <!-- <label for="GradeLevel">Grade Level: </label>
         <select id="GradeLevel">
            <option selected="selected">7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
    </select> -->

        <div class="pt-2">
            <table>
                <thead>
                    <tr>
                        <th>Student Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Grade Level</th>
                    </tr>
                </thead>

                <tbody>
                    <?php if (isset($_POST['StudentNum'])) {
                        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) { ?>
                            <tr>
                                <td id="StudentNum" name="StudentNum"><?php echo $row['StudentNum']; ?></td>
                                <td><?php echo $row['FirstName']; ?></td>
                                <td><?php echo $row['LastName']; ?></td>
                                <td><?php echo $row['Gender']; ?></td>
                                <td id="GradeLevel" name="GradeLevel"><?php echo $row['GradeLevel']; ?></td>
                            </tr>
                        <?php }
                    } ?>
                </tbody>
            </table>
        </div>

        <br />
        <div class="row">
            <div class="col-9 p-0 m-0">
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
                            <td><input id="filQ1" name="filQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="filQ2" name="filQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="filQ3" name="filQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="filQ4" name="filQ4" type="number" value=80 min="65" max="100" /></td>
                            <td id="filTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="eng">
                            <td>English</td>
                            <td><input id="engQ1" name="engQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="engQ2" name="engQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="engQ3" name="engQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="engQ4" name="engQ4" type="number" value=80 min="65" max="100" /></td>
                            <td id="engTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="math">
                            <td>Mathematics</td>
                            <td><input id="mathQ1" name="mathQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="mathQ2" name="mathQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="mathQ3" name="mathQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="mathQ4" name="mathQ4" type="number" value=80 min="65" max="100" /></td>
                            <td id="mathTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="sci">
                            <td>Science</td>
                            <td><input id="sciQ1" name="sciQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="sciQ2" name="sciQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="sciQ3" name="sciQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="sciQ4" name="sciQ4" type="number" value=80 min="65" max="100" /></td>
                            <td id="sciTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="ap">
                            <td>Araling Panlipunan (AP)</td>
                            <td><input id="apQ1" name="apQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="apQ2" name="apQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="apQ3" name="apQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="apQ4" name="apQ4" type="number" value=80 min="65" max="100" /></td>
                            <td id="apTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="esp">
                            <td>Edukasyon sa Pagpapakatao (EsP)</td>
                            <td><input id="espQ1" name="espQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="espQ2" name="espQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="espQ3" name="espQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="espQ4" name="espQ4" type="number" value=80 min="65" max="100" /></td>
                            <td id="espTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="tle">
                            <td>Technology and Livelihood Education (TLE)</td>
                            <td><input id="tleQ1" name="tleQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="tleQ2" name="tleQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="tleQ3" name="tleQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="tleQ4" name="tleQ4" type="number" value=80 min="65" max="100" /></td>
                            <td id="tleTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="mapeh">
                            <td>MAPEH</td>
                            <td><input id="mapehQ1" name="mapehQ1" type="number" value=80 min="65" max="100" disabled /></td>
                            <td><input id="mapehQ2" name="mapehQ2" type="number" value=80 min="65" max="100" disabled /></td>
                            <td><input id="mapehQ3" name="mapehQ3" type="number" value=80 min="65" max="100" disabled /></td>
                            <td><input id="mapehQ4" name="mapehQ4" type="number" value=80 min="65" max="100" disabled /></td>
                            <td id="mapehTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="music">
                            <td>&nbsp Music</td>
                            <td><input id="musicQ1" name="musicQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="musicQ2" name="musicQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="musicQ3" name="musicQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="musicQ4" name="musicQ4" type="number" value=80 min="65" max="100" /></td>
                            <td id="musicTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="arts">
                            <td>&nbsp Arts</td>
                            <td><input id="artsQ1" name="artsQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="artsQ2" name="artsQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="artsQ3" name="artsQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="artsQ4" name="artsQ4" type="number" value=80 min="65" max="100" /></td>
                            <td id="artsTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="pe">
                            <td>&nbsp Physical Education</td>
                            <td><input id="peQ1" name="peQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="peQ2" name="peQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="peQ3" name="peQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="peQ4" name="peQ4" type="number" value=80 min="65" max="100" /></td>
                            <td id="peTotal">80</td>
                            <td></td>
                        </tr>

                        <tr id="health">
                            <td>&nbsp Health</td>
                            <td><input id="healthQ1" name="healthQ1" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="healthQ2" name="healthQ2" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="healthQ3" name="healthQ3" type="number" value=80 min="65" max="100" /></td>
                            <td><input id="healthQ4" name="healthQ4" type="number" value=80 min="65" max="100" /></td>
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


            <div class="col-3 p-0 m-0">
                <p class="h6">Notes:</p>
                <ul>
                    <li>grade inputs are only 65-100</li>
                    <li>if grades >= 75 (passed)<br/> else (failed)</li>
                    <li>MAPEH = <br/>(Music + Arts + PE + Health) / 4</li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <!--<img src="../../pictures/JuanSci-Footer.jpg" class="logodesign">-->
            <p class="footer-text">© 2019 - San Juan Science High School. All Rights Reserved</p>
        </div>
    </div>
    <script src="../../js/ajax.js" type="text/javascript"></script>
    <script src="../../js/Student_Grading.js" type="text/javascript"></script>
</body>

</html>