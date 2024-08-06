import caesarCipher from ".";

describe("Check string has shifted within range of alphabet", () => {
  test("'abc' shifted by 3 places is 'def'", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });
  test("'ABC' shifted by 4 places is 'EFG'", () => {
    expect(caesarCipher("ABC", 4)).toBe("EFG");
  });
});

describe("Test alphabet wrapping for lowercase letters", () => {
  test("'xyz' shifted by 3 places is 'abc'", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
});

describe("Test alphabet wrapping for uppercase letters", () => {
  test("'XYZ' shifted by 3 places is 'ABC'", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });
});

describe("Test case preservation for mixed case", () => {
  test("'HeLLo' shifted by 3 places is 'KhOOr'", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
});

describe("Punctuations, spaces, and other non-alphabetical characters should remain unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

//todo: shift negative numbers
//todo: handle str not given OR shift not given
