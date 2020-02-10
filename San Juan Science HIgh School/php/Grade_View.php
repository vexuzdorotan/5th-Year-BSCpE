<?php
    session_start();
    if($_SESSION['id'] === null  || !($_SESSION['access'] === "teacher" xor $_SESSION['access'] === "student")){

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
    <title>View Grades</title>

    <link rel="stylesheet" type="text/css" href="../css/modal.css" />
    <link rel="stylesheet" type="text/css" href="../css/all.css" />
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="../css/merged-styles.css" />
    <link rel="icon" href="../pictures/logo.png" />
</head>

<body>
    <img src="../pictures/logodesign.jpg" class="logodesign hide-on-print">

    <div class="hide-on-print header mb-3">
        <legend class="h4 pl-0 pt-3 mb-0">ADVISER'S VIEW: STUDENT GRADE</legend>

        <div class="menu">
        <a href="#"><?php echo 'Welcome, ' . $honorific . $fullname?></a>|<a href="Dashboard.php">Menu</a>|<a href="../Portal.php">Logout</a>
        </div>

    </div>

    <div class="grade-container">
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
        <div class="">
            <?php if($_SESSION['access'] == "teacher") { ?>
                <div class="float-right hide-on-print">
                    <input type="text" id="txt_LRNNum" style="display: none;" />
                    <label for="">Student Name: <input class="ml-2 sec-name" type="text" id="txt_StudentModal" required/></label>
                    <button class="modal-button"><i class="far fa-window-restore"></i></button>
                </div>
            <?php } ?>


            <br />
            <p><b>Adviser Name: </b><span id="txt_AdviserName"></span></p>
            <p><b>Section Name: </b><span id="txt_SectionName"></span></p>
            <p><b>Grade Level: </b><span id="txt_GradeLevel"></span></p>
            <br />
            <p><b>Student Name: </b><span id="txt_StudentName"></span></p>
            <br />
        </div>
        <div class="row">
            <div class="col-6 p-0 m-0">
                <table id="tableSubject" class="g-table"><h5 class="legend">REPORT ON LEARNING PROGRESS AND ACHIEVEMENT</h5>
                    <thead class="dark">
                        <tr>
                            <th rowspan="2">Learning Areas</th>
                            <th colspan="4">Quarter</th>
                            <th rowspan="2" class="w-adjust-print">Final Grade</th>
                            <th rowspan="2">Remarks</th>
                        </tr>
                        <tr>
                            <th class="w-25px">1</th>
                            <th class="w-25px">2</th>
                            <th class="w-25px">3</th>
                            <th class="w-25px">4</th>
                        </tr>
                    </thead>

                    <tbody id="tbodySubject"></tbody>
                </table>
                <div class="p-0 mt-3">
                    <pre>
                        <b>Descriptors                 Grade       Remarks</b>
                        Outstanding                 90-100      Passed
                        Very Satisfactory           85-89       Passed
                        Satisfactory                80-84       Passed
                        Faily Satisfactory          75-79       Passed
                        Did Not Meet Expectations   Below-75    Failed
                    </pre>
                </div>
            </div>

            <div class="col-6">
                <table id="tableValues" class="g-table"><h5 class="legend">REPORT ON LEARNER'S OBSERVED VALUES</h5>
                    <thead class="dark">
                        <tr>
                            <th rowspan="2" class="w-25">Core Values</th>
                            <th rowspan="2">Behavior Statement</th>
                            <th colspan="4">Quarter</th>
                        </tr>
                        <tr>
                            <th class="w-25px">1</th>
                            <th class="w-25px">2</th>
                            <th class="w-25px">3</th>
                            <th class="w-25px">4</th>
                        </tr>
                    </thead>

                    <tbody id="tbodyValues">
                        <tr>
                            <td rowspan="2"><b>1. Maka-Diyos</b></td>
                            <td>Expresses one's spiritual beliefs while respecting the spiritual beliefs of others</td>
                            <td class="grValQ1"></td>
                            <td class="grValQ2"></td>
                            <td class="grValQ3"></td>
                            <td class="grValQ4"></td>
                        </tr>

                        <tr>
                            <td>Shows adherence to ethical principles by upholding truth</td>
                            <td class="grValQ1"></td>
                            <td class="grValQ2"></td>
                            <td class="grValQ3"></td>
                            <td class="grValQ4"></td>
                        </tr>

                        <tr>
                            <td rowspan="2"><b>2. Makatao</b></td>
                            <td>Is sensitive to individual, social, and cultural differences</td>
                            <td class="grValQ1"></td>
                            <td class="grValQ2"></td>
                            <td class="grValQ3"></td>
                            <td class="grValQ4"></td>
                        </tr>

                        <tr>
                            <td>Demonstrates contributions towards solidarity</td>
                            <td class="grValQ1"></td>
                            <td class="grValQ2"></td>
                            <td class="grValQ3"></td>
                            <td class="grValQ4"></td>
                        </tr>

                        <tr>
                            <td rowspan="2"><b>3. Makakalikasan</b></td>
                            <td>Cares for the environment and utilizes resources wisely, judiciously, and economically</td>
                            <td class="grValQ1"></td>
                            <td class="grValQ2"></td>
                            <td class="grValQ3"></td>
                            <td class="grValQ4"></td>
                        </tr>

                        <tr>
                            <td>Demonstrates pride in being a Filipino; exercises the right and responsibilities of Filipino citizen</td>
                            <td class="grValQ1"></td>
                            <td class="grValQ2"></td>
                            <td class="grValQ3"></td>
                            <td class="grValQ4"></td>
                        </tr>

                        <tr>
                            <td><b>4. Makabansa</b></td>
                            <td>Demonstrates appropriate behavior in carrying out activities in the school community, and country</td>
                            <td class="grValQ1"></td>
                            <td class="grValQ2"></td>
                            <td class="grValQ3"></td>
                            <td class="grValQ4"></td>
                        </tr>
                    </tbody>
                </table>
                <div class="p-0 mt-3">
                    <pre>
                        <b>Marking          Non-numerical Rating</b>
                        <b> AO</b> -            Always Observed
                        <b> SO</b> -            Sometimes Observed
                        <b> RO</b> -            Rarely Observed
                        <b> NO</b> -            Not Observed
                    </pre>  
                </div>
            </div>
        </div>

        <div class="hide-on-print text-right">
            <?php if($_SESSION['access'] === 'teacher') { ?>
                <button class="btn btn-dark" onclick="printInnerReportCard()">PRINT INNER PAGE OF FORM 138</button>
            <?php } ?>
            
            <form id="postData" action="Grade_oView.php" method="post" target="_blank">
                <input type="hidden" name="LRNNum" value="">
                <input type="hidden" name="schoolYear" value="">
                <input type="hidden" name="studentName" value="">
                <input type="hidden" name="studentAge" value="">
                <input type="hidden" name="studentSex" value="">
                <input type="hidden" name="gradeLevel" value="">
                <input type="hidden" name="sectionName" value="">
                <input type="hidden" name="principalName" value="">
                <input type="hidden" name="adviserName" value="">

                <?php if($_SESSION['access'] === 'teacher') { ?>
                    <input type="submit" class="btn btn-dark" value="PRINT OUTER PAGE OF FORM 138" onclick="AddPostData()">
                <?php } ?>
            </form>
        </div>

        <div class="hide-on-print footer">
            <p class="footer-text">© 2020 - San Juan City Science High School. All Rights Reserved</p>
        </div>
    </div>

    <script>
        let accessRole = '<?php echo $_SESSION['access']?>';

        <?php if($_SESSION['access'] === 'teacher') { ?>
            let LRNNum;
            let employeeNum = <?php echo $_SESSION['id']?>;
        <?php } else if($_SESSION['access'] === 'student') { ?>
            let employeeNum;
            let LRNNum = <?php echo $_SESSION['id'];
        } ?>;
    </script>
    <script src="../js/ajax.js" type="text/javascript"></script>
    <script src="../js/utility.js" type="text/javascript"></script>
    <script src="../js/cms.js" type="text/javascript"></script>
    <script src="../js/modal.js" type="text/javascript"></script>
    <script src="../js/Grade_View.js" type="text/javascript"></script>
</body>

</html>