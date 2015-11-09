// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An L-System object
var lsys;
// A Turtle object
var turtle;
// How many times has recursion happened
var generations = 0;
//sound objects
var hmmm1, hmmm2, hmmm3, hmmm4, hmmm5, hmmm6;
var hmmms = [];


function preload(){
  hmmms = [hmmm1, hmmm2, hmmm3, hmmm4, hmmm5, hmmm6];
  hmmms[0] = loadSound("hmmms/hmmm1.m4a");
  hmmms[1] = loadSound("hmmms/hmmm2.m4a");
  hmmms[2] = loadSound("hmmms/hmmm3.m4a");
  hmmms[3] = loadSound("hmmms/hmmm4.m4a");
  hmmms[4] = loadSound("hmmms/hmmm5.m4a");
  hmmms[5] = loadSound("hmmms/hmmm6.m4a");
}

function setup() {

  // Create the canvas and use parent to place on the HTML page
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas');  

  var ruleset = [];

  //play all hmmms[] together:
  for( i = 0; i < hmmms.length; i++){
  hmmms[i].play();
}


  // Some other rules to try
  // // Fill with two rules (These are rules for the Sierpinksi Gasket Triangle)
  // ruleset[0] = new Rule('F',"F--F--F--G");
  // ruleset[1] = new Rule('G',"GG");
  // // Create LSystem with axiom and ruleset
  // lsys = new LSystem("F--F--F",ruleset);
  // turtle = new Turtle(lsys.getSentence(),width*2,TWO_PI/3);

  // //ruleset[0] = new Rule('F',"F[F]-F+F[--F]+F-F");
  // ruleset[0] = new Rule['F',"FF+[+F-F-F]-[-F+F+F]");
  // lsys = new LSystem("F-F-F-F",ruleset);
  // turtle = new Turtle(lsys.getSentence(),width-1,PI/2);
   
  ruleset[0] = new Rule('F', "FF+[+F-F-F]-[-F+F+F]");
  lsys = new LSystem("F", ruleset);
  turtle = new Turtle(lsys.getSentence(), height/3, radians(25));

  // Place the current sentence on the page
  var sentence = select('#sentence');
  sentence.style('width', windowWidth-width-100 +'px');
  sentence.html(lsys.getSentence());

  // Deal with generate button
  var button = select('#generate');
  button.mousePressed(generate);

  var button2 = select('#soundCheck');
  button2.mousePressed(soundCheck);


  // No draw loop
  noLoop();
}

// Get the turtle drawing!
function draw() {
  background(51);
  fill(0);
  //text("Click mouse to generate", 10, height-10);

  translate(width/2, height);
  rotate(-PI/2);
  turtle.render();

}

function playIt() {
  for(i =0; i < hmmms.length; i++){
    hmmms[i].play();
  }
}

function soundCheck(){

for(i =0; i < hmmms.length; i++){
  setTimeout(playIt, 1000);
  }
}




// Every time the mouse is pressed generate and redraw
function generate() {
  // Stop after a certain point
  if (generations < 5) {
    
    // Generate and draw!
    lsys.generate();
    turtle.setToDo(lsys.getSentence());
    turtle.changeLen(0.5);
    redraw();

    // Update the DOM element
    var sentence = select('#sentence');
    sentence.html(lsys.getSentence());

    generations++;
  }
}

function windowResized() {
  var sentence = select('#sentence');
  sentence.style('width', windowWidth-width-100 +'px');
}