window.onload =async function(){


  const datashow = document.getElementById("datashow");

  // show loader
  datashow.innerHTML = `<i class="ri-loader-2-line text-6xl fixed top-[45%] left-[45%] fa-spin"></i>`;

  let res = await axios.get('https://fakestoreapi.com/products');


  // hide loader
  datashow.innerHTML = "";
   let result = await res.data;

   console.log(result)


  
// preparing ui
   result.map((data)=>{

    datashow.innerHTML += `
    <div class="bg-white w-full animate__animated animate__fadeIn ">

    <img src="${data.image}" alt="shirt" class="w-full h-[280px] object-cover">

   <div class="p-4">
    <h1 class="text-lg font-semibold">${data.title}</h1>
    <p class="text-gray-500">${data.category}</p>

    <div class="price mt-3 flex gap-2">

<p>Rs ${data.price}/(50% off)</p>
<del>${data.price *2}</del>

    </div>
    <!-- price div end here -->

    <div class="mt-4">
    <button class="bg-indigo-600 text-white px-4 py-2 font-semibold rounded">
    <i class="ri-money-rupee-circle-fill"></i>
    <label>Buy Now</label>
    </button>

    <button class="bg-red-600 text-white px-4 py-2 font-semibold rounded">

    <i class="ri-shopping-cart-2-line"></i>
    <label>Add  To Cart</label>
    </button>
    </div>

   </div>
   <!-- content -->

  </div>
    
     `;





   })




}
