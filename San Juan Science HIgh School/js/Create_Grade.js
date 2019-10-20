let SubjectName = "fil";
let GradeLevel = 7;
let parent_id = "subjectcode"

const txt_Section = document.getElementById("txt_Section");
const txt_GradeLevel = document.getElementById("txt_GradeLevel");
const txt_SubjectCode = document.getElementById("txt_SubjectCode");
const txt_Subject = document.getElementById("txt_Subject");
const txt_Adviser = document.getElementById("txt_Adviser");
const txt_SubjTeacher = document.getElementById("txt_SubjTeacher");

const modal_body = document.getElementById("modal-body");
const button = document.querySelectorAll("button");

openSubjectCodeModal = button[0];

openSubjectCodeModal.addEventListener("click", function() {
    this.style.backgroundColor = "";
    theadID = "SubjectID@SubjectCode@SectionNum@EmployeeNum@GradeLevel";
    theadHTML = "SubjectID@SubjectCode@SectionNum@EmployeeNum@GradeLevel";
    CreateInput("searchSubjectCode", "search", modal_body);
    document.querySelector("#searchSubjectCode").className = "modal-search";
    CreateTable("searchSubjectCodeTable", theadID, theadHTML, "@", modal_body, 0, "SubjectID");
    document.querySelector("thead").className = "dark";
    openModal("Subject Code", "subjectcode");
    Search = function() {
        SimplifiedQuery(
            "SELECT",
            "SELECT subject.SubjectID, subjectcode.SubjectCode, section.SectionName, \
            subject.EmployeeNum, subjectcode.GradeLevel \
            FROM subject, subjectcode, section \
            WHERE subject.SubjectCode = SubjectCode.SubjectCode \
            AND subject.SectionNum = section.SectionNum",
            document.getElementById("searchSubjectCode"),
            pickSubjectCode
        );
    }
    Search();
    document.getElementById("searchSubjectCode").addEventListener("change", Search);
});

function pickSubjectCode(xhttp) {
    CreateTBody(xhttp);
    let tbody_tr = document.querySelectorAll("#searchSubjectCodeTable tbody tr");
    for (let i = 0; i < tbody_tr.length; i++) {
        tbody_tr[i].addEventListener("click", function() {
            document.querySelector("#searchSubjectCode").value = "";
            closeModal(modal_body);
            txt_SubjectCode.value = this.childNodes[0].innerHTML;
            txt_Section.innerHTML = this.childNodes[2].innerHTML;
            txt_GradeLevel.innerHTML = this.childNodes[4].innerHTML;
            txt_Subject.innerHTML = this.childNodes[1].innerHTML;
            txt_Adviser.innerHTML = this.childNodes[3].innerHTML;
            // txt_SubjTeacher.innerHTML = this.childNodes[3].innerHTML;
            displayGrades();
        });
        tbody_tr[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = "maroon";
            this.style.color = "white";
        });
        tbody_tr[i].addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
            this.style.color = "";
        });
    }
}

displayGrades();

function displayGrades() {
    SimplifiedQuery(
        "SELECT",
        "SELECT student.LRNNum, student.LastName, student.FirstName, student.MiddleName, \
        grade.GradeLevel, grade.SubjectName, \
        COALESCE(SUM(CASE WHEN grade.Quarter = 1 THEN grade.GradeRating END), null) AS Q1, \
        COALESCE(SUM(CASE WHEN grade.Quarter = 2 THEN grade.GradeRating END), null) AS Q2, \
        COALESCE(SUM(CASE WHEN grade.Quarter = 3 THEN grade.GradeRating END), null) AS Q3, \
        COALESCE(SUM(CASE WHEN grade.Quarter = 4 THEN grade.GradeRating END), null) AS Q4, \
        COALESCE(SUM(CASE WHEN grade.Quarter = 1 THEN grade.GradeID END), null) AS IDQ1, \
        COALESCE(SUM(CASE WHEN grade.Quarter = 2 THEN grade.GradeID END), null) AS IDQ2, \
        COALESCE(SUM(CASE WHEN grade.Quarter = 3 THEN grade.GradeID END), null) AS IDQ3, \
        COALESCE(SUM(CASE WHEN grade.Quarter = 4 THEN grade.GradeID END), null) AS IDQ4 \
        FROM student \
        LEFT JOIN grade \
        ON student.LRNNum = grade.LRNNum \
        GROUP BY student.LRNNum, grade.GradeLevel, grade.SubjectName \
        ORDER BY student.LastName, student.FirstName, student.MiddleName",
        "",
        gradeTBody
    );
    // WHERE student.GradeLevel = " +
    // txt_GradeLevel.innerHTML + " AND grade.SubjectName = \"" +
    // txt_Subject.innerHTML + "\"\
}

