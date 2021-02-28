'use strict';

let sectionEL = document.getElementById('lessonChoices');
let sectionOp = document.getElementById('learnOptions');
let sectionChoices = document.getElementById('content');
let tableContentEl = document.getElementById('tableContent')

let imageAdd, imgSub, imgNum, textNum, textAdd, textSub;
let divAdd, divSub, divNum;

sectionOp.addEventListener('click', chooseOne);

function chooseOne(event) {
    //console.log(event);
    event.preventDefault();
    let eventValue = event.target.id;
    if (eventValue === 'math' || eventValue === 'mathImg' || eventValue === 'mathP') {
        divNum = document.createElement('div');
        sectionEL.appendChild(divNum);
        divNum.setAttribute('class', 'lessons')
        imgNum = document.createElement('img');
        divNum.appendChild(imgNum);
        imgNum.setAttribute('src', 'img/num.png')
        imgNum.setAttribute('id', 'numbers');
        textNum = document.createElement('h3');
        divNum.appendChild(textNum);
        textNum.textContent = 'Numbers';
        divAdd = document.createElement('div');
        sectionEL.appendChild(divAdd);
        divAdd.setAttribute('class', 'lessons')
        imageAdd = document.createElement('img');
        divAdd.appendChild(imageAdd);
        imageAdd.setAttribute('src', 'img/addition_lessons.png')
        imageAdd.setAttribute('id', 'add');
        textAdd = document.createElement('h3');
        divAdd.appendChild(textAdd);
        textAdd.textContent = 'Addition';
        divSub = document.createElement('div');
        sectionEL.appendChild(divSub);
        divSub.setAttribute('class', 'lessons')
        imgSub = document.createElement('img');
        divSub.appendChild(imgSub);
        imgSub.setAttribute('src', 'img/subtraction_lessons.png');
        imgSub.setAttribute('id', 'sub');
        textSub = document.createElement('h3');
        divSub.appendChild(textSub);
        textSub.textContent = 'Substraction';

        //imgNum.setAttribute('alt',Numbers);
        sectionOp.removeEventListener('click', chooseOne);
    }
    else if (eventValue === 'english' || eventValue === 'englishImg' || eventValue === 'englishP') {
    }


}

sectionEL.addEventListener('click', chooseLesson);

function chooseLesson(event) {
    event.preventDefault();
    let value = event.target.id;
    console.log(event);
    let trEl, tdEl;
    let h3, img;
    switch (value) {
        case 'numbers':
            console.log(tableContentEl);
            for (let i = 0; i < 9; i++) {
                trEl = document.createElement('tr');
                tableContentEl.appendChild(trEl);
                switch (i) {
                    case 0:
                        console.log(tableContentEl);
                        tdEl = document.createElement('td');
                        trEl.appendChild(tdEl);
                        tdEl.textContent = 'This is the very beginning of understanding how addition works.Let\'s look at two sets:';
                        tdEl.setAttribute('id', 'between');
                        break;
                    case 1:
                        tdEl = document.createElement('td');
                        trEl.appendChild(tdEl);
                        tdEl.textContent = 'Set A';
                        tdEl = document.createElement('td');
                        trEl.appendChild(tdEl);
                        tdEl.textContent = 'Set B';
                        break;
                    case 2:
                        tdEl = document.createElement('td');
                        trEl.appendChild(tdEl);
                        let imgEl = document.createElement('img');
                        tdEl.appendChild(imgEl);
                        imgEl.setAttribute('src', 'img/addition01-01.gif');
                        tdEl = document.createElement('td');
                        trEl.appendChild(tdEl);
                        imgEl = document.createElement('img');
                        tdEl.appendChild(imgEl);
                        imgEl.setAttribute('src', 'img/addition01-02.gif');
                        break;
                    case 3:
                        tdEl = document.createElement('td');
                        trEl.appendChild(tdEl);
                        tdEl.textContent = 'Count how many triangles are in Set A... There are 2!';
                        tdEl = document.createElement('td');
                        trEl.appendChild(tdEl);
                        tdEl.textContent = 'Count how many triangles are in Set B... There are 3!';
                        break;
                    case 4:
                        tdEl = document.createElement('td');
                        trEl.appendChild(tdEl);
                        tdEl.textContent = 'Now, put the sets together into one big set:';
                        break;
                    case 5:
                        tdEl = document.createElement('td');
                        trEl.appendChild(tdEl);
                        let finalImgEl = document.createElement('img');
                        tdEl.appendChild(finalImgEl);
                        finalImgEl.setAttribute('src', 'img/addition01-03 (1).gif');
                        finalImgEl.setAttribute('class','imgCentered');
                        break;
                        case 6:
                            tdEl = document.createElement('td');
                            trEl.appendChild(tdEl);
                            tdEl.textContent = 'Count how many triangles are in this set... There are 5!';
                            break;
                            case 7:
                                tdEl = document.createElement('td');
                        trEl.appendChild(tdEl);
                        let resultImgEl = document.createElement('img');
                        tdEl.appendChild(resultImgEl);
                        resultImgEl.setAttribute('src', 'img/addition01-04.gif');
                        resultImgEl.setAttribute('class','imgCentered');
                                break;
                }
            }
            break;
        case 'add':
            break;
        case 'sub':
            break;

    }
}

