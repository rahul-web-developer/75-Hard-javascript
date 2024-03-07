window.onload = function(){

  fetch("https://fakestoreapi.com/products",{
    mathod:"Get"

  })
  .then((data)=>data.json())
  .then((data)=>{
    var Productsdata = document.getElementById("Products")

   

    for(let i =0 ;i <data.length; i++){

      
    var items = data[i]

    var div = `
<div class='item'>
    <img src="${items.image}" />
<h1>${items.title}</h1>
<p>${items.price}</p>

<div class="btn-p">

<a href="${items.url}" class="link" download="${items.title}.jpg"/>Download</a>

<button class="edit-btn">Edit</button>
    </div>



    `;

    Productsdata.innerHTML += div



   
    }
  })
  .catch((error)=>console.log(error))




}