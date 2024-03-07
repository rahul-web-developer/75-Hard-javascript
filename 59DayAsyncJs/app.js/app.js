


 


  function data(){
    var hour  = document.getElementById("hour");

 
    var minutedata  = document.getElementById("minute");

  var second  = document.getElementById("second");


  var title  = document.getElementById("title");


    let time = new Date().getHours();

    let minute = new Date().getMinutes();

    let seconds = new Date().getSeconds();


    hour.innerHTML = time;
    minutedata.innerHTML = minute;
    second.innerHTML  = seconds;

    if(time >= 12 ){
      hour.style.color = "yellow";
      title.innerHTML = "Good Afternoon Rahul"

    }
    else if(time >= 5  && time <10){
      title.innerHTML = "Good evening";


    }

    setTimeout(() => {
    
      data()
      
    }, 1000);



  }


  data()




