
window.onload = function(){

 let remember = document.querySelector("#remember");

 let username = document.getElementById("username");
let password = document.getElementById("password");

let loginform = document.getElementById("login-form");




 remember.onchange = function(){
  
  let checked = this.checked;

  console.log(username.value)
  console.log(password.value)

  if(checked){

    localStorage.setItem("username",username.value);
    localStorage.setItem("password",password.value);



  }else{

     localStorage.removeItem('username')
     localStorage.removeItem('password')


  }

  }


  loginform.onsubmit = function(e){



    e.preventDefault();

    let page = document.getElementById("page");




    if(username.value == "rahul"){

      page.className = "animate__animated animate__fadeOut"

      if(password.value  == "1234"){

        window.location.href = "profile.html";
        
      }else{

        Swal.fire({
          icon:"error",
          title:"message",
          text:"Password wrong",
        })

      }

    }else{
    

      Swal.fire({
        icon:'error',
        title:"Message",
        text:"User does not axist"
      })
    }

    // div id="page" class="animate__animated animate__fadeIn




  }



  var userdata = localStorage.getItem('username');
  var passworddata = localStorage.getItem('password');


  if(userdata != null){

    
  username.value = userdata;

  password.value = passworddata;
remember.checked = true;

  }

  var pass = document.getElementById("pass");

  pass.onclick = function(){

    let password = document.getElementById("password");

    if(password.type == "password"){

      password.type ="text";
      pass.innerHTML = "Hide"

    }else{
      password.type = "password";
      pass.innerHTML = "Show"

    }


  }



}