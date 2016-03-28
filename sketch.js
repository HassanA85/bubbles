var bubbles = [];

setup = function () {
  createCanvas(600, 600);

};

draw = function () {
  background(0);
  //bubbles.forEach(function updateAndDisplay (bubble) { // function is defined
    //bubble.update();
    //bubble.display();
  //});
  var index = 0;
  while (index < bubbles.length) {
      bubbles[index].update();
      bubbles[index].display();
      index += 1;
    }; //used loop instead of callback
  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY)); //new prototype pushed into array

};
