var sun;
var mercury, venus, earth, mars, jupiter, saturn, uranus, neptune;
var moon;

var star;
var planet1,planet2,planet3,planet4,planet5,planet6,planet7,planet8;
var satellite;

var direction= 90;
//var directionMoon= 90;

function preload(){
  star = loadImage("solar-system-images/sun.png");

  planet1 = loadImage("solar-system-images/mercury.png");
  planet2 = loadImage("solar-system-images/venus.png");
  planet3 = loadImage("solar-system-images/earth.png");
  planet4 = loadImage("solar-system-images/mars.png");
  planet5 = loadImage("solar-system-images/jupiter.png");
  planet6 = loadImage("solar-system-images/saturn.png");
  planet7 = loadImage("solar-system-images/uranus.png");
  planet8 = loadImage("solar-system-images/neptune.png");

  satellite = loadImage("solar-system-images/moon.png");
}

function setup() {
  canvas.width = document.documentElement.clientWidth - 500;
  canvas.height = document.documentElement.clientHeight - 20;
  createCanvas(canvas.width,canvas.height);

  sun= createSprite(canvas.width/4, canvas.height/4, 20, 20);
  sun.addImage(star);
  sun.scale= 0.20;
  sun.setCollider("circle", 0, 0, (sun.width/2)-80);


  mercury= createSprite((canvas.width/4)+50, canvas.height/4, 20, 20);
  mercury.addImage(planet1);
  mercury.scale= 0.045;
  mercury.setCollider("circle", 0, 0, (mercury.width/2)-80);

  venus= createSprite((canvas.width/4), (canvas.height/4)-75, 20, 20);
  venus.addImage(planet2);
  venus.scale= 0.10;
  venus.setCollider("circle", 0, 0, (venus.width/2)-80);

  earth= createSprite((canvas.width/4)-100, canvas.height/4, 20, 20);
  earth.addImage(planet3);
  earth.scale= 0.06;
  earth.setCollider("circle", 0, 0, (earth.width/2)-80);

  mars= createSprite((canvas.width/4), (canvas.height/4)+125, 20, 20);
  mars.addImage(planet4);
  mars.scale= 0.06;
  mars.setCollider("circle", 0, 0, (mars.width/2)-80);

  jupiter= createSprite((canvas.width/4)+175, (canvas.height/4), 20, 20);
  jupiter.addImage(planet5);
  jupiter.scale= 0.16;
  jupiter.setCollider("circle", 0, 0, (jupiter.width/2)-80);

  saturn= createSprite((canvas.width/4), (canvas.height/4)-225, 20, 20);
  saturn.addImage(planet6);
  saturn.scale= 0.17;
  saturn.setCollider("circle", 0, 0, (saturn.width/2)+30);

  uranus= createSprite((canvas.width/4)-275, (canvas.height/4), 20, 20);
  uranus.addImage(planet7);
  uranus.scale= 0.07;
  uranus.setCollider("circle", 0, 0, (uranus.width/2)-80);

  neptune= createSprite((canvas.width/4),(canvas.height/4)+325, 20, 20);
  neptune.addImage(planet8);
  neptune.scale= 0.10;
  neptune.setCollider("circle", 0, 0, (neptune.width/2)-80);

  //moon= createSprite((canvas.width/2)-100-18, canvas.height/2, 20, 20);
  //moon.addImage(satellite);
  //moon.scale= 0.04;
  //moon.debug= true;
  //ellipseMode(CENTER);
}

function draw() {
  background(0,0,0);

  //draw orbits of planets around son
  noFill();
  stroke(200);
  strokeWeight(2);
  ellipseMode(CENTER);

  //translate(width / 2, height / 2);
  //rotate(PI / 3.0);

  ellipse(canvas.width/4,canvas.height/4, 100,100);
  ellipse(canvas.width/4,canvas.height/4, 150,150);
  ellipse(canvas.width/4,canvas.height/4, 200,200);
  ellipse(canvas.width/4,canvas.height/4, 250,250);
  ellipse(canvas.width/4,canvas.height/4, 350,350);
  ellipse(canvas.width/4,canvas.height/4, 450,450);
  ellipse(canvas.width/4,canvas.height/4, 550,550);
  ellipse(canvas.width/4,canvas.height/4, 650,650);
  //ellipse(canvas.width/2-100,canvas.height/2, 35,35);

  sun.rotationSpeed = -1;

  mercury.rotationSpeed = -4;
  venus.rotationSpeed = -3;
  earth.rotationSpeed = -4;
  mars.rotationSpeed = -3;
  jupiter.rotationSpeed = -1;
  saturn.rotationSpeed = -1;
  uranus.rotationSpeed = -2;
  neptune.rotationSpeed = -2;
  //moon.rotationSpeed = -1;

  //by providing a speed and an angle
  direction += 2;
  //directionMoon += 4;

  mercury.setSpeed(1.72, -direction);
  venus.setSpeed(-2.57, -direction+90);
  earth.setSpeed(-3.5, -direction);
  mars.setSpeed(-4.35, -direction-90);
  jupiter.setSpeed(6.12, -direction);
  saturn.setSpeed(-7.82, -direction+90);
  uranus.setSpeed(-9.6, -direction);
  neptune.setSpeed(-11.4, -direction-90);

  //moon.setSpeed(-0.5, -directionMoon);

  //call isTouching  function
  if((frameCount % 30 === 0) && sun.scale < 2.1){
    sun.scale= sun.scale + 0.01;
  }

  fill("white");

  isTouchingPlanet(sun,mercury);
  isTouchingPlanet(sun,venus);
  isTouchingPlanet(sun,earth);
  isTouchingPlanet(sun,mars);
  isTouchingPlanet(sun,jupiter);
  isTouchingPlanet(sun,saturn);
  isTouchingPlanet(sun,uranus);
  isTouchingPlanet(sun,neptune);

  drawSprites();
}
