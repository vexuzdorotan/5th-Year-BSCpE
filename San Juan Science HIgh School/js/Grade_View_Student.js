let SectionNum;
let SectionName;
let GradeLevel;
const table = document.querySelector('#gradeTable');
const txt_AdviserName = document.querySelector('#txt_AdviserName');
const txt_SectionName = document.querySelector('#txt_SectionName');
const txt_GradeLevel = document.querySelector('#txt_GradeLevel');
const ResearchFOLA = document.querySelector('#ResearchFOLA');
const tr = document.querySelectorAll('#gradeTable tbody tr');


getSectionInfo();

function getSectionInfo() {
    let query = '';

    query += 'SELECT section.SectionNum, section.SectionName, section.GradeLevel, teacher.Name ';
    query += 'FROM section ';
    query += 'LEFT JOIN student_section ';
    query += 'ON section.SectionNum = student_section.SectionNum ';
    query += 'JOIN teacher ';
    query += 'ON section.SectionNum = teacher.SectionNum ';
    query += 'WHERE student_section.LRNNum IN (' + LRNNum + ') ';

    SimplifiedQuery('SELECT', query, '', setSectionInfo);
}

function setSectionInfo(xhttp) {
    try {
        jsonSectionInfo = JSON.parse(xhttp.responseText);
        console.log(jsonSectionInfo);

        SectionNum = jsonSectionInfo[0][0];
        SectionName = jsonSectionInfo[0][1];
        GradeLevel = jsonSectionInfo[0][2];
        AdviserName = jsonSectionInfo[0][3];

        txt_AdviserName.innerHTML = AdviserName;
        txt_SectionName.innerHTML = SectionName;
        txt_GradeLevel.innerHTML = GradeLevel;

        ResearchFOLA.innerHTML = ((GradeLevel == 7) || (GradeLevel == 8)) ? 'Research' : 'Foreign Language';

        getGradesDB();
        getGradesValDB();
    } catch (err) {
        alert('Student not enrolled.');
        console.log(xhttp.responseText);
        console.log(err);
    }
}

function getGradesDB() {
    let columnNames = {
        0: 'GradeID',
        1: 'LRNNum',
        2: 'GradeLevel',
        3: 'SubjectID',
        4: 'Quarter',
        5: 'GradeRating'
    };

    SearchWithoutQuery('grade', LRNNum, columnNames, setGradesDB);
}

function setGradesDB(xhttp) {
    let json;

    json = JSON.parse(xhttp.responseText);
    console.table(json);

    for (let i = 2; i < tr.length + 2; i++) {
        for (let j = 1; j < tr[0].childElementCount; j++) {
            table.rows[i].cells[j].innerHTML = '';
        }
    }

    try {
        for (let i = 0; i < json.length; i++) {
            table.rows[getParentRow(json[i][3])].cells[json[i][4]].innerHTML = json[i][5];
        }

        getMAPEH();
        setAverage();
        setFinalAndRemark();
    } catch (err) {
        console.log(err);
    }
}

function getParentRow(child) {
    if (child.includes('FIL' + txt_GradeLevel.innerHTML)) return 2;
    else if (child.includes('ENG' + txt_GradeLevel.innerHTML)) return 3;
    else if (child.includes('MATH' + txt_GradeLevel.innerHTML + 'A')) return 4;
    else if (child.includes('SCI' + txt_GradeLevel.innerHTML + 'A')) return 5;
    else if (child.includes('AP' + txt_GradeLevel.innerHTML)) return 6;
    else if (child.includes('TLE' + txt_GradeLevel.innerHTML)) return 7;
    // else if (child.includes('MAPEH' + txt_GradeLevel.innerHTML)) return 8;
    else if (child.includes('MUSIC' + txt_GradeLevel.innerHTML)) return 9;
    else if (child.includes('ARTS' + txt_GradeLevel.innerHTML)) return 10;
    else if (child.includes('PE' + txt_GradeLevel.innerHTML)) return 11;
    else if (child.includes('HEALTH' + txt_GradeLevel.innerHTML)) return 12;
    else if (child.includes('ESP' + txt_GradeLevel.innerHTML)) return 13;
    else if (child.includes('MATH' + txt_GradeLevel.innerHTML + 'B')) return 14;
    else if (child.includes('SCI' + txt_GradeLevel.innerHTML + 'B')) return 15;
    else if (child.includes('RESEARCH' + txt_GradeLevel.innerHTML)) return 16;
    else if (child.includes('FOLA' + txt_GradeLevel.innerHTML)) return 16;
}

