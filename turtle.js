// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Turtle(s, l, t) {
  this.todo = s;
  this.len = l;
    this.theta = t;

  this.render = function() {
    stroke(255);
    for (var i = 0; i < this.todo.length; i++) {
      var c = this.todo.charAt(i);
      if (c === 'F' || c === 'G') {
        line(0,0,this.len,0);
        translate(this.len,0);
        hmmm1.play();
        hmmm2.play();
      }
      else if (c === '+') {
        rotate(this.theta);
        hmmm3.play();
      }
      else if (c === '-') {
        rotate(-this.theta);
        hmmm4.play();
      }
      else if (c === '[') {
        hmmm5.play();
        push();
      }
      else if (c === ']') {
        hmmm6.play();
        pop();
      }
    }
  };

  this.setLen = function(l) {
    this.len = l;
  };

  this.changeLen = function(percent) {
    this.len *= percent;
  };

  this.setToDo = function(s) {
    this.todo = s;
  };
}