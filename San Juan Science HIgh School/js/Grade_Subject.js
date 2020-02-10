// 'use strict';


// WILL APPLY MODULE PATTERN LATER

const wrapperGradeSubject = (function() {

})();



const wrapperGradeViewMain = (function(wrapSubj) {

})(wrapperGradeSubject);
//


let quarterSelected;
let jsonQuarter;

let SectionNum;
let Quarter;
let jsonStudent;
let jsonGrade;
let SubjectCode;
let parent_id = 'subject';
let selectMAPEH = document.querySelector('#selectMAPEH');
let colNum = document.querySelector('table thead tr').childElementCount + 3;

const tbody = document.querySelector('table tbody');
const txt_Section = document.querySelector('#txt_Section');
const input_SubjectCode = document.querySelector('#input_SubjectCode');
const txt_GradeLevel = document.querySelector('#txt_GradeLevel');
const txt_SubjectCode = document.querySelector('#txt_SubjectCode');
const txt_Adviser = document.querySelector('#txt_Adviser');
const modal_body = document.querySelector('#modal-body');
const button = document.querySelectorAll('button');
const labelMAPEH = document.querySelector('#labelMAPEH');





function setSubMAPEH() {
    SubjectCode = selectMAPEH.value + ' ' + txt_GradeLevel.innerHTML;
    txt_SubjectCode.innerHTML = input_SubjectCode.value + '/' + SubjectCode;

    RemoveChildNodes(tbody);
    setStudentListDB();

    console.log(txt_Section.innerHTML + ' ' + SubjectCode + ' selected.');
}

function setAdviserNameDB() {
    let query = '';
    txt_Adviser.innerHTML = '';

    query += 'SELECT name ';
    query += 'FROM teacher ';
    query += 'WHERE SectionNum IN (' + SectionNum + ') ';

    SimplifiedQuery('SELECT', query, '', function(xhttp) {
        try {
            txt_Adviser.innerHTML = JSON.parse(xhttp.responseText)[0][0];

        } catch (err) {
            alert('Section ' + txt_Section.innerHTML + ' does not have an adviser yet.');
            console.log(xhttp.responseText);
            console.log('Section ' + txt_Section.innerHTML + ' does not have an adviser yet.');
        }
    });
}

function setStudentListDB() {
    let query = '';

    query += 'SELECT student.LRNNum, student.LastName, student.FirstName, student.MiddleName ';
    query += 'FROM student ';
    query += 'LEFT JOIN student_section ON student.LRNNum = student_section.LRNNum ';
    query += 'WHERE student_section.SectionNum IN (' + SectionNum + ') ';

    SimplifiedQuery('SELECT', query, '', tBodyGrade);
}


function setQuarterDB() {
    let query = '';

    query += 'SELECT SettingValue ';
    query += 'FROM admin_settings ';
    query += 'WHERE SettingName = "quarter_enabled" ';

    SimplifiedQuery('SELECT', query, '', getQuarter);
};


function getQuarter(xhttp) {
    try {
        jsonQuarter = JSON.parse(xhttp.responseText);
        quarterSelected = jsonQuarter[0]['SettingValue'];

    } catch (err) {
        alert('CANNOT FIND');
        console.log(xhttp.responseText);
        console.log(err);
    }
}



