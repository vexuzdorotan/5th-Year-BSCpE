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
    <title>Values Grades</title>

    <link rel="stylesheet" type="text/css" href="../css/modal.css" />
    <link rel="stylesheet" type="text/css" href="../css/all.css" />
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="../css/merged-styles.css" />
    <link rel="icon" href="../pictures/logo.png" />
</head>

<body>
    <img src="../pictures/logodesign.jpg" class="logodesign">

    <div class="header mb-3">
        <legend class="h4 pl-0 pt-3 mb-0">REPORT ON LEARNER'S OBSERVED VALUES</legend>
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
            <input type="text" id="txt_SectionNum" style="display: none;" />
            <label for="">Adviser Name: <input class="ml-2 sec-name" type="text" id="input_Adviser" required/></label>
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
                    <thead class="dark">
                        <tr>
                            <th rowspan="2">Core Values</th>
                            <th rowspan="2">Behavior Statement</th>
                            <th colspan="4">Quarter</th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td rowspan="2"><b>1. Maka-Diyos</b></td>
                            <td>Expresses one's spiritual beliefs while respecting the spiritual beliefs of others</td>
                            <td>
                                <select class="grValQ1">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ2">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ3">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ4">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Shows adherence to ethical principles by upholding truth</td>
                            <td>
                                <select class="grValQ1">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ2">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ3">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ4">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td rowspan="2"><b>2. Makatao</b></td>
                            <td>Is sensitive to individual, social, and cultural differences</td>
                            <td>
                                <select class="grValQ1">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ2">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ3">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ4">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Demonstrates contributions towards solidarity</td>
                            <td>
                                <select class="grValQ1">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ2">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ3">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ4">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td rowspan="2"><b>3. Makakalikasan</b></td>
                            <td>Cares for the environment and utilizes resources wisely, judiciously, and economically</td>
                            <td>
                                <select class="grValQ1">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ2">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ3">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ4">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Demonstrates pride in being a Filipino; exercises the right and responsibilities of Filipino citizen</td>
                            <td>
                                <select class="grValQ1">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ2">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ3">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ4">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td><b>4. Makabansa</b></td>
                            <td>Demonstrates appropriate behavior in carrying out activities in the school community, and country</td>
                            <td>
                                <select class="grValQ1">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ2">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ3">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                            <td>
                                <select class="grValQ4">
                                    <option disabled selected value="--">--</option>
                                    <option value="AO">AO</option>
                                    <option value="SO">SO</option>
                                    <option value="RO">RO</option>
                                    <option value="NO">NO</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <button id="save1">SAVE</button>
                            </td>
                            <td>
                                <button id="save2">SAVE</button>
                            </td>
                            <td>
                                <button id="save3">SAVE</button>
                            </td>
                            <td>
                                <button id="save4">SAVE</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="p-0 mt-3">
                <pre style="font-size: 20px">
                    <b>Marking          Non-numerical Rating</b>
                    <b> AO</b> -            Always Observed
                    <b> SO</b> -            Sometimes Observed
                    <b> RO</b> -            Rarely Observed
                    <b> NO</b> -            Not Observed
                </pre>
            </div>

            <div class="p-0 mt-3">
                <p class="h6">Notes:</p>
                <ul>
                    <li>Import `grade_values` table to DB first</li>
                    <li>Temporary: $_SESSION Login as Employee/Teacher not implemented for faster QA testing</li>
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
    <script src="../js/Grade_Values.js" type="text/javascript"></script>
</body>

</html>