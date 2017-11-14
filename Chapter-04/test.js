const list = require('./list');

let listMock = {
  value: 0,
  rest: {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  }
}

/* Test arrayToList() */
test('Create list with given array', () => {
  expect( list.arrayToList([1, 2, 3]) ).toEqual({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  });
});

/* Test listToArray() */
test('Create array with given list', () => {
  expect( list.listToArray(listMock) ).toEqual( [0, 1, 2, 3] );
});

/* Test prepend() */
test('Prepend value to a list', () => {
  expect( list.prepend(listMock, -1) ).toEqual({
    value: -1,
    rest: {
      value: 0,
      rest: {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null
          }
        }
      }
    }
  });
});

/* Test nth() */
test('Returns element at given position', () => {
  expect( list.nth(listMock, 0) ).toEqual(listMock);
});

/* Test nth() */
test('Returns element at given position', () => {
  expect( list.nth(listMock, 1) ).toEqual({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  });
});
