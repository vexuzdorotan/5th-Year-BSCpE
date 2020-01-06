let parent_id = 'student';
let adviserSelected = false;

let SectionNum;
let SectionName;
let GradeLevel;

const table = document.querySelector('#gradeTable');
const modal_body = document.getElementById('modal-body');

const txt_SectionName = document.getElementById('txt_SectionName');
const txt_GradeLevel = document.getElementById('txt_GradeLevel');
const txt_SectionNum = document.getElementById('txt_SectionNum');
const input_Adviser = document.getElementById('input_Adviser');

const txt_StudentModal = document.getElementById('txt_StudentModal');
const txt_LRNNum = document.getElementById('txt_LRNNum');

const ResearchFOLA = document.querySelector('#ResearchFOLA');

const tr = document.querySelectorAll('#gradeTable tbody tr');
const button = document.querySelectorAll('button');

openStudentModal = button[0];

setSectionInfo();

function setSectionInfo() {
    let query = '';

    query += 'SELECT teacher.SectionNum, section.SectionName, section.GradeLevel ';
    query += 'FROM teacher ';
    query += 'LEFT JOIN section ON teacher.SectionNum = section.SectionNum ';
    query += 'WHERE teacher.EmployeeNum IN (' + EmployeeNum + ') ';

    SimplifiedQuery('SELECT', query, '', getSectionInfo);
}

function getSectionInfo(xhttp) {
    try {
        jsonSectionInfo = JSON.parse(xhttp.responseText);
        console.log(jsonSectionInfo);

        SectionNum = jsonSectionInfo[0][0]
        SectionName = jsonSectionInfo[0][1]
        GradeLevel = jsonSectionInfo[0][2]

        txt_SectionName.innerHTML = SectionName;
        txt_GradeLevel.innerHTML = GradeLevel;

        ResearchFOLA.innerHTML = ((GradeLevel == 7) || (GradeLevel == 8)) ? 'Research' : 'Foreign Language';

    } catch (err) {
        alert('CANNOT FIND');
        console.log(xhttp.responseText);
        console.log(err);
    }
}

// txt_Student.innerHTML = '';
// txt_StudentModal.value = '';

// for (let i = 2; i < tr.length + 2; i++) {
//     for (let j = 1; j < tr[0].childElementCount; j++) {
//         table.rows[i].cells[j].innerHTML = '';
//     }
// }

// for (let i = 1; i <= 4; i++) {
//     for (let j = 0; j <= 6; j++) {
//         document.querySelectorAll('.grValQ' + i)[j].innerHTML = '';
//     }
// }

//STUDENT
openStudentModal.addEventListener('click', function() {
    this.style.backgroundColor = '';
    theadID = 'LRNNum@LastName@FirstName@MiddleName';
    theadHTML = 'LRN Number@Last Name@First Name@Middle Name';
    CreateInput('SearchStudent', 'search', modal_body);
    document.querySelector('#SearchStudent').className = 'modal-search';
    CreateTable('SearchStudentTable', theadID, theadHTML, '@', modal_body, 0, 'LRNNum');
    document.querySelector('thead').className = 'dark';
    openModal('Select Student', 'Student');

    Search = function() {
        SearchWithQuery(
            'student',
            'student_section',
            GetID(document.querySelectorAll('#SearchStudentTable thead td'), 0),
            null,
            'LEFT JOIN',
            'student.LRNNum = student_section.LRNNum',
            document.getElementById('SearchStudent'),
            'student_section.SectionNum IN (' + SectionNum + ')',
            PickStudent
        );
    }
    Search();

    document.getElementById('SearchStudent').addEventListener('change', Search);
});

function PickStudent(xhttp) {
    CreateTBody(xhttp);
    let tbody_tr = document.querySelectorAll('#SearchStudentTable tbody tr');
    for (let i = 0; i < tbody_tr.length; i++) {
        tbody_tr[i].addEventListener('click', function() {
            document.querySelector('#SearchStudent').value = '';
            closeModal(modal_body);

            txt_LRNNum.value = this.childNodes[0].innerHTML;
            txt_Student.innerHTML = this.childNodes[1].innerHTML + ', ';
            txt_Student.innerHTML += this.childNodes[2].innerHTML + ' ';
            txt_Student.innerHTML += this.childNodes[3].innerHTML;
            txt_StudentModal.value = txt_Student.innerHTML;

            setGradesDB();
            setGradesValDB();
        });
        tbody_tr[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = 'maroon';
            this.style.color = 'white';
        });
        tbody_tr[i].addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.color = '';
        });
    }
}

function setGradesDB() {
    let columnNames = {
        0: 'GradeID',
        1: 'LRNNum',
        2: 'GradeLevel',
        3: 'SubjectID',
        4: 'Quarter',
        5: 'GradeRating'
    };

    SearchWithoutQuery('grade', txt_LRNNum, columnNames, getGradesDB);
}

function getGradesDB(xhttp) {
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
            table.rows[GetParentRow(json[i][3])].cells[json[i][4]].innerHTML = json[i][5];
        }

        getMAPEH();
        getAverage();
        getFinalAndRemark();
    } catch (err) {
        console.log(err);
    }
}

function GetParentRow(child) {
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

function getAverage() {
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

function getFinalAndRemark() {
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
function setGradesValDB() {
    let columnNames = {
        0: 'GradeValID',
        1: 'LRNNum',
        2: 'GradeValLevel',
        3: 'BehaviorID',
        4: 'Quarter',
        5: 'GradeValRating'
    };

    SearchWithoutQuery('grade_values', txt_LRNNum, columnNames, getGradesValDB);
}

function getGradesValDB(xhttp) {
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