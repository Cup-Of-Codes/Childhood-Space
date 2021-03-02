/* eslint-disable no-duplicate-case */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
'use strict';

let sectionEL = document.getElementById('lessonChoices');
let sectionOp = document.getElementById('learnOptions');
let sectionChoices = document.getElementById('content');
let tableContentEl = document.getElementById('tableContent');
let divLessonEl = document.getElementById('elementLesson');

let imgNum, textNum, imageAdd, imgColor, imgSense, textColor, textSense, textAdd, imgSub, textSub;
let divAdd, divSub, divNum, divColors, divSense;

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
let additionLesson = new Lesson('Addition', 'img/addition_lessons.png');
let substractionLesson = new Lesson('Substraction', 'img/subtraction_lessons.png');

let colorsLesson = new Lesson('Colors', 'img/colors.jpg');
let color;
color = new LessonElement('red','img/colors/red.jpg');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('yellow','img/colors/yellow.jpg');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('orange','img/colors/orange.jpg');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('green','img/colors/green.jpg');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('blue','img/colors/blue.jpg');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('purple','img/colors/purple.jpg');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('white','img/colors/white.jpg');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('black','img/colors/black.jpg');
colorsLesson.arrayOfElemnts.push(color);

let sensesLesson = new Lesson('Senses', 'img/senses.jpg');

sectionOp.addEventListener('click', chooseOne);

function chooseOne(event) {
  //console.log(event);
  event.preventDefault();
  let eventValue = event.target.id;
  if (eventValue === 'math' || eventValue === 'mathImg' || eventValue === 'mathP') {
    sectionEL.innerHTML = ' ';
    divNum = document.createElement('div');
    sectionEL.appendChild(divNum);
    divNum.setAttribute('class', 'mathlessons');
    imgNum = document.createElement('img');
    divNum.appendChild(imgNum);
    imgNum.setAttribute('src', numbersLesson.img);
    imgNum.setAttribute('id', 'numbers');
    textNum = document.createElement('h3');
    divNum.appendChild(textNum);
    textNum.textContent = numbersLesson.lessonName;
    divAdd = document.createElement('div');
    sectionEL.appendChild(divAdd);
    divAdd.setAttribute('class', 'mathlessons');
    imageAdd = document.createElement('img');
    divAdd.appendChild(imageAdd);
    console.log(additionLesson.img);
    imageAdd.setAttribute('src', additionLesson.img);
    imageAdd.setAttribute('id', 'add');
    textAdd = document.createElement('h3');
    divAdd.appendChild(textAdd);
    textAdd.textContent = additionLesson.lessonName;
    divSub = document.createElement('div');
    sectionEL.appendChild(divSub);
    divSub.setAttribute('class', 'mathlessons');
    imgSub = document.createElement('img');
    divSub.appendChild(imgSub);
    imgSub.setAttribute('src', substractionLesson.img);
    imgSub.setAttribute('id', 'sub');
    textSub = document.createElement('h3');
    divSub.appendChild(textSub);
    textSub.textContent = substractionLesson.lessonName;

    //imgNum.setAttribute('alt',Numbers);
    // sectionOp.removeEventListener('click', chooseOne);
  }
  else if (eventValue === 'english' || eventValue === 'englishImg' || eventValue === 'englishP') {
    sectionEL.innerHTML = ' ';
    divColors = document.createElement('div');
    sectionEL.appendChild(divColors);
    divColors.setAttribute('class', 'elessons');
    imgColor = document.createElement('img');
    divColors.appendChild(imgColor);
    imgColor.setAttribute('src', colorsLesson.img);
    imgColor.setAttribute('id', 'color');
    textColor = document.createElement('h3');
    divColors.appendChild(textColor);
    textColor.textContent = colorsLesson.lessonName;
    divSense = document.createElement('div');
    sectionEL.appendChild(divSense);
    divSense.setAttribute('class', 'elessons');
    imgSense = document.createElement('img');
    divSense.appendChild(imgSense);
    imgSense.setAttribute('src', sensesLesson.img);
    imgSense.setAttribute('id', 'sense');
    textSense = document.createElement('h3');
    divSense.appendChild(textSense);
    textSense.textContent = sensesLesson.lessonName;
  }


}

let index;
let colorImg;
let trEl, tdEl;

sectionEL.addEventListener('click', chooseLesson);

