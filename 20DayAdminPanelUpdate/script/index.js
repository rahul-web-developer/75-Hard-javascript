function shodata(){
  let register =document.getElementById("register");

  let btnregister = document.getElementById("btnregister");


  register.style.display = "block";

  btnregister.style.backgroundColor = "darkorange";



}
shodata()

function toggle(){
    
    var sidenav = document.querySelector("#sidenav");
    var section = document.querySelector("#section");
    var topnav = document.querySelector("#topnav");

    console.log(sidenav)

    // sidenav.classList.toggle("demo")

    var width = sidenav.style.width;

    if(width == '0px'){
        sidenav.style.width = '250px'
        sidenav.style.transition = '0.3s';
        topnav.style.left = '250px';
        topnav.style.width = '100%'
      topnav.style.transition = '0.3s';


      section.style.marginLeft = "250px";
      section.style.width = "100%"
      section.style.transition = "0.3s"

    }else{
      sidenav.style.width = '0px';
      sidenav.style.transition = '0.3s';

      topnav.style.left = '0px'
      topnav.style.width = '100%'
      topnav.style.transition = '0.3s'
      section.style.marginLeft = "0px";
      section.style.width = "100%"
      section.style.transition = "0.3s"

    }




}


function showfunction(activeBtn,inActiveBtn,activeId,inActiveId){


var active = document.getElementById(activeId)

var inActive = document.getElementById(inActiveId);

var activebutton = document.getElementById(activeBtn)
var inActivebutton = document.getElementById(inActiveBtn)



activebutton.style.backgroundColor = "darkorange";

activebutton.style.color = "white";

inActivebutton.style.backgroundColor = "white";
inActivebutton.style.color = "black";


active.style.display = "block";
inActive  .style.display = "none";

}
 


function signup(event){

event.preventDefault();

var user ={};

var form = document.forms.login;



var fullname = form.elements.fullname;

var email = form.elements.email;

var password = form.elements.password;


var fullnamemsg = document.querySelector("#fullname-message");


if(fullname.value.trim().length == 0){
 fullname.style.borderColor = "red"
 fullnamemsg.style.display = "block"
fullnamemsg.innerHTML = "Please Enter Fullname";
fullnamemsg.style.color = "red"

}else if(email.value.trim().length == 0){

  email.style.borderColor = "red";


}else if(password.value.trim().length == 0){
  password.style.borderColor = "red"
}
else if(password.value.trim().length <8 ){
  password.style.borderColor = "red"

}else{
  fullnamemsg.style.display = "none";
user.fullname = fullname.value.trim();
user.email = email.value.trim();
user.password = password.value.trim();

console.log(user)
}



}



function validform(input,message){

  var fullnamemsg = document.getElementById(message)

input.style.borderColor = "#ccc";

fullnamemsg.style.color = "blue";
  fullnamemsg.innerHTML = ""

  fullnamemsg.style.display = "none"

}


function togglepassword(input,eyeicon){

  var taginput = document.getElementById(input);
  var icon = document.getElementById(eyeicon);

  
  console.log(input)
  console.log(icon)


if(taginput.type =="password"){
  taginput.type = "text";
  // dis.style.background = "darkorange";

  // icon.style.display = "block";
  icon.className = "fa fa-eye" ;
  icon.className = "fa fa-eye-slash";


}else{
  taginput.type = "password";
  icon.className = "fa fa-eye" ;


}
  
}


function loginform(event){

  event.preventDefault();

  var alertmsg = document.querySelector("#alertmsg");


var form = document.forms.signin;

var email = form.elements.email
var password = form.elements.password

console.log(email)
console.log(password)



if(email.value.trim().length == 0){

email.style.borderColor = "red";
alertmsg.innerHTML = "please enter value";
alertmsg.style.color = "red"

}else if(password.value.trim().length == 0 ){


  password.style.borderColor = "red";
 

}else{

  password.style.borderColor = "inherit";

  
}


}



function inputfunction(){
  var alertmsg = document.querySelector("#alertmsg");

  var form = document.forms.signin;

  var email = form.elements.email
  var password = form.elements.password
  

  email.style.borderColor = "inherit";

  alertmsg.innerHTML = "";

  alertmsg.style.color = "blue";

  password.style.borderColor = "inherit";




}