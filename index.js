let sobtn = document.getElementById('sobtn');
let rebtn =document.getElementById('rebtn');
let gifbtn = document.getElementById('gifbtn');
let audio1 = document.getElementById('audio1');
let s= document.getElementById('stickman');

s.onclick = () => window.open('https://poki.com/en/g/stickman-hook', target="_self");
sobtn.onclick = ()=>{
  audio1.play();
};
sobtn.ondblclick = ()=>{
  audio1.pause();
};
rebtn.onclick = ()=>{
  var i = prompt('Please enter your name: ');
  alert("Wish you a merry christmas " + i);
}