function tBodyGrade(xhttp) {

    try {
        let tr, td, input_quarter, button_save;

        jsonStudent = JSON.parse(xhttp.responseText);
        console.log('Student List: ' + jsonStudent.length);
        console.log(jsonStudent);

        if (jsonStudent != 0) {
            for (let i = 0; i < jsonStudent.length + 1; i++) {
                tr = document.createElement('tr');
                for (let j = 0; j < colNum; j++) {
                    td = document.createElement('td');

                    function enablerQuarter(q) {
                        if (q == quarterSelected) {
                            return false
                        }
                        return true
                    }

                    function setInputGrade(i) {
                        input_quarter = document.createElement('input');
                        input_quarter.setAttribute('type', 'number');
                        input_quarter.setAttribute('min', 65);
                        input_quarter.setAttribute('max', 100);
                        input_quarter.setAttribute('onKeyDown', 'return false');

                        switch (i) {
                            case 1:
                                input_quarter.setAttribute('id', 'q1');
                                input_quarter.disabled = enablerQuarter(i);
                                break;
                            case 2:
                                input_quarter.setAttribute('id', 'q2');
                                input_quarter.disabled = enablerQuarter(i);
                                break;
                            case 3:
                                input_quarter.setAttribute('id', 'q3');
                                input_quarter.disabled = enablerQuarter(i);
                                break;
                            case 4:
                                input_quarter.setAttribute('id', 'q4');
                                input_quarter.disabled = enablerQuarter(i);
                                break;
                        }
                        td.appendChild(input_quarter);
                    }

                    function setSaveButton(i) {
                        button_save = document.createElement('button');
                        switch (i) {
                            case 1:
                                button_save.setAttribute('id', 'save1');
                                button_save.disabled = enablerQuarter(i);
                                break;
                            case 2:
                                button_save.setAttribute('id', 'save2');
                                button_save.disabled = enablerQuarter(i);
                                break;
                            case 3:
                                button_save.setAttribute('id', 'save3');
                                button_save.disabled = enablerQuarter(i);
                                break;
                            case 4:
                                button_save.setAttribute('id', 'save4');
                                button_save.disabled = enablerQuarter(i);
                                break;
                        }

                        button_save.innerHTML = 'SAVE';
                        td.appendChild(button_save);
                    }

                    if (j == 0) {
                        if (i != jsonStudent.length)
                            td.innerHTML = i + 1;
                    } else if (j == 1) {
                        if (i != jsonStudent.length) {
                            if (jsonStudent[i][3] == null) {
                                jsonStudent[i][3] = "";
                            }
                            td.innerHTML = jsonStudent[i][1] + ', ' +
                                jsonStudent[i][2] + ' ' + jsonStudent[i][3];
                        }
                    } else if (j == 2) {
                        if (i != jsonStudent.length)
                            setInputGrade(1);
                        else
                            setSaveButton(1);

                    } else if (j == 3) {
                        if (i != jsonStudent.length)
                            setInputGrade(2);
                        else
                            setSaveButton(2);

                    } else if (j == 4) {
                        if (i != jsonStudent.length)
                            setInputGrade(3);
                        else
                            setSaveButton(3);

                    } else if (j == 5) {
                        if (i != jsonStudent.length)
                            setInputGrade(4);
                        else
                            setSaveButton(4);
                    }
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);
            }

            setGradeDB();

            const save1 = document.querySelector('#save1');
            const save2 = document.querySelector('#save2');
            const save3 = document.querySelector('#save3');
            const save4 = document.querySelector('#save4');

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
        } else {
            alert('No enrolled students yet.');
            console.log('No enrolled students yet.');
        }

    } catch (err) {
        alert('CANNOT FIND');
        console.log(xhttp.responseText);
        console.log(err);
    }
}

function setGradeDB() {
    let query = '';

    query += 'SELECT student.LRNNum, grade_subject.GradeLevel, grade_subject.SubjectCode, ';
    query += 'COALESCE(SUM(CASE WHEN grade_subject.Quarter = 1 THEN grade_subject.GradeRating END), null) AS Q1, ';
    query += 'COALESCE(SUM(CASE WHEN grade_subject.Quarter = 2 THEN grade_subject.GradeRating END), null) AS Q2, ';
    query += 'COALESCE(SUM(CASE WHEN grade_subject.Quarter = 3 THEN grade_subject.GradeRating END), null) AS Q3, ';
    query += 'COALESCE(SUM(CASE WHEN grade_subject.Quarter = 4 THEN grade_subject.GradeRating END), null) AS Q4, ';
    query += 'COALESCE(SUM(CASE WHEN grade_subject.Quarter = 1 THEN grade_subject.GradeID END), null) AS IDQ1, ';
    query += 'COALESCE(SUM(CASE WHEN grade_subject.Quarter = 2 THEN grade_subject.GradeID END), null) AS IDQ2, ';
    query += 'COALESCE(SUM(CASE WHEN grade_subject.Quarter = 3 THEN grade_subject.GradeID END), null) AS IDQ3, ';
    query += 'COALESCE(SUM(CASE WHEN grade_subject.Quarter = 4 THEN grade_subject.GradeID END), null) AS IDQ4 ';
    query += 'FROM student ';
    query += 'LEFT JOIN grade_subject ON student.LRNNum = grade_subject.LRNNum ';
    query += 'INNER JOIN student_section ON student.LRNNum = student_section.LRNNum ';
    query += 'WHERE student_section.SectionNum IN (' + SectionNum + ') ';
    query += 'AND grade_subject.SubjectCode IN ("' + SubjectCode + '") ';
    query += 'GROUP BY student.LRNNum ';

    SimplifiedQuery('SELECT', query, '', saveGradeJSON);
}


