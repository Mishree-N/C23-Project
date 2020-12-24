//create box class
class Box {

    //give any x,y,width and height
    constructor (x,y,width, height){
        //setup width and height
        this.width = width;
        this.height = height;
        //give restitution option
        var box_options = {
            isStatic : true
        }
        //create box body
        this.body = Bodies.rectangle (x, y, this.width, this.height, box_options);
        //add box body to world
        World.add (world, this.body );
    }

    //display function to show 
    display () {
        //make pos variable to control positions
        var pos =this.body.position;
        //make rectMode center
        rectMode(CENTER);
        //color and make rectangle visible
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
        
    }
}