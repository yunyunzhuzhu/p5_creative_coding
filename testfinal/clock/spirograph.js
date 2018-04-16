var NUMSINES = 2; // how many of these things can we do at once?
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable
var scaleX; 
var scaleY; 
var min; 
var max; 
var radius;
var r, g, b;


// play with these to get a sense of what's going on:
var fund = 0.08; // the speed of the central sine
var ratio = 2; // what multiplier for speed is each additional sine?
// var alpha = 1; // how opaque is the tracing system
var trace = false; // are we tracing?

function setup() {
  	createCanvas(1200, 1000);

    rad = height/5; // compute radius for central circle
    background(0);
    smooth();
    radius = 10;
    r = random(255);
    g = random(255);
    b = random(255);
    noCursor();
    for (var i = 0; i<sines.length; i++) {
    sines[i] = PI/2; // start EVERYBODY facing NORTH
  }
}

function draw() {
  if (!trace) {
    noFill(); // don't fill
  } 

function drawEllipse() {
    noFill();
    stroke(r, g, b, 100);
    ellipse(0, 0, 40, 100);
}
  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width/3, height/3); // move to middle of screen

  for (var i = 0; i<sines.length; i++) {
    var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
    var radius = rad/(i+1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    if (!trace) ellipse(0, 0, radius*2, radius*2); // if we're simulating, draw the sine
         push();
        rotate(radians(i));
        translate(0, radius);
        rotate(radians(i*2));
        scale(map(sin(radians(i*scaleX)), -1, 1, min, max), map(sin(radians(i*scaleY)), -1, 1, min, max));
        drawEllipse();
        pop();
        translate(0, radius); // move into position for next sine
        sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; // update angle based on fundamental
  }
  
      
  
}