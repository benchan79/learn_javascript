/* shape-area.js */
const PI = Math.PI;

function circleArea(radius) {
  return PI * radius * radius;
}

function squareArea(sideLength) {
  return sideLength * sideLength;
}

module.exports.circleArea = circleArea;

module.exports.squareArea = squareArea;