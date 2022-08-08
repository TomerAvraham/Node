function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumArray([1, 5, 9]));

async function thisIsAsync() {
  try {
  } catch (error) {}
}
