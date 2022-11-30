// Functions as Data
// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//     for(let i = 1; i <= 1000000; i++) {
//       if ( (2 + 2) != 4) {
//         console.log('Something has gone very wrong :( ');
//       }
//     }
//   };
  
//   const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
//   isTwoPlusTwo();
  
//   console.log(isTwoPlusTwo.name);
//================================================================================================
// Functions as Parameters
// const higherOrderFunc = param => {
//     param();
//     return `I just invoked ${param.name} as a callback function!`;
// }
   
// const anotherFunc = () => {
//     return 'I\'m being invoked by the higher-order function!';
// }
   
// higherOrderFunc(anotherFunc);

// higherOrderFunc(() => {
//     for (let i = 0; i <= 10; i++){
//       console.log(i);
//     }
// });

// const addTwo = num => {
//     return num + 2;
// }
  
// const checkConsistentOutput = (func, val) => {
//     const checkA = val + 2;
//     const checkB = func(val);
//     if (checkA === checkB) {
//         return checkB;
//     } else {
//         return 'inconsistent results';
//     };
// }
  
// console.log(checkConsistentOutput(addTwo, 2));
//================================================================================================

//================================================================================================

//================================================================================================

//================================================================================================

//================================================================================================