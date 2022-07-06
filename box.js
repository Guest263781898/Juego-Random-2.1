class Box{
    constructor(x,y,w,h){
       var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 0.04
       }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(490);
        fill(130);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}