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
    number = new LessonElement('zero', `img/ninenumbers/${i}.png`);
    numbersLesson.arrayOfElemnts.push(number);
    break;
  case 1:
    number = new LessonElement('one', `img/ninenumbers/${i}.png`);
    numbersLesson.arrayOfElemnts.push(number);
    break;
  case 2:
    number = new LessonElement('two', `img/ninenumbers/${i}.png`);
    numbersLesson.arrayOfElemnts.push(number);
    break;
  case 3:
    number = new LessonElement('three', `img/ninenumbers/${i}.png`);
    numbersLesson.arrayOfElemnts.push(number);
    break;
  case 4:
    number = new LessonElement('four', `img/ninenumbers/${i}.png`);
    numbersLesson.arrayOfElemnts.push(number);
    break;
  case 5:
    number = new LessonElement('five', `img/ninenumbers/${i}.png`);
    numbersLesson.arrayOfElemnts.push(number);
    break;
  case 6:
    number = new LessonElement('six', `img/ninenumbers/${i}.png`);
    numbersLesson.arrayOfElemnts.push(number);
    break;
  case 7:
    number = new LessonElement('seven', `img/ninenumbers/${i}.png`);
    numbersLesson.arrayOfElemnts.push(number);
    break;
  case 8:
    number = new LessonElement('eight', `img/ninenumbers/${i}.png`);
    numbersLesson.arrayOfElemnts.push(number);
    break;
  case 9:
    number = new LessonElement('nine', `img/ninenumbers/${i}.png`);
    numbersLesson.arrayOfElemnts.push(number);
    break;
  }
}
let additionLesson = new Lesson('Addition', 'img/addition_lessons.png');
let substractionLesson = new Lesson('Substraction', 'img/subtraction_lessons.png');

let colorsLesson = new Lesson('Colors', 'img/colors.jpg');
let color;
color = new LessonElement('red','img/colors/red.png');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('yellow','img/colors/yellow.png');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('orange','img/colors/orange.png');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('green','img/colors/green.png');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('blue','img/colors/blue.png');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('purple','img/colors/purple.png');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('white','img/colors/white.png');
colorsLesson.arrayOfElemnts.push(color);

color = new LessonElement('pink','img/colors/pink.png');
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
    imgNum.setAttribute('onmouseover', 'playAudio(event)');
    textNum = document.createElement('h2');
    divNum.appendChild(textNum);
    textNum.textContent = numbersLesson.lessonName;
    divAdd = document.createElement('div');
    sectionEL.appendChild(divAdd);
    divAdd.setAttribute('class', 'mathlessons');
    imageAdd = document.createElement('img');
    divAdd.appendChild(imageAdd);
    //console.log(additionLesson.img);
    imageAdd.setAttribute('src', additionLesson.img);
    imageAdd.setAttribute('id', 'addition');
    imageAdd.setAttribute('onmouseover', 'playAudio(event)');
    textAdd = document.createElement('h2');
    divAdd.appendChild(textAdd);
    textAdd.textContent = additionLesson.lessonName;
    divSub = document.createElement('div');
    sectionEL.appendChild(divSub);
    divSub.setAttribute('class', 'mathlessons');
    imgSub = document.createElement('img');
    divSub.appendChild(imgSub);
    imgSub.setAttribute('src', substractionLesson.img);
    imgSub.setAttribute('id', 'subtraction');
    imgSub.setAttribute('onmouseover', 'playAudio(event)');
    textSub = document.createElement('h2');
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
    imgColor.setAttribute('id', 'colors');
    imgColor.setAttribute('onmouseover', 'playAudio(event)');
    textColor = document.createElement('h2');
    divColors.appendChild(textColor);
    textColor.textContent = colorsLesson.lessonName;
    divSense = document.createElement('div');
    sectionEL.appendChild(divSense);
    divSense.setAttribute('class', 'elessons');
    imgSense = document.createElement('img');
    divSense.appendChild(imgSense);
    imgSense.setAttribute('src', sensesLesson.img);
    imgSense.setAttribute('id', 'sense');
    imgSense.setAttribute('onmouseover', 'playAudio(event)');
    textSense = document.createElement('h2');
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
  //console.log(event);
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
      tdEl.setAttribute('id', numbersLesson.arrayOfElemnts[i].elementName);
      tdEl.setAttribute('onclick','playAudio(event)');
    }
    trEl.addEventListener('click', chooseNumber);
    break;

  case 'addition':
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
        imgEl.setAttribute('src', 'img/numbersPic/2-carrots.png');
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        imgEl = document.createElement('img');
        tdEl.appendChild(imgEl);
        imgEl.setAttribute('src', 'img/3-crrots.png');
        break;
      case 3:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = 'Count how many carrots are in Set A... There are 2!';
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = 'Count how many carrots are in Set B... There are 3!';
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
        finalImgEl.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/I/41XW56vYO1L._AC_.jpg');
        break;
      case 6:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = 'Count how many carrots are in this set... There are 5!';
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
  case 'subtraction':
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
        imgEl.setAttribute('src', 'https://thumbs.dreamstime.com/b/dancing-bananas-five-cartoon-bananas-dancing-playing-night-away-115833900.jpg');

        break;
      case 2:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = 'Count how many bananas are in this set...  There are 5!';
        // tdEl.setAttribute('class', 'imgCentered');
        break;
      case 3:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = 'Now, take two bananas away...';
        break;
      case 4:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        let timgEl = document.createElement('img');
        tdEl.appendChild(timgEl);
        timgEl.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNeswSSAahe8zveCQSVj4M4XM1NxWD1vAFVA&usqp=CAU');
        timgEl.setAttribute('class', 'imgSub');
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        timgEl = document.createElement('img');
        tdEl.appendChild(timgEl);
        timgEl.setAttribute('src', 'https://rlv.zcache.se/dansbananmugg_kaffemugg-rb9cf924a81b54487a963d74750864af1_x7jg5_8byvr_307.jpg?rvtype=content');
        timgEl.setAttribute('class', 'imgSub');
        timgEl.setAttribute('id', 'twotriangle');

        break;
      case 5:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = 'Count how many bananas are left in the set...  There are 3 left!	';
        break;
      case 6:
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        let resultImgEl = document.createElement('img');
        tdEl.appendChild(resultImgEl);
        resultImgEl.setAttribute('src', 'img/subLesson/subtraction01-05.gif');
        break;
      }
    }
    break;
  case 'colors':
    tableContentEl.innerHTML = ' ';
    divLessonEl.innerHTML = ' ';
    trEl = document.createElement('tr');
    tableContentEl.appendChild(trEl);
    for (let i = 0; i < colorsLesson.arrayOfElemnts.length; i++) {
      tdEl = document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = colorsLesson.arrayOfElemnts[i].elementName;
      tdEl.setAttribute('class', 'numsNav');
      tdEl.setAttribute('style','color: darkgray;');
      tdEl.setAttribute('id',colorsLesson.arrayOfElemnts[i].elementName);
      // tdEl.setAttribute('onmouseover','playAudio(event)');

    }

    let trElQ = document.createElement('tr');
    tableContentEl.appendChild(trElQ);
    let tdElQ = document.createElement('td');
    trElQ.appendChild(tdElQ);
    tdElQ.textContent = 'What is this color ?? ';
    tdElQ.setAttribute('id' ,'question');
    index = generateRandomIndex();
    colorImg= addRandomImage(index);

    trEl.addEventListener('click', chooseColor);
    break;
  case 'sense':
    tableContentEl.innerHTML = ' ';
    divLessonEl.innerHTML = ' ';
    let videoSense = document.createElement('iframe');
    divLessonEl.appendChild(videoSense);
    videoSense.setAttribute('src', 'https://www.youtube.com/embed/LNajQTnZviQ');
    videoSense.setAttribute('id', 'sensesVideo');
    videoSense.setAttribute('frameborder','0');
    videoSense.setAttribute('allow','accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    //videoSense.setAttribute('allowfullscreen');
        break;
  }
}



