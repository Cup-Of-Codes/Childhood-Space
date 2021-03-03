/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
// let buttonMemory=document.getElementById('memoryGB')
// buttonMemory.addEventListener('click', showingMemGam)
function playGame() {
    // document.getElementById('div1').style.display='flex';
    
    document.getElementById('div2').style.display = 'flex';
    document.getElementById('div3').style.display = 'flex';
    document.getElementById('btn2').style.display = 'block';
    divShape.innerHTML = ' ';
}


function secondLevel() {
    document.getElementById('btn2').remove();
    document.getElementById('div1').remove();
    // document.getElementById('div2').remove();
    document.getElementById('div3').remove();
    document.getElementById('div4').style.display = 'flex';
    document.getElementById('btn3').style.display = 'block';
    
}  

    function thirdLevel() {
        document.getElementById('btn3').remove();
        document.getElementById('div4').remove();
        document.getElementById('div5').style.display = 'flex';
        document.getElementById('button').style.display ='block';
    }

    function finish() {
        document.getElementById('div5').remove();
        document.getElementById('div6').remove();
    }
    
    
        //    document.getElementById('button').remove();
    // document.querySelector('.start-button span').onclick = function () {
    //     // let yourName=prompt('whats your name');
    //     //console.log(yourName);
    // }

        document.querySelector('.start-button span').onclick = function () {

            document.querySelector('.start-button').remove();
        }
        //start page work
        let duration = 1000;
        let containerGame = document.querySelector('.container-game');
        let gameBlock = Array.from(containerGame.children);
        let orderRange = Array.from(Array(gameBlock.length).keys());
        //console.log(orderRange);
        shuffle(orderRange);
        //console.log(orderRange);


        gameBlock.forEach((block, index) => {
            block.style.order = orderRange[index];
            block.addEventListener('click', function () {
                flipBlock(block);
            });

        });

        //function suffling 
        function shuffle(Array) {
            let currnt = Array.length;
            let temp;
            let random;
            while (currnt > 0) {
                random = Math.floor(Math.random() * currnt);
                currnt--;
                temp = Array[currnt];
                Array[currnt] = Array[random];
                Array[random] = temp;
            }
            return Array;


        }


        function flipBlock(selectBlock) {
            selectBlock.classList.add('is-flip');
            let all_block = gameBlock.filter(flipBlock => flipBlock.classList.contains('is-flip'));
            if (all_block.length === 2) {
                // console.log('tow clicked');
                stopClick();

                checkImage(all_block[0], all_block[1]);
            }
        }
        //stooooop clicking function

        function stopClick() {
            containerGame.classList.add('no-click');
            setTimeout(() => {
                containerGame.classList.remove('no-click');
            }, duration);
        }

        function checkImage(first, second) {
            let wrong = document.querySelector('.score span');
            if (first.dataset.technolog === second.dataset.technolog) {
                first.classList.remove('is-flip');
                second.classList.remove('is-flip');
                first.classList.add('matched');
                second.classList.add('matched');
            } else {
                wrong.textContent = parseInt(wrong.textContent) + 1;
                setTimeout(() => {
                    first.classList.remove('is-flip');
                    second.classList.remove('is-flip');
                    // shuffle();

                }, duration)

            }
        }
        // start level 2 //////////////////////////////////////////////////////////////////////////////////

        let duration1 = 1000;
        let containerGame1 = document.querySelector('.container-game1');
        let gameBlock1 = Array.from(containerGame1.children);
        let orderRange1 = Array.from(Array(gameBlock1.length).keys());
        //console.log(orderRange);
        shuffle1(orderRange1);
        //console.log(orderRange);


        gameBlock1.forEach((block, index) => {
            block.style.order = orderRange1[index];
            block.addEventListener('click', function () {
                flipBlock1(block);
            });

        });

        //function suffling 
        function shuffle1(Array) {
            let currnt = Array.length;
            let temp;
            let random;
            while (currnt > 0) {
                random = Math.floor(Math.random() * currnt);
                currnt--;
                temp = Array[currnt];
                Array[currnt] = Array[random];
                Array[random] = temp;
            }
            return Array;


        }


        function flipBlock1(selectBlock) {
            selectBlock.classList.add('is-flip');
            let all_block = gameBlock1.filter(flipBlock => flipBlock.classList.contains('is-flip'));
            if (all_block.length === 2) {
                // console.log('tow clicked');
                stopClick1();

                checkImage1(all_block[0], all_block[1]);
            }
        }
        //stooooop clicking function

        function stopClick1() {
            containerGame1.classList.add('no-click');
            setTimeout(() => {
                containerGame1.classList.remove('no-click');
            }, duration1);
        }

        function checkImage1(first, second) {
            let wrong = document.querySelector('.score span');
            if (first.dataset.technolog === second.dataset.technolog) {
                first.classList.remove('is-flip');
                second.classList.remove('is-flip');
                first.classList.add('matched');
                second.classList.add('matched');
            } else {
                wrong.textContent = parseInt(wrong.textContent) + 1;
                setTimeout(() => {
                    first.classList.remove('is-flip');
                    second.classList.remove('is-flip');
                    // shuffle();

                }, duration1)

            }
        }

        ///////////////////////////////////////////////level 3////////////////////////////////////////////////////////////////////



        let duration2 = 1000;
        let containerGame2 = document.querySelector('.container-game2');
        let gameBlock2 = Array.from(containerGame2.children);
        let orderRange2 = Array.from(Array(gameBlock2.length).keys());
        //console.log(orderRange);
        shuffle2(orderRange2);
        //console.log(orderRange);


        gameBlock2.forEach((block, index) => {
            block.style.order = orderRange2[index];
            block.addEventListener('click', function () {
                flipBlock2(block);
            });

        });

        //function suffling 
        function shuffle2(Array) {
            let currnt = Array.length;
            let temp;
            let random;
            while (currnt > 0) {
                random = Math.floor(Math.random() * currnt);
                currnt--;
                temp = Array[currnt];
                Array[currnt] = Array[random];
                Array[random] = temp;
            }
            return Array;


        }


        function flipBlock2(selectBlock) {
            selectBlock.classList.add('is-flip');
            let all_block = gameBlock2.filter(flipBlock => flipBlock.classList.contains('is-flip'));
            if (all_block.length === 2) {
                // console.log('tow clicked');
                stopClick2();

                checkImage2(all_block[0], all_block[1]);
            }
        }
        //stooooop clicking function

        function stopClick2() {
            containerGame2.classList.add('no-click');
            setTimeout(() => {
                containerGame2.classList.remove('no-click');
            }, duration2);
        }

        function checkImage2(first, second) {
            let wrong = document.querySelector('.score span');
            if (first.dataset.technolog === second.dataset.technolog) {
                first.classList.remove('is-flip');
                second.classList.remove('is-flip');
                first.classList.add('matched');
                second.classList.add('matched');
            } else {
                wrong.textContent = parseInt(wrong.textContent) + 1;
                setTimeout(() => {
                    first.classList.remove('is-flip');
                    second.classList.remove('is-flip');
                    // shuffle();

                }, duration2)

            }
        }



        /////////////////////////////////////////// Shapes Game //////////////////////////////////////////////////////////
        let sectionShape = document.getElementById('shapesGame');
        let divShape = document.getElementById('shapePic');
        let index;
        let questionEl, imgEl;
        let shapesName = ['Square', 'Circle', 'Triangle', 'Rectangle', 'Star', 'Cube'];
        let shapesPic = ['img/shapes/square.png',
            'img/shapes/circle.png',
            'img/shapes/triangle.png',
            'img/shapes/rectangle.png',
            'img/shapes/star.png',
            'img/shapes/cube.png'
        ];
        function playShapeGame() {
        
            document.getElementById('btn2').style.display = "none";
            document.getElementById('btn3').style.display = "none";
            //document.getElementById('button').style.display ='none';
            document.getElementById('div3').style.display = "none";
            document.getElementById('div4').style.display = "none";
            document.getElementById('div5').style.display = "none";
            addRandomImage();
        }
        divShape.addEventListener('click', checkShape);
        function checkShape(event) {
            event.preventDefault();
            let value = event.target.id;
            if (value === shapesName[index]) {
                addRandomImage();
            }
        }
        function generateRandomIndex() {
            let randomIndex = Math.floor(Math.random() * shapesName.length);
            return randomIndex;
        }
        function addRandomImage() {
            let preIndecies = [];
            divShape.innerHTML = ' ';
            let leftIndex;
            let middleIndex;
            let rightIndex;
            do {
                preIndecies = [];
                divShape.innerHTML = ' ';
                leftIndex = generateRandomIndex();
                middleIndex = generateRandomIndex();
                rightIndex = generateRandomIndex();
                preIndecies.push(leftIndex);
                preIndecies.push(middleIndex);
                preIndecies.push(rightIndex);
                imgEl = document.createElement('img');
                divShape.appendChild(imgEl);
                imgEl.setAttribute('src', shapesPic[leftIndex]);
                imgEl.setAttribute('id', shapesName[leftIndex]);
                imgEl.setAttribute('class', 'shape');
                imgEl = document.createElement('img');
                divShape.appendChild(imgEl);
                imgEl.setAttribute('src', shapesPic[middleIndex]);
                imgEl.setAttribute('id', shapesName[middleIndex]);
                imgEl.setAttribute('class', 'shape');
                imgEl = document.createElement('img');
                divShape.appendChild(imgEl);
                imgEl.setAttribute('src', shapesPic[rightIndex]);
                imgEl.setAttribute('id', shapesName[rightIndex]);
                imgEl.setAttribute('class', 'shape');
            }
            while (leftIndex === middleIndex || leftIndex === rightIndex || middleIndex === rightIndex);
            let flag = 1;
            index = generateRandomIndex();
            console.log(preIndecies);
            console.log(index);
            while (flag) {
                index = generateRandomIndex();
                if (preIndecies.includes(index)) {
                    console.log('if statement');
                    flag = 0;
                    questionEl = document.createElement('h2');
                    divShape.appendChild(questionEl);
                    questionEl.textContent = 'Which following is the shape of ' + shapesName[index] + ' :';
                }
            }
        }

        function playAudio(event) { 
            //console.log(event);
            let value = event.target.id;
            //console.log(value);
            var x = document.getElementById(value+'Voice'); 
            x.play();
            
          }