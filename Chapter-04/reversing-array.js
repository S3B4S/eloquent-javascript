function reverseArray(array) {
  var newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  var temp = [];

  for (i = array.length - 1; i >= 0; i--) {
    temp.push(array[i]);
  }

  array = temp;
  return array;
}

console.log( reverseArray([0, 1, 2, 3]) );
// -> [3, 2, 1, 0]
// 
console.log( reverseArrayInPlace([0, 1, 2, 3]) );
// -> [3, 2, 1, 0]
