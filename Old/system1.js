/* system1.js
   Operation: Doubles the number provided in the input.
*/
function processInput(inputs) {
    const input = inputs[0].trim();
    if (input === "") return "";
    // Validate: the entire input must be a valid number.
    if (!/^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(input)) return "WRONG_ARGUMENT";
    const num = parseFloat(input);
    return String(num * 2);
  }
  
  export default {
    process: processInput,
    generateMission: function() {
      // Generate a random number between 1 and 20 and double it.
      const randomNum = Math.floor(Math.random() * 20) + 1;
      return String(randomNum * 2);
    },
    interface: { requiredIndices: [0] }
  };
  