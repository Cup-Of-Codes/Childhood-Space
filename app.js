
// function UserName(name){
//     this .name=name;
  
// }
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
    alert('welcome '+ user);
    
}

