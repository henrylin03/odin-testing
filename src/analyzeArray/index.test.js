import analyzeArray from ".";

describe("Check correct average", () => {
  test("Average of two and four is three", () => {
    const obj = analyzeArray([2, 4]);
    expect(obj.average).toBe(3);
  });
  test("Average of a single number is itself", () => {
    const obj = analyzeArray([3]);
    expect(obj.average).toBe(3);
  });
  test("The average of [1, 8, 3, 4, 2, 6] is 4", () => {
    const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(obj.average).toBe(4);
  });
});
