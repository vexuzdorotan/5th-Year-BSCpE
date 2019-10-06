var i, j, sumVal;

const fil = document.querySelectorAll("#fil input");
const filTotal = document.querySelector("#filTotal");

const eng = document.querySelectorAll("#eng input");
const engTotal = document.querySelector("#engTotal");

const math = document.querySelectorAll("#math input");
const mathTotal = document.querySelector("#mathTotal");

const sci = document.querySelectorAll("#sci input");
const sciTotal = document.querySelector("#sciTotal");

const ap = document.querySelectorAll("#ap input");
const apTotal = document.querySelector("#apTotal");

const esp = document.querySelectorAll("#esp input");
const espTotal = document.querySelector("#espTotal");

const tle = document.querySelectorAll("#tle input");
const tleTotal = document.querySelector("#tleTotal");

const mapeh = document.querySelectorAll("#mapeh input");
const mapehTotal = document.querySelector("#mapehTotal");

const music = document.querySelectorAll("#music input");
const musicTotal = document.querySelector("#musicTotal");

const arts = document.querySelectorAll("#arts input");
const artsTotal = document.querySelector("#artsTotal");

const pe = document.querySelectorAll("#pe input");
const peTotal = document.querySelector("#peTotal");

const health = document.querySelectorAll("#health input");
const healthTotal = document.querySelector("#healthTotal");

const gwa = document.querySelector('#gwa');
var input = document.querySelectorAll("body input");

const StudentNum = document.getElementById("StudentNum");
const GradeLevel = document.getElementById("GradeLevel");

var submitForm = document.getElementById("submitForm");

submitForm.addEventListener("click", function() {
    InsertInfo();
});

function InsertInfo() {
    i = 0;
    var data = "";
    data += "StudentNum=" + StudentNum.value + "&";
    data += "GradeLevel=" + GradeLevel.textContent + "&";
    data += "Quarter=1&";
    data += "fil=" + fil[i].value + "&";
    data += "eng=" + eng[i].value + "&";
    data += "math=" + math[i].value + "&";
    data += "sci=" + sci[i].value + "&";
    data += "ap=" + ap[i].value + "&";
    data += "esp=" + esp[i].value + "&";
    data += "tle=" + tle[i].value + "&";
    data += "mapeh=" + mapeh[i].value + "&";
    data += "music=" + music[i].value + "&";
    data += "arts=" + arts[i].value + "&";
    data += "pe=" + pe[i].value + "&";
    data += "health=" + health[i].value;

    console.log(data);

    AJAX(data, true, "post", "Create_Grade.php", true, CheckIfRegistered);
}

function CheckIfRegistered(xhttp) {
    alert(xhttp.responseText);
    console.log(xhttp.responseText);
}

setGwa();

for (i = 0; i < fil.length; i++) {
    fil[i].addEventListener("change", function() {

        let filSum = 0;
        for (j = 0; j < fil.length; j++) {
            filSum += Number(fil[j].value);
        }
        filTotal.textContent = filSum / 4;
        setGwa();
    });
}

for (i = 0; i < eng.length; i++) {
    eng[i].addEventListener("change", function() {

        let engSum = 0;
        for (j = 0; j < eng.length; j++) {
            engSum += Number(eng[j].value);
        }
        engTotal.textContent = engSum / 4;
        setGwa();
    });
}

for (i = 0; i < math.length; i++) {
    math[i].addEventListener("change", function() {

        let mathSum = 0;
        for (j = 0; j < math.length; j++) {
            mathSum += Number(math[j].value);
        }
        mathTotal.textContent = mathSum / 4;
        setGwa();
    });
}

for (i = 0; i < sci.length; i++) {
    sci[i].addEventListener("change", function() {

        let sciSum = 0;
        for (j = 0; j < sci.length; j++) {
            sciSum += Number(sci[j].value);
        }
        sciTotal.textContent = sciSum / 4;
        setGwa();
    });
}

for (i = 0; i < ap.length; i++) {
    ap[i].addEventListener("change", function() {

        let apSum = 0;
        for (j = 0; j < ap.length; j++) {
            apSum += Number(ap[j].value);
        }
        apTotal.textContent = apSum / 4;
        setGwa();
    });
}

for (i = 0; i < esp.length; i++) {
    esp[i].addEventListener("change", function() {

        let espSum = 0;
        for (j = 0; j < esp.length; j++) {
            espSum += Number(esp[j].value);
        }
        espTotal.textContent = espSum / 4;
        setGwa();
    });
}

for (i = 0; i < tle.length; i++) {
    tle[i].addEventListener("change", function() {

        let tleSum = 0;
        for (j = 0; j < tle.length; j++) {
            tleSum += Number(tle[j].value);
        }
        tleTotal.textContent = tleSum / 4;
        setGwa();
    });
}

for (i = 0; i < music.length; i++) {
    music[i].addEventListener("change", function() {

        let musicSum = 0;
        for (j = 0; j < music.length; j++) {
            musicSum += Number(music[j].value);
        }
        musicTotal.textContent = musicSum / 4;
        setMapeh();
        setGwa();
    });
}

for (i = 0; i < arts.length; i++) {
    arts[i].addEventListener("change", function() {

        let artsSum = 0;
        for (j = 0; j < arts.length; j++) {
            artsSum += Number(arts[j].value);
        }
        artsTotal.textContent = artsSum / 4;
        setMapeh();
        setGwa();
    });
}

for (i = 0; i < pe.length; i++) {
    pe[i].addEventListener("change", function() {

        let peSum = 0;
        for (j = 0; j < pe.length; j++) {
            peSum += Number(pe[j].value);
        }
        peTotal.textContent = peSum / 4;
        setMapeh();
        setGwa();
    });
}

for (i = 0; i < health.length; i++) {
    health[i].addEventListener("change", function() {

        let healthSum = 0;
        for (j = 0; j < health.length; j++) {
            healthSum += Number(health[j].value);
        }
        healthTotal.textContent = healthSum / 4;
        setMapeh();
        setGwa();
    });
}

function setMapeh() {
    let mapehSum = 0;

    for (i = 0; i < mapeh.length; i++) {
        mapeh[i].value = (Number(music[i].value) + Number(arts[i].value) +
            Number(pe[i].value) + Number(health[i].value)) / 4;
    }

    for (j = 0; j < mapeh.length; j++) {
        mapehSum += Number(mapeh[j].value);
    }
    mapehTotal.textContent = mapehSum / 4;

    setGwa();
}

function setGwa() {
    let gwaSum = 0;

    for (i = 2; i <= 9; i++) {
        let finalRating = Number(table.rows[i].cells[5].innerHTML);
        gwaSum += finalRating / 8;
    }
    gwa.textContent = gwaSum;

    if (gwaSum >= 75) {
        table.rows[14].cells[3].innerHTML = "Passed";
    } else {
        table.rows[14].cells[3].innerHTML = "Failed";
    }

    remarks();
}

function remarks() {
    for (i = 2; i <= 13; i++) {
        let finalRating = table.rows[i].cells[5].innerHTML;

        if (finalRating >= 75) {
            table.rows[i].cells[6].innerHTML = "Passed";
        } else {
            table.rows[i].cells[6].innerHTML = "Failed";
        }
    }
}