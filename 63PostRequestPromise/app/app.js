window.onload = async function(){



  const url = `https://jsonplaceholder.typicode.com/photos?_limit=20`;


  let getdata = document.getElementById("getdata");


  getdata.onclick =async function(){

    let shodata = document.querySelector('#shodata');

  console.log(loader)

  
    try {

      shodata.innerHTML = "";


      loader.style.display = "flex";

      const fetchproducts = await fetch(`${url}`)

      const result = await fetchproducts.json()



     
    result.map((data)=>{
      // console.log(data)

      shodata.innerHTML += `

      
      <div class="card">
      <img src="${data.thumbnailUrl}"/>
      
      
      <div>
      <h3>${data.title}</h3>
<a href="${data.url}" class="link" download="${'true'}.jpg">Learn More</a>
<button class="edit-btn" id="${data.id}">Edit</button>
<button class="delete-btn" id="${data.id}">Edit</button>
      </div>

      </div>
      `
    })
      

  



      
    } catch (error) {
      console.log('kuch to error hai yha',error)
    }
   finally{
   console.log('Your Request Completed')
   loader.style.display = "none";


}

// edit btn

let editbtn = document.querySelectorAll(".edit-btn")

for(let i =0 ;i <editbtn.length ; i++){

  editbtn[i].onclick = async function(e){

    var data = JSON.stringify(
      {
        id:this.id,
        title:'foo',
        body:'bar',
        userid:1,
      }
    )





    let id = this.id;


   try {
  
    let dataresponse = await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
method:"PUT",
body:data,





  })
    

  let resultfinal = await dataresponse.json()

  console.log(resultfinal)

   } catch (error) {
    
   }
 

  }



}


let deletebtn = document.querySelectorAll(".delete-btn")

for(let j =0 ;j<deletebtn.length ; j++){

  deletebtn[j].onclick = async function(e){

    
    // var data = JSON.stringify(
    //   {
    //     id:this.id,
    //     title:'foo',
    //     body:'bar',
    //     userid:1,
    //   }
    // )

    let id = this.id;


   try {
  
    let dataresponse = await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
method:"DELETE",

  })
    

  let resultfinal = await dataresponse.json()

  console.log(resultfinal)

   } catch (error) {
    
   }
 

  }



}



}

// post request

const form = document.getElementById("submit");


form.onsubmit  = async function(e){
  e.preventDefault();


 try {
  
  var data = JSON.stringify( {

    title:form[0].value,
    body:form[1].value,
    userid:form[2].value,

  })


  let res = await  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    body:data,
    
  })

  let result = await res.json()

  console.log(result)

  
 } catch (error) {
  console.log(error)
 }
 finally{

   console.log("finaly runny")

 }



}

 




  


}