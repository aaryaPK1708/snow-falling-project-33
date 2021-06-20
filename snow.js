class Snow{
    constructor(x,y,r){
        var options = {
            restituion:0.4
        }
        this.image = loadImage("snow5.webp");
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.x = x;
        this.y = y;
        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}