

// // let teachersName = [
// //     "Rahul",
// //     "Suresh",
// //     "Aman",
// //     "Shivani",
// //     "Himani",


// // ]


// // let clutter = '';


// // teachersName.forEach((data)=>{


// //     clutter += data;

// //     console.log(data)

// // })



// // console.log(clutter)
 
// // let returnval = teachersName.filter(data => data.toLocaleLowerCase().includes("shivani"))


// // console.log(returnval)


// // object in js

// let studetnData = [

// {
//     name:"Rahul",
//     email:"rajk2114483@gmail.com",
//     age:14,
//     gender:'Male',
//     mobileNo:""
// },


// ]

// // ordianry variable
// // studetnData.map((data,i)=>{
// //     if(data.name.includes("manoj")){

// //         return alert("exist data already")
// //     }else{
// //         alert("not exist already")
// //     }


// // })


// // let key = "mobile"
// // let student = {
// //     name:"Rahul",
// //     email:"some@gmail.com",
// // }


// // student[key] = "928833523";

// // console.log(student)


// const datashow = document.querySelector("#datashow");

// console.log(datashow)


// const mobile = [
//     {
//     name:"APPLE iPhone 14 (Starlight, 128 GB)",
//     price:69900,
//     rom:"128GB",
//     display:"15.49",
//     primaryCamera:"12MP",
//     sceondaryCamera:"12MP",
//     processor:'A15',
//     warranty:'1 year Warranty',
//     image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
//     discount:15,

// },
//     {
//     name:" iPhone 12 (Starlight, 128 GB)",
//     price:69900,
//     rom:"128GB",
//     display:"15.49",
//     primaryCamera:"12MP",
//     sceondaryCamera:"12MP",
//     processor:'A15',
//     warranty:'1 year Warranty',
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZYFMJbONLcr3FB1OHb0-LABvwlGEkUP7jZZSgMAWgA&s",
//     discount:15,

// },
//     {
//     name:" iPhone 16 (Starlight, 128 GB)",
//     price:69900,
//     rom:"128GB",
//     display:"15.49",
//     primaryCamera:"12MP",
//     sceondaryCamera:"12MP",
//     processor:'A15',
//     warranty:'1 year Warranty',
//     image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
//     discount:15,

// },


// ]

// let clutter = '';


// mobile.forEach(data=>{

//     let finaldata = (data.price*data.discount)/100;

//     let afterDiscount = data.price - data.discount*data.price /100;



//     clutter += `<h1>${data.name}</h1>
//     <p>${data.price} After Discount ${afterDiscount}</p>
//     <p>${data.rom}</p>
//     <span>${data.display}</span>

//     <p>${data.primaryCamera}</p>
//     <p>${data.sceondaryCamera}</p>
//     <h2>${data.processor}</h2>
//     <h3>${data.warranty}</h3>
//     <img src="${data.image}"/>
//     <p>Discount ${data.discount}</p>
//     <p>${finaldata}</p>

    
//     `;


//     console.log(data.image)


// })

// // console.log((mobile.price*mobile.discount)/100)


// // console.log(10000*15/100)

// // console.log(10000 - 15/100*10000)

// datashow.innerHTML = clutter




// const data = {}


function SignUp(event){


    event.preventDefault()
     
    let fname = event.target[0]
    let lname = event.target[1]
    let number = event.target[2]
    let password = event.target[3]

    let email = event.target[4]



    // console.log(fname.value)
    // console.log(lname)
    // console.log(password)
    // console.log(email)
    // console.log(number)
 


    var user = {

        firstname:fname.value,
        lastname:lname.value,
        mobile:number.value,
        password:password.value,
        email:email.value,


    }



    fname.value = "",
    lname.value  = "",
    number.value = "",
    password.value = "",
    email.value = "",


    console.log(user)

    let info = document.querySelector("#info")
   
    let clutter = `
    <h1>User Information </h1>
<p>${user.firstname}</p>
<p>${user.lastname}</p>
<p>${user.mobile}</p>

<p>${user.email}</p>

    
    `


    info.innerHTML = clutter


}

