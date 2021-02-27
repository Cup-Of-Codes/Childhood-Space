/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
document.querySelector('.start-button span').onclick=function(){
    let yourName=prompt('whats your name');
    //console.log(yourName);
    if(yourName===null ||yourName===''){
    document.querySelector('.name span').textContent='Super Hero';
}else{
    document.querySelector('.name span').textContent=yourName;
}
document.querySelector('.start-button').remove();
}
//start page work
let duration=1000;
let containerGame=document.querySelector('.container-game');
let gameBlock=Array.from(containerGame.children);
let orderRange=Array.from(Array(gameBlock.length).keys());
//console.log(orderRange);
shuffle(orderRange);
//console.log(orderRange);


gameBlock.forEach((block,index)=>{
    block.style.order=orderRange[index];
    block.addEventListener('click',function(){
   flipBlock(block);
    });

});

//function suffling 
function shuffle(Array){
    let currnt=Array.length;
    let temp;
    let random;
    while(currnt>0){
    random=Math.floor(Math.random()*currnt);
currnt--;
temp=Array[currnt];
Array [currnt]=Array[random];
Array[random]=temp;
}
return Array;


}


function flipBlock(selectBlock){
    selectBlock.classList.add('is-flip');
let all_block=gameBlock.filter(flipBlock=> flipBlock.classList.contains('is-flip'));
if(all_block.length===2){
   // console.log('tow clicked');
    stopClick();

    checkImage(all_block[0],all_block[1]);
}
}
//stooooop clicking function

function stopClick(){
    containerGame.classList.add('no-click');
    setTimeout(()=>{
        containerGame.classList.remove('no-click');
    },duration);
}

function checkImage(first,second){
    let wrong=document.querySelector('.score span');
    if(first.dataset.technolog===second.dataset.technolog){
        first.classList.remove('is-flip');
        second.classList.remove('is-flip');
        first.classList.add('matched');
        second.classList.add('matched');
    }else{
        wrong.textContent=parseInt(wrong.textContent)+1;
        setTimeout(()=>{
            first.classList.remove('is-flip');
            second.classList.remove('is-flip');
           // shuffle();

        },duration)
       
    }
}
















