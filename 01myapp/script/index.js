 



// // // function clickme(data){
// //     // alert(data)
// // // }
// // // 

// // function play(){

// // }


// // function pause(){


// // }


// // function stop(){


// // }


// // function clickmename(){
// //     alert("Name is Rahul");
// // }
// // let value = 1;

// // function handle(){


// //     let btn = document.querySelector('#brand');


// //     console.log(btn)

// //     btn.addEventListener("click",()=>{


// //       document.body.classList.toggle('animation')
    
      


// //         if(value){
            
// //     btn.innerHTML = "hide";
// //     btn.style.fontSize = "30px"

// //     value = 0;

// //         }else{

// //             btn.innerHTML = "show";
// //             btn.style.fontSize = "10px"
// //             value = 1;

// //         }

// //     })


// // }

// // handle()



// // function webpage(){


// // const webpage = document.querySelector('#webpage');


// // console.log(webpage)

// // webpage.style.backgroundColor = "cyan";









// // }



// // event is javascript

// let tag = document.querySelector('#webpage')

// function change(color){

//     tag.style.backgroundColor = color

// }



const add = document.querySelector("#add");


const inputvalue = document.querySelector('#inputvalue');

console.log(add)
console.log(inputvalue)

let array =["mahesh"];

let haeding = document.querySelector('#haeding');


add.addEventListener('click',()=>{

    const inputvalue = document.querySelector('#inputvalue');

    let input = inputvalue.value;


    let finaldata = [...array,input]

    
    let li = document.createElement("li")

    finaldata.forEach(element => {
        
        li.innerHTML = element;

    });




    console.log(finaldata)
    

haeding.append(li)

})

