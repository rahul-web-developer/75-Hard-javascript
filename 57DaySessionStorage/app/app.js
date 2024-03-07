
window.onload = function(){

  // store data



  let storageform = document.getElementById("Storage-form");

  storageform.onsubmit = function(e){

    e.preventDefault();

    var key = document.getElementById("key").value;


    var value = document.getElementById("value").value;

storageform.reset()
    console.log(key,value)
    sessionStorage.setItem(key,value);

    Swal.fire({

      icon:"success",
      title:"Data Stored",


    })


  }

// read data 


let readdata = document.getElementById("readdata");

readdata.onsubmit = function(e){

  e.preventDefault()

  var keyread = document.getElementById("keyget").value;



 let data =  sessionStorage.getItem(keyread)

//  alert(data)

if(data == null){
  Swal.fire({
    icon:'error',
    title:"Data Doest Not Exists",

  })

}else{
  Swal.fire({
    icon:"success",
    title:`Data is : ${data}`,
  })
   
}


}




// read all data


var readnowbtn = document.getElementById("readnow");

console.log(readnow)

readnowbtn.onclick = async function(){

  var length = sessionStorage.length;

  for(let i =0 ;i<length; i++ ){

    let key = await sessionStorage.key(i);

    let data =await sessionStorage.getItem(key);

await Swal.fire({
  icon:"success",
  title:key,
  text:data,


})



  }




}

// remove

var remove = document.getElementById("removeform");


remove.onsubmit = function(e){
  e.preventDefault();

var removekey = document.getElementById("remove-key").value;


console.log(removekey);


let data = sessionStorage.getItem(removekey)

if(data == null){

Swal.fire({
  icon:'error',
  title:"Key Does not Exists",

})

}else{
  sessionStorage.removeItem(removekey)

  Swal.fire({
    icon:'success',
    title:"Data Delete Done",
  
  })
}




  remove.reset();


}

var removeall  = document.getElementById("removeall");

removeall.onclick = function(){

  let data = sessionStorage.length
  if(data>1){
    sessionStorage.clear()

    Swal.fire({
      icon:"success",
      title:"Data Delete All",
    })
  }else{
    
    Swal.fire({
      icon:"error",
      title:"Data is empty",
    })
  }


}



}