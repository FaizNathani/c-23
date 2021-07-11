class Box
{
    //properties
    //to give a starting value to the properties
    constructor(x,y,width,height)
    {
        var options = {
            restitution : 1.0,
            
        }

        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    //function
    display()
    {
        //namespacing //reusing the name
        var pos = this.body.position;
        var angle= this.body.angle; //optional 
      


        push(); // captures the new setting
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop(); // reverts to the old setting
    }

}
// Properties and Functions