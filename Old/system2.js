/* system2.js
   This system adds three to the number provided in the first (and only) input.
*/
function processInput(inputs) {
    const input = inputs[0].trim();
    if (input === "") return "";
    if (!/^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(input)) {
      return "WRONG_ARGUMENT";
    }
    const num = parseFloat(input);
    return String(num + 3);
  }
  
  export default {
    process: processInput,
    generateMission: function() {
      const randomNum = Math.floor(Math.random() * 20) + 1;
      return String(randomNum + 3);
    },
    interface: {
      requiredIndices: [0]
    }
  };
  