

function toggle(){
    
    var sidenav = document.querySelector("#sidenav");
    var section = document.querySelector("#section");
    var topnav = document.querySelector("#topnav");

    console.log(sidenav)

    // sidenav.classList.toggle("demo")

    var width = sidenav.style.width;

    if(width == '0px'){
        sidenav.style.width = '250px'
        sidenav.style.transition = '0.3s';
        topnav.style.left = '250px';
        topnav.style.width = '100%'
      topnav.style.transition = '0.3s';


      section.style.marginLeft = "250px";
      section.style.width = "100%"
      section.style.transition = "0.3s"

    }else{
      sidenav.style.width = '0px';
      sidenav.style.transition = '0.3s';

      topnav.style.left = '0px'
      topnav.style.width = '100%'
      topnav.style.transition = '0.3s'
      section.style.marginLeft = "0px";
      section.style.width = "100%"
      section.style.transition = "0.3s"

    }




}



function show(addcolor,removecolor, active,inactive){

 var active = document.getElementById(active)
 var inactive = document.getElementById(inactive)


 

console.log(addcolor,removecolor)


 active.style.display = "block";
 inactive.style.display = "none"

// //  console.log(addcolor,removecolor)


//  addcolor.style.backgroundColor = "darkorange";
//  removecolor.style.backgroundColor = "white";


}

//38:49