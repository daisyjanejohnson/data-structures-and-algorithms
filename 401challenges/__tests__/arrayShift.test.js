const insertShiftArray = require('../401challenges/__tests__/arrayShift.js');

test('insertShiftArray exists', () => {
  expect(shiftArray).toBeDefined();
});

//length test
test('length should increase by 1', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = insertShiftArray(startArray, 'y');
  expect(resultArray.length).toBe(startArray.length+1);
});

it('should not modify the original', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  insertShiftArray(startArray, 'y');
  expect(resultArray.length).toBe(startArray.length+1);
})
//Is Y in the correct spot
it('should have item added in correct spot', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = insertShiftArray(startArray, 'y');
  expect(resultArray[3]).toBe('y');
})

/*
x x x x x x

y

return 
x x x y x x x 

*/
