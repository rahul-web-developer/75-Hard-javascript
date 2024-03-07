window.onload = function(){

  var cookie =  Cookies();

  var readbtn  = document.getElementById("read-btn");

  readbtn.onclick  = function(){

    var data  = cookie.getAll()
  



  }



}


// cookie.set()
// cookie.get()
// cookie.getAll()
// cookie.remove()






// var storebtn = document.getElementById("store-btn")


// console.log(typeof storebtn)


// storebtn.onclick  = function(){

// // document.cookie = "name=rahul; expires=Tue, 05 mar 2024 10:18:00 UTC; path=/";



// document.cookie = "subject=math; max-age=10 UTC path=/";


// }


// // read cookie
// var readbtn = document.getElementById("read-btn");

// console.log(readbtn)


// readbtn.onclick = function(){
  
  
// var data = document.cookie;

// var stage1 = data.split(";");


// for(let i =0 ; i<stage1.length; i++){

// let keyalue =   stage1[i].trim();

// console.log(keyalue.split("="));



// }


// }