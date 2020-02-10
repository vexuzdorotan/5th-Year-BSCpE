'use strict';


const wrapperGradeSorter = (function() {
    let jsonSubject;

    let setDOMString = {
        uListSubject: '#uListSubject',
        selectGradeLevel: '#selectGradeLevel',
        btnSaveSubj: '#btnSaveSubj',
    }

    let setSubjectListDB = function(grLvl) {
        let query = '';

        query += 'SELECT grade_sortable.OrderNumber, subjectcode.SubjectCode, subjectcode.SubjectDescription ';
        query += 'FROM subjectcode ';
        query += 'LEFT JOIN grade_sortable ON subjectcode.SubjectCode = grade_sortable.SubjectCode ';
        query += 'WHERE subjectcode.GradeLevel IN (' + grLvl + ') ';
        query += 'GROUP BY grade_sortable.OrderNumber ASC ';

        // query += 'SELECT subjectcode.SubjectCode, subjectcode.SubjectDescription ';
        // query += 'FROM subjectcode ';
        // query += 'WHERE subjectcode.GradeLevel IN (' + grLvl + ') ';

        SimplifiedQuery('SELECT', query, '', getSubjectListDB);
    }

    // SELECT grade_sortable.OrderNumber, subjectcode.SubjectCode, subjectcode.SubjectDescription 
    // FROM subjectcode 
    // JOIN grade_sortable ON subjectcode.SubjectCode = grade_sortable.SubjectCode 
    // WHERE subjectcode.GradeLevel IN (' + grLvl + ') 
    // GROUP BY grade_sortable.OrderNumber ASC 


    let getSubjectListDB = function(xhttp) {
        try {
            jsonSubject = JSON.parse(xhttp.responseText);
            console.log(jsonSubject);

            createList(jsonSubject);
            sortSubject(document.querySelector(setDOMString.uListSubject), (item) => console.log(item));

        } catch (err) {
            alert('CANNOT FIND');
            console.log(xhttp.responseText);
            console.log(err);
        }
    }

    let createList = function(subj) {

        for (let i = 0; i < subj.length; i++) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(subj[i]['SubjectCode']);
            node.appendChild(textnode);
            document.querySelector(setDOMString.uListSubject).appendChild(node);
        }
    }

    let clearList = function() {
        const subjectList = document.querySelector(setDOMString.uListSubject);

        while (subjectList.firstChild) {
            subjectList.removeChild(subjectList.firstChild);
        }
    }

    let sortSubject = function(listSubject, onUpdate) {
        let dragEl;
        let clickEl;

        [].slice.call(listSubject.children).forEach(function(itemEl) {
            itemEl.draggable = true;
        });


        let _onDragOver = function(evt) {
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'move';

            let target = evt.target;
            if (target && target !== dragEl && target.nodeName == 'LI') {

                listSubject.insertBefore(dragEl, target.nextSibling || target);
            }
        }


        let _onDragEnd = function(evt) {
            evt.preventDefault();

            dragEl.classList.remove('ghost');
            listSubject.removeEventListener('dragover', _onDragOver, false);
            listSubject.removeEventListener('dragend', _onDragEnd, false);
            // onUpdate(dragEl);
        }


        listSubject.addEventListener('dragstart', function(evt) {
            dragEl = evt.target;

            evt.dataTransfer.effectAllowed = 'move';
            evt.dataTransfer.setData('Text', dragEl.textContent);

            listSubject.addEventListener('dragover', _onDragOver, false);
            listSubject.addEventListener('dragend', _onDragEnd, false);

            setTimeout(function() {

                dragEl.classList.add('ghost');
            }, 0)
        }, false);


        listSubject.addEventListener('click', function(evt) {
            clickEl = evt.target;
            // console.log(clickEl);
        }, false);
    }

    let setSaveSubjListDB = function(subj, num) {
        let query = '';

        query += 'INSERT INTO grade_sortable ';
        query += '(SubjectCode, OrderNumber) ';
        query += 'VALUES ("' + subj + '", "' + num + '") ';
        query += 'ON DUPLICATE KEY UPDATE OrderNumber = "' + num + '"';

        SimplifiedQuery('INSERT', query, '', () => null);
    }


    return {
        getDOMString: function() {
            return setDOMString;
        },


        saveSubject: function() {
            let orderNumber = 1;
            let listSubj = document.querySelector(setDOMString.uListSubject).childNodes;

            for (let s in listSubj) {
                if (listSubj.hasOwnProperty(s)) {
                    setSaveSubjListDB(listSubj[s].textContent, orderNumber);
                    orderNumber++;
                }
            }

            alert('New Arrangement Saved!');
        },


        selectGradeLevel: function() {
            let GradeLevel = document.querySelector(setDOMString.selectGradeLevel).value

            clearList();
            console.log('Grade ' + GradeLevel + ' selected.')
            setSubjectListDB(GradeLevel);
        },
    }
})();



const wrapperGradeEnabler = (function() {
    let setDOMString = {
        selectQuarter: '#selectQuarter',
        btnSaveQuarter: '#btnSaveQuarter',
    }


    let setQuarter = function() {
        let query = '';

        query += 'SELECT SettingValue ';
        query += 'FROM admin_settings ';
        query += 'WHERE SettingName = "quarter_enabled" ';

        SimplifiedQuery('SELECT', query, '', getQuarter);
    };


    let getQuarter = function(xhttp) {
        try {
            let jsonQuarter = JSON.parse(xhttp.responseText);

            document.querySelector(setDOMString.selectQuarter).value = jsonQuarter[0]['SettingValue'];

        } catch (err) {
            alert('CANNOT FIND');
            console.log(xhttp.responseText);
            console.log(err);
        }
    }


    return {
        getDOMString: function() {
            return setDOMString;
        },


        saveQuarter: function(q) {
            let query = '';

            query += 'UPDATE admin_settings ';
            query += 'SET SettingValue ="' + q + '" ';
            query += 'WHERE SettingName = "quarter_enabled" ';

            SimplifiedQuery('UPDATE', query, '', () => null);
        },


        selectQuarter: function() {
            setQuarter();
        },
    }
})();



const wrapperGradeSettingMain = (function(wrapGrSort, wrapGrEn) {
    let selectGradeLevel = wrapGrSort.selectGradeLevel;
    let selectQuarter = wrapGrEn.selectQuarter;
    let DOMGrSort = wrapGrSort.getDOMString();
    let DOMGrEn = wrapGrEn.getDOMString();


    let setupEventListeners = function() {
        document.querySelector(DOMGrSort.btnSaveSubj).addEventListener('click', saveSubject);
        document.querySelector(DOMGrEn.btnSaveQuarter).addEventListener('click', saveQuarter);
    };


    let saveSubject = function() {
        wrapGrSort.saveSubject();
    };


    let saveQuarter = function() {
        let selectedQuarter = document.querySelector(DOMGrEn.selectQuarter).value;

        wrapGrEn.saveQuarter(selectedQuarter);
        alert('Enabled Quarter is set to ' + selectedQuarter);
    };


    return {
        init: () => {
            console.log('Application has started.');
            setupEventListeners();
            selectGradeLevel();
            selectQuarter();
        },
    };
})(wrapperGradeSorter, wrapperGradeEnabler);

wrapperGradeSettingMain.init();