/* system6.js
   Operation: Converts a valid number input to its binary representation.
*/
function processInput(inputs) {
    const input = inputs[0].trim();
    if (input === "") return "";
    if (!/^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(input)) return "WRONG_ARGUMENT";
    const num = parseFloat(input);
    return num.toString(2);
  }
  
  export default {
    process: processInput,
    generateMission: function() {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      return processInput([String(randomNum)]);
    },
    interface: { requiredIndices: [0] }
  };
  