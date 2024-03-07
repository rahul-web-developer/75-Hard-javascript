

function elementcreator(event){

  event.preventDefault();


  // alert("element");

  var form = document.forms.element;

  var elementName = form.elements.element.value;

  var text = form.elements.text.value;

  var tag = document.createElement(elementName)

  tag.innerHTML = text;

  tag.className = "elements";

  var datashow  = document.getElementById("datashow");


  datashow.append(tag)


  console.log(text)

  //select dynamic elements

  var classvar = document.getElementsByClassName('elements')


  console.log(classvar)

  var animationCard = document.getElementById("animation-card");



  for(let i =0 ; i<classvar.length; i++){

    classvar[i].onclick = function(event){

      var currenttag = this;

      console.log("click");

 animationCard.style.display = "flex";

 var select = document.getElementById("animation")

 select.onchange = function(event){
   
 
   var classvalue = this.value;

   currenttag.className = classvalue;
   animationCard.style.display = "none";


   setTimeout(() => {
    currenttag.className = 'element';

   }, 3000);
   
 }

    }



  }


}

