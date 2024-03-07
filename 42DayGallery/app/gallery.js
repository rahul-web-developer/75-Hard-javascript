
window.onload = function(){

  let uploadinput = document.querySelector("#uploadinput");



uploadinput.onchange = function(){
  var container  = document.querySelector("#container");
  var empt  = document.querySelector("#empt");

  empt.style.display = "none"

var img = document.createElement('img');



let data = this.files;

for(let i = 0; i<data.length; i++){

  let file = data[i];
  console.log(file.name);
  console.log(file);

  
var button = document.createElement('button');
 
button.className = "image";


let url = URL.createObjectURL(file)

img.src = url;


var action = document.createElement("div");
action.className = "btniconcon"




// delete icon
var iconbutton = document.createElement("button");

iconbutton.className = "icon-button";

var deleteiconbutton = document.createElement("i");
deleteiconbutton.className = "fa fa-trash";
iconbutton.append(deleteiconbutton);
 


// view icon
var viewiconbutton = document.createElement("button");

viewiconbutton.className = "icon-button";


var viewicon = document.createElement("i");

viewicon.className = "fa fa-eye";

viewiconbutton.append(viewicon);

// setting icon button to div

action.append(iconbutton);
action.append(viewiconbutton);



// action div to img

button.append(img)

button.append(action)

container.append(button)



// delete image



iconbutton.onclick = function(){


  button.remove()
}


viewiconbutton.onclick = function(){
  
  Swal.fire({

    imageUrl:url,
   showConfirmButton:false,
   

  })



}

}



}

}