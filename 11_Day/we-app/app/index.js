

// const username = document.querySelector('#fname').value;
// const lastname = document.querySelector('#lname').value;

// const email = document.querySelector("#email").value;

// const password = document.querySelector("#password").value;


// let username = event.target[0].value;
// let lastname = event.target[1].value;
// let email = event.target[2].value;
// let password = event.target[3].value;

let model = document.querySelector("#modal");
let modelbody = document.querySelector("#modal-body");


let userdata = {};



// function formHandel(event){

//     event.preventDefault();


// let formdata  = document.forms.resiter;


//  let fname = formdata.elements.fname.value;
// let lname = formdata.elements.lname;

// let email = formdata.elements.email;
// let password = formdata.elements.password;


// userdata.fname = fname;

// userdata.lname = lname;

// userdata.email = email;

// userdata.password = password;


// console.log(userdata)

// // let user = [
// //     {
// //     fname:formdata.elements.fname.value,
// //     lname:formdata.elements.lname.value,
// //     email:formdata.elements.email.value,
// //     password:formdata.elements.password.value,

// // },

// // ]



// // model.style.display = "flex";


// // model.classList.add('animate__animated','animate__fadeIn')


// model.style.display = "flex"

// modelbody.className = "animate__animated animate__zoomIn "

// model.className = "animate__animated animate__fadeIn"





// }




function formHandel(event){

  event.preventDefault();

  model.style.display = "flex";

  model.className = "animate__animated animate__fadeIn";


  modelbody.className = "animate__animated animate__zoomIn"


  let form = document.forms.resiter;

  var fname = form.elements.fname;
  var lname = form.elements.lname.value;


  console.log(fname,lname)

  if(fname.value === "mr"){

    // alert("success")
    fname.style.border ="2px solid blue" 

  }else{
    //  alert("failed")
    fname.style.border ="2px solid red" 

  }



}





function closeModel(){



  
  modelbody.className = "animate__animated animate__zoomOut "

  model.className = "animate__animated animate__fadeOut"

  
// setTimeout(() => {
//   model.style.display = "none";

// }, 1000);

setTimeout(() => {
  model.style.display = "none"
}, 2000);

}



function signIn(event){


  event.preventDefault();

var form = document.forms.login
  console.log(document.forms.login)


  var email = form.elements.email.value;
  var password = form.elements.password.value;

  console.log(email,password)

  userdata.email = email;
  userdata.password = password;

  console.log(userdata)
}

console.log(userdata)






let demo = document.querySelector("#demo");

demo.addEventListener("click",function(){

  alert("alert")


})




