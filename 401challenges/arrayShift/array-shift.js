// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

function insertShiftArray(arr, item){
  let firstArray = arr.splice(0, Math.ceil(arr.length / 2));

  firstArray.push(item);

  let putArraysTogether = (firstArray.concat(arr))

  return putArraysTogether;
}

module.exports = insertShiftArray;