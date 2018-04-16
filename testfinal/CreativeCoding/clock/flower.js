
var start; 
function setup() {
	createCanvas(1200, 1000);
  background("#efd8de");
  fill ("#ffffff");
  stroke ("#cbccc6");
	cursor(HAND);}

function draw() {
          
	            	}
	
function mouseDragged(){
  
	   var k =4;
    // 	translate (width/2, height/2);
    beginShape();
    for (var a = 0; a<TWO_PI; a+= 0.001)
      {
        var r = 200 * cos(k*a);
      	var x = r * cos (a);
      	var y = r * sin (a);
      	vertex ((x+mouseX),(y+mouseY));
    	}
    endShape(CLOSE);
    
    	if (key == "a"){
      var k=12;}
      else {
      var k=4;
  }
	}

  function keyTyped(){
      if (key == "w"){
  	  fill ("#ffffff")
  	  stroke ("#113c8b");
      strokeWeight (0.5);}

      if (key == "e"){
  	  fill ("#e68596")
  	  stroke ("#ffffff");
      strokeWeight (0.5);}  	
      if (key == "r"){
      //orange
  	  fill ("#113c8b")
  	  stroke ("#ffffff");
      strokeWeight (0.5);}
    
      
       if (key == "t"){
      //yellow
  	  fill ("#f5d043")
  	  stroke ("#ffffff");
      strokeWeight (0.5);}
   
      
       if (key == "t"){
        //orange "#e99364"
    	  fill ("#e99364")
    	  stroke ("#ffffff");
        strokeWeight (0.5);}
        // else {
        // //whiteflower
        // fill ("#ffffff");
        // stroke ("#113c8b");
        // }
        
      //clear
  		if (key == 'q'){
  		clear();
		  }
  }