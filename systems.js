// systems.js
export const systems = {
    system1: {
      // Doubles the number.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^[+-]?\d+$/.test(input)) return "WRONG_ARGUMENT";
        const num = parseInt(input, 10);
        return String(num * 2);
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        return this.process([String(randomNum)]);
      }
    },
    system2: {
      // Adds three to the number.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^[+-]?\d+$/.test(input)) return "WRONG_ARGUMENT";
        const num = parseInt(input, 10);
        return String(num + 3);
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        return this.process([String(randomNum)]);
      }
    },
    system3: {
      // Counts characters: each digit = 1, each vowel = 2, each consonant = 3.
      process: function(inputs) {
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
      },
      generateMission: function() {
        const randomCount = Math.floor(Math.random() * 46) + 5;
        return String(randomCount);
      }
    },
    system4: {
      // Divides the number by 7, rounds down, then multiplies the quotient by the remainder.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^[+-]?\d+$/.test(input)) return "WRONG_ARGUMENT";
        const n = parseInt(input, 10);
        const q = Math.floor(n / 7);
        const r = n % 7;
        return String(q * r);
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 50) + 1;
        return this.process([String(randomNum)]);
      }
    },
    system5: {
      // Sums the positions of unique letters (a=1, b=2, …, z=26).
      process: function(inputs) {
        const text = inputs[0].toLowerCase();
        if (text.trim() === "") return "";
        const uniqueLetters = new Set();
        for (let char of text) {
          if (/[a-z]/.test(char)) {
            uniqueLetters.add(char);
          }
        }
        let sum = 0;
        for (let char of uniqueLetters) {
          sum += char.charCodeAt(0) - 96;
        }
        return String(sum);
      },
      generateMission: function() {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        const count = Math.floor(Math.random() * 4) + 2;
        let unique = new Set();
        while (unique.size < count) {
          unique.add(letters.charAt(Math.floor(Math.random() * letters.length)));
        }
        let sum = 0;
        for (let char of unique) {
          sum += char.charCodeAt(0) - 96;
        }
        return String(sum);
      }
    },
    system6: {
      // Converts the number to binary.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^[+-]?\d+$/.test(input)) return "WRONG_ARGUMENT";
        const num = parseInt(input, 10);
        return num.toString(2);
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        return this.process([String(randomNum)]);
      }
    },
    system7: {
      // Converts the number to base 4.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^[+-]?\d+$/.test(input)) return "WRONG_ARGUMENT";
        const num = parseInt(input, 10);
        return num.toString(4);
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        return this.process([String(randomNum)]);
      }
    },
    system8: {
      // Maps a digit-only input to letters: 0→a, 1→b, …, 9→j.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^\d+$/.test(input)) return "WRONG_ARGUMENT";
        const mapping = {
          "0": "a", "1": "b", "2": "c", "3": "d", "4": "e",
          "5": "f", "6": "g", "7": "h", "8": "i", "9": "j"
        };
        let result = "";
        for (let digit of input) {
          result += mapping[digit];
        }
        return result;
      },
      generateMission: function() {
        const wordList = ["ace", "bad", "cab", "dab", "ebb", "fad", "gab", "had", "ice", "jab"];
        const randomIndex = Math.floor(Math.random() * wordList.length);
        return wordList[randomIndex];
      }
    },
    system9: {
      // Sums even digits and odd digits separately, then returns (evenSum - oddSum).
      process: function(inputs) {
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
        return String(evenSum - oddSum);
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 900) + 100;
        let str = String(randomNum);
        let evenSum = 0, oddSum = 0;
        for (let ch of str) {
          const digit = parseInt(ch, 10);
          if (digit % 2 === 0) {
            evenSum += digit;
          } else {
            oddSum += digit;
          }
        }
        return String(evenSum - oddSum);
      }
    },
    system10: {
      // Sums even digits and odd digits and returns (evenSum * oddSum).
      process: function(inputs) {
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
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 900) + 100;
        let str = String(randomNum);
        let evenSum = 0, oddSum = 0;
        for (let ch of str) {
          const digit = parseInt(ch, 10);
          if (digit % 2 === 0) evenSum += digit;
          else oddSum += digit;
        }
        return String(evenSum * oddSum);
      }
    },
    // ---------------- New Systems ----------------
    system11: {
      // Like system8, but with a randomly generated mapping (each digit is mapped to a random letter from a-z).
      mapping: (function() {
        const mapping = {};
        const letters = "abcdefghijklmnopqrstuvwxyz";
        const used = new Set();
        for (let i = 0; i < 10; i++) {
          let letter;
          do {
            letter = letters.charAt(Math.floor(Math.random() * letters.length));
          } while (used.has(letter));
          used.add(letter);
          mapping[String(i)] = letter;
        }
        return mapping;
      })(),
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^\d+$/.test(input)) return "WRONG_ARGUMENT";
        let result = "";
        for (let digit of input) {
          result += this.mapping[digit];
        }
        return result;
      },
      generateMission: function() {
        const len = Math.floor(Math.random() * 4) + 3; // Length between 3 and 6
        let input = "";
        for (let i = 0; i < len; i++) {
          input += Math.floor(Math.random() * 10);
        }
        return this.process([input]);
      }
    },
    system12: {
      // Returns 2x + 6.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^[+-]?\d+$/.test(input)) return "WRONG_ARGUMENT";
        const num = parseInt(input, 10);
        return String(2 * num + 6);
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 200) + 1;
        return this.process([String(randomNum)]);
      }
    },
    system13: {
      // Returns x^2.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^[+-]?\d+$/.test(input)) return "WRONG_ARGUMENT";
        const num = parseInt(input, 10);
        return String(num * num);
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 200) + 1;
        return this.process([String(randomNum)]);
      }
    },
    system14: {
      // Returns x^3.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^[+-]?\d+$/.test(input)) return "WRONG_ARGUMENT";
        const num = parseInt(input, 10);
        return String(num * num * num);
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        return this.process([String(randomNum)]);
      }
    },
    system15: {
      // Returns cos(x) (rounded to two decimals).
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^[+-]?\d+$/.test(input)) return "WRONG_ARGUMENT";
        const num = parseInt(input, 10);
        return Number(Math.cos(num)).toFixed(2);
      },
      generateMission: function() {
        const randomNum = Math.floor(Math.random() * 200) + 1;
        return this.process([String(randomNum)]);
      }
    },
    system16: {
      // Multiplies all digits at even positions (2nd, 4th, …) and divides by the product of digits at odd positions.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^\d+$/.test(input)) return "WRONG_ARGUMENT";
        let productEven = 1, productOdd = 1;
        for (let i = 0; i < input.length; i++) {
          const digit = parseInt(input.charAt(i), 10);
          if ((i + 1) % 2 === 0) {
            productEven *= digit;
          } else {
            productOdd *= digit;
          }
        }
        if (productOdd === 0) return "0";
        return (productEven / productOdd).toFixed(2);
      },
      generateMission: function() {
        const len = Math.floor(Math.random() * 4) + 4; // Length between 4 and 7 digits.
        let input = "";
        for (let i = 0; i < len; i++) {
          input += Math.floor(Math.random() * 10);
        }
        return this.process([input]);
      }
    },
    system17: {
      // Sums the left half of the number (including the center digit if odd-length) and subtracts the sum of the right half.
      process: function(inputs) {
        const input = inputs[0].trim();
        if (input === "") return "";
        if (!/^\d+$/.test(input)) return "WRONG_ARGUMENT";
        const n = input.length;
        const mid = Math.floor(n / 2) + (n % 2); // left part includes center if odd
        const leftPart = input.slice(0, mid);
        const rightPart = input.slice(mid);
        const sumDigits = (str) => {
          let sum = 0;
          for (let char of str) {
            sum += parseInt(char, 10);
          }
          return sum;
        };
        return String(sumDigits(leftPart) - sumDigits(rightPart));
      },
      generateMission: function() {
        const len = Math.floor(Math.random() * 4) + 4; // Length between 4 and 7 digits.
        let input = "";
        for (let i = 0; i < len; i++) {
          input += Math.floor(Math.random() * 10);
        }
        return this.process([input]);
      }
    }
  };
  