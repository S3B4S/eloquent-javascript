function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
    return false;
  };

  let propsInA = 0;
  for (let prop in a) {
    propsInA++;
  }

  let propsInB = 0;
  for (let prop in b) {
    propsInB++;
    if(!(prop in a) || !deepEqual(a[prop], b[prop])) {
      return false;
    }
  }

  return propsInA === propsInB
}

module.exports = {
  deepEqual: deepEqual
}