function chooseLesson(event) {
  event.preventDefault();
  let value = event.target.id;
  console.log(event);
  let h3, img;
  let rows;
  switch (value) {
  case 'numbers':
    tableContentEl.innerHTML = ' ';
    divLessonEl.innerHTML = ' ';
    //console.log(tableContentEl);
    trEl = document.createElement('tr');
    tableContentEl.appendChild(trEl);
    for (let i = 0; i < numbersLesson.arrayOfElemnts.length; i++) {
      tdEl = document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = numbersLesson.arrayOfElemnts[i].elementName;
      tdEl.setAttribute('class', 'numsNav');
      tdEl.setAttribute('id', 'numberChoice');
    }
    trEl.addEventListener('click', chooseNumber);
    break;

  case 'add':
    tableContentEl.innerHTML = ' ';
    divLessonEl.innerHTML = ' ';

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
        break;
      }
    }
    break;
  case 'sub':
    tableContentEl.innerHTML = ' ';
    divLessonEl.innerHTML = ' ';

    for (let i = 0; i < 9; i++) {
      trEl = document.createElement('tr');
      tableContentEl.appendChild(trEl);
      switch (i) {
      case 0:
        //console.log(tableContentEl);
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = 'This is the very beginning of understanding how subtraction works. Let\'s look at this set: ';
        tdEl.setAttribute('id', 'between');
        break;
      case 1:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        let imgEl = document.createElement('img');
        tdEl.appendChild(imgEl);
        imgEl.setAttribute('src', 'img/subLesson/subtraction01-01.gif');

        break;
      case 2:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = 'Count how many triangles are in this set...  There are 5!';
        // tdEl.setAttribute('class', 'imgCentered');
        break;
      case 3:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = 'Now, take two triangles away...';
        break;
      case 4:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        let pimgEl = document.createElement('img');
        tdEl.appendChild(pimgEl);
        pimgEl.setAttribute('src', 'img/subLesson/subtraction01-02.gif');
        break;
      case 5:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        let timgEl = document.createElement('img');
        tdEl.appendChild(timgEl);
        timgEl.setAttribute('src', 'img/subLesson/subtraction01-03.gif');
        timgEl.setAttribute('class', 'imgSub');
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        timgEl = document.createElement('img');
        tdEl.appendChild(timgEl);
        timgEl.setAttribute('src', 'img/subLesson/subtraction01-04.gif');
        timgEl.setAttribute('class', 'imgSub');
        timgEl.setAttribute('id', 'twotriangle');

        break;
      case 6:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = 'Count how many triangles are left in the set...  There are 3 left!	';
        break;
      case 7:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        let resultImgEl = document.createElement('img');
        tdEl.appendChild(resultImgEl);
        resultImgEl.setAttribute('src', 'img/subLesson/subtraction01-05.gif');
        break;
      }
    }
    break;
  case 'color':
    tableContentEl.innerHTML = ' ';
    divLessonEl.innerHTML = ' ';
    trEl = document.createElement('tr');
    tableContentEl.appendChild(trEl);
    for (let i = 0; i < colorsLesson.arrayOfElemnts.length; i++) {
      tdEl = document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = colorsLesson.arrayOfElemnts[i].elementName;
      tdEl.setAttribute('class', 'numsNav');
      tdEl.setAttribute('style','color: darkgray;')
      
    }

    let trElQ = document.createElement('tr');
    tableContentEl.appendChild(trElQ); 
    let tdElQ = document.createElement('td');
    trElQ.appendChild(tdElQ);
    tdElQ.textContent = 'What is this color ?? ';
    tdElQ.setAttribute('id' ,'question');
    index = generateRandomIndex();
    colorImg=  addRandomImage(index);
    
    trEl.addEventListener('click', chooseColor);
    break;
  case 'sense':
    tableContentEl.innerHTML = ' ';
    divLessonEl.innerHTML = ' ';
    let imgSense = document.createElement('img');
    divLessonEl.appendChild(imgSense);
    imgSense.setAttribute('src', 'img/senses.jpg');
    imgSense.setAttribute('id', 'senses');
    break;
  }
}



let numbersImges = ['img/numbersPic/1-pencil.png',
  'img/numbersPic/2-carrots.png',
  'img/numbersPic/3-apples.png',
  'img/numbersPic/4-balls.jpg',
  'img/numbersPic/5-babnana.jpg',
  'img/numbersPic/6-apples.png',
  'img/numbersPic/7-ballons.jpg',
  'img/numbersPic/8-strawberry.png',
  'img/numbersPic/9-crrots.jpg'
];

function chooseNumber(event) {
  event.preventDefault();
  //console.log(event);
  let value = event.target.innerText;
  //console.log(value);
  let imgEl, imgEl2, tdEl, trEl;
  divLessonEl.innerHTML = ' ';
  imgEl = document.createElement('img');
  divLessonEl.appendChild(imgEl);

  imgEl2 = document.createElement('img');
  divLessonEl.appendChild(imgEl2);
  switch (value) {
  case 'Zero':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[0].img);
    imgEl.setAttribute('class', 'numsDiv');
    break;
  case 'One':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[1].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[0]);
    imgEl2.setAttribute('class', 'numsImgDiv');

    break;
  case 'Two':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[2].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[1]);
    imgEl2.setAttribute('class', 'numsImgDiv');

    break;
  case 'Three':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[3].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[2]);
    imgEl2.setAttribute('class', 'numsImgDiv');

    break;
  case 'Four':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[4].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[3]);
    imgEl2.setAttribute('class', 'numsImgDiv');


    break;
  case 'Five':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[5].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[4]);
    imgEl2.setAttribute('class', 'numsImgDiv');


    break;
  case 'Six':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[6].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[5]);
    imgEl2.setAttribute('class', 'numsImgDiv');


    break;
  case 'Seven':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[7].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[6]);
    imgEl2.setAttribute('class', 'numsImgDiv');


    break;
  case 'Eight':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[8].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[7]);
    imgEl2.setAttribute('class', 'numsImgDiv');

    break;
  case 'Nine':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[9].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[9]);
    imgEl2.setAttribute('class', 'numsImgDiv');


    break;
  }

}

