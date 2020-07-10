var bullet,wall
var speed,weight,thickness

function setup() {
  createCanvas(1200,400);

  bullet = createSprite(400,200,30,30)
  speed = random(223,321);
  weight = random(30,52)
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,200)


  bullet.velocityX = speed;
  
}

function draw() {
  background("blue");  
  bullet.shapeColor = "white"
  wall.shapeColor="orange"
 bullet.collide(wall)

  var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(deformation<10)
  bullet.shapeColor="green";

  if(deformation>10)
  bullet.shapeColor="red"

  drawSprites();

}
