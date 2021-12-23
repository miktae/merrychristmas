let sobtn = document.getElementById('sobtn');
let rebtn =document.getElementById('rebtn');
let gifbtn = document.getElementById('gifbtn');
let audio1 = document.getElementById('audio1');
let s= document.getElementById('stickman');
const electron = require("electron");
const shell = electron.shell
let ipc= electron.ipcRenderer

s.onclick = () => shell.openExternal('https://poki.com/en/g/stickman-hook');
sobtn.onclick = ()=>{
  audio1.play();
};
sobtn.ondblclick = ()=>{
  audio1.pause();
};
// rebtn.onclick = ()=>{
//   var i = prompt('Please enter your name: ');
//   alert("Wish you a merry christmas " + i);
// }
rebtn.onclick = function(){
  // sending event 
  ipc.send('message')// ipc.send('event's name')
}

ipc.on('reply',function(event, arg){
  console.log(arg)
})
