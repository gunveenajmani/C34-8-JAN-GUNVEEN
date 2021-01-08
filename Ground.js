class Ground{

   constructor(x,y,w,h){
       var options={
           isStatic:true
       }
       this.Body= Bodies.rectangle(x,y,w,h, options);
       this.w= w;
       this.h=h;
       World.add(world, this.Body);
   }
    
   display(){
       //fill("blue");
       rectMode(CENTER)
       rect(this.Body.position.x, this.Body.position.y, this.w,this.h);
   }
}