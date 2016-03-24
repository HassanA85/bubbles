var bubbles = [];

setup = function () {
  createCanvas(600, 600);
  // your code goes here
};

draw = function () {
  background(0);
  bubbles.forEach(function updateAndDisplay (bubble) { // function is defined
    bubble.update();
    bubble.display();
  });
  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));
  // your code goes here
};
