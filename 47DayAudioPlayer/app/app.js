

window.onload = function(){

var uploadinput = document.getElementById("upload-input");

console.log(uploadinput)

uploadinput.onchange  = function(){
  
  var file = this.files[0];
console.log(file.name)

var size  = ((file.size/1000)/1000).toFixed(2);

var name = file.name;

var url = URL.createObjectURL(file)

// show file name
var title = document.getElementById("title");

title.innerHTML = name;

// show file size

var sizeinput = document.getElementById("size");

sizeinput.innerHTML = 'size ' + size + ' Mb';

// audio play

var audio  = document.createElement("audio");

audio.src = url







// disabled proprty 

var toolbars = document.getElementsByClassName("toolbars")
console.log(toolbars)

for(let i =0; i<toolbars.length; i++){

  toolbars[i].disabled = false;


}


// play btn

var play = document.getElementById("play");

play.disabled = false;


play.onclick = function(){
  var playicon = document.getElementById("playicon");


  if(audio.paused){
    playicon.className = "ri-pause-circle-line";
    playicon.title = "pause";

    audio.play()
   
  }else{
    playicon.className = "ri-play-circle-line";
    playicon.title = "play";
    audio.pause()
   
  }




}



// // speaker

var speaker = document.getElementById("speaker");

speaker.disabled = false;


console.log(speaker)

speaker.onclick = function(){
  let volume = document.getElementById("volume");

  if(volume.className == "ri-volume-down-line"){
    volume.className = "ri-volume-mute-fill";
    audio.muted = true;
    volume.title = "miuted on"

  }else{
    volume.className = "ri-volume-down-line";
    audio.muted = false;
    volume.title = "muted off"

  }


}





// loop
var loopbtn = document.getElementById("loop");

loopbtn.onclick = function(){

  let loopicon  = document.getElementById("loopicon");


  if(audio.loop){

 audio.loop = false;

  loopicon.className ="ri-repeat-2-line";




  }else{
    audio.loop = true;
    loopicon.className ="ri-repeat-one-line";

  }


}






// prev btn

var pre  = document.getElementById("pre");

pre.onclick = function(){

  let curr =  audio.currentTime;

 
  if(curr > 10){
    audio.currentTime = (curr-10)

  }
 
}


// forward btn

var next  = document.getElementById("next");

next.onclick = function(){


 let curr =  audio.currentTime;

 audio.currentTime = (curr+10)


}


audio.onloadeddata = function(){

 let duration =  audio.duration
  
 let minutes = Math.floor(duration/60);

 let seconds = Math.floor(duration %60);

 console.log(minutes)

 console.log(seconds)


 var fullduration = document.getElementById("full-duration");

 console.log(seconds)

 fullduration.innerHTML  = minutes + ':' + seconds;




}

audio.ontimeupdate = function(){

  var totalduration = audio.duration;


var duration = audio.currentTime;

var minutes = Math.floor(duration/60);

var seconds = Math.floor(duration%60);

var curr = document.getElementById("current-du")

curr.innerHTML = minutes + ':' + seconds;


var percantage = Math.floor((duration/totalduration)*100);

console.log(percantage)

var progressbar = document.getElementById("progress-bar");

progressbar.style.width = percantage+'%';
}

// controll volume
var volumeinput = document.getElementById("range");

volumeinput.onchange = function(){

console.log(  this.value)  
audio.volume  = this.value;

}




}

}