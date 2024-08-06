const caesarCipher = (str, shift) => {
  let res = "";
  [...str].forEach((char) => {
    const isLetter = char.toLowerCase() !== char.toUpperCase();
    if (!isLetter) return (res += char);

    const code = char.charCodeAt(0);
    const isUpperCase = char === char.toUpperCase();
    const codeForLetterA = isUpperCase ? 65 : 97;

    const shiftedCode = ((code - codeForLetterA + shift) % 26) + codeForLetterA;

    res += String.fromCharCode(shiftedCode);
  });

  return res;
};

export default caesarCipher;
