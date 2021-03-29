// Write a function named removeDupes which takes a string and removes
// all duplicate characters in the String. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AaBb'
//   removeDupes('cAtCaT'); // 'cAtCaT'

// Write a function named removeDupesCI which takes a string and removes
// all duplicate characters regardless of capitalization. Here are some examples:
//   removeDupesCI('AABB'); // 'AB'
//   removeDupesCI('AaAaBbBb'); // 'AB'
//   removeDupesCI('cAtCaT'); // 'cAt'

function removeDupes(input) {
  return input
    .split('')
    .reduce((singleChars, char) => {
      if (!singleChars.includes(char)) {
        singleChars.push(char);
      }
      return singleChars;
    }, [])
    .join('');
}

//CI for case insensitive
function removeDupesCI(input) {}

console.log(removeDupes('AaAaBbBb'));
