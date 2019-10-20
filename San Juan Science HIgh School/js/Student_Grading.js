let i, j, parent_id = "Student";

const table = document.querySelector("table");
const modal_body = document.getElementById("modal-body");

const txt_GradeLevel = document.getElementById("txt_GradeLevel");
const txt_SectionName = document.getElementById("txt_SectionName");
const txt_SectionNum = document.getElementById("txt_SectionNum");
const txt_Adviser = document.getElementById("txt_Adviser");

const txt_StudentName = document.getElementById("txt_StudentName");
const txt_LRNNum = document.getElementById("txt_LRNNum");

const tr = document.querySelectorAll("tbody tr");
const button = document.querySelectorAll("button");

openSectionModal = button[0];
openStudentModal = button[1];

//functions onLoad
// setAverage();

// SECTION
openSectionModal.addEventListener("click", function() {
    this.style.backgroundColor = "";
    theadID = "SectionNum@SectionName@GradeLevel@Teacher.Name";
    theadHTML = "Section Number@Section Name@Grade Level@Adviser";
    CreateInput("SearchSection", "search", modal_body);
    document.querySelector("#SearchSection").className = "modal-search";
    CreateTable("SearchSectionTable", theadID, theadHTML, "@", modal_body, 0, "SectionNum");
    document.querySelector("thead").className = "dark";
    openModal("Section", "Section");
    Search = function() {
        SearchWithQuery(
            "Section",
            "Teacher",
            GetID(document.querySelectorAll("#SearchSectionTable thead td"), 0),
            "Adviser=Teacher.Name",
            "LEFT JOIN",
            "teacher.SectionNum = section.SectionNum",
            document.getElementById("SearchSection"),
            null,
            PickSection
        );
    }
    Search();
    document.getElementById("SearchSection").addEventListener("change", Search);
});

