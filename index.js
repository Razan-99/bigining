var emailInput=document.getElementById('Email');
var nameInput=document.getElementById('Name');
var message =document.querySelector('.message p');
function validation(){
    var regex={
        email:/^\w{5,20}@(gmail|yahoo)\.com$/
    }
    if (nameInput.value==''){
        rejected(`please enter your name`)
    }
    else if(regex.email.test(emailInput.value)==false){
        rejected(`please enter your correct gmail or yahoo account`)
    }
    else{
        accepted('message sent successfuly');
    }
}
function accepted(msg){
    message.innerHTML=msg;
    message.classList.remove('d-none');
    message.classList.replace('text-danger', 'text-success');
    message.classList.replace('bg-danger-subtle', 'bg-success-subtle');
}
function rejected(msg){
    message.innerHTML=msg;
    message.classList.remove('d-none');
    message.classList.replace('text-success', 'text-danger'); 
    message.classList.replace('bg-success-subtle' , 'bg-danger-subtle');
}
