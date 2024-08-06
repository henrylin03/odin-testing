const caesarCipher = (str, shift) => {
  let res = "";
  const LETTERS_IN_ALPHABET = 26;

  [...str].forEach((char) => {
    const isLetter = char.toLowerCase() !== char.toUpperCase();
    if (!isLetter) return (res += char);

    const code = char.charCodeAt(0);
    const isUpperCase = char === char.toUpperCase();
    const codeForLetterA = isUpperCase ? 65 : 97;

    const shiftedCode =
      ((code - codeForLetterA + shift) % LETTERS_IN_ALPHABET) + codeForLetterA;

    res += String.fromCharCode(shiftedCode);
  });

  return res;
};

export default caesarCipher;
