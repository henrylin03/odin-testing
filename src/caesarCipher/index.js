const caesarCipher = (str, shiftFactor) => {
  let res = "";
  const isLetter = (character) =>
    character.toLowerCase() !== character.toUpperCase();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isLetter(char)) res += char;
  }

  return res;
};

export default caesarCipher;
