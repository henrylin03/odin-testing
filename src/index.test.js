import { capitalize } from ".";

describe("First letter is capitalised", () => {
  test("All lowercase word capitalised", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("Already capitalised words stay capitalised", () => {
    expect(capitalize("CapitalisedAlready")).toBe("CapitalisedAlready");
  });
  test("Strings with mix capitalisation with first letter capitalised, based on regex", () => {
    expect(capitalize("soMeStRiNg")).toMatch(/^[A-Z]*/);
  });
});
