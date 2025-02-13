/* system10.js
   Operation: For a digit-only input, sums all even digits and all odd digits,
   then returns evenSum * oddSum.
*/
function processInput(inputs) {
    const input = inputs[0].trim();
    if (input === "") return "";
    if (!/^\d+$/.test(input)) return "WRONG_ARGUMENT";
    let evenSum = 0, oddSum = 0;
    for (let ch of input) {
      const digit = parseInt(ch, 10);
      if (digit % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }
    return String(evenSum * oddSum);
  }
  
  export default {
    process: processInput,
    generateMission: function() {
      const randomNum = Math.floor(Math.random() * 900) + 100;
      return processInput([String(randomNum)]);
    },
    interface: { requiredIndices: [0] }
  };
  