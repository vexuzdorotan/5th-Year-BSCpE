let jsonGrade;
let GradeValID;
let BehaviorID;
let Quarter;
let GradeValRating;
let parent_id = 'student';
let adviserSelected = false;

const table = document.querySelector('table');
const modal_body = document.getElementById('modal-body');

const txt_GradeLevel = document.getElementById('txt_GradeLevel');
const txt_SectionNum = document.getElementById('txt_SectionNum');
const txt_Adviser = document.getElementById('txt_Adviser');
const input_Adviser = document.getElementById('input_Adviser');

const txt_StudentName = document.getElementById('txt_StudentName');
const txt_LRNNum = document.getElementById('txt_LRNNum');

const tr = document.querySelectorAll('tbody tr');
const button = document.querySelectorAll('button');

const save1 = document.querySelector('#save1');
const save2 = document.querySelector('#save2');
const save3 = document.querySelector('#save3');
const save4 = document.querySelector('#save4');

openSectionModal = button[0];
openStudentModal = button[1];

save1.addEventListener('click', function() {
    Quarter = 1;
    checkGrade();
});

save2.addEventListener('click', function() {
    Quarter = 2;
    checkGrade();
});

save3.addEventListener('click', function() {
    Quarter = 3;
    checkGrade();
});

save4.addEventListener('click', function() {
    Quarter = 4;
    checkGrade();
});

// SECTION
openSectionModal.addEventListener('click', function() {
    this.style.backgroundColor = '';
    theadID = 'SectionNum@SectionName@GradeLevel@Teacher.Name';
    theadHTML = 'Section Number@Section Name@Grade Level@Adviser';
    CreateInput('SearchSection', 'search', modal_body);
    document.querySelector('#SearchSection').className = 'modal-search';
    CreateTable('SearchSectionTable', theadID, theadHTML, '@', modal_body, 0, 'SectionNum');
    document.querySelector('thead').className = 'dark';
    openModal('Select Adviser', 'Adviser');
    Search = function() {
        SearchWithQuery(
            'Section',
            'Teacher',
            GetID(document.querySelectorAll('#SearchSectionTable thead td'), 0),
            'Adviser=Teacher.Name',
            'LEFT JOIN',
            'teacher.SectionNum = section.SectionNum',
            document.getElementById('SearchSection'),
            null,
            PickSection
        );
    }
    Search();
    document.getElementById('SearchSection').addEventListener('change', Search);
});

function PickSection(xhttp) {
    CreateTBody(xhttp);
    let tbody_tr = document.querySelectorAll('#SearchSectionTable tbody tr');
    for (let i = 0; i < tbody_tr.length; i++) {
        tbody_tr[i].addEventListener('click', function() {
            document.querySelector('#SearchSection').value = '';

            closeModal(modal_body);
            txt_SectionNum.value = this.childNodes[0].innerHTML;
            txt_GradeLevel.innerHTML = this.childNodes[2].innerHTML;
            input_Adviser.value = this.childNodes[3].innerHTML;
            txt_Adviser.innerHTML = this.childNodes[3].innerHTML;

            adviserSelected = true;

            txt_Student.innerHTML = '';
            txt_StudentName.value = '';

            for (let i = 1; i <= 4; i++) {
                for (let j = 0; j <= 6; j++) {
                    document.querySelectorAll('.grValQ' + i)[j].value = '--';
                }
            }
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

//STUDENT
openStudentModal.addEventListener('click', function() {
    if (adviserSelected) {
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
                'student_section.SectionNum IN (' + txt_SectionNum.value + ')',
                PickStudent
            );
        }
        Search();

        document.getElementById('SearchStudent').addEventListener('change', Search);
    } else {
        alert('Select adviser first!');
    }
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
            txt_StudentName.value = txt_Student.innerHTML;

            setGradesDB();
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
        0: 'GradeValID',
        1: 'LRNNum',
        2: 'GradeValLevel',
        3: 'BehaviorID',
        4: 'Quarter',
        5: 'GradeValRating'
    };

    SearchWithoutQuery('grade_values', txt_LRNNum, columnNames, getGradesDB);
}

function getGradesDB(xhttp) {
    jsonGrade = JSON.parse(xhttp.responseText);
    console.table(jsonGrade);

    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j <= 6; j++) {
            document.querySelectorAll('.grValQ' + i)[j].value = '--';
        }
    }

    try {
        for (let i = 0; i < jsonGrade.length; i++) {
            document.querySelectorAll('.grValQ' + jsonGrade[i][4])[getParentCol(jsonGrade[i][3])].value = jsonGrade[i][5];
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

function checkGrade() {
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

            for (let j = 0; j < jsonGrade.length; j++) {
                if (jsonGrade[j][3] == BehaviorID) {
                    if (jsonGrade[j][4] == Quarter) {
                        GradeValID = jsonGrade[j][0];
                    }
                }
            }
            updateGradeDB();
        }
    }

    alert('QUARTER ' + Quarter + ' GRADES SAVED');
    console.log('QUARTER ' + Quarter + ' GRADES SAVED');
    setGradesDB();
}

function updateGradeDB() {
    let query = '';

    query += 'INSERT INTO grade_values ';
    query += '(GradeValID, LRNNum, GradeValLevel, BehaviorID, Quarter, GradeValRating) ';
    query += 'VALUES ("' + GradeValID + '", "';
    query += txt_LRNNum.value + '", "';
    query += txt_GradeLevel.innerHTML + '", "';
    query += BehaviorID + '", "';
    query += Quarter + '", "';
    query += GradeValRating + '") ';
    query += 'ON DUPLICATE KEY UPDATE GradeValRating = "' + GradeValRating + '"';

    SimplifiedQuery('INSERT', query, '', fcn = () => { return null });
}