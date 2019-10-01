<?php

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SJSHS Student_Grading</title>

    <link rel="stylesheet" type="text/css" href="../css/Student_Grading.css">
</head>

<body>
    <img src="../img/JuanSci-Header.jpg" alt="SJSHS Header" style="width: 60%">

    <h3>REPORT ON STUDENT'S PROGRESS IN LEARNING</h3>

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

    <ul>
        <li>grade inputs are only 65-100</li>
        <li>if grades >= 75 {passed}. else {failed}</li>
        <li>mapeh = (music + arts + pe + health) / 4</li>
    </ul>

    <img src="../img/JuanSci-Footer.jpg" alt="SJSHS Footer" style="width: 60%">

    <script src="../js/Student_Grading.js" type="text/javascript"></script>
</body>

</html>