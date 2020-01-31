'use strict';


// WILL APPLY MODULE PATTERN LATER

const wrapperGradeViewSubject = (function() {

})();



const wrapperGradeViewValues = (function() {

})();



const wrapperGradeViewMain = (function(wrapSubj, wrapVal) {

})(wrapperGradeViewSubject, wrapperGradeViewValues);
//



let parent_id = 'student';

let SectionNum;
let SectionName;
let GradeLevel;
let LRNNum;

let trTableGrade;

const modal_body = document.querySelector('#modal-body');
const modal_button = document.querySelector('.modal-button');

let arrSubjCode = [];

let objMAPEH = [
    // Subject Code : Subject Description
    {
        'MUSIC 7': 'Music 7',
        'ARTS 7': 'Arts 7',
        'PE 7': 'PE 7',
        'HEALTH 7': 'Health 7',
    },

    {
        'MUSIC 8': 'Music 8',
        'ARTS 8': 'Arts 8',
        'PE 8': 'PE 8',
        'HEALTH 8': 'Health 8',
    },

    {
        'MUSIC 9': 'Music 9',
        'ARTS 9': 'Arts 9',
        'PE 9': 'PE 9',
        'HEALTH 9': 'Health 9',
    },
    {
        'MUSIC 10': 'Music 10',
        'ARTS 10': 'Arts 10',
        'PE 10': 'PE 10',
        'HEALTH 10': 'Health 10',
    }
];

function indexGrLvl(grLvl) {
    switch (grLvl) {
        case 7:
            return 0;
            break;
        case 8:
            return 1;
            break;
        case 9:
            return 2;
            break;
        case 10:
            return 3;
            break;
    }
}


let createTBodySubj = function(subj) {
    let tr, td;
    let columnLen = 7;
    const tbodySubject = document.querySelector('#tbodySubject');


    for (let i = 0; i < subj.length + 1; i++) {
        tr = document.createElement('tr');
        for (let j = 0; j < columnLen; j++) {
            td = document.createElement('td');

            if (i < subj.length) {
                td.innerHTML = (j == 0) ? subj[i]['SubjectDescription'] : '';
            } else {
                td.textContent = (j == 0) ? 'AVERAGE' : '';
                tr.setAttribute('style', 'font-weight:bold');
            }

            tr.appendChild(td);
        }
        tbodySubject.appendChild(tr);


        if (i < subj.length) {
            arrSubjCode.push(subj[i]['SubjectCode']);

            // finds MAPEH, gets children
            if (subj[i]['SubjectCode'].includes('MAPEH')) {
                Object.keys(objMAPEH[indexGrLvl(GradeLevel)]).forEach((key) => {
                    tr = document.createElement('tr');

                    for (let j = 0; j < columnLen; j++) {
                        td = document.createElement('td');
                        td.innerHTML = (j == 0) ? '&nbsp &nbsp' + objMAPEH[indexGrLvl(GradeLevel)][key] : '';
                        tr.appendChild(td);
                    }

                    tbodySubject.appendChild(tr);

                    arrSubjCode.push(key);
                })
            }
        }
    }

    console.log(subj);
    console.log(arrSubjCode);
}


let setSubjectListDB = function(grLvl) {
    let query = '';

    query += 'SELECT grade_sortable.OrderNumber, subjectcode.SubjectCode, subjectcode.SubjectDescription ';
    query += 'FROM subjectcode ';
    query += 'LEFT JOIN grade_sortable ON subjectcode.SubjectCode = grade_sortable.SubjectCode ';
    query += 'WHERE subjectcode.GradeLevel IN (' + grLvl + ') ';
    query += 'GROUP BY grade_sortable.OrderNumber ASC ';

    SimplifiedQuery('SELECT', query, '', getSubjectListDB);
}

let getSubjectListDB = function(xhttp) {
    let jsonSubject;

    try {
        jsonSubject = JSON.parse(xhttp.responseText);
        createTBodySubj(jsonSubject);

    } catch (err) {
        alert('CANNOT FIND');
        console.log(xhttp.responseText);
        console.log(err);
    }
}


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
        let jsonSecInfo = JSON.parse(xhttp.responseText);
        const txt_SectionName = document.querySelector('#txt_SectionName');
        const txt_GradeLevel = document.querySelector('#txt_GradeLevel');

        console.log(jsonSecInfo);

        SectionNum = jsonSecInfo[0][0]
        SectionName = jsonSecInfo[0][1]
        GradeLevel = jsonSecInfo[0][2]

        txt_SectionName.textContent = SectionName;
        txt_GradeLevel.textContent = GradeLevel;

        setSubjectListDB(GradeLevel);

    } catch (err) {
        alert('CANNOT FIND');
        console.log(xhttp.responseText);
        console.log(err);
    }
}



function setGradeSubjDB() {
    let columnNames = {
        0: 'GradeID',
        1: 'LRNNum',
        2: 'GradeLevel',
        3: 'SubjectCode',
        4: 'Quarter',
        5: 'GradeRating'
    };

    SearchWithoutQuery('grade_subject', LRNNum, columnNames, getGradeSubjDB);
}

function clearTBodySubj() {
    for (let i = 0; i < trTableGrade.length; i++) {
        for (let j = 1; j <= 6; j++) {
            trTableGrade[i].cells[j].textContent = '';
        }
    }
}

