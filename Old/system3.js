/* system3.js
   This system counts characters from the input.
   Each digit counts as 1, each vowel counts as 2, and each consonant counts as 3.
*/
function processInput(inputs) {
    const text = inputs[0];
    if (text.trim() === "") return "";
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of text) {
      if (/[0-9]/.test(char)) {
        count += 1;
      } else if (/[a-zA-Z]/.test(char)) {
        count += vowels.includes(char) ? 2 : 3;
      }
    }
    return String(count);
  }
  
  // Helper: generate a random string of letters with length between 3 and 6.
  function randomString(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  
  export default {
    process: processInput,
    generateMission: function() {
      const len = Math.floor(Math.random() * 4) + 3; // length between 3 and 6
      const randStr = randomString(len);
      return processInput([randStr]);
    },
    interface: {
      requiredIndices: [0]
    }
  };
  