<?php
    session_start();
    if($_SESSION['id'] === null  || !$_SESSION['access'] === 'admin'){

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
    <title>Learner Permanent Record</title>

    <link rel="stylesheet" type="text/css" href="../css/modal.css" />
    <link rel="stylesheet" type="text/css" href="../css/all.css" />
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="../css/merged-styles.css" />
    <link rel="icon" href="../pictures/logo.png" />
</head>

<body>
    <img src="../pictures/logodesign.jpg" class="logodesign hide-on-print">

    <div class="hide-on-print header mb-3">
        <legend class="h4 pl-0 pt-3 mb-0">LEARNER PERMANENT RECORD</legend>

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
            <?php if($_SESSION['access'] == 'admin') { ?>
                <div class="float-right hide-on-print">
                    <input type="text" id="txt_LRNNum" style="display: none;" />
                    <label for="">Student Name: <input class="ml-2 sec-name" type="text" id="txt_StudentModal" required/></label>
                    <button class="modal-button"><i class="far fa-window-restore"></i></button>
                </div>
            <?php } ?>
            <br />
            <br />

            <div class="text-center p-0 m-0">
                <p>Republic of the Philippines</p>
                <p>Department of Education</p>
                <p>National Capital Region</p>
                <p>Division of San Juan City</p>
                <h5>San Juan City Science High School</h5>
                <p>Baranggay St. Joseph, San Juan City</p>
                <h4>Learner Permanent Record for Junior High School (SF10-JHS)</h4>
                <p>(Formerly Form 137)</p>
                <br />
            </div>
        </div>
        <h5 class="legend">SCHOLASTIC RECORD</h5>
        <div class="row">
            <div class="col-6 p-0 m-0">
                <table id="tableSubject" class="g-table">

                    <thead class="dark">
                        <tr>
                            <th rowspan="2">LEARNING AREAS</th>
                            <th colspan="4">Quarterly Rating</th>
                            <th rowspan="2" class="w-adjust-print">FINAL RATING</th>
                            <th rowspan="2">REMARKS</th>
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
            </div>
        </div>
        <div class="hide-on-print footer">
            <p class="footer-text">© 2020 - San Juan City Science High School. All Rights Reserved</p>
        </div>
    </div>

    <!-- <script src="../js/ajax.js" type="text/javascript"></script>
    <script src="../js/utility.js" type="text/javascript"></script>
    <script src="../js/cms.js" type="text/javascript"></script>
    <script src="../js/modal.js" type="text/javascript"></script>
    <script src="../js/Student_Record.js" type="text/javascript"></script> -->
</body>

</html>