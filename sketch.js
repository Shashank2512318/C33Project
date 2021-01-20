 const Engine = Matter.Engine
 const World = Matter.World
 const Bodies = Matter.Bodies
 const body= Matter.Body
 
var particle
var plinkos = [];
var division= [];
var gameState= "play";
var count= 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 25; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 25; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  

    

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  textSize(20)
  text("500", 20, 650);
  textSize(20)
  text("500", 100, 650)
  textSize(20)
  text("500", 180, 650);
  textSize(20)
  text("100", 260, 650)
  textSize(20)
  text("100", 340, 650)
  textSize(20)
  text("100", 420, 650)
  textSize(20)
  text("100", 500, 650)
  textSize(20)
  text("200", 580, 650)
  textSize(20)
  text("200", 660, 650)
  textSize(20)
  text("200", 740, 650)
  Engine.update(engine);

 
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particle!= null){
     particle.display();
   
   if(particle.body.position.y>700) {

   

   if(particle.body.position.x<240){
    score= score+500;
    

   }
   if(particle.body.position.x<560){
    score= score+100;
    
  
  
  }
  if(particle.body.position.x>560 && particle.body.position.x<800){
    score= score+200;
    
    
  
  
  }
   particle= null
   

  
}
   }




   
 
  
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }

   if(count=== 5) {
     gameState= "end";

   }

   if(gameState=== "end") {
     textSize(40)
     text("GameOver", 350, 350)
   }
}
function mousePressed() {


  if(gameState=== "play") {

    count++

    particle= new Particles(mouseX, 10, 10, 10)
  }
}