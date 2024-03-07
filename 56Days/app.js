window.onload = function(){


 
  var form = document.getElementById("form")


  form.onsubmit = function(e){

    e.preventDefault()


    var key = document.getElementById("key").value;

    var value = document.getElementById("value").value;

  
  
      localStorage.setItem(key,value)

      form.reset()
  
alert("success")


}

// from data get

var formdata = document.getElementById("formdata");

  formdata.onsubmit = function(e){

e.preventDefault()

var key = document.getElementById("keyread").value;


 let data = localStorage.getItem(key)
//  localStorage.getItem(keyread)

alert(data)


  }



  // form data delete

  var formdelete = document.getElementById("formdelete");

  formdelete.onsubmit  = function(e){
    e.preventDefault()

    var keydelete = document.getElementById("keydelete").value;


    let data = localStorage.getItem(keydelete)

   if(data){
    localStorage.removeItem(keydelete)
    alert("data Removed Successfully")

    formdelete.reset()


   }else{
    alert("data does not exists")
   }

  } 

  // delete all data

  let deletealldata = document.getElementById("delete-alldata")


  deletealldata.onclick = function(){


var length = localStorage.length;

if(length > 0){
  localStorage.clear()

  alert("data clear success")

}else{
  alert("Datadoes not exist")
}




  }


  


 


}