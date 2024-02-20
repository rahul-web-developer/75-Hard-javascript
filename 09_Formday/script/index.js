

function login(event){

    event.preventDefault()
    const password = document.querySelector("#password");


  const username = document.querySelector("#username");

let usernameview = document.querySelector("#username-view")
let passwordview = document.querySelector("#password-view")
    

usernameview.innerHTML = username.value;

passwordview.innerHTML = password.value;
















}