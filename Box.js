class Box{

    constructor(x, y){
        var options={
            restitution:0.1,
            friction:1,
            density:1
        }
        this.Body= Bodies.rectangle(x, y, 50,50, options);
        this.w= 50;
        this.h=50;
        World.add(world, this.Body);
    }

    display(){
        fill("black")
        stroke("white")
        
       rectMode(CENTER)
       rect(this.Body.position.x, this.Body.position.y, this.w,this.h);
    }
}