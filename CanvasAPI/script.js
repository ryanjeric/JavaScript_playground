const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/* canvas.width = 800;
canvas.height = 900; */

// fillRect(x,y,width,height) [fillStyle]
// ctx.fillStyle = 'red';
// ctx.fillRect(20,20,150,100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200,20,150,100);

// // strokeRect(x,y,width,height) [lineWidth,strokeStyle]
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green'
// ctx.strokeRect(20,150,150,100);

// // clearRect() 
// ctx.clearRect(25,25,140,90)

// // fillText() [fillStyle,font]
// ctx.font = '30px Arial';
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello World',400,50);

// // strokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'orange'
// ctx.strokeText('Hello World',400,100);

// PATHS

// TRIANGLE
//  ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(100,150)
// // ctx.lineTo(50,50); 
// ctx.closePath();

// // ctx.stroke(); 
// ctx.fillStyle='coral';
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200,50);
// ctx.lineTo(150,150);
// ctx.lineTo(250,150);
// ctx.closePath();
// ctx.stroke();

// // Rectangle
// ctx.beginPath();
// ctx.rect(300,50,150,100);
// ctx.fillStyle = 'teal';
// ctx.fill(); 

 //Arc (circle) // arc(x,y,radius,startAngle,endAngle,anticlockwise:bool)
ctx.beginPath();

const centerX = canvas.width / 2;
const centerY = canvas.height /2;

//Draw Head
ctx.arc(centerX , centerY, 150, 0, Math.PI * 2);


//Move to mouth
ctx.moveTo(centerX+100,centerY);
// Draw Mouth
ctx.arc(centerX+50,centerY,50,0,Math.PI,false);

//Move to mouth
ctx.moveTo(centerX,centerY);
// Draw Mouth
ctx.arc(centerX-50,centerY,50,0,Math.PI,false);

// move to left eye
ctx.moveTo(centerX - 60,centerY - 80);
ctx.arc(centerX-80,centerY-80,20,0,Math.PI*2);

// move to right eye
ctx.moveTo(centerX + 100,centerY - 80);
ctx.strokeStyle = 'red';
ctx.arc(centerX+80,centerY-80,20,0,Math.PI*2);

ctx.stroke();

 ctx.moveTo(centerX,centerY);
 ctx.font = '30px Arial';
 ctx.lineWidth = 1;
 ctx.strokeStyle = '#333'
 ctx.strokeText('Hello World',400,100);
 

// ANIMATION
//  const circle = {
//     x:200,
//     y:200,
//     size:30,
//     dx: 5, // movement increment
//     dy:3
//  }

//  function drawCircle(){
//      ctx.beginPath();
//      ctx.arc(circle.x,circle.y,circle.size,0,Math.PI * 2);
//      //ctx.fillStyle ='purple';
//      ctx.fill();
//  }

//  function getRandomColour(){
//     var red = Math.floor(Math.random()* 255);
//     var green = Math.floor(Math.random() * 255);
//     var blue = Math.floor(Math.random() * 255);
  
//     return "rgb("+red+","+green+"," +blue+" )";  
//   }
  
//  function update(){
//      ctx.clearRect(0,0,canvas.width,canvas.height);
     
//      drawCircle();
//      circle.x +=circle.dx;
//      circle.y +=circle.dy;

//      // detect side walls
//      if(circle.x + circle.size > canvas.width || circle.x - circle.size <0){
//         circle.dx *=-1;
//         ctx.fillStyle = getRandomColour();
//      }

//      // detect 
//      if(circle.y + circle.size > canvas.height || circle.y- circle.size <0){
//         circle.dy *=-1;
//         ctx.fillStyle = getRandomColour();
//      }
     
//      requestAnimationFrame(update);
//      //console.log(123);
//  }
//  update();


 /* Animation 2 - Character */
//  const image = document.getElementById('source');
//  const player = {
//     w:50,
//     h:70,
//     x:50,
//     y:200,
//     speed:5,
//     dx:0,
//     dy:0
//  }
 

//  function drawPlayer(){
//      ctx.drawImage(image,player.x,player.y,player.w,player.h);
//  }
//  function clear(){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
// }
//  function newPos(){
//      player.x += player.dx;
//      player.y += player.dy;

//      detectWalls();
//  }

//  function detectWalls(){
//      //left wall
//      if(player.x < 0){
//          player.x = 0;
//      }
//      // right wall
//      if(player.x + player.w > canvas.width){
//          player.x = canvas.width - player.w;
//      }
//      // top
//      if(player.y < 0){
//         player.y = 0;
//     }
//     // right wall
//     if(player.y + player.h > canvas.height){
//         player.y = canvas.height - player.h;
//     }

//  }

//  function update(){
//      clear();

//      drawPlayer();

//      newPos();

//      requestAnimationFrame(update);
//  }
//  update();

//  function moveUp(){
//     player.dy = -player.speed;
//  }
//  function moveDown(){
//     player.dy = player.speed;
//  }
//  function moveRight(){
//     player.dx = player.speed;
//  }
//  function moveLeft(){
//     player.dx = -player.speed;
//  }

//  function keyDown(e){
//      if(e.key =='ArrowRight' || e.key=='Right'){
//          moveRight();
//      }else if(e.key === 'ArrowLeft' || e.key === 'Left'){
//          moveLeft();
//      }
//      else if(e.key === 'ArrowUp' || e.key === 'Up'){
//         moveUp();
//     }
//     else if(e.key === 'ArrowDown' || e.key === 'Down'){
//         moveDown();
//     }
//  }

//  function keyUp(e){
//     if(['Right','ArrowRight','Left','ArrowLeft','Up','ArrowUp','Down','ArrowDown'].indexOf(e.key)>-1){
//         player.dx = 0;
//         player.dy = 0;
//     }
//  }

//  document.addEventListener('keydown',keyDown);
//  document.addEventListener('keyup',keyUp);