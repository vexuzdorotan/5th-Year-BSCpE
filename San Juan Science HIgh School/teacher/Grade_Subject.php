<?php
    session_start();
    if($_SESSION['id'] === null || $_SESSION['access'] != "teacher"){
        header('Location: ../Portal.php');
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Subject Grades</title>

    <link rel="stylesheet" type="text/css" href="../css/modal.css" />
    <link rel="stylesheet" type="text/css" href="../css/all.css" />
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="../css/merged-styles.css" />
    <link rel="icon" href="../pictures/logo.png" />
</head>

<body>
    <img src="../pictures/logodesign.jpg" class="logodesign">

    <div class="header mb-3">
        <legend class="h4 pl-0 pt-3 mb-0">REPORT ON LEARNING PROGRESS AND ACHIEVEMENT</legend>
        <div class="menu">
        <a href="#">[Teacher's Name]</a>|<a href="Dashboard.php">Menu</a>|<a href="../Portal.php">Logout</a>
        </div>
    </div>

    <div class="room-container">
        <div id="modal">
            <div id="modal-content">
                <span id="close" onclick="closeModal(document.getElementById('modal-body'));">&times;</span>
                <div id="modal-header">
                    <h2 id="modal-title"></h2>
                </div>
                <div id="modal-body">
                </div>
                <!-- <div class="ml-3 mr-3 mt-0">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link maroon" href="#">1</a></li>
                            <li class="page-item"><a class="page-link maroon" href="#">2</a></li>
                            <li class="page-item"><a class="page-link maroon" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link maroon" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div> -->
                <div id="modal-footer">
                </div>
            </div>
        </div>

        <div class="float-right">
            <label for="">(TEMP) EmployeeNum:
                <input type="number" id="txt_EmployeeNum" min="1" value="1" />
            </label>
        </div>
        <br /><br />

        <div class="float-right">
            <input type="text" style="display: none;" />
            <label for="">Subject ID: 
                <input class="ml-2 sec-name" type="text" id="input_SubjectCode" required/>
            </label>
            <button class="modal-button"><i class="far fa-window-restore"></i></button>
        </div>
        <br /><br />

        <div class="float-right">
            <label id="labelMAPEH" for="" style="display: none">Selected MAPEH:
                <select id="selectMAPEH" onchange="setSubMAPEH()">
                    <option disabled selected value> -- Select MAPEH -- </option>
                    <option value="MUSIC">MUSIC</option>
                    <option value="ARTS">ARTS</option>
                    <option value="PE">PE</option>
                    <option value="HEALTH">HEALTH</option>
                </select>
            </label>
        </div>

        <br /><br />
        <p><b>SECTION: </b><span id="txt_Section"></span></p>
        <p><b>GRADE LEVEL: </b><span id="txt_GradeLevel"></span></p>
        <p><b>SUBJECT: </b><span id="txt_SubjectCode"></span></p>
        <p><b>SUBJECT TEACHER : </b><span id="txt_SubjTeacher"></span></p>
        <p><b>CLASS ADVISER: </b><span id="txt_Adviser"></span></p>

        <div class="row">
            <div class="col-9 p-0 m-0">
                <table id="CreateGradeTable" class="g-table">
                    <thead class="dark">
                        <tr>
                            <th id="LRNNum" rowspan="2">NO.</th>
                            <th id="student" rowspan="2">NAME OF THE STUDENT</th>
                            <th colspan="4">GRADING PERIOD</th>
                            <th id="final" rowspan="2">FINAL GRADE</th>
                            <th id="remark" rowspan="2">REMARKS</th>
                        </tr>
                        <tr>
                            <th>FIRST</td>
                            <th id="GradeLevel">SECOND</th>
                            <th id="SubjectName">THIRD</th>
                            <th id="Quarter">FOURTH</th>
                        </tr>
                    </thead>

                    <tbody>

                    </tbody>
                </table>
            </div>

            <div class="p-0 mt-3">
                <p class="h6">Notes:</p>
                <ul>
                    <li>Import `grade` table to DB first</li>
                    <li>Temporary: $_SESSION Login as Employee/Teacher not implemented for faster QA testing</li>
                    <li>Grades in every student per quarter can still update before the deadline of encoding</li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <p class="footer-text">© 2019 - San Juan Science High School. All Rights Reserved</p>
        </div>
    </div>

    <script src="../js/ajax.js" type="text/javascript"></script>
    <script src="../js/utility.js" type="text/javascript"></script>
    <script src="../js/cms.js" type="text/javascript"></script>
    <script src="../js/modal.js" type="text/javascript"></script>
    <script src="../js/Grade_Subject.js" type="text/javascript"></script>
</body>

</html>