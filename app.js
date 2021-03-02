'use strict';
let user;
function save(){
    let saveName= JSON.stringify(user);
    localStorage.setItem('userName',saveName);
}
let form =document.getElementById('form');
form.addEventListener('submit',showResult);


function showResult(event){
    console.log(event);
    event.preventDefault();
   
    user = event.target.name.value;
    console.log(showResult);

    save();
    
    let devContent = document.getElementById('myPopup');
    devContent.textContent ='Welcome: ' + user;
    console.log(devContent);
    myFunction();
    
}

function myFunction(){
    
    let popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
    
}

  
