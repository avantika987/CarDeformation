var car;
var wall;
var speed,mass;

function setup() {
  createCanvas(1200,400);
  car = createSprite(50, 200, 30, 30);
  wall = createSprite(1000,200,40,200);
  wall.shapeColor = (80,80,80);
  speed = random(55,90);
  mass = random(400,1500);
  car.velocityX = Math.round(speed/5);
  
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<wall.width/2+car.width/2){
      car.velocityX = 0;
      var deformation = 0.5 *mass*speed*speed/22500;
      console.log(deformation);
      if(deformation <100){
        car.shapeColor = "green";
      }
      if(deformation >100 && deformation <180){
        car.shapeColor = "yellow";
      }
      if(deformation >180){
        car.shapeColor = "red";
      }
  }
  drawSprites();
}