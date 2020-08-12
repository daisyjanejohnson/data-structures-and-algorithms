const insertShiftArray = require('../401challenges/arrayShift/arrayShift.js');

test('insertShiftArray exists', () => {
  expect(shiftArray).toBeDefined();
});

//length test
test('length should increase by 1', () => {
  const startArray = [4, 8 ,15, 23, 42];
  const resultArray = insertShiftArray(startArray, 16);
  expect(resultArray.length).toBe(startArray.length+1);
});

it('should not modify the original', () => {
  const startArray = [4, 8 ,15, 23, 42];
  const resultArray = insertShiftArray(startArray, 16);
  expect(resultArray.length).toBe(startArray.length+1);
})
//Is Y in the correct spot
it('should have item added in correct spot', () => {
  const startArray = [4, 8 ,15, 23, 42];
  const resultArray = insertShiftArray(startArray, 16);
  expect(resultArray[3]).toBe(16);
})

/*
x x x x x x

y

return 
x x x y x x x 

*/
