var object1, surface2, surface3, surface4;
var music, box;
var edge1, edge, edge3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);
    
    
    //create 4 different surfaces
    surface1=createSprite(95,590,185,20);
    surface1.shapeColor="red";
    surface2=createSprite(300,590,185,20);
    surface2.shapeColor="green";
    surface3=createSprite(505,590,185,20);
    surface3.shapeColor="blue";
    surface4=createSprite(710,590,185,20);
    surface4.shapeColor="yellow";
    edge1=createSprite(800,400,10,800);
    edge1.shapeColor="black";
    edge2=createSprite(0,400,10,800);
    edge2.shapeColor="black";
    edge3=createSprite(400,0,800,10);
    edge3.shapeColor="black";



    //create box sprite and give velocity
    box=createSprite(random(20,750));
    box.shapeColor="pink";
    box.velocityX=5;
    box.velocityY=5;
    box.scale=0.2;

}

function draw() {
    background("black");
    

if(surface1.isTouching(box) && box.bounceOff(surface1)){
   box.shapeColor="red";
   music.play();
   }

if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor="green"; 
    music.play();   
 }

 if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="blue";
    music.play();
}

 if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="yellow";
    music.play();
}

if(edge3.isTouching(box) && box.bounceOff(edge3)){
    box.shapeColor="pink";
}

if(edge2.isTouching(box) && box.bounceOff(edge2)){
    box.shapeColor="pink";
}

if(edge1.isTouching(box) && box.bounceOff(edge1)){
    box.shapeColor="pink";
}
 

  
drawSprites()
   

//Mam i cannaot use the edge sprite here pls see to it so i used the other
// 3 edges by creating sprite. 
}
