const caesarCipher = (str, shift) => {
  let res = "";
  [...str].forEach((char) => {
    const code = char.charCodeAt(0);
    res += String.fromCharCode(code + shift);
  });

  return res;
};

export default caesarCipher;
