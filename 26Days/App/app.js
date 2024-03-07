// //loop in javascript

// var btn = document.querySelector("#btn");


// // btn.style.color = "red";

//  var classa = document.querySelectorAll(".a");

//  console.log()

// // for(let i =0; i<classa.length; i++){
// //   console.log(classa[i])

// //   classa[i]  .style.color = "red";
  
// // }



// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// let btn3 = document.querySelector("#btn3");
// let btn4 = document.querySelector("#btn4");





// btn1.onclick = ()=>{

// document.body.classList.toggle("bgchanger")

// }
 


let btn = document.getElementsByClassName("btn");


console.log(btn)

let result  = '';

for(let i =0 ; i<btn.length; i++){
  btn[i].onclick = function(eve){
   this.style.color = "blue"
  }
}

