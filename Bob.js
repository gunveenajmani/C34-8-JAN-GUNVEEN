class Bob{

    constructor(x, y){
        var options={
            restitution:1.2,
            friction:0.3,
            density:0.45
        }
        this.Body= Bodies.circle(x, y, 25, options);
        World.add(world, this.Body);
    }

    display(){
       ellipseMode(RADIUS)
       ellipse(this.Body.position.x, this.Body.position.y, 25, 25);
    }
}