function getMAPEH() {
    let mapeh;

    for (let i = 1; i <= 4; i++) {
        if (table.rows[9].cells[i].innerHTML != '' &&
            table.rows[10].cells[i].innerHTML != '' &&
            table.rows[11].cells[i].innerHTML != '' &&
            table.rows[12].cells[i].innerHTML != '') {

            mapeh = (
                Number(table.rows[9].cells[i].innerHTML) +
                Number(table.rows[10].cells[i].innerHTML) +
                Number(table.rows[11].cells[i].innerHTML) +
                Number(table.rows[12].cells[i].innerHTML)
            ) / 4;

            table.rows[8].cells[i].innerHTML = mapeh.toFixed(0);
        }
    }
}

function setAverage() {
    let average;

    for (let i = 1; i <= 4; i++) {
        if (table.rows[2].cells[i].innerHTML != '' &&
            table.rows[3].cells[i].innerHTML != '' &&
            table.rows[4].cells[i].innerHTML != '' &&
            table.rows[5].cells[i].innerHTML != '' &&
            table.rows[6].cells[i].innerHTML != '' &&
            table.rows[7].cells[i].innerHTML != '' &&
            table.rows[8].cells[i].innerHTML != '' &&
            table.rows[13].cells[i].innerHTML != '' &&
            table.rows[14].cells[i].innerHTML != '' &&
            table.rows[15].cells[i].innerHTML != '' &&
            table.rows[16].cells[i].innerHTML != '') {

            average = (
                Number(table.rows[2].cells[i].innerHTML) +
                Number(table.rows[3].cells[i].innerHTML) +
                Number(table.rows[4].cells[i].innerHTML) +
                Number(table.rows[5].cells[i].innerHTML) +
                Number(table.rows[6].cells[i].innerHTML) +
                Number(table.rows[7].cells[i].innerHTML) +
                Number(table.rows[8].cells[i].innerHTML) +
                Number(table.rows[13].cells[i].innerHTML) +
                Number(table.rows[14].cells[i].innerHTML) +
                Number(table.rows[15].cells[i].innerHTML) +
                Number(table.rows[16].cells[i].innerHTML)
            ) / 11;

            table.rows[17].cells[i].innerHTML = average.toFixed(0);
        }
    }
}

function setFinalAndRemark() {
    let finalRating;

    for (let i = 2; i < tr.length + 2; i++) {
        if (table.rows[i].cells[1].innerHTML != '' &&
            table.rows[i].cells[2].innerHTML != '' &&
            table.rows[i].cells[3].innerHTML != '' &&
            table.rows[i].cells[4].innerHTML != '') {

            finalRating = (
                Number(table.rows[i].cells[1].innerHTML) +
                Number(table.rows[i].cells[2].innerHTML) +
                Number(table.rows[i].cells[3].innerHTML) +
                Number(table.rows[i].cells[4].innerHTML)
            ) / 4;

            table.rows[i].cells[5].innerHTML = finalRating.toFixed(0);

            if (i != tr.length + 1) {
                if (finalRating >= 75)
                    table.rows[i].cells[6].innerHTML = 'PASSED';
                else
                    table.rows[i].cells[6].innerHTML = 'FAILED';
            } else {
                if (finalRating >= 75)
                    table.rows[i].cells[6].innerHTML = 'PROMOTED';
                else
                    table.rows[i].cells[6].innerHTML = 'RETAINED';
            }

        }
    }
}

//Grade Values
function getGradesValDB() {
    let columnNames = {
        0: 'GradeValID',
        1: 'LRNNum',
        2: 'GradeValLevel',
        3: 'BehaviorID',
        4: 'Quarter',
        5: 'GradeValRating'
    };

    SearchWithoutQuery('grade_values', LRNNum, columnNames, setGradesValDB);
}

function setGradesValDB(xhttp) {
    jsonGradeVal = JSON.parse(xhttp.responseText);
    console.table(jsonGradeVal);

    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j <= 6; j++) {
            document.querySelectorAll('.grValQ' + i)[j].innerHTML = '';
        }
    }

    try {
        for (let i = 0; i < jsonGradeVal.length; i++) {
            document.querySelectorAll('.grValQ' + jsonGradeVal[i][4])[getParentCol(jsonGradeVal[i][3])].innerHTML = jsonGradeVal[i][5];
        }

    } catch (err) {
        console.log(err);
    }
}

function getParentCol(child) {
    if (child.includes('1a')) return 0;
    else if (child.includes('1b')) return 1;
    else if (child.includes('2a')) return 2;
    else if (child.includes('2b')) return 3;
    else if (child.includes('3a')) return 4;
    else if (child.includes('3b')) return 5;
    else if (child.includes('4a')) return 6;
}

function printInner() {
    window.print();
}