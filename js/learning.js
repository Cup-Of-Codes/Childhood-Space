'use strict';

let sectionEL = document.getElementById('lessonChoices');
let sectionOp = document.getElementById('learnOptions');
let sectionChoices = document.getElementById('content');
let tableContentEl = document.getElementById('tableContent')

let imgNum, textNum, imageAdd, textAdd, imgSub, textSub;
let divAdd, divSub, divNum;

const Lesson = function (lessonName, img) {
    this.lessonName = lessonName;
    this.img = img;
    this.arrayOfElemnts = [];
};

const LessonElement = function (elementName, img) {
    this.elementName = elementName;
    this.img = img;
};

let numbersLesson = new Lesson('Numbers', 'img/num.png');
for (let i = 0; i < 10; i++) {
    let number;
    switch (i) {
        case 0:
            number = new LessonElement('Zero', `img/ninenumbers/${i}.png`);
            numbersLesson.arrayOfElemnts.push(number);
            break;
        case 1:
            number = new LessonElement('One', `img/ninenumbers/${i}.png`);
            numbersLesson.arrayOfElemnts.push(number);
            break;
        case 2:
            number = new LessonElement('Two', `img/ninenumbers/${i}.png`);
            numbersLesson.arrayOfElemnts.push(number);
            break;
        case 3:
            number = new LessonElement('Three', `img/ninenumbers/${i}.png`);
            numbersLesson.arrayOfElemnts.push(number);
            break;
        case 4:
            number = new LessonElement('Four', `img/ninenumbers/${i}.png`);
            numbersLesson.arrayOfElemnts.push(number);
            break;
        case 5:
            number = new LessonElement('Five', `img/ninenumbers/${i}.png`);
            numbersLesson.arrayOfElemnts.push(number);
            break;
        case 6:
            number = new LessonElement('Six', `img/ninenumbers/${i}.png`);
            numbersLesson.arrayOfElemnts.push(number);
            break;
        case 7:
            number = new LessonElement('Seven', `img/ninenumbers/${i}.png`);
            numbersLesson.arrayOfElemnts.push(number);
            break;
        case 8:
            number = new LessonElement('Eight', `img/ninenumbers/${i}.png`);
            numbersLesson.arrayOfElemnts.push(number);
            break;
        case 9:
            number = new LessonElement('Nine', `img/ninenumbers/${i}.png`);
            numbersLesson.arrayOfElemnts.push(number);
            break;
    }
}
let additionLesson = new Lesson('Addition', 'img/addition_lessons.png')
let substractionLesson = new Lesson('Substraction', 'img/subtraction_lessons.png');

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
        imgNum.setAttribute('src', numbersLesson.img)
        imgNum.setAttribute('id', 'numbers');
        textNum = document.createElement('h3');
        divNum.appendChild(textNum);
        textNum.textContent = numbersLesson.lessonName;
        divAdd = document.createElement('div');
        sectionEL.appendChild(divAdd);
        divAdd.setAttribute('class', 'lessons')
        imageAdd = document.createElement('img');
        divAdd.appendChild(imageAdd);
        console.log(additionLesson.img);
        imageAdd.setAttribute('src', additionLesson.img)
        imageAdd.setAttribute('id', 'add');
        textAdd = document.createElement('h3');
        divAdd.appendChild(textAdd);
        textAdd.textContent = additionLesson.lessonName;
        divSub = document.createElement('div');
        sectionEL.appendChild(divSub);
        divSub.setAttribute('class', 'lessons')
        imgSub = document.createElement('img');
        divSub.appendChild(imgSub);
        imgSub.setAttribute('src', substractionLesson.img);
        imgSub.setAttribute('id', 'sub');
        textSub = document.createElement('h3');
        divSub.appendChild(textSub);
        textSub.textContent = substractionLesson.lessonName;

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
            trEl = document.createElement('tr');
            tableContentEl.appendChild(trEl);
            for (let i = 0; i < numbersLesson.arrayOfElemnts.length; i++) {
                tdEl = document.createElement('td');
                trEl.appendChild(tdEl);
                tdEl.textContent = numbersLesson.arrayOfElemnts[i].elementName;
                tdEl.setAttribute('class', 'numsNav')
                tdEl.setAttribute('id', 'numberChoice')
            }
            trEl.addEventListener('click', chooseNumber);
            break;
        case 'add':
            //console.log(tableContentEl);
            for (let i = 0; i < 9; i++) {
                trEl = document.createElement('tr');
                tableContentEl.appendChild(trEl);
                switch (i) {
                    case 0:
                        //console.log(tableContentEl);
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
                        finalImgEl.setAttribute('class', 'imgCentered');
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
                        resultImgEl.setAttribute('class', 'imgCentered');
                        break;
                }
            }
            break;
        case 'sub':
            break;

    }
}


function chooseNumber(event) {
    event.preventDefault();
    console.log(event);
    let value = event.target.innerText;
    //console.log(value);
    let imgEl ,tdEl,trEl;
    trEl = document.createElement('tr');
    tableContentEl.appendChild(trEl);
    switch (value) {
        case 'Zero':
            tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            imgEl = document.createElement('img');
            tdEl.appendChild(imgEl);
            imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[0].img);
            break;
        case 'One':
            tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            imgEl = document.createElement('img');
            tdEl.appendChild(imgEl);
            imgEl.setAttribute('src', 'img/1.png');
            break;
        case 'Two':
            tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            imgEl = document.createElement('img');
            tdEl.appendChild(imgEl);
            imgEl.setAttribute('src', 'img/2.png');
            break;
        case 'Three':
            tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            imgEl = document.createElement('img');
            tdEl.appendChild(imgEl);
            imgEl.setAttribute('src', 'img/3.png');
            break;
        case 'Four':
            tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            imgEl = document.createElement('img');
            tdEl.appendChild(imgEl);
            imgEl.setAttribute('src', 'img/4.png');
            break;
        case 'Five':
            tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            imgEl = document.createElement('img');
            tdEl.appendChild(imgEl);
            imgEl.setAttribute('src', 'img/5.png');
            break;
        case 'Six':
            tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            imgEl = document.createElement('img');
            tdEl.appendChild(imgEl);
            imgEl.setAttribute('src', 'img/6.png');
            break;
        case 'Seven':
            tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            imgEl = document.createElement('img');
            tdEl.appendChild(imgEl);
            imgEl.setAttribute('src', 'img/7.png');
            break;
        case 'Eight':
            tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            imgEl = document.createElement('img');
            tdEl.appendChild(imgEl);
            imgEl.setAttribute('src', 'img/8.png');
            break;
        case 'Nine':
            tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            imgEl = document.createElement('img');
            tdEl.appendChild(imgEl);
            imgEl.setAttribute('src', 'img/9.png');
            break;
    }

}

