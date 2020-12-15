class Umbrella{
constructor(x,y){
    this.body=Bodies.circle(400,800,20);
    World.add(world, this.body);
    loadImage("/images/Walking Frame/walking_1.png");
}

display(){
    push();
   // ImageMode(CENTER)
    //Image(umbrellaImage,umbrella.position.x,umbrella.position.y,40,40);

    
    pop();
}
}