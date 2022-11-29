const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(`i is ${i}`);
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    // console.log(`j is ${j}`);
    if (vowels[j] === input[i]) {
      // console.log(`${vowels[j]} is in both arrays`)
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray);
resultString = resultArray.join('').toUpperCase();
console.log(resultString);