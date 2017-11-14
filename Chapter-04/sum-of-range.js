function oldRange(start, end) {
  var arrayReturn = [];
  for (var i = start; i <= end; i++) {
    arrayReturn.push(i);
  }
  return arrayReturn;
}

function range(start, end, step = 1) {
  var arrayReturn = [];

  function condition(i, step) {
    return (step > 0) ? (i <= end) : (i >= end);
  }

  for (var i = start; condition(i, step); i += step) {
    arrayReturn.push(i);
  }

  return arrayReturn;
}

function sum(numbers) {
  var total = parseInt(0);
  for (var el in numbers) {
    total += numbers[el];
  }
  return total;
}

console.log( range(1, 10, 3) );
// -> [1, 4, 7, 10]

console.log( range(10, 2, -2) );
// [10, 8, 6, 4, 2]

console.log( sum([2, 3, 7]) );
// -> 12

console.log( sum(range(1, 10)) );
// -> 55
