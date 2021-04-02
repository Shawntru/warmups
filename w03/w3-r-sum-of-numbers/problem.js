/* Given two integers, which can be positive and negative, 
find the sum of all the numbers between and including a and b,
and return the sum. If both numbers are equal return a or b.

Note! a and b are not ordered!

Example: 
getSum(1, 0) == 1   // 1 + 0 = 1
getSum(1, 2) == 3   // 1 + 2 = 3
getSum(0, 1) == 1   // 0 + 1 = 1
getSum(1, 1) == 1   // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

Psuedo:

Have: 2 arguments, integers
Want: Sum of all integers between them

Declare individual values by creating input array with both arg input, and sort array
Declare sum var as 0
Instantiate while loop
  condition 1st arg is < 2nd arg
  sum = 1st arg + 1st arg ++
Return sum
*/

function getSum(a, b) {
  if (a === b) return a;
  let sortedInputs = [a, b].sort((a, b) => (a > b ? a : b));
  let lowNum = sortedInputs[0];
  let highNum = sortedInputs[1];
  let sum = 0;
  while (lowNum <= highNum) {
    sum += lowNum;
    lowNum++;
  }
  return sum;
}

module.exports = {
  getSum: getSum,
};
