window.onload  = function(){


  function mydelay(name){

    return new Promise(function(resolve,reject){


      setTimeout(() => {
        if(name =="raj"){
        
          Swal.fire({
            icon:"success",
            title:"Login",
            text:"Login Success !"
          })
        }else{
          Swal.fire({
          icon:"error",
          title:"Login",
          text:"Login failed !"
        })

console.log("login failed")
        }

      }, 2000);
    })
  }


console.log("first")
console.log("second")
  mydelay("raj")


  var res = document.getElementById("res");


  res.onclick = function(){

    try {
      
      

    } catch (error) {
      
    }
  }


}