const comp = require('../deep-comparison');

var objA = {animal: {is: "an"}, dog: 2};
var objB = {animal: {is: "an"}, dog: 2};
var objC = {animal: {is: "an"}, dog: 3};

test('Compare two equal objects', () => {
  expect( comp.deepEqual(objA, objB) ).toEqual( true )
});

test('Compare two inequal objects', () => {
  expect( comp.deepEqual(objA, objC) ).toEqual( false )
});

test('Compare null with object', () => {
  expect( comp.deepEqual(null, objC) ).toEqual( false )
});
