import caesarCipher from ".";

describe("Check string has shifted within range of alphabet", () => {
  test("'abc' shifted by 3 places is 'def'", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });
  test("'ABC' shifted by 4 places is 'EFG'", () => {
    expect(caesarCipher("ABC", 4)).toBe("EFG");
  });
});
