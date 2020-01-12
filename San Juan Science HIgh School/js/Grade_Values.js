let parent_id = 'student';

let jsonGradeVal;
let GradeValID;
let BehaviorID;
let Quarter;
let GradeValRating;
let SectionNum;
let SectionName;
let GradeLevel;
let studentSelected = false;

const table = document.querySelector('table');
const modal_body = document.getElementById('modal-body');

const txt_SectionName = document.getElementById('txt_SectionName');
const txt_GradeLevel = document.getElementById('txt_GradeLevel');
const txt_StudentModal = document.getElementById('txt_StudentModal');
const txt_LRNNum = document.getElementById('txt_LRNNum');

const tr = document.querySelectorAll('tbody tr');
const button = document.querySelectorAll('button');

const save1 = document.querySelector('#save1');
const save2 = document.querySelector('#save2');
const save3 = document.querySelector('#save3');
const save4 = document.querySelector('#save4');

openStudentModal = button[0];

save1.addEventListener('click', function() {
    if (studentSelected) {
        Quarter = 1;
        checkGradeVal();
    } else {
        alert('Select student first.')
    }
});

save2.addEventListener('click', function() {
    if (studentSelected) {
        Quarter = 2;
        checkGradeVal();
    } else {
        alert('Select student first.')
    }
});

save3.addEventListener('click', function() {
    if (studentSelected) {
        Quarter = 3;
        checkGradeVal();
    } else {
        alert('Select student first.')
    }
});

save4.addEventListener('click', function() {
    if (studentSelected) {
        Quarter = 4;
        checkGradeVal();
    } else {
        alert('Select student first.')
    }
});


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

    } catch (err) {
        alert('CANNOT FIND');
        console.log(xhttp.responseText);
        console.log(err);
    }
}


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
            'student_section', // 'Section',
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
            studentSelected = true;
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
            document.querySelectorAll('.grValQ' + i)[j].value = '--';
        }
    }

    try {
        for (let i = 0; i < jsonGradeVal.length; i++) {
            document.querySelectorAll('.grValQ' + jsonGradeVal[i][4])[getParentCol(jsonGradeVal[i][3])].value = jsonGradeVal[i][5];
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

function checkGradeVal() {
    for (let i = 0; i <= 6; i++) {
        GradeValID = 0;
        GradeValRating = document.querySelectorAll('.grValQ' + Quarter)[i].value;

        if (GradeValRating != '--') {
            switch (i) {
                case 0:
                    BehaviorID = '1a';
                    break;
                case 1:
                    BehaviorID = '1b';
                    break;
                case 2:
                    BehaviorID = '2a';
                    break;
                case 3:
                    BehaviorID = '2b';
                    break;
                case 4:
                    BehaviorID = '3a';
                    break;
                case 5:
                    BehaviorID = '3b';
                    break;
                case 6:
                    BehaviorID = '4a';
                    break;
            }

            for (let j = 0; j < jsonGradeVal.length; j++) {
                if (jsonGradeVal[j][3] == BehaviorID) {
                    if (jsonGradeVal[j][4] == Quarter) {
                        GradeValID = jsonGradeVal[j][0];
                    }
                }
            }
            updateGradeDB();
        }
    }

    alert('QUARTER ' + Quarter + ' GRADES SAVED');
    console.log('QUARTER ' + Quarter + ' GRADES SAVED');
    setGradesValDB();
}

function updateGradeDB() {
    let query = '';

    query += 'INSERT INTO grade_values ';
    query += '(GradeValID, LRNNum, GradeValLevel, BehaviorID, Quarter, GradeValRating) ';
    query += 'VALUES ("' + GradeValID + '", "';
    query += txt_LRNNum.value + '", "';
    query += GradeLevel + '", "';
    query += BehaviorID + '", "';
    query += Quarter + '", "';
    query += GradeValRating + '") ';
    query += 'ON DUPLICATE KEY UPDATE GradeValRating = "' + GradeValRating + '"';

    SimplifiedQuery('INSERT', query, '', fcn = () => { return null });
}