import calculator from ".";

describe("Check numbers are correctly added", () => {
  test("Two plus two is four", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  test("Adding decimals", () => {
    expect(calculator.add(0.2, 0.4)).toBeCloseTo(0.6); // avoids rounding error
  });
});