function getGradeSubjDB(xhttp) {
    let jsonGradeSubj;
    trTableGrade = document.querySelectorAll('#tableSubject tbody tr');

    jsonGradeSubj = JSON.parse(xhttp.responseText);
    console.log(jsonGradeSubj);

    clearTBodySubj();

    try {
        for (let i = 0; i < jsonGradeSubj.length; i++) {
            let q = 1;

            for (let j = 0; j < trTableGrade.length; j++) {
                if (jsonGradeSubj[i]['SubjectCode'] == arrSubjCode[j]) {
                    trTableGrade[j].cells[jsonGradeSubj[i]['Quarter']].textContent = jsonGradeSubj[i]['GradeRating'];
                }
            }
        }

        getAveMAPEH();
        calculateFinalWithRemark();
        calculateAverage();
    } catch (err) {
        console.log(err);
    }
}

function getAveMAPEH() {

    for (let i = 0; i < trTableGrade.length; i++) {

        if (trTableGrade[i].textContent.includes('MAPEH')) {
            for (let j = 1; j <= 4; j++) {
                let aveMAPEH = 0;
                let isMAPEHGradeCompleted = true;

                Object.keys(objMAPEH[indexGrLvl(GradeLevel)]).forEach((key) => {
                    let childMAPEH = trTableGrade[arrSubjCode.indexOf(key)].cells[j].textContent;

                    if (childMAPEH == '') {
                        isMAPEHGradeCompleted = false;
                    } else {
                        aveMAPEH += Number(childMAPEH);
                    }
                })

                if (isMAPEHGradeCompleted) {
                    trTableGrade[i].cells[j].textContent = (aveMAPEH / 4).toFixed(0);
                }
            }
        }
    }
}


function calculateFinalWithRemark() {
    for (let i = 0; i < trTableGrade.length - 1; i++) {
        let isRowGradeCompleted = true;

        for (let j = 1; j <= 4; j++) {
            if (trTableGrade[i].cells[j].textContent == '') {
                isRowGradeCompleted = false
            }
        }

        if (isRowGradeCompleted) {
            let finalRating = 0;

            for (let j = 1; j <= 4; j++) {
                finalRating += Number(trTableGrade[i].cells[j].textContent);
            }

            finalRating /= 4;
            finalRating = finalRating.toFixed(0);
            trTableGrade[i].cells[5].textContent = finalRating;

            if (finalRating >= 75)
                trTableGrade[i].cells[6].textContent = 'PASSED';
            else
                trTableGrade[i].cells[6].textContent = 'FAILED';
        }
    }
}

function calculateAverage() {
    let GWA = '';

    for (let i = 1; i <= 5; i++) {
        let isColGradeCompleted = true;

        for (let j = 0; j < trTableGrade.length - 1; j++) {
            if (trTableGrade[j].cells[i].textContent == '') {
                isColGradeCompleted = false;
            }
        }

        if (isColGradeCompleted) {
            let lenChild = 0;
            let colAverage = 0;

            for (let j = 0; j < trTableGrade.length - 1; j++) {
                // skip compute of average if child (MAPEH)
                if (Object.keys(objMAPEH[indexGrLvl(GradeLevel)]).includes(arrSubjCode[j])) {
                    lenChild++;
                    continue;
                } else {
                    colAverage += Number(trTableGrade[j].cells[i].textContent);
                }
            }

            colAverage /= ((trTableGrade.length - 1) - lenChild);
            colAverage = colAverage.toFixed(0);
            trTableGrade[trTableGrade.length - 1].cells[i].textContent = colAverage;
        }
    }


    GWA = Number(trTableGrade[trTableGrade.length - 1].cells[5].textContent);

    if (GWA == '') {
        trTableGrade[trTableGrade.length - 1].cells[6].textContent = '';
    } else if (GWA >= 75) {
        trTableGrade[trTableGrade.length - 1].cells[6].textContent = 'PROMOTED';
    } else {
        trTableGrade[trTableGrade.length - 1].cells[6].textContent = 'RETAINED';
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

    SearchWithoutQuery('grade_values', LRNNum, columnNames, getGradesValDB);
}

function getGradesValDB(xhttp) {
    let jsonGradeVal = JSON.parse(xhttp.responseText);
    console.log(jsonGradeVal);

    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j <= 6; j++) {
            document.querySelectorAll('.grValQ' + i)[j].textContent = '';
        }
    }

    try {
        for (let i = 0; i < jsonGradeVal.length; i++) {
            document.querySelectorAll('.grValQ' + jsonGradeVal[i][4])[getParentCol(jsonGradeVal[i][3])].textContent = jsonGradeVal[i][5];
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

function printInnerReportCard() {
    window.print();
}


//STUDENT
modal_button.addEventListener('click', function() {
    this.style.backgroundColor = '';
    let theadID = 'LRNNum@LastName@FirstName@MiddleName';
    let theadHTML = 'LRN Number@Last Name@First Name@Middle Name';
    CreateInput('SearchStudent', 'search', modal_body);
    document.querySelector('#SearchStudent').className = 'modal-search';
    CreateTable('SearchStudentTable', theadID, theadHTML, '@', modal_body, 0, 'LRNNum');
    document.querySelector('thead').className = 'dark';
    openModal('Select Student', 'Student');

    let Search = function() {
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
            const txt_StudentModal = document.querySelector('#txt_StudentModal');
            document.querySelector('#SearchStudent').value = '';
            closeModal(modal_body);

            LRNNum = this.childNodes[0].textContent;
            txt_StudentName.textContent = this.childNodes[1].textContent + ', ';
            txt_StudentName.textContent += this.childNodes[2].textContent + ' ';
            txt_StudentName.textContent += this.childNodes[3].textContent;
            txt_StudentModal.value = txt_StudentName.textContent;

            setGradeSubjDB();
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

setSectionInfo();