function gradeTBody(xhttp) {
    let Quarter;
    let tbody = document.querySelector("table tbody");
    RemoveChildNodes(tbody);

    try {
        let tr, td, json, input_quarter;

        let colNum = document.querySelector("table thead tr").childElementCount + 3;

        json = JSON.parse(xhttp.responseText);
        console.log(json);
        console.log(tbody);

        for (let i = 0; i < json.length; i++) {
            tr = document.createElement('tr');
            for (let j = 0; j < colNum; j++) {
                td = document.createElement('td');

                function qSetAttrib() {
                    input_quarter = document.createElement('input');
                    input_quarter.setAttribute('type', 'number');
                    input_quarter.setAttribute('min', 65);
                    input_quarter.setAttribute('max', 100);
                }

                if (j == 0) {
                    td.innerHTML = i + 1;
                } else if (j == 1) {
                    td.innerHTML = json[i][1] + ', ' + json[i][2] + ' ' + json[i][3];
                } else if (j == 2) {
                    qSetAttrib();
                    input_quarter.setAttribute('id', 'q1');
                    input_quarter.setAttribute('value', json[i][6]);
                    td.appendChild(input_quarter);
                } else if (j == 3) {
                    qSetAttrib();
                    input_quarter.setAttribute('id', 'q2');
                    input_quarter.setAttribute('value', json[i][7]);
                    td.appendChild(input_quarter);
                } else if (j == 4) {
                    qSetAttrib();
                    input_quarter.setAttribute('id', 'q3');
                    input_quarter.setAttribute('value', json[i][8]);
                    td.appendChild(input_quarter);
                } else if (j == 5) {
                    qSetAttrib();
                    input_quarter.setAttribute('id', 'q4');
                    input_quarter.setAttribute('value', json[i][9]);
                    td.appendChild(input_quarter);
                }
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        for (let i = 0; i < 4; i++) {
            let saveQuarter = document.querySelectorAll('#saveQuarter button');
            saveQuarter[i].addEventListener('click', function() {
                Quarter = i + 1;
                saveGrades();
                alert('QUARTER ' + Quarter + ' GRADES SAVED')
                window.location.reload();
            });
        }

        function saveGrades() {
            for (let i = 0; i < json.length; i++) {
                let GradeID;
                let LRNNum = json[i][0];
                let GradeRating = document.querySelectorAll('#q' + Quarter)[i].value

                if (Quarter == 1)
                    GradeID = json[i][10];
                else if (Quarter == 2)
                    GradeID = json[i][11];
                else if (Quarter == 3)
                    GradeID = json[i][12];
                else if (Quarter == 4)
                    GradeID = json[i][13];

                if (!GradeRating == "") {
                    SimplifiedQuery(
                        "INSERT",
                        "INSERT INTO grade \
                        (GradeID, LRNNum, GradeLevel, SubjectName, Quarter, GradeRating)" +
                        "VALUES ('" +
                        GradeID + "', '" +
                        LRNNum + "', '" +
                        GradeLevel + "', '" +
                        SubjectName + "', '" +
                        Quarter + "', '" +
                        GradeRating + "')" +
                        "ON DUPLICATE KEY UPDATE GradeRating = " + GradeRating,
                        "",
                        fcn = () => { return null }
                    );
                }
            }
        }

    } catch (err) {
        alert("CANNOT FIND");
        console.log(xhttp.responseText);
        console.log(err);
    }
}