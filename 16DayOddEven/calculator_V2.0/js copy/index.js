
let result = document.querySelector("#result");
  
let alertp = document.querySelector("#test");

console.log(alertp)



function inputalert(value){


    result.value += value

    console.log(event.target)


}



function calc(){


  


    let value = eval(result.value)

    result.value = value

    console.log(result)

//   console.log(    result.value = value
    // )





}


function cleardata(){

 

    console.log(result.value)

    result.value = "";

  console.log(result.value)
}
 

function Even(){


    // alert('Even')

    let resultvalue = result.value;

    if(resultvalue === ""){
        
        alertp.innerHTML = "Please Enter Value";
        alertp.style.color = "red"
    }
   else if(resultvalue%2 == 0){
        // result.value = "even";
         alertp.innerHTML = `${resultvalue} Is Even Number `;
        alertp.style.color = "green"

    }else{
        // result.value = "Odd"
        alertp.innerHTML = `${resultvalue} Is Odd`;
        alertp.style.color = "red"
    }

    // result.value = ""

    setTimeout(() => {
        result.value = ""
        alertp.innerHTML = ""
    }, 2000);


}


function Odd(){

    // alert('odd')


    let resultvalue = result.value;

    if(resultvalue === ""){
        alertp.innerHTML = "Please Enter value";

        alertp.style.color = "red";
    }else if(resultvalue%2 == 1){
       
    
           
            alertp.innerHTML = `${resultvalue} is Odd number`;
            alertp.style.color = "red"
        
    }else{
        
        alertp.innerHTML = `${resultvalue} is Even number`;
        alertp.style.color = "green"
       
        
    
    }


    setTimeout(() => {
       result.value = ""
        alertp.innerHTML = "";
    }, 2000);



}