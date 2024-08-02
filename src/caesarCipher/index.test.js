import caesarCipher from ".";

describe("Shift string using Ceasar cipher", () => {
  test("'henry' shifted by 10 should be 'roxbi'", () => {
    expect(caesarCipher("henry", 10)).toBe("roxbi");
  });
  test("Text wrapping when input letters go out of bounds", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("Upper/lower case be preserved", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("Punctuation, spaces and other non-alphabetical characters remain unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