function chooseColor(event){
  //console.log(colorImg);
  event.preventDefault();
  //console.log(event);
  //console.log(colorImg);
  let value = event.target.innerText;
  for (let i = 0; i < 15; i++) {
    if(value === colorImg.elementName )
    {
      console.log(index);
      trEl.cells[index].setAttribute('onClick', `this.style.backgroundColor='${colorsLesson.arrayOfElemnts[index].elementName}'`);
    }
    index = generateRandomIndex();
    colorImg = addRandomImage(index);
  }
  
  // let imgEl, imgEl2, tdEl, trEl;
  // divLessonEl.innerHTML = ' ';
  // imgEl = document.createElement('img');
  // divLessonEl.appendChild(imgEl);

  // imgEl2 = document.createElement('img');
  // divLessonEl.appendChild(imgEl2);
  // switch (value) {
  // case 'red':
  //   imgEl.setAttribute('src', colorsArry[5]);
  //   imgEl.setAttribute('class', 'numsDiv');
  //   generateRandomIndex();
  //   break;
  // case 'yellow':
  //   imgEl.setAttribute('src', colorsArry[7]);
  //   imgEl.setAttribute('class', 'numsDiv');
  //   generateRandomIndex();
  //  // imgEl2.setAttribute('src', numbersImges[0]);
  //  // imgEl2.setAttribute('class', 'numsImgDiv');

  //   break;
  // case 'green':
  //   imgEl.setAttribute('src', colorsArry[2]);
  //   imgEl.setAttribute('class', 'numsDiv');
  //   generateRandomIndex();
  // //  imgEl2.setAttribute('src', numbersImges[1]);
  //   //imgEl2.setAttribute('class', 'numsImgDiv');

  //   break;
  // case 'black':
  //   imgEl.setAttribute('src', colorsArry[0]);
  //   imgEl.setAttribute('class', 'numsDiv');
  //   generateRandomIndex();
  //   //imgEl2.setAttribute('src', numbersImges[2]);
  //   //imgEl2.setAttribute('class', 'numsImgDiv');

  //   break;
  // case 'blue':
  //   imgEl.setAttribute('src', colorsArry[1]);
  //   imgEl.setAttribute('class', 'numsDiv');
  //   generateRandomIndex();
  //  // imgEl2.setAttribute('src', numbersImges[3]);
  //   //imgEl2.setAttribute('class', 'numsImgDiv');


  //   break;
  // case 'purple':
  //   imgEl.setAttribute('src', colorsArry[4]);
  //   imgEl.setAttribute('class', 'numsDiv');
  //   generateRandomIndex();
  //  // imgEl2.setAttribute('src', numbersImges[5]);
  //   //imgEl2.setAttribute('class', 'numsImgDiv');


  //   break;
  // case 'white':
  //   imgEl.setAttribute('src', colorsArry[6]);
  //   imgEl.setAttribute('class', 'numsDiv');
  //   generateRandomIndex();
  //  // imgEl2.setAttribute('src', numbersImges[6]);
  //   //imgEl2.setAttribute('class', 'numsImgDiv');


  //   break;
  //   case 'orange':
  //   imgEl.setAttribute('src', colorsArry[3]);
  //   imgEl.setAttribute('class', 'numsDiv');
  //   generateRandomIndex();
  //  // imgEl2.setAttribute('src', numbersImges[6]);
  //   //imgEl2.setAttribute('class', 'numsImgDiv');


  //   break;


  // }



}

function generateRandomIndex() {
  let randomIndex = Math.floor(Math.random() * colorsLesson.arrayOfElemnts.length);
  return randomIndex;
}

function addRandomImage(index){
    // console.log(index);
    // console.log(colorsLesson.arrayOfElemnts[index]);
    
    divLessonEl.innerHTML = ' ';
    let colorimgEl = document.createElement('img');
    divLessonEl.appendChild(colorimgEl);
    colorimgEl.setAttribute('src',colorsLesson.arrayOfElemnts[index].img);
    colorimgEl.setAttribute('class','colorimg');
    return colorsLesson.arrayOfElemnts[index];
}
