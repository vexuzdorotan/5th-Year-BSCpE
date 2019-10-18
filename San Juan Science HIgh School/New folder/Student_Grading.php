<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Student Grading</title>

	<link rel="stylesheet" type="text/css" href="css/modal.css"/>
	<link rel="stylesheet" type="text/css" href="css/all.css" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
	<link rel="stylesheet" type="text/css" href="css/merged-styles.css"/>
	<link rel="icon" href="pictures/logo.png" />
</head>

<body>
    <img src="pictures/logodesign.jpg" class="logodesign">

    <div class="header mb-3">
        <!--<img src="pictures/JuanSci-Header.jpg" class="logodesign">-->
        <legend class="h4 pl-0 pt-3 mb-0">REPORT ON STUDENT'S PROGRESS IN LEARNING</legend>
        <div class="menu">
            <a href="#">Administrator</a>|<a href="dashboards/Overview.html">Menu</a>|<a href="Portal.html">Logout</a>
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
        <div class="float-left">
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

                        <tr id="average">
                            <td><b>AVERAGE</b></td>
                            <td><input id="averageQ1" name="averageQ1" type="number" value=80 min="65" max="100" disabled/></td>
                            <td><input id="averageQ2" name="averageQ2" type="number" value=80 min="65" max="100" disabled/></td>
                            <td><input id="averageQ3" name="averageQ3" type="number" value=80 min="65" max="100" disabled/></td>
                            <td><input id="averageQ4" name="averageQ4" type="number" value=80 min="65" max="100" disabled/></td>
                            <td id="averageTotal">80</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-3 p-0 m-0">
                <p class="h6">Notes:</p>
                <ul>
                    <li>*added AVERAGE row</li>
                    <li>*added tblstudentgrade to database</li>
                    <li>*added retrieve grades from tblstudentgrade</li>
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
            <!--<img src="pictures/JuanSci-Footer.jpg" class="logodesign">-->
            <p class="footer-text">© 2019 - San Juan Science High School. All Rights Reserved</p>
        </div>
    </div>

    <script src="js/ajax.js" type="text/javascript"></script>
    <script src="js/utility.js" type="text/javascript"></script>
    <script src="js/cms.js" type="text/javascript"></script>
    <script src="js/modal.js" type="text/javascript"></script>
    <script src="js/Student_Grading.js" type="text/javascript"></script>
</body>

</html>