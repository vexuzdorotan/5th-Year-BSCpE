'use strict';


const wrapperGradeSortable = (function() {
    let jsonSubject;

    let DOMstrings = {
        btnSave: '#btnSave',
        subjectList: '#subjectList',
        selectGradeLevel: '#selectGradeLevel',
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
        try {
            jsonSubject = JSON.parse(xhttp.responseText);
            console.log(jsonSubject);

            createList(jsonSubject);
            sortSubject(document.querySelector(DOMstrings.subjectList), (item) => console.log(item));

        } catch (err) {
            alert('CANNOT FIND');
            console.log(xhttp.responseText);
            console.log(err);
        }
    }

    let createList = function(subj) {

        for (let i = 0; i < subj.length; i++) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(subj[i][1]);
            node.appendChild(textnode);
            document.querySelector(DOMstrings.subjectList).appendChild(node);
        }
    }

    let clearList = function() {
        const subjectList = document.querySelector(DOMstrings.subjectList);

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
        getDOMstrings: function() {
            return DOMstrings;
        },

        saveSubject: function() {
            let orderNumber = 1;
            let listSubj = document.querySelector(DOMstrings.subjectList).childNodes;

            for (let s in listSubj) {
                if (listSubj.hasOwnProperty(s)) {
                    setSaveSubjListDB(listSubj[s].textContent, orderNumber);
                    orderNumber++;
                }
            }

            alert('New Arrangement Saved!')
        },

        selectGradeLevel: function() {
            let GradeLevel = document.querySelector(DOMstrings.selectGradeLevel).value

            clearList();
            setSubjectListDB(GradeLevel);
        },

        setSubjectListDB,
        sortSubject,
    }
})();



const wrapperGradeSortableMain = (function(wrap) {
    let selectGradeLevel = wrap.selectGradeLevel;

    let setupEventListeners = function() {
        let DOM = wrap.getDOMstrings();

        document.querySelector(DOM.btnSave).addEventListener('click', saveSubject);
    };

    let saveSubject = function() {
        wrap.saveSubject();
    };


    return {
        init: () => {
            console.log('Application has started.');
            setupEventListeners();
            selectGradeLevel();
        },
    };
})(wrapperGradeSortable);

wrapperGradeSortableMain.init();