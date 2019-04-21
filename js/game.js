var sun = new Image();
var moon = new Image();
var earth = new Image();
var trashCan = new Image();
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
  }
  if(KeyIsDown("ArrowRight")){

<<<<<<< HEAD
  //TrashCan
  ctx.drawImage(trashCan, 300, 550);
  

  window.requestAnimationFrame(draw);
=======
  }
>>>>>>> af8e9ae74148dc437a48f564e0b5806c67ee68a1
}

