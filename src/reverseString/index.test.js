import reverseString from ".";

describe("Check string has reversed", () => {
  test("String has reversed", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  test("Palindrome stays the same", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });
  test("Case is unaffected", () => {
    expect(reverseString("xYzAbC")).toBe("CbAzYx");
  });
});
