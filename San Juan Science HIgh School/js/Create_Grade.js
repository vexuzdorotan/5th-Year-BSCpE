let parent_id = 'subject'
let EmployeeNum;
let SectionNum;
let Quarter;
let jsonStudent;
let jsonGrade;
let colNum = document.querySelector('table thead tr').childElementCount + 3;

const txt_Section = document.querySelector('#txt_Section');
const SubjectCode = document.querySelector('#SubjectCode');
const txt_GradeLevel = document.querySelector('#txt_GradeLevel');
const txt_subject = document.querySelector('#txt_subject');
const txt_Adviser = document.querySelector('#txt_Adviser');
const txt_SubjTeacher = document.querySelector('#txt_SubjTeacher');
const modal_body = document.querySelector('#modal-body');
const button = document.querySelectorAll('button');

// TEMPORARY WHILE NO LOGIN TEACHER
EmployeeNum = 1;
const EmployeeNumTEMP = document.querySelector('#txt_EmployeeNum');
EmployeeNumTEMP.addEventListener('change', function() {
    EmployeeNum = EmployeeNumTEMP.value;
});
// END TEMP

openSubjectModal = button[0];

openSubjectModal.addEventListener('click', function() {
    this.style.backgroundColor = '';
    theadID = 'SectionNum@SubjectID@SectionName@GradeLevel@teacher.Name';
    theadHTML = 'Section Num@Subject ID@Section Name@Grade Level@Teacher Name';

    CreateInput('searchSubject', 'search', modal_body);
    document.querySelector('#searchSubject').className = 'modal-search';
    CreateTable('searchSubjectTable', theadID, theadHTML, '@', modal_body, 0, 'SectionNum@teacher.Name');
    document.querySelector('thead').className = 'dark';

    const searchbox = document.querySelector('#searchSubject');

    openModal('Select Subject', 'subject');

    Search = function() {
        let query = '';

        query += 'SELECT section.SectionNum, subject.SubjectID, ';
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
            txt_Subject.innerHTML = this.childNodes[1].innerHTML;
            SubjectCode.value = this.childNodes[1].innerHTML;
            txt_Section.innerHTML = this.childNodes[2].innerHTML;
            txt_GradeLevel.innerHTML = this.childNodes[3].innerHTML;
            txt_SubjTeacher.innerHTML = this.childNodes[4].innerHTML;
            // txt_Adviser.innerHTML = this.childNodes[5].innerHTML;
            readStudentListDB();
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

function readStudentListDB() {
    let query = '';

    query += 'SELECT student.LRNNum, student.LastName, student.FirstName, student.MiddleName ';
    query += 'FROM student ';
    query += 'LEFT JOIN student_section ON student.LRNNum = student_section.LRNNum ';
    query += 'WHERE student_section.SectionNum IN (' + SectionNum + ') ';

    SimplifiedQuery('SELECT', query, '', tBodyGrade);
}

function tBodyGrade(xhttp) {
    const tbody = document.querySelector('table tbody');
    RemoveChildNodes(tbody);

    try {
        let tr, td, input_quarter, button_save;

        jsonStudent = JSON.parse(xhttp.responseText);
        console.log(jsonStudent);

        if (jsonStudent != 0) {
            for (let i = 0; i < jsonStudent.length + 1; i++) {
                tr = document.createElement('tr');
                for (let j = 0; j < colNum; j++) {
                    td = document.createElement('td');

                    function setInputGrade(i) {
                        input_quarter = document.createElement('input');
                        input_quarter.setAttribute('type', 'number');
                        input_quarter.setAttribute('min', 65);
                        input_quarter.setAttribute('max', 100);

                        switch (i) {
                            case 1:
                                input_quarter.setAttribute('id', 'q1');
                                break;
                            case 2:
                                input_quarter.setAttribute('id', 'q2');
                                break;
                            case 3:
                                input_quarter.setAttribute('id', 'q3');
                                break;
                            case 4:
                                input_quarter.setAttribute('id', 'q4');
                                break;
                        }
                        td.appendChild(input_quarter);
                    }

                    function setSaveButton(i) {
                        button_save = document.createElement('button');
                        switch (i) {
                            case 1:
                                button_save.setAttribute('id', 'save1');
                                break;
                            case 2:
                                button_save.setAttribute('id', 'save2');
                                break;
                            case 3:
                                button_save.setAttribute('id', 'save3');
                                break;
                            case 4:
                                button_save.setAttribute('id', 'save4');
                                break;
                        }

                        button_save.innerHTML = 'SAVE';
                        td.appendChild(button_save);
                    }

                    if (j == 0) {
                        if (i != jsonStudent.length)
                            td.innerHTML = i + 1;
                    } else if (j == 1) {
                        if (i != jsonStudent.length)
                            td.innerHTML = jsonStudent[i][1] + ', ' +
                            jsonStudent[i][2] + ' ' + jsonStudent[i][3];
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
            retrieveGradeDB();
        } else {
            alert('No enrolled students yet.');
        }

    } catch (err) {
        alert('CANNOT FIND');
        console.log(xhttp.responseText);
        console.log(err);
    }
}

function retrieveGradeDB() {
    let query = '';

    query += 'SELECT student.LRNNum, grade.GradeLevel, grade.SubjectID, ';
    query += 'COALESCE(SUM(CASE WHEN grade.Quarter = 1 THEN grade.GradeRating END), null) AS Q1, ';
    query += 'COALESCE(SUM(CASE WHEN grade.Quarter = 2 THEN grade.GradeRating END), null) AS Q2, ';
    query += 'COALESCE(SUM(CASE WHEN grade.Quarter = 3 THEN grade.GradeRating END), null) AS Q3, ';
    query += 'COALESCE(SUM(CASE WHEN grade.Quarter = 4 THEN grade.GradeRating END), null) AS Q4, ';
    query += 'COALESCE(SUM(CASE WHEN grade.Quarter = 1 THEN grade.GradeID END), null) AS IDQ1, ';
    query += 'COALESCE(SUM(CASE WHEN grade.Quarter = 2 THEN grade.GradeID END), null) AS IDQ2, ';
    query += 'COALESCE(SUM(CASE WHEN grade.Quarter = 3 THEN grade.GradeID END), null) AS IDQ3, ';
    query += 'COALESCE(SUM(CASE WHEN grade.Quarter = 4 THEN grade.GradeID END), null) AS IDQ4 ';
    query += 'FROM student ';
    query += 'LEFT JOIN grade ON student.LRNNum = grade.LRNNum ';
    query += 'INNER JOIN student_section ON student.LRNNum = student_section.LRNNum ';
    query += 'WHERE student_section.SectionNum IN (' + SectionNum + ') ';
    query += 'AND grade.SubjectID IN ("' + txt_Subject.innerHTML + '") ';
    query += 'GROUP BY student.LRNNum ';

    SimplifiedQuery('SELECT', query, '', insertGrade);
}

function insertGrade(xhttp) {
    try {
        jsonGrade = JSON.parse(xhttp.responseText);
        console.log(jsonGrade);
        const q1 = document.querySelectorAll('#q1');
        const q2 = document.querySelectorAll('#q2');
        const q3 = document.querySelectorAll('#q3');
        const q4 = document.querySelectorAll('#q4');
        const save1 = document.querySelector('#save1');
        const save2 = document.querySelector('#save2');
        const save3 = document.querySelector('#save3');
        const save4 = document.querySelector('#save4');

        for (let i = 0; i < jsonStudent.length; i++) {
            for (let j = 0; j < jsonGrade.length; j++) {
                for (let k = 0; k < colNum; k++) {
                    if (jsonStudent[i][0] == jsonGrade[j][0]) {
                        if (k == 2)
                            q1[i].value = jsonGrade[j][3];
                        else if (k == 3)
                            q2[i].value = jsonGrade[j][4];
                        else if (k == 4)
                            q3[i].value = jsonGrade[j][5];
                        else if (k == 5)
                            q4[i].value = jsonGrade[j][6];
                    }
                }
            }
        }

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

        getFinalAndRemark();
    } catch (err) {
        alert('CANNOT FIND');
        console.log(xhttp.responseText);
        console.log(err);
    }
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
                            updateGradeDB();
                            found = true;
                        } else if (Quarter == 2) {
                            GradeID = jsonGrade[j][8];
                            updateGradeDB();
                            found = true;
                        } else if (Quarter == 3) {
                            GradeID = jsonGrade[j][9];
                            updateGradeDB();
                            found = true;
                        } else if (Quarter == 4) {
                            GradeID = jsonGrade[j][10];
                            updateGradeDB();
                            found = true;
                        }
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

            query += 'INSERT INTO grade ';
            query += '(GradeID, LRNNum, GradeLevel, SubjectID, Quarter, GradeRating) ';
            query += 'VALUES ("' + GradeID + '", "';
            query += jsonStudent[i][0] + '", "';
            query += txt_GradeLevel.innerHTML + '", "';
            query += txt_Subject.innerHTML + '", "';
            query += Quarter + '", "';
            query += GradeRating + '") ';
            query += 'ON DUPLICATE KEY UPDATE GradeRating = ' + GradeRating;

            SimplifiedQuery('INSERT', query, '', fcn = () => { return null });
        }
    }
    alert('QUARTER ' + Quarter + ' GRADES SAVED');
    window.location.reload();
}

function getFinalAndRemark() {
    let average;
    const CreateGradeTable = document.querySelector('#CreateGradeTable');


    for (let i = 0; i < jsonStudent.length; i++) {
        if (jsonStudent.length > 1) {
            if (q1[i].value != '' && q2[i].value != '' && q3[i].value != '' && q4[i].value != '') {
                average = (Number(q1[i].value) + Number(q2[i].value) +
                    Number(q3[i].value) + Number(q4[i].value)) / 4;

                completeGrade();
            } else {
                incompleteGrade();
            }
        } else {
            if (q1.value != '' && q2.value != '' && q3.value != '' && q4.value != '') {
                average = (Number(q1.value) + Number(q2.value) +
                    Number(q3.value) + Number(q4.value)) / 4;

                completeGrade();
            } else {
                incompleteGrade();
            }
        }

        function completeGrade() {
            CreateGradeTable.rows[i + 2].cells[6].innerHTML = average;

            if (average >= 75)
                CreateGradeTable.rows[i + 2].cells[7].innerHTML = 'Passed';
            else
                CreateGradeTable.rows[i + 2].cells[7].innerHTML = 'Failed';
        }

        function incompleteGrade() {
            CreateGradeTable.rows[i + 2].cells[6].innerHTML = 'N/A';
            CreateGradeTable.rows[i + 2].cells[7].innerHTML = 'N/A';
        }
    }
}