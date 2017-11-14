// Create corresponding linked list with given array
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

// Create corresponding array with given linked list
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

// Creates new list & add value to front of the input list
function prepend(list, value) {
  	return {
      value: value,
      rest: list
    }
}

// Returns element at the given position in list
function nth(list, position) {
  return (position === 0) ? list : nth(list.rest, position - 1);
}

module.exports = {
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth
}
