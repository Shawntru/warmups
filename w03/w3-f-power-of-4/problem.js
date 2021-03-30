// Write a method that returns true if a given parameter is a power of 4,
// and false if it's not. If parameter is not an Integer (eg String, Array)
// method should return false as well.
//Also write a recursive version

function powerOf4(x) {
  if (isNaN(x) || x < 4) return false;
  while (x >= 4) {
    x /= 4;
  }
  return x === 1;
}

function powerOf4R(x) {
  if (isNaN(x) || x < 4) return false;
  x /= 4;
  return x === 1 ? true : powerOf4R(x);
}

console.log(powerOf4R(16));
