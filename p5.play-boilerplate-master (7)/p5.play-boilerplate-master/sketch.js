var spaceship,spaceshipGrp;
var alienship,alienshipGrp;
var bullet;
var background;
var score,time;
var spaceshipImg;
var alienshipImg;
var bulletImg;
var spacebgIMG;
var alienIMG1,alienIMG2,alienIMG3,alienIMG4,laienIMG5;
var astroid,astroidIMG;
var alien1,alien2,alien3,alien4,alien5;
var aliengrp1,aliengrp2,aliengrp3,aliengrp4;
var astroidgrp;

function preload(){
  spaceshipImg=loadImage("images/spaceship-PNG-File.png");
  bulletImg=loadImage("images/bullet.png");
  spacebgIMG=loadImage("images/space-bg.jpg");
  alienIMG1=loadImage("images/alien1.png");
  alienIMG2=loadImage("images/alien2.jpg");
  alienIMG3=loadImage("images/alien3.jpg");
  alienIMG4=loadImage("images/alien4.png");
  astroidIMG=loadImage("images/Asteroid.png");



}

function setup() {
  createCanvas(800,800);
  space=createSprite(0,0,800,800)
  space.addImage(spacebgIMG)
  space.y=space.height/2
  spaceship=createSprite(400,380,50,50);
  spaceship.addImage(spaceshipImg);
  spaceship.scale=0.2
  
  asteroidGroup=createGroup();
  alien1Group=createGroup();
  alien2Group=createGroup();
  alien3Group=createGroup();
  alien4Group=createGroup();
  bulletGroup=createGroup();



}

function draw() {
  background(spacebgIMG);

  space.velocityY = 2;
  
  if (space.y > 500) {
    space.y = space.height/2;
  }
  
  if (keyDown("space")) {
    createBullet(spaceship.x);
  }
  
  if (bulletGroup.isTouching(asteroidGroup)) {
    asteroidGroup.destroyEach();
    bulletGroup.destroyEach();
    score = score + 2;
  } else if (bulletGroup.isTouching(alien1Group)) {
    alien1Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 4;
  } else if (bulletGroup.isTouching(alien2Group)) {
    alien2Group.destroyEach();
    bulletGroup.destroyEach(); 
    score = score + 6;
  } else if (bulletGroup.isTouching(alien3Group)) {
    alien3Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 8;
  }

  else if(bulletGroup.isTouching(alien4Group)){
    alien4Group.destroyEach();
    bulletGroup.destroyEach();
    score = score + 8;
  }
  
  
  
  
  var select_enemy = Math.round(random(0,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_enemy == 0) {
      createAsteroid();
    } else if (select_enemy == 1) {
      createAlien1();
    } else if (select_enemy == 2) {
      createAlien2();
    } else if(select_enemy===3) {
      createAlien3();
    }else {
      createAlien4()
    }
    
  }



  
  drawSprites();
  text("PLAYER SCORE: "+ score, 10, 20);
}


function createAsteroid() {
  var asteroid = createSprite(Math.round(random(0, 800)), 0, 10, 10);
  asteroid.addImage(astroidIMG)
  asteroid.scale=0.08
 
  asteroid.velocityY = 0.3;
  asteroid.lifetime = 1000;
  asteroidGroup.add(asteroid);
}

function createAlien1() {
  var alien1 = createSprite(Math.round(random(0, 800)), 0, 10, 10);
  alien1.addImage(alienIMG1)
  alien1.scale=0.4

  alien1.velocityY = 0.7;
  alien1.lifetime = 1000;
  alien1Group.add(alien1);
}

function createAlien2() {
  var alien2 = createSprite(Math.round(random(0, 800)), 0, 10, 10);
  alien2.addImage(alienIMG2)
  alien2.scale=0.5

  
  alien2.velocityY = 0.8;
  alien2.lifetime = 1000;
  alien2Group.add(alien2);
}

function createAlien3() {
  var alien3 = createSprite(Math.round(random(0, 800)), 0, 10, 10);
  alien3.addImage(alienIMG3)
  alien3.scale=0.6

  
  alien3.velocityY = 1.0;
  alien3.lifetime = 1000;
  alien3Group.add(alien3);
}

function createAlien4() {
  var alien4 = createSprite(Math.round(random(0, 800)), 0, 10, 10);
  alien4.addImage(alienIMG4)
  alien4.scale=0.8

  alien4.velocityY = 1.0;
  alien4.lifetime = 1000;
  alien4Group.add(alien4);
}

function createBullet(x) {
  var bullet= createSprite(100, 100, 5, 10);
  bullet.addImage(bulletImg)
  bullet.y = 360;
  bullet.x = x;                                           
  bullet.shapeColor = "red";
  bullet.velocityY = -1;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}


  
  
