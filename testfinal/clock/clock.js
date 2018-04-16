var font;
var vehicles = [];
var count = 0;

function preload(){
    font = loadFont('AvenirNextLTPro-Demi.otf');
}
function setup() {
    createCanvas(1100,350);
    cursor(CROSS)
}

function draw() {
    // vehicles = [];
    // console.log(vehicles.length);
    textAlign(CENTER,CENTER);
    textSize(200);
    background('black');
    textFont(font);

    var points = font.textToPoints (hour()+":"+minute(),20,300);

    //show the ouline of texts
    for (i=0; i<points.length; i++)  {
        count += 1;
        count %= 9000;
        var pt = points [i];
        var vehicle = new Vehicle (pt.x, pt.y);
        if (vehicles.length < 9000) {
            vehicles.push(vehicle);
        } else {
            vehicles[count] = vehicle;
        }
    }


    // background (0);
    for (var i=0;i < vehicles.length; i++){
        var v = vehicles [i];
        v.behaviors();
        v.update();
        v.show();
    }
}

function Vehicle(x,y){
    this.pos = createVector(random(width),random(height));
    this.target = createVector(x,y);
    this.vel = p5.Vector.random2D();
    // this.vel = createVector();
    this.acc = createVector();
    //size
    this.r = 10;
    this.maxspeed=90;
    //maxforce
    this.maxforce=600;
    this.behaviors = function(){
        var arrive=this.arrive(this.target);
        //var seek = this.seek(this.target);


        //way out mouse controls
        var mouse =createVector(mouseX,mouseY);
        var flee = this.flee(mouse);
        //make it strong
        arrive.mult(1);
        flee.mult(1);
        this.applyForce(arrive);
        this.applyForce(flee);
    };

    this.applyForce=function(f){
        this.acc.add(f);
    };



    this.update = function(){
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        //clear s function
        this.acc.mult(0);

    };

    this.show=function(){
        stroke(255);
        colorMode(HSB,360,100,100);
        strokeWeight(2);
        point (this.pos.x, this.pos.y);
    };

    this.arrive = function(target){
        //get the function from function to target
        var desired = p5.Vector.sub(target, this.pos);
        //distance
        var d = desired.mag();
        var speed = this.maxspeed;
        if (d<100){
            var speed = map(d,0,600,0, this.maxspeed);
        }

        desired.setMag(speed);
        //steering=desired-vel
        var steer = p5.Vector.sub(desired,this.vel);
        steer.limit(this.maxforce);
        return steer;

    };

    //flee to the particles
    this.flee = function(target){
        //get the function from function to target
        var desired = p5.Vector.sub(target, this.pos);
        var d = desired.mag();
        if (d<50){
            desired.setMag(this.maxspeed);
            desired.mult(-1);
            //steering=desired-vel
            var steer = p5.Vector.sub(desired,this.vel);
            steer.limit(this.maxforce);
            //inverse the action
            return steer;
        }else {
            return createVector(0,0);
        }
    };
}