function PickSection(xhttp) {
    CreateTBody(xhttp);
    let tbody_tr = document.querySelectorAll("#SearchSectionTable tbody tr");
    for (let i = 0; i < tbody_tr.length; i++) {
        tbody_tr[i].addEventListener("click", function() {
            document.querySelector("#SearchSection").value = "";
            // console.log(this);
            closeModal(modal_body);
            txt_SectionNum.value = this.childNodes[0].innerHTML;
            txt_SectionName.value = this.childNodes[1].innerHTML;
            txt_GradeLevel.innerHTML = this.childNodes[2].innerHTML;
            txt_Adviser.innerHTML = this.childNodes[3].innerHTML;
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
    // console.log(xhttp);
}

//STUDENT
openStudentModal.addEventListener("click", function() {
    this.style.backgroundColor = "";
    theadID = "LRNNum@FirstName@MiddleName@LastName";
    theadHTML = "LRN Number@First Name@Middle Name@Last Name";
    CreateInput("SearchStudent", "search", modal_body);
    document.querySelector("#SearchStudent").className = "modal-search";
    CreateTable("SearchStudentTable", theadID, theadHTML, "@", modal_body, 0, "LRNNum");
    document.querySelector("thead").className = "dark";
    openModal("Student", "Student");

    Search = function() {
        SearchWithQuery(
            "Student",
            null, // "Section",
            GetID(document.querySelectorAll("#SearchStudentTable thead td"), 0),
            null,
            null, // "LEFT JOIN",
            null, // "section.SectionNum = student.SectionNum",
            document.getElementById("SearchStudent"),
            null,
            PickStudent
        );
    }
    Search();

    document.getElementById("SearchStudent").addEventListener("change", Search);
});

function PickStudent(xhttp) {
    CreateTBody(xhttp);
    let tbody_tr = document.querySelectorAll("#SearchStudentTable tbody tr");
    for (let i = 0; i < tbody_tr.length; i++) {
        tbody_tr[i].addEventListener("click", function() {
            document.querySelector("#SearchStudent").value = "";
            console.log(this);
            closeModal(modal_body);
            txt_LRNNum.value = this.childNodes[0].innerHTML;
            txt_Student.innerHTML = this.childNodes[3].innerHTML + ", ";
            txt_Student.innerHTML += this.childNodes[1].innerHTML + " ";
            txt_Student.innerHTML += this.childNodes[2].innerHTML;
            txt_StudentName.value = txt_Student.innerHTML;
            RetrieveGrades();
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
    // console.log(xhttp);
}

function RetrieveGrades() {
    let columnNames = {
        0: "GradeID",
        1: "LRNNum",
        2: "GradeLevel",
        3: "SubjectName",
        4: "Quarter",
        5: "GradeRating"
    };

    SearchWithoutQuery("grade", txt_LRNNum, columnNames, Retrieved);
    console.log(txt_LRNNum);
}

function Retrieved(xhttp) {
    let json;
    // console.log(xhttp.responseText);		
    json = JSON.parse(xhttp.responseText);
    console.log(json);
    console.log(json.length);

    for (let i = 2; i < tr.length + 2; i++) {
        for (let j = 1; j < tr[0].childElementCount; j++) {
            table.rows[i].cells[j].innerHTML = "";
        }
    }
    try {
        for (let i = 0; i < json.length; i++) {
            table.rows[GetParentRow(json[i][3])].cells[json[i][4]].innerHTML = json[i][5];
        }
    } catch (err) {
        console.log(err);
    }
}

function GetParentRow(child) {
    if (child == "fil") return 2;
    else if (child == "eng") return 3;
    else if (child == "math") return 4;
    else if (child == "sci") return 5;
    else if (child == "ap") return 6;
    else if (child == "esp") return 7;
    else if (child == "tle") return 8;
    else if (child == "mapeh") return 9;
    else if (child == "music") return 10;
    else if (child == "arts") return 11;
    else if (child == "pe") return 12;
    else if (child == "health") return 13;
}

// const fil = document.querySelectorAll("#fil input");
// const filTotal = document.querySelector("#filTotal");

// const eng = document.querySelectorAll("#eng input");
// const engTotal = document.querySelector("#engTotal");

// const math = document.querySelectorAll("#math input");
// const mathTotal = document.querySelector("#mathTotal");

// const sci = document.querySelectorAll("#sci input");
// const sciTotal = document.querySelector("#sciTotal");

// const ap = document.querySelectorAll("#ap input");
// const apTotal = document.querySelector("#apTotal");

// const esp = document.querySelectorAll("#esp input");
// const espTotal = document.querySelector("#espTotal");

// const tle = document.querySelectorAll("#tle input");
// const tleTotal = document.querySelector("#tleTotal");

// const mapeh = document.querySelectorAll("#mapeh input");
// const mapehTotal = document.querySelector("#mapehTotal");

// const music = document.querySelectorAll("#music input");
// const musicTotal = document.querySelector("#musicTotal");

// const arts = document.querySelectorAll("#arts input");
// const artsTotal = document.querySelector("#artsTotal");

// const pe = document.querySelectorAll("#pe input");
// const peTotal = document.querySelector("#peTotal");

// const health = document.querySelectorAll("#health input");
// const healthTotal = document.querySelector("#healthTotal");

// const average = document.querySelectorAll("#average input");
// const averageTotal = document.querySelector("#averageTotal");

// for (i = 0; i < fil.length; i++) {
//     fil[i].addEventListener("change", function() {

//         let filSum = 0;
//         for (j = 0; j < fil.length; j++) {
//             filSum += Number(fil[j].value);
//         }
//         filTotal.textContent = filSum / 4;
//         setAverage();
//     });
// }

// for (i = 0; i < eng.length; i++) {
//     eng[i].addEventListener("change", function() {

//         let engSum = 0;
//         for (j = 0; j < eng.length; j++) {
//             engSum += Number(eng[j].value);
//         }
//         engTotal.textContent = engSum / 4;
//         setAverage();
//     });
// }

// for (i = 0; i < math.length; i++) {
//     math[i].addEventListener("change", function() {

//         let mathSum = 0;
//         for (j = 0; j < math.length; j++) {
//             mathSum += Number(math[j].value);
//         }
//         mathTotal.textContent = mathSum / 4;
//         setAverage();
//     });
// }

// for (i = 0; i < sci.length; i++) {
//     sci[i].addEventListener("change", function() {

//         let sciSum = 0;
//         for (j = 0; j < sci.length; j++) {
//             sciSum += Number(sci[j].value);
//         }
//         sciTotal.textContent = sciSum / 4;
//         setAverage();
//     });
// }

// for (i = 0; i < ap.length; i++) {
//     ap[i].addEventListener("change", function() {

//         let apSum = 0;
//         for (j = 0; j < ap.length; j++) {
//             apSum += Number(ap[j].value);
//         }
//         apTotal.textContent = apSum / 4;
//         setAverage();
//     });
// }

// for (i = 0; i < esp.length; i++) {
//     esp[i].addEventListener("change", function() {

//         let espSum = 0;
//         for (j = 0; j < esp.length; j++) {
//             espSum += Number(esp[j].value);
//         }
//         espTotal.textContent = espSum / 4;
//         setAverage();
//     });
// }

// for (i = 0; i < tle.length; i++) {
//     tle[i].addEventListener("change", function() {

//         let tleSum = 0;
//         for (j = 0; j < tle.length; j++) {
//             tleSum += Number(tle[j].value);
//         }
//         tleTotal.textContent = tleSum / 4;
//         setAverage();
//     });
// }

// function setMapeh() {
//     let mapehSum = 0;

//     for (i = 0; i < mapeh.length; i++) {
//         mapeh[i].value = (Number(music[i].value) + Number(arts[i].value) +
//             Number(pe[i].value) + Number(health[i].value)) / 4;
//     }

//     for (j = 0; j < mapeh.length; j++) {
//         mapehSum += Number(mapeh[j].value);
//     }
//     mapehTotal.textContent = mapehSum / 4;

//     setAverage();
// }

// for (i = 0; i < music.length; i++) {
//     music[i].addEventListener("change", function() {

//         let musicSum = 0;
//         for (j = 0; j < music.length; j++) {
//             musicSum += Number(music[j].value);
//         }
//         musicTotal.textContent = musicSum / 4;
//         setMapeh();
//         setAverage();
//     });
// }

// for (i = 0; i < arts.length; i++) {
//     arts[i].addEventListener("change", function() {

//         let artsSum = 0;
//         for (j = 0; j < arts.length; j++) {
//             artsSum += Number(arts[j].value);
//         }
//         artsTotal.textContent = artsSum / 4;
//         setMapeh();
//         setAverage();
//     });
// }

// for (i = 0; i < pe.length; i++) {
//     pe[i].addEventListener("change", function() {

//         let peSum = 0;
//         for (j = 0; j < pe.length; j++) {
//             peSum += Number(pe[j].value);
//         }
//         peTotal.textContent = peSum / 4;
//         setMapeh();
//         setAverage();
//     });
// }

// for (i = 0; i < health.length; i++) {
//     health[i].addEventListener("change", function() {

//         let healthSum = 0;
//         for (j = 0; j < health.length; j++) {
//             healthSum += Number(health[j].value);
//         }
//         healthTotal.textContent = healthSum / 4;
//         setMapeh();
//         setAverage();
//     });
// }

// function setAverage() {
//     let averageSum = 0;

//     for (i = 0; i < average.length; i++) {
//         average[i].value = (
//             Number(fil[i].value) +
//             Number(eng[i].value) +
//             Number(math[i].value) +
//             Number(sci[i].value) +
//             Number(ap[i].value) +
//             Number(esp[i].value) +
//             Number(tle[i].value) +
//             Number(mapeh[i].value)
//         ) / 8;
//     }

//     for (j = 0; j < average.length; j++) {
//         averageSum += Number(average[j].value);
//     }
//     averageTotal.textContent = averageSum / 4;
//     setRemarks();
// }

// function setRemarks() {
//     for (i = 2; i <= 14; i++) {
//         let finalRating = table.rows[i].cells[5].innerHTML;

//         if (finalRating >= 75) {
//             table.rows[i].cells[6].innerHTML = "Passed";
//         } else {
//             table.rows[i].cells[6].innerHTML = "Failed";
//         }
//     }
// }