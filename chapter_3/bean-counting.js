function countChar(string, char) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) count++;
  }

  return count;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log( countChar("Mario", "M") );
// -> 1
console.log( countChar("Apple pie", "p") );
// -> 3
console.log( countBs("Hello") );
// -> 0
console.log( countBs("Ben likes brownies") );
// -> 1
