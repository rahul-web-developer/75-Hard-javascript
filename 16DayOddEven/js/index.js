
let result = document.querySelector("#result");


function inputalert(value){


    let result = document.querySelector("#result");
    result.value += value

    console.log(event.target)


}



function calc(){


    
    let result = document.querySelector("#result");


    let value = eval(result.value)

    result.value = value

    console.log(result)

//   console.log(    result.value = value
    // )





}


function cleardata(){

    let result = document.querySelector("#result");

    console.log(result.value)

    result.value = "";

  console.log(result.value)
}
 