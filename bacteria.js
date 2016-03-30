var Bacteria = function(x, y) {
  this.firstPoint = new p5.Vector(x, y); // random first cordinates
  this.secondPoint = new p5.Vector(x + random(-10, 10), y + random(-10, 10)); // bacterial growth (ewwww)

};

Bacteria.prototype = {

  update: function() {
    /// squirm!!
    this.firstPoint.x = this.firstPoint.x + random(-1, 1);
    this.secondPoint.x = this.secondPoint.x + random(-1, 1);
  },

  display: function() {
    strokeWeight(8);
    stroke(100, 255, 100, 100);
    smooth()
    line(this.firstPoint.x, this.firstPoint.y, this.secondPoint.x, this.secondPoint.y);
  }

};

// var Bubble = function (x, y) {
//   this.x = x;
//   this.y = y;
// };
//
// Bubble.prototype = {
//
//   radius: 5,
//
//   update: function() {
//     this.x += random(-1, 1);
//     this.y += random(0, -2);
//     if (this.y - this.radius <= 0) this.y = this.radius + random(0, 2);
//   },
//
//   display: function () {
//     noStroke();
//     fill(102, 217, 255, 100);
//     ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
//   }
//
// };
