var bullet, wall, rwall, rweight, rspeed, damage;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1500, 200, 60, 400);

  rwall = 60;
  rspeed = 0;
  rweight = 0;

  fill("yellow");
  text("Press Space To Release The Bullet", 400 , 50);

  bullet = createSprite(100, 200, 40, 20);

}

function draw() {
  background("black");  

  damage = 0.5 * rweight * rspeed * rspeed/rwall * rwall * rwall;

  textSize(20);
  fill("white");

  text("Wall Thickness = " + rwall, 400, 100);
  text("Bullet Weight = " + rweight, 400, 160);
  text("Bullet Speed = " + rspeed, 400, 130);

  if(keyDown("space")){

    rwall = random(23, 88);
    rweight = random(30, 52);
    rspeed = random(223, 321); 
    
    wall.destroy();

    wall = createSprite(1500, 200, rwall, 400);

    bullet = createSprite(100, 200, 40, 20);
    bullet.velocityX = rspeed;
    bullet.velocityY = 0;
    
  }

  if(bullet.isTouching(wall)){
    bullet.destroy();
  }

  bullet.velocityY = bullet.velocityY + rweight/1000;

  bullet.collide(wall);
  
  fill("red");
  text("Damage = " + damage, 800, 100);

  if(damage < 30000000){
    wall.shapeColor = "green";
  }

  if(damage > 30000000 && damage < 70000000){
    wall.shapeColor = "yellow";
  }

  if(damage > 70000000){
    wall.shapeColor = "red";
  }

  drawSprites();
}