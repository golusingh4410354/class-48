var car;
var carImage;
var bg;
var fuel;
var fuelImage;
var track;
var trackImage;
var speedracer;
var speedracerImage;
var restart;
var restartImage;
var fuelGroup 
var gameState = PLAY;
var PLAY = 0;
var fuelScore;
var bgImage;
var dieSound;


function preload(){
  carImage = loadImage("./assets/car.png");
  speedracerImage = loadImage("./assets/speed racer.png.png");
   trackImage = loadImage("./assets/track.jpg");
   fuelImage = loadImage("./assets/fuel.png.png");
   trackImage = loadImage("./assets/track.jpg");
   restartImage = loadImage("./assets/restart.png");
   bgImage = loadImage("./assets/track.jpg");
   dieSound = loadImage("./assets/die.mp3");
}
function setup(){
  createCanvas(1200,800);

   track = createSprite(600,400);
   track.addImage(trackImage);
   track.scale = 0.7;

   
   
   restart = createSprite(950,29);
   restart.addImage(restartImage);
   restart.scale = 1;

   car = createSprite(600,500);
   car.addImage(carImage);
   car.scale = 0.1;

   speedracer = createSprite(300,85);
   speedracer.addImage(speedracerImage);
   speedracer.scale = 0.4;
   

   fuelGroup = new Group()
  
   track.velocityY = 5;
   



   
fuelScore = 0;
}
function draw(){
  background(bgImage);

  text("fuelScore: " + fuelScore, 500,50);
  if(gameState===PLAY){
    track.velocityY = 4;
  fuelScore = fuelScore + Math.round(frameCount/60);

  track.velocityY = 10;
  
  if (track.y>800){
    track.y = height/2;
    
  }
  if(keyDown(UP_ARROW)){
    car.velocityY = -6;
    dieSound.play();
  }
  if(keyDown(LEFT_ARROW)){
     car.velocityX = -3;
     dieSound.play();
  }
  if(keyDown(RIGHT_ARROW)){
    car.velocityX = 3;
    dieSound.play();
  }
   
  
  
  
  
}
// fuel.collide(car);
spawnfuel();
drawSprites()
  
}


  function spawnfuel() {
    //write code here to spawn the fuel
    if (frameCount % 60 === 0) {
      fuel= createSprite(600,100,40,10);
      fuel.addImage(fuelImage)
      fuel.y = Math.round(random(10,60))
      fuel.scale = 0.4;
     fuel.velocityY = -3;
      
      
      //assigning lifetime to the variable
     fuel.lifetime = 134
  
     fuelGroup.add(fuel);
  
      //adjust the depth
      fuel.depth = car.depth
      car.depth = car.depth + 1;
      }
    }
  
  

