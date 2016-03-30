var bacterium = [];

function setup() {
  createCanvas(600, 600);
  while (bacterium.length < 500) {
    bacterium.push(new Bacteria(random(0, 600), random(0, 600)));
  }
};

function draw() {
  background(0);

  bacterium.forEach(function updateAndDisplay(bacteria) {
    bacteria.update();
    bacteria.display();
  });

};

// var bubbles = [];
//
// setup = function () {
//   createCanvas(600, 600);
//   // your code goes here
// };
//
// draw = function () {
//   background(0);
//   // your code goes here
// };