function saveGradeJSON(xhttp) {
    try {
        jsonGrade = JSON.parse(xhttp.responseText);
        console.log('Student(s) with Grade: ' + jsonGrade.length);
        console.log(jsonGrade);
        insertGrade();

    } catch (err) {
        alert('CANNOT FIND');
        console.log(xhttp.responseText);
        console.log(err);
    }
}

function insertGrade() {
    const q1 = document.querySelectorAll('#q1');
    const q2 = document.querySelectorAll('#q2');
    const q3 = document.querySelectorAll('#q3');
    const q4 = document.querySelectorAll('#q4');

    for (let i = 0; i < jsonStudent.length; i++) {
        for (let j = 0; j < jsonGrade.length; j++) {
            for (let k = 0; k < colNum; k++) {
                if (jsonStudent[i][0] == jsonGrade[j][0]) {
                    if (k == 2) {
                        q1[i].value = jsonGrade[j][3];
                    } else if (k == 3) {
                        q2[i].value = jsonGrade[j][4];
                    } else if (k == 4) {
                        q3[i].value = jsonGrade[j][5];
                    } else if (k == 5) {
                        q4[i].value = jsonGrade[j][6];
                    }
                }
            }
        }
    }

    getFinalAndRemark();
}

function checkGrade() {
    let GradeID;
    let found;

    getFinalAndRemark();
    for (let i = 0; i < jsonStudent.length; i++) {
        const GradeRating = document.querySelectorAll('#q' + Quarter)[i].value
        found = false;

        if (GradeRating != '') {
            while (!found) {
                for (let j = 0; j < jsonGrade.length; j++) {
                    if (jsonStudent[i][0] == jsonGrade[j][0]) {
                        if (Quarter == 1) {
                            GradeID = jsonGrade[j][7];
                        } else if (Quarter == 2) {
                            GradeID = jsonGrade[j][8];
                        } else if (Quarter == 3) {
                            GradeID = jsonGrade[j][9];
                        } else if (Quarter == 4) {
                            GradeID = jsonGrade[j][10];
                        }
                        updateGradeDB();
                        found = true;
                    }
                }

                if (!found) {
                    GradeID = 0;
                    updateGradeDB();
                    found = true;
                }
            }
        }

        function updateGradeDB() {
            let query = '';

            query += 'INSERT INTO grade_subject ';
            query += '(GradeID, LRNNum, GradeLevel, SubjectCode, Quarter, GradeRating) ';
            query += 'VALUES ("' + GradeID + '", "';
            query += jsonStudent[i][0] + '", "';
            query += txt_GradeLevel.innerHTML + '", "';
            query += SubjectCode + '", "';
            query += Quarter + '", "';
            query += GradeRating + '") ';
            query += 'ON DUPLICATE KEY UPDATE GradeRating = ' + GradeRating;

            SimplifiedQuery('INSERT', query, '', () => null);
        }
    }

    alert('QUARTER ' + Quarter + ' GRADES SAVED');
    console.log('QUARTER ' + Quarter + ' GRADES SAVED');
    setGradeDB();
}

function getFinalAndRemark() {
    let finalRating;
    const CreateGradeTable = document.querySelector('#CreateGradeTable');

    for (let i = 0; i < jsonStudent.length; i++) {
        if (jsonStudent.length > 1) {
            if (q1[i].value != '' && q2[i].value != '' && q3[i].value != '' && q4[i].value != '') {
                finalRating = (Number(q1[i].value) + Number(q2[i].value) +
                    Number(q3[i].value) + Number(q4[i].value)) / 4;

                completeGrade();
            }
        } else {
            if (q1.value != '' && q2.value != '' && q3.value != '' && q4.value != '') {
                finalRating = (Number(q1.value) + Number(q2.value) +
                    Number(q3.value) + Number(q4.value)) / 4;

                completeGrade();
            }
        }

        function completeGrade() {
            CreateGradeTable.rows[i + 2].cells[6].innerHTML = finalRating.toFixed(0);

            if (finalRating >= 75)
                CreateGradeTable.rows[i + 2].cells[7].innerHTML = 'PASSED';
            else
                CreateGradeTable.rows[i + 2].cells[7].innerHTML = 'FAILED';
        }
    }
}


