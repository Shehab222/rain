const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop
var drops=[];
var umbrella
var maxDrops=500;
var indx =0;
var bolt1;
var r
var thunderBolt
function preload(){
    var umbrellaImage= loadImage("/images/Walking Frame/walking_1.png");
    bolt1= loadImage("/images/thunderbolt/1.png");
    

}

function setup(){
   createCanvas(1200,800);
   engine = Engine.create();
   world = engine.world;
    umbrella= new Umbrella(400,800,40,40);
   thunderBolt= createSprite(600,0,10,10);
  }


function draw(){
    background(0);
   // umbrella.display();
//   drop.display();

image(bolt1,400,-10,600,300);


   if (frameCount % 1 === 0){
      drops.push(new Drops(random (0,1200), random(0,1000)));
   }
   if (frameCount % 30 === 0){
    r= Math.floor(Math.random()* 3) + 1;
    switch(r){
      case 1:
       bolt1= loadImage("/images/thunderbolt/" + r + ".png" );
        bolt1= loadImage("/images/thunderbolt/2.png");
        break;
      case 3:
        bolt1= loadImage("/images/thunderbolt/3.png");
        break;
      case 4:
        bolt1= loadImage("/images/thunderbolt/4.png");
        break;
      default:
        

    }
 }

     for(var a = 0; a < drops.length ; a++){
        indx = getRandomInt(drops.length);
        drops[indx].display(a%3);
    }  

   /* if (drop.body.position.y > 800){   
        Matter.Body.setPosition(this.drop, {x:random(0,1200), y:random(0,800)});
    }
    */


}   
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

if (umbrella != null)
{
  umbrella.display();
}