const caesarCipher = (str, shiftFactor) => {
  let res = "";
  const LETTERS_IN_ALPHABET = 26;
  const isLetter = (character) =>
    character.toLowerCase() != character.toUpperCase();

  // helper
  const shiftLetter = (letter) => {
    const code = letter.charCodeAt(0);
    const isUpperCase = (letter) => letter === letter.toUpperCase();

    if (isUpperCase)
      return String.fromCharCode(((code - 97 + shiftFactor) % 26) + 97);
    return String.fromCharCode(((code - 65 + shiftFactor) % 26) + 65);
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (isLetter(char)) char = shiftLetter(char);
    res += char;
  }

  return res;
};

export default caesarCipher;
