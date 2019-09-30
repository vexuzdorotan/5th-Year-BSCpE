var i, j, sumVal;
var body = document.getElementsByTagName("body");
var table = document.querySelector("#table");
var inputGrades = document.querySelectorAll("tbody input");

var fil = document.querySelectorAll(".fil input");
var filTotal = document.querySelector("#filTotal");

var eng = document.querySelectorAll(".eng input");
var engTotal = document.querySelector("#engTotal");

var math = document.querySelectorAll(".math input");
var mathTotal = document.querySelector("#mathTotal");

var sci = document.querySelectorAll(".sci input");
var sciTotal = document.querySelector("#sciTotal");

var ap = document.querySelectorAll(".ap input");
var apTotal = document.querySelector("#apTotal");

var tle = document.querySelectorAll(".tle input");
var tleTotal = document.querySelector("#tleTotal");

var mapeh = document.querySelectorAll(".mapeh input");
var mapehTotal = document.querySelector("#mapehTotal");

var esp = document.querySelectorAll(".esp input");
var espTotal = document.querySelector("#espTotal");

//---------------------------------------------------------

for (i = 0; i < fil.length; i++) {
    fil[i].addEventListener("click", function() {

        var filSum = 0;
        for (j = 0; j < fil.length; j++) {
            filSum += Number(fil[j].value);
        }
        filTotal.textContent = filSum / 4;
        remarks();
    });
}

for (i = 0; i < eng.length; i++) {
    eng[i].addEventListener("click", function() {

        var engSum = 0;
        for (j = 0; j < eng.length; j++) {
            engSum += Number(eng[j].value);
        }
        engTotal.textContent = engSum / 4;
        remarks();
    });
}

for (i = 0; i < math.length; i++) {
    math[i].addEventListener("click", function() {

        var mathSum = 0;
        for (j = 0; j < math.length; j++) {
            mathSum += Number(math[j].value);
        }
        mathTotal.textContent = mathSum / 4;
        remarks();
    });
}

for (i = 0; i < sci.length; i++) {
    sci[i].addEventListener("click", function() {

        var sciSum = 0;
        for (j = 0; j < sci.length; j++) {
            sciSum += Number(sci[j].value);
        }
        sciTotal.textContent = sciSum / 4;
        remarks();
    });
}

for (i = 0; i < ap.length; i++) {
    ap[i].addEventListener("click", function() {

        var apSum = 0;
        for (j = 0; j < ap.length; j++) {
            apSum += Number(ap[j].value);
        }
        apTotal.textContent = apSum / 4;
        remarks();
    });
}

for (i = 0; i < tle.length; i++) {
    tle[i].addEventListener("click", function() {

        var tleSum = 0;
        for (j = 0; j < tle.length; j++) {
            tleSum += Number(tle[j].value);
        }
        tleTotal.textContent = tleSum / 4;
        remarks();
    });
}

for (i = 0; i < mapeh.length; i++) {
    mapeh[i].addEventListener("click", function() {

        var mapehSum = 0;
        for (j = 0; j < mapeh.length; j++) {
            mapehSum += Number(mapeh[j].value);
        }
        mapehTotal.textContent = mapehSum / 4;
        remarks();
    });
}

for (i = 0; i < esp.length; i++) {
    esp[i].addEventListener("click", function() {

        var espSum = 0;
        for (j = 0; j < esp.length; j++) {
            espSum += Number(esp[j].value);
        }
        espTotal.textContent = espSum / 4;
        remarks();
    });
}

function remarks() {
    for (i = 1; i <= 8; i++) {
        var finalRating = table.rows[i].cells[5].innerHTML;

        if (finalRating >= 75) {
            table.rows[i].cells[6].innerHTML = "Passed";
        } else {
            table.rows[i].cells[6].innerHTML = "Failed";
        }
    }
}
remarks();

// function randomNumber(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
// document.getElementById("rand").innerHTML = (randomNumber(70, 80));

// for (i = 1; i <= 8; i++) {
//     sumVal = 0;

//     for (i = 1; i <= 8; i++) {
//         sumVal = 0;
//         for (j = 1; j <= 4; j++) {
//             sumVal = sumVal + Number(table.rows[i].cells[j]);
//         }

//         table.rows[i].cells[5].innerHTML = (sumVal / 4);

//         if (sumVal / 4 >= 75) {
//             table.rows[i].cells[6].innerHTML = "Passed";
//         } else {
//             table.rows[i].cells[6].innerHTML = "Failed";
//         }
//     }
// }