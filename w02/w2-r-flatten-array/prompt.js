// Write a function that flattens an Array of Array objects into a flat Array.
// Your function must only do one level of flattening. Some examples:
//  flatten([]) // should return []
//  flatten([1, 2, 3]) //should return [1,2,3]
//  flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]) //should return [1, 2, 3, "a", "b", "c", 1, 2, 3]
//  flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]) //should return [3, 4, 5, [9, 9, 9], "a,b,c"]

/*
Have: array containing array elements
Want: Array consisting of all elements flattened and combined (One level)
init a var, defined as below reduce method
Array arg, reduce init with an empty arr
  for each of the arrays, each element in the array push acc array
  return the acc array
return the var from reduce method
*/

function flatten(array) {
  return array.reduce((flatEls, arrayEl) => {
    Array.isArray(arrayEl)
      ? arrayEl.forEach((el) => flatEls.push(el))
      : flatEls.push(arrayEl);
    return flatEls;
  }, []);
}

console.log(flatten([])); // should return []
console.log(flatten([1, 2, 3])); //should return [1,2,3]
console.log(
  flatten([
    [1, 2, 3],
    ['a', 'b', 'c'],
    [1, 2, 3],
  ])
); //should return [1, 2, 3, "a", "b", "c", 1, 2, 3]
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']])); //should return [3, 4, 5, [9, 9, 9], "a,b,c"]
