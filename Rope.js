class  Rope{

constructor(body1 , body2){
var options= {
    bodyA: body1,
    bodyB: body2,
   length:300,
stiffness:0.04
}

this.rope1 = Matter.Constraint.create(options);
World.add(world,this.rope1);

}

display(){
    var A = this.rope1.bodyA.position;
    var B = this.rope1.bodyB.position;
    
stroke("black");
strokeWeight(4);
line(A.x, A.y, B.x ,B.y);

}

}