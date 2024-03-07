
function Sound(value){

// alert(value)
let volumesound = document.querySelector("#volumesound");


let audio = document.querySelector("#audio");


let result = document.querySelector("#result")



console.log(audio)

if(value == 'a'){
  audio.src = 'audio/Apple.mp3';
  result.innerHTML  = "Apple"
}

else if(value == 'b')
{audio.src = 'audio/ball.mp3';
result.innerHTML  = "Ball"

}
else if(value == 'c')
{
  audio.src = 'audio/cat.mp3';
  result.innerHTML = "Cat"
}

else if(value == 'd')
{audio.src = 'audio/dog.mp3';
result.innerHTML = "Dog"
}

else if(value == 'e')
{audio.src = 'audio/e.mp3';
result.innerHTML = 'elephant'

}

else if(value == 'f')
{audio.src = 'audio/f.mp3';
result.innerHTML = 'fish'

}

else if(value == 'g')
{audio.src = 'audio/g.mp3';
result.innerHTML = 'elephant'
result.innerHTML = ' g for gaana'

}

else if(value == 'h')
{audio.src = 'audio/h.mp3';
result.innerHTML = 'h for hum';


}

else if(value == 'i')
{audio.src = 'audio/i.mp3';
result.innerHTML = 'ink';
}

else if(value == 'j')
{audio.src = 'audio/j.mp3';
result.innerHTML = 'j for jug';


}

else if(value == 'k')
{audio.src = 'audio/k.mp3';
result.innerHTML = 'k for kite';

}

else if(value == 'l')
{audio.src = 'audio/l.mp3';
result.innerHTML = 'l for lemon nimbu';

}

else if(value == 'm')
{audio.src = 'audio/m.mp3';
result.innerHTML = 'm for monkey';

}


else if(value == 'n')
{audio.src = 'audio/n.mp3';
result.innerHTML = 'n for neha';

}

else if(value == 'o')
{audio.src = 'audio/o.mp3';
result.innerHTML = 'o for orange';


}

else if(value == 'p')
{audio.src = 'audio/p.mp3';
result.innerHTML = 'p for parrot';

}

else if(value == 'q')
{audio.src = 'audio/q.mp3';
result.innerHTML = 'q for rani';

}

else if(value == 'r')
{audio.src = 'audio/r.mp3';
result.innerHTML = 'R for rahul';
}

else if(value == 's')
{audio.src = 'audio/s.mp3';
result.innerHTML = 's';
}

else if(value == 't')
{audio.src = 'audio/t.mp3';
result.innerHTML = 't for teena';
}

else if(value == 'u')
{audio.src = 'audio/u.mp3';
result.innerHTML = 'u for umbrella';

}

else if(value == 'v')
{audio.src = 'audio/v.mp3';
result.innerHTML = 'v for van';

}

else if(value == 'w')
{audio.src = 'audio/w.mp3';
result.innerHTML = 'w for watch';

}

else if(value == 'x')
{audio.src = 'audio/x.mp3';
result.innerHTML = 'x';

}


else if(value == 'y')
{audio.src = 'audio/y.mp3';
result.innerHTML = 'y for yarn';

}

else if(value == 'z')
{audio.src = 'audio/z.mp3';
result.innerHTML = 'z for zebra';

}

else alert("Not found")
volumesound.style.color = "black";


audio.play()

setTimeout(() => {
  volumesound.style.color = "white"
}, 1300);

}