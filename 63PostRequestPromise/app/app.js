window.onload = function(){

  const url = `https://jsonplaceholder.typicode.com/photos?_limit=20`;

  async function fetchdata(url){

    let loader = document.querySelector('#loader');
    let shodata = document.querySelector('#shodata');

  console.log(loader)

  
    try {

      shodata.innerHTML = "";


      loader.style.display = "flex";

      const fetchproducts = await fetch(`${url}`)

      const result = await fetchproducts.json()



     
    result.map((data)=>{
      console.log(data)

      shodata.innerHTML += `

      
      <div class="card">
      <img src="${data.thumbnailUrl}"/>
      
      
      <div>
      <h3>${data.title}</h3>
<a href="${data.url}" class="link" download="${'true'}.jpg">Learn More</a>
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




  }

fetchdata(url)


}