window.onload = function(){



  let classselect = document.querySelectorAll(".thumb");



  for(let i=0 ; i<classselect.length;i++){

   

    classselect[i].onclick = function(){

       
    for(let j =0; j<classselect.length; j++){
      classselect[j].style.border = "none";

    }


      let prev = document.querySelector("#prev");

      console.log(this.src)

     this.style.border = "5px solid black";
      prev.src = this.src;
      
     prev.className = "animate__animated animate__fadeIn";

      setTimeout(() => {
       prev.className = "";

  }, 1000);



    };



  }



}