let numbersImges = ['img/numbersPic/1-pencil.png',
  'img/numbersPic/2-carrots.png',
  'img/numbersPic/3-apples.png',
  'img/numbersPic/4-lady.png',
  'img/numbersPic/5-ballons.png',
  'img/numbersPic/6-flowers.png',
  'img/numbersPic/7-ballons.png',
  'img/numbersPic/8-colors.png',
  'img/numbersPic/9-butterfly.png'
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
  case 'zero':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[0].img);
    imgEl.setAttribute('class', 'numsDiv');
    break;
  case 'one':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[1].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[0]);
    imgEl2.setAttribute('class', 'numsImgDiv');

    break;
  case 'two':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[2].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[1]);
    imgEl2.setAttribute('class', 'numsImgDiv');

    break;
  case 'three':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[3].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[2]);
    imgEl2.setAttribute('class', 'numsImgDiv');

    break;
  case 'four':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[4].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[3]);
    imgEl2.setAttribute('class', 'numsImgDiv');


    break;
  case 'five':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[5].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[4]);
    imgEl2.setAttribute('class', 'numsImgDiv');


    break;
  case 'six':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[6].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[5]);
    imgEl2.setAttribute('class', 'numsImgDiv');


    break;
  case 'seven':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[7].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[6]);
    imgEl2.setAttribute('class', 'numsImgDiv');


    break;
  case 'eight':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[8].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[7]);
    imgEl2.setAttribute('class', 'numsImgDiv');

    break;
  case 'nine':
    imgEl.setAttribute('src', numbersLesson.arrayOfElemnts[9].img);
    imgEl.setAttribute('class', 'numsDiv');
    imgEl2.setAttribute('src', numbersImges[8]);
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
  if(value === colorImg.elementName){
    let v = document.getElementById(value+'Voice');
    //console.log(value);
    v.play();
    
    index = generateRandomIndex();
    colorImg = addRandomImage(index);
  }
  else {
    let v = document.getElementById('nonoVoice');
    v.play();
    return;
  }
    
  
  
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

function playAudio(event) { 
  //console.log(event);
  let value = event.target.id;
  //console.log(value);
  var x = document.getElementById(value+'Voice'); 
  x.play();
  
} 