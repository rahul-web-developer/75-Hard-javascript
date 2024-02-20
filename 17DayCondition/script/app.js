
function toggle(btn){

    let image = document.querySelector("#img")

    var display = image.style.display;

    if(image.className == "animate__animated animate__slideOutLeft animate__faster"){
        image.className = "animate__animated animate__slideInLeft animate__faster";

    }else{

        image.className = "animate__animated animate__slideOutLeft animate__faster";


    }
   





   
};



// if(display == "none"){

//     image.style.display = "block";
//    btn.innerHTML = "Hide"

//  }else{
//   image.style.display = "none";
//   btn.innerHTML = "Show"


//  };



    //     image.style.display = "block";
    //    btn.innerHTML = "Hide";
    
    //    image.className = "animate__animated animate__swing";
    
    
    
    //  }else{
    //   btn.innerHTML = "Show"
    //   image.className = "animate__animated animate__zoomOut";
    
    
    // setTimeout(() => {
    //     image.style.display = "none";
    
    // }, 2000);
    //  };
    