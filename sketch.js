var PLAY = 1
var END = 0
var gamestate = PLAY
var UFO;
var plr1;
//var plr2;
var UFOGroup;
var alienImg;
var bullet;
var boom;
var score = 0

function preload() {
  alienImg = loadImage("./images for game/My project.png ");
  player1 = loadImage("./images for game/spaceship 1.png");
  //player2 = loadImage("./images for game/spaceship 2.png");
  bgImg = loadImage("./images for game/space 1.gif")

  bomb = loadImage("./images for game/bullet2.png")
  explosion = loadImage("./images for game/boom.png")

  }
  
function setup() {
  createCanvas(2000,1000);

  boom = createSprite(200, 100);
  boom.addImage("boom", explosion)
  boom.visible = false;

  plr1 = createSprite(1020, 790);
  plr1.addImage("spaceship_1", player1);
  plr1.scale = 0.4

  //plr2 = createSprite(1208, 790);
  //plr2.addImage("spaceship_2", player2);
 // plr2.scale = 1.7

 score = 0
   UFOGroup = new Group();
   bulletgroup = new Group();
}

function draw() {
  background(bgImg); 

  fill ("green")
  textSize(50)
  text("Score:"+score, 169,84);
  text (mouseX + "," + mouseY, mouseX, mouseY)
if (gamestate === PLAY) {


  if (keyDown(LEFT_ARROW)){
 plr1.x -= 8
  }

  if (keyDown(RIGHT_ARROW)){
    plr1.x += 8
     }
     spawnUFO();

  if(keyDown("space")){
     createBullet()
     }

  if (bulletgroup.isTouching(UFOGroup)) {
    
    gamestate = END
   //UFOGroup.visible = false;

  }
  
}

else if (gamestate === END) {
  UFOhit();
 
  
 textSize(40)
 text("Game Over", 1000, 500)
}

 
drawSprites(); 

}



function createBullet() {
  bullet = createSprite(1020, 790);
  bullet.addImage("bullet", bomb);
 
  bullet.velocityY = -10; 
  bullet.scale = 0.05;
  bullet.x = plr1.x;
  bulletgroup.add(bullet);
}

function spawnUFO () {
if (frameCount % 60 === 0) {
  UFO= createSprite(100, 100);
  UFO.x = Math.round(random(0,2000));
  UFO.velocityY = 1;
  UFO.addImage("alien", alienImg );
  UFO.addImage("boom", explosion)
  
  UFO.scale = 0.3
  UFO.lifetime = 1000;
  UFOGroup.add(UFO)
  
  
}

}


function UFOhit (bulletgroup, UFOGroup) {

//UFOGroup.remove();
score += 5;
   UFO.changeImage("boom", explosion);
   //UFOGroup.destroy()
}