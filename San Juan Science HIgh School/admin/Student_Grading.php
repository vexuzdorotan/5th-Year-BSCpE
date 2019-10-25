<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Student Grading</title>

	<link rel="stylesheet" type="text/css" href="../css/modal.css"/>
	<link rel="stylesheet" type="text/css" href="../css/all.css" />
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css"/>
	<link rel="stylesheet" type="text/css" href="../css/merged-styles.css"/>
	<link rel="icon" href="../pictures/logo.png" />
</head>

<body>
    <img src="../pictures/logodesign.jpg" class="logodesign">

    <div class="header mb-3">
        <legend class="h4 pl-0 pt-3 mb-0">REPORT ON STUDENT'S PROGRESS IN LEARNING</legend>
        <div class="menu">
            <a href="#">Administrator</a>|<a href="../dashboards/Overview.html">Menu</a>|<a href="../Portal.html">Logout</a>
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
                <div class="ml-3 mr-3 mt-0">
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
                </div>
                <div id="modal-footer">
                </div>
            </div>
        </div>
        <div class="float-right">
            <input type="text" id="txt_SectionNum" style="display: none;" />
            <label for="">Section Name: <input class="ml-2 sec-name" type="text" id="txt_SectionName" required/></label>
            <button class="modal-button"><i class="far fa-window-restore"></i></button>
            <br />
            <input type="text" id="txt_LRNNum" style="display: none;" />
            <label for="">Student Name: <input class="ml-2 sec-name" type="text" id="txt_StudentName" required/></label>
            <button class="modal-button"><i class="far fa-window-restore"></i></button>
        </div>
        <br /><br /><br /><br />
        <p><b>Grade Level: </b><span id="txt_GradeLevel"></span></p>
        <p><b>Adviser: </b><span id="txt_Adviser"></span></p>
        <p><b>Student: </b><span id="txt_Student"></span></p>

        <div class="row">
            <div class="col-9 p-0 m-0">
                <table id="gradeTable" class="g-table">
                    <thead>
                        <tr>
                            <th rowspan="2">LEARNING AREAS</th>
                            <th colspan="4">Quarterly Rating</th>
                            <th id="final" rowspan="2">FINAL RATING</th>
                            <th id="remark" rowspan="2">REMARKS</th>
                        </tr>
                        <tr>
                            <th id="q1">1</th>
                            <th id="q2">2</th>
                            <th id="q3">3</th>
                            <th id="q4">4</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr id="fil">
                            <td>Filipino</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="eng">
                            <td>English</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="math">
                            <td>Mathematics</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="sci">
                            <td>Science</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="ap">
                            <td>Araling Panlipunan (AP)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="esp">
                            <td>Edukasyon sa Pagpapakatao (EsP)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="tle">
                            <td>Technology and Livelihood Education (TLE)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="mapeh">
                            <td>MAPEH</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="music">
                            <td>&nbsp Music</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="arts">
                            <td>&nbsp Arts</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="pe">
                            <td>&nbsp Physical Education</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="health">
                            <td>&nbsp Health</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr id="average">
                            <td><b>AVERAGE</b></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="p-0 mt-3">
                <p class="h6">Notes:</p>
                <ul>
                    <li>*added AVERAGE row</li>
                    <li>*added table: grade to database</li>
                    <li>*added retrieve grades from table: grade</li>
                    <br />
                    <li>This page is for ADVISER'S VIEW</li>
                    <li>The purpose of this page is to:
                        <ul>
                            <li>VIEW grades per subject encoded by SUBJECT TEACHERS</li>
                            <li>VIEW QUARTERLY AVERAGE to award who are among the Top (10) Students</li>
                            <li>VIEW FINAL RATING and REMARKS.</li>
                            <li>PRINT Report Card (Form 138)</li>
                        </ul>
                    </li>
                    <li>The adviser cannot modify the grades encoded by the other subject teachers</li>
                    <li>INPUT inside cells are just using to test computation of AVERAGE, FINAL RATING, and REMARKS.
                    These will be deleted after the TEACHER PER SUBJECT'S VIEW page is done.</li>
                    <li>MAPEH = (Music + Arts + PE + Health) / 4</li>
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
    <script src="../js/Student_Grading.js" type="text/javascript"></script>
</body>

</html>