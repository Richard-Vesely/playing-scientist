/* system8.js
   Operation: Converts a digit-only input to a word by mapping each digit:
   0→a, 1→b, 2→c, 3→d, 4→e, 5→f, 6→g, 7→h, 8→i, 9→j.
   If any non-digit is present, returns "WRONG_ARGUMENT".
*/
const allowedMapping = {
    "0": "a", "1": "b", "2": "c", "3": "d", "4": "e",
    "5": "f", "6": "g", "7": "h", "8": "i", "9": "j"
  };
  
  // List of 100 words made solely from letters a–j.
  const wordList = [
    "ace", "bad", "bag", "bed", "beg", "cab", "cad", "dab", "dad", "ebb",
    "fab", "fad", "gab", "gad", "had", "ice", "jab", "bid", "deaf", "fade",
    "bead", "dice", "chef", "hide", "jade", "jibe", "abed", "acid", "cafe", "face",
    "faced", "badge", "beach", "cabbage", "facade", "deface", "feed", "heed", "chief", "fief",
    "cabbie", "abide", "babe", "beef", "deed", "dead", "fadge", "edge", "ghee", "jig",
    "dig", "fig", "big", "cabbed", "dabbed", "faded", "jaded", "baggage", "defaced", "fife",
    "gibbed", "hedge", "heeded", "chaff", "chafe", "fed", "gag", "chide", "deice", "abaci",
    "bedded", "decaf", "decade", "iced", "ached", "fiche", "beface", "chic", "acidic", "bib",
    "efface", "defied", "decide", "behead", "head", "gif", "fib", "bide", "chided", "cabbied",
    "begged", "edged", "bagged", "jibbed", "fifed", "biff", "faff", "jiff"
  ];
  
  function processInput(inputs) {
    const input = inputs[0].trim();
    if (input === "") return "";
    if (!/^\d+$/.test(input)) return "WRONG_ARGUMENT";
    let result = "";
    for (let digit of input) {
      result += allowedMapping[digit];
    }
    return result;
  }
  
  export default {
    process: processInput,
    generateMission: function() {
      // Randomly choose a word from the wordList as the mission target.
      const randomIndex = Math.floor(Math.random() * wordList.length);
      return wordList[randomIndex];
    },
    interface: { requiredIndices: [0] }
  };
  