/////


openSubjectModal = button[0];

openSubjectModal.addEventListener('click', function() {
    this.style.backgroundColor = '';
    theadID = 'SectionNum@SubjectCode@SectionName@GradeLevel@teacher.Name';
    theadHTML = 'Section Num@Subject Code@Section Name@Grade Level@Teacher Name';

    CreateInput('searchSubject', 'search', modal_body);
    document.querySelector('#searchSubject').className = 'modal-search';
    CreateTable('searchSubjectTable', theadID, theadHTML, '@', modal_body, 0, 'SectionNum@teacher.Name');
    document.querySelector('thead').className = 'dark';

    const searchbox = document.querySelector('#searchSubject');

    openModal('Select Subject', 'subject');

    Search = function() {
        let query = '';

        query += 'SELECT section.SectionNum, subject.SubjectCode, ';
        query += 'section.SectionName, section.GradeLevel, teacher.Name ';
        query += 'FROM subject ';
        query += 'INNER JOIN section ';
        query += 'ON subject.SectionNum = section.SectionNum ';
        query += 'JOIN teacher ';
        query += 'ON subject.EmployeeNum = teacher.EmployeeNum ';
        query += 'WHERE subject.EmployeeNum = ' + EmployeeNum;

        SimplifiedQuery('SELECT', query, searchbox, getSubject);
    }

    searchbox.addEventListener('change', Search);

    Search();
});

function getSubject(xhttp) {
    CreateTBody(xhttp);
    const tbody_tr = document.querySelectorAll('#searchSubjectTable tbody tr');

    for (let i = 0; i < tbody_tr.length; i++) {
        tbody_tr[i].addEventListener('click', function() {
            document.querySelector('#searchSubject').value = '';
            closeModal(modal_body);

            SectionNum = this.childNodes[0].innerHTML;
            SubjectCode = this.childNodes[1].innerHTML;
            txt_Section.innerHTML = this.childNodes[2].innerHTML;
            txt_GradeLevel.innerHTML = this.childNodes[3].innerHTML;

            input_SubjectCode.value = SubjectCode;
            txt_SubjectCode.innerHTML = SubjectCode;

            if (!input_SubjectCode.value.includes('MAPEH')) {
                labelMAPEH.style.display = 'none';
                RemoveChildNodes(tbody);
                setQuarterDB();
                setAdviserNameDB();
                setStudentListDB();
            } else {
                labelMAPEH.style.display = 'block';
                selectMAPEH.value = selectMAPEH.options[0].value;
                RemoveChildNodes(tbody);
                setQuarterDB();
                setAdviserNameDB();
            }

            console.log(txt_Section.innerHTML + ' ' + SubjectCode + ' selected.');
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


//  FOR TESTING

// SELECT student.LRNNum, grade_subject.GradeLevel, grade_subject.SubjectCode,
// COALESCE(SUM(CASE WHEN grade_subject.Quarter = 1 THEN grade_subject.GradeRating END), null) AS Q1,
// COALESCE(SUM(CASE WHEN grade_subject.Quarter = 2 THEN grade_subject.GradeRating END), null) AS Q2,
// COALESCE(SUM(CASE WHEN grade_subject.Quarter = 3 THEN grade_subject.GradeRating END), null) AS Q3,
// COALESCE(SUM(CASE WHEN grade_subject.Quarter = 4 THEN grade_subject.GradeRating END), null) AS Q4,
// COALESCE(SUM(CASE WHEN grade_subject.Quarter = 1 THEN grade_subject.GradeID END), null) AS IDQ1,
// COALESCE(SUM(CASE WHEN grade_subject.Quarter = 2 THEN grade_subject.GradeID END), null) AS IDQ2,
// COALESCE(SUM(CASE WHEN grade_subject.Quarter = 3 THEN grade_subject.GradeID END), null) AS IDQ3,
// COALESCE(SUM(CASE WHEN grade_subject.Quarter = 4 THEN grade_subject.GradeID END), null) AS IDQ4
// FROM student
// LEFT JOIN grade_subject ON student.LRNNum = @@@ 
// INNER JOIN student_section ON student.LRNNum = student_section.LRNNum
// WHERE student_section.SectionNum IN (@@@)
// AND grade_subject.SubjectCode IN ("@@@")
// GROUP BY student.LRNNum

//