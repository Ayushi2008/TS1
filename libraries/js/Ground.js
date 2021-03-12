class Ground{

    constructor(x,y,width,height){
        var ground_options={
            isStatic : true
          }
          this.body = bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(world,this.ground);
    }
    display(){
        var pos =this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.heigth);
    }
};