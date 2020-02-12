'use strict';


let parent_id = 'student';
let trTableGrade;
let arrSubjCode = [];

const modal_body = document.querySelector('#modal-body');
const modal_button = document.querySelector('.modal-button');

const txt_LastName = document.querySelector('#txt_LastName');
const txt_FirstName = document.querySelector('#txt_FirstName');
const txt_ExtName = document.querySelector('#txt_ExtName');
const txt_MiddleName = document.querySelector('#txt_MiddleName');
const txt_StudentName = document.querySelector('#txt_StudentName');
const txt_LRN = document.querySelectorAll('#txt_LRN');
const txt_Birthdate = document.querySelector('#txt_Birthdate');
const txt_Sex = document.querySelector('#txt_Sex');

const objMAPEH = [ // Subject Code : Subject Description
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



function setScholasticRecordInfo(tblLen, gradeLevel) {
    function getScholasticRecordInfo(xhttp) {
        try {
            let jsonSchoInfo = JSON.parse(xhttp.responseText);

            document.querySelectorAll('#txt_gradeLevel')[tblLen].textContent = gradeLevel;

            if (jsonSchoInfo.length !== 0) {
                document.querySelectorAll('#txt_Adviser')[tblLen].textContent = jsonSchoInfo[0][0];
            } else {
                document.querySelectorAll('#txt_Adviser')[tblLen].textContent = 'N/A'
            }

        } catch (err) {
            alert('CANNOT FIND');
            console.log(xhttp.responseText);
            console.log(err);
        }
    }


    let query = '';

    query += 'SELECT teacher.Name ';
    query += 'FROM teacher ';
    query += 'LEFT JOIN student_section ';
    query += 'ON teacher.SectionNum = student_section.SectionNum ';
    query += 'WHERE student_section.LRNNum IN (' + txt_LRN.textContent + ') ';
    query += 'AND student_section.GradeLevel IN (' + gradeLevel + ') ';

    SimplifiedQuery('SELECT', query, '', getScholasticRecordInfo);
}


modal_button.addEventListener('click', function() {
    this.style.backgroundColor = '';
    let theadID = 'LRNNum@LastName@FirstName@MiddleName@Birthday@Gender';
    let theadHTML = 'LRN Number@Last Name@First Name@Middle Name@Birthday@Gender';
    CreateInput('SearchStudent', 'search', modal_body);
    document.querySelector('#SearchStudent').className = 'modal-search';
    CreateTable('SearchStudentTable', theadID, theadHTML, '@', modal_body, 0, 'LRNNum@Birthday@Gender');
    document.querySelector('thead').className = 'dark';
    openModal('Select Student', 'Student');

    let Search = function() {
        SearchWithQuery(
            'student',
            null,
            GetID(document.querySelectorAll('#SearchStudentTable thead td'), 0),
            null,
            null,
            'student.LRNNum = student_section.LRNNum',
            document.getElementById('SearchStudent'),
            null,
            PickStudent
        );
    }
    Search();

    document.getElementById('SearchStudent').addEventListener('change', Search);
});


function PickStudent(xhttp) {
    CreateTBody(xhttp);
    let jsonStudentInfo = JSON.parse(xhttp.responseText)
    console.log(jsonStudentInfo)
    let tbody_tr = document.querySelectorAll('#SearchStudentTable tbody tr');
    for (let i = 0; i < tbody_tr.length; i++) {
        tbody_tr[i].addEventListener('click', function() {
            const txt_StudentModal = document.querySelector('#txt_StudentModal');
            document.querySelector('#SearchStudent').value = '';
            closeModal(modal_body);

            txt_LRN.textContent = this.childNodes[0].textContent;
            txt_LRN[0].textContent = txt_LRN.textContent
            txt_LRN[1].textContent = txt_LRN.textContent

            txt_LastName.textContent = this.childNodes[1].textContent;
            txt_FirstName.textContent = this.childNodes[2].textContent;

            txt_MiddleName.textContent = 'N/A';
            if (this.childNodes[3].textContent !== null) {
                txt_MiddleName.textContent = this.childNodes[3].textContent;
            }

            txt_StudentName.textContent = txt_FirstName.textContent + ' ';
            txt_StudentName.textContent += txt_MiddleName.textContent + ' ';
            txt_StudentName.textContent += txt_LastName.textContent;

            txt_Birthdate.textContent = this.childNodes[4].textContent;
            txt_Sex.textContent = this.childNodes[5].textContent;

            let gradeLevel = 7;
            for (let i = 0; i < 4; i++) {
                setScholasticRecordInfo(i, gradeLevel)
                setGradeSubjDB(i, i, gradeLevel);
                gradeLevel++;
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


function indexgradeLevel(gradeLevel) {
    switch (gradeLevel) {
        case 7:
            return 0;
        case 8:
            return 1;
        case 9:
            return 2;
        case 10:
            return 3;
    }
}


let setSubjectListDB = function(tblLen, iArrSubjCode, gradeLevel) {
    let createTBodySubj = function(tblLen, subj, gradeLevel) {
        let tr, td;
        let columnLen = 7;

        const tbodySubject = document.querySelectorAll('#tbodySubject')[tblLen];
        arrSubjCode[iArrSubjCode] = [];

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
                arrSubjCode[iArrSubjCode].push(subj[i]['SubjectCode']);

                // finds MAPEH, gets children
                if (subj[i]['SubjectCode'].includes('MAPEH')) {
                    Object.keys(objMAPEH[indexgradeLevel(gradeLevel)]).forEach((key) => {
                        tr = document.createElement('tr');

                        for (let j = 0; j < columnLen; j++) {
                            td = document.createElement('td');
                            td.innerHTML = (j == 0) ? '&nbsp &nbsp' + objMAPEH[indexgradeLevel(gradeLevel)][key] : '';
                            tr.appendChild(td);
                        }

                        tbodySubject.appendChild(tr);

                        arrSubjCode[iArrSubjCode].push(key);
                    })
                }
            }
        }

        console.log(subj);
        console.log(arrSubjCode[iArrSubjCode]);
    }


    let getSubjectListDB = function(xhttp) {
        let jsonSubject;

        try {

            jsonSubject = JSON.parse(xhttp.responseText);

            createTBodySubj(tblLen, jsonSubject, gradeLevel);

        } catch (err) {
            alert('CANNOT FIND');
            console.log(xhttp.responseText);
            console.log(err);
        }
    }


    let query = '';

    query += 'SELECT grade_sortable.OrderNumber, subjectcode.SubjectCode, subjectcode.SubjectDescription ';
    query += 'FROM subjectcode ';
    query += 'LEFT JOIN grade_sortable ON subjectcode.SubjectCode = grade_sortable.SubjectCode ';
    query += 'WHERE subjectcode.GradeLevel IN (' + gradeLevel + ') ';
    query += 'GROUP BY grade_sortable.OrderNumber ASC ';

    SimplifiedQuery('SELECT', query, '', getSubjectListDB);
}


function setGradeSubjDB(tblLen, iArrSubjCode, gradeLevel) {
    function getGradeSubjDB(xhttp) {
        let jsonGradeSubj;

        trTableGrade = document.querySelectorAll('#tableSubject tbody')[tblLen].childNodes;
        jsonGradeSubj = JSON.parse(xhttp.responseText);
        console.log(jsonGradeSubj);

        function clearTBodySubj() {
            for (let i = 0; i < trTableGrade.length; i++) {
                for (let j = 1; j <= 6; j++) {
                    trTableGrade[i].cells[j].textContent = '';
                }
            }
        }
        clearTBodySubj();


        try {
            for (let i = 0; i < jsonGradeSubj.length; i++) {

                for (let j = 0; j < trTableGrade.length; j++) {
                    if (jsonGradeSubj[i]['SubjectCode'] == arrSubjCode[iArrSubjCode][j]) {

                        trTableGrade[j].cells[jsonGradeSubj[i]['Quarter']].textContent = jsonGradeSubj[i]['GradeRating'];
                    }
                }
            }

            getAveMAPEH(iArrSubjCode, gradeLevel);
            calculateFinalWithRemark();
            calculateAverage(iArrSubjCode, gradeLevel);
        } catch (err) {
            console.log(err);
        }
    }


    let query = '';

    query += 'SELECT SubjectCode, Quarter, GradeRating ';
    query += 'FROM grade_subject ';
    query += 'WHERE LRNNum IN (' + txt_LRN.textContent + ') ';
    query += 'AND GradeLevel IN (' + gradeLevel + ') ';

    SimplifiedQuery('SELECT', query, '', getGradeSubjDB);
}


function getAveMAPEH(iArrSubjCode, gradeLevel) {
    for (let i = 0; i < trTableGrade.length; i++) {

        if (trTableGrade[i].textContent.includes('MAPEH')) {
            for (let j = 1; j <= 4; j++) {
                let aveMAPEH = 0;
                let isMAPEHGradeCompleted = true;

                Object.keys(objMAPEH[indexgradeLevel(gradeLevel)]).forEach((key) => {
                    let childMAPEH = trTableGrade[arrSubjCode[iArrSubjCode].indexOf(key)].cells[j].textContent;

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


function calculateAverage(iArrSubjCode, gradeLevel) {
    let GWA = '';
    let remarksGWA;

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
                if (Object.keys(objMAPEH[indexgradeLevel(gradeLevel)]).includes(arrSubjCode[iArrSubjCode][j])) {
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
        remarksGWA = '';
    } else if (GWA >= 75) {
        remarksGWA = 'PROMOTED';
    } else {
        remarksGWA = 'RETAINED';
    }

    trTableGrade[trTableGrade.length - 1].cells[6].textContent = remarksGWA;
}



let init = (function() {
    let gradeLevel = 7;
    let numberOfTables = 4;
    let scholasticRecord = document.querySelector("#scholasticRecord");
    let scholasticRecordHTML = scholasticRecord.innerHTML;

    for (let i = 1; i < numberOfTables; i++) {
        scholasticRecord.insertAdjacentHTML("afterbegin", scholasticRecordHTML);
    }

    for (let i = 0; i < numberOfTables; i++) {
        setSubjectListDB(i, i, gradeLevel);
        gradeLevel++;
    }
})();