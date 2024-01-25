MRZ = 'P<JONES<11<10<2023<<<<<';

// isDigit('0') === true;
// isDigit('A') === false;

// 'A'.charCodeAt() === 65;
// 'B'.charCodeAt() === 66;

// function toNumber (){
//     const mrzValues = MRZ.map(
//       (character, index) => {
//           if("<" === character) {
//               return 0;
//           }
//           if ("1

//       }
//     );
// }

WEIGHTS = [7, 3, 1];

function calculateCheckDigit(mrz) {
  const sum = mrz.reduce((accumulator, character, index) => {
    let value;
    if (character === '<') {
      value = 0;
    } else if (isDigit(character)) {
      value = parseInt(character);
    } else {
      value = character.charCodeAt() - 55;
    }
    accumulator += value * WEIGHTS[index % 3];
  }, 0);
  return sum % 10;
}
calculateCheckDigit();

// index      0 1 2 3 4 5 6
// index % 3  0 1 2 0 1 2 0
