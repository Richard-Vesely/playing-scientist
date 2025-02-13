/* system4.js
   This system multiplies two numbers provided as a single input,
   separated by a comma or space.
*/
function processInput(inputs) {
    const input = inputs[0].trim();
    if (input === "") return "";
    const parts = input.split(/[\s,]+/);
    if (parts.length < 2) return "WRONG_ARGUMENT";
    if (
      !/^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(parts[0]) ||
      !/^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(parts[1])
    ) {
      return "WRONG_ARGUMENT";
    }
    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[1]);
    return String(num1 * num2);
  }
  
  export default {
    process: processInput,
    generateMission: function() {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      return String(num1 * num2);
    },
    interface: {
      requiredIndices: [0]
    }
  };
  