const caesarCipher = (str, shiftFactor) => {
  let res = "";
  const LETTERS_IN_ALPHABET = 26;
  const isLetter = (character) =>
    character.toLowerCase() !== character.toUpperCase();

  // helper
  const shiftLetter = (letter) => {
    const code = letter.charCodeAt(0);
    console.log("\nletter:", letter);
    console.log("code:", code);
    const isUpperCase = (letter) => letter === letter.toUpperCase();

    if (isUpperCase) {
      console.log("code - 97 -> CODE", code - 97);
      console.log("add shift factor CODE", code - 97 + shiftFactor);
      console.log("modulo 26 CODE", (code - 97 + shiftFactor) % 26);
      console.log("final code", ((code - 97 + shiftFactor) % 26) + 97);
      return String.fromCharCode(((code - 97 + shiftFactor) % LETTERS_IN_ALPHABET) + 97);
    }
    return String.fromCharCode(((code - 65 + shiftFactor) % LETTERS_IN_ALPHABET) + 65);
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // console.log(char);
    if (isLetter(char)) char = shiftLetter(char);
    console.log(char);
    res += char;
  }

  return res;
};

// export default caesarCipher;

caesarCipher("HENRY", 10);
