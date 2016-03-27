var bubbles = [];

setup = function () {
  createCanvas(600, 600);

};

draw = function () {
  background(0);

  bubbles.forEach(function updateAndDisplay (bubble) { // function is defined
    bubble.update();
    bubble.display();
  });
  while (bubbles.length < 500) {
    bubbles.push(new Bubble(random(0, 600), random(0, 600))); //new Bubble pushed into array up to 500 bubbles
  }
  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY)); //new Bubble pushed into array

};
