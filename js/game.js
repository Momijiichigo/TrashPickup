var sun = new Image();
var moon = new Image();
var earth = new Image();
var trashCan = new Image();

let Trash = {
  x: 0,
  y: 0
}

function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  trashCan.src = 'PinClipart.com_garbage-clipart_127706.png';
  window.requestAnimationFrame(draw);
}
let canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  canvas.width=innerWidth;
  canvas.height=innerHeight;
  ctx.clearRect(0, 0, 300, 300); // clear canvas


function draw() {
  move();
  window.requestAnimationFrame(draw);
}

init();

let move=()=>{
  if(KeyIsDown("ArrowLeft")){
    //do something
    Trash.x-=1;

  }
  if(KeyIsDown("ArrowRight")){
    Trash.x+=1;
  }
  testObj.style.left=Trash.x+"px";
  testObj.style.top=Trash.y+"px";
}
