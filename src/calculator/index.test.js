import calculator from ".";

describe("Check numbers are correctly added", () => {
  test("Two plus two is four", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  test("Adding decimals", () => {
    expect(calculator.add(0.2, 0.4)).toBeCloseTo(0.6); // avoids rounding error
  });
});

describe("Check numbers are correctly subtracted", () => {
  test("Three minus one is two", () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });
  test("Minusing decimals", () => {
    expect(calculator.subtract(0.9, 0.8)).toBeCloseTo(0.1); // avoids rounding error
  });
});

describe("Check numbers are correctly divided", () => {
  test("Forty divided by two is twenty", () => {
    expect(calculator.divide(40, 2)).toBe(20);
  });
  test("One divided by two is half", () => {
    expect(calculator.divide(1, 2)).toBeCloseTo(0.5); // avoids rounding error
  });
});
