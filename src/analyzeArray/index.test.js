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

describe("Correct minimum number is returned", () => {
  test("The smallest number in the following array is negative", () => {
    const obj = analyzeArray([-5, -3, -2.5, 0, 5]);
    expect(obj.min).toBe(-5);
  });
  test("The smallest number in the following array is zero", () => {
    const obj = analyzeArray([0, 5, 100, 1000]);
    expect(obj.min).toBe(0);
  });
  test("The smallest number in the following array is non-zero", () => {
    const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(obj.min).toBe(1);
  });
});

describe("Correct maximum number is returned", () => {
  test("The largest number in the following array is negative", () => {
    const obj = analyzeArray([-5, -3, -2.5, -1000, -5000]);
    expect(obj.max).toBe(-2.5);
  });
  test("The largest number in the following array is non-zero and positive", () => {
    const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(obj.max).toBe(8);
  });
});

describe("Correct length of array is returned", () => {
  test("Single element array", () => {
    expect(analyzeArray([1]).length).toBe(1);
  });
  test("Multi-element array", () => {
    const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(obj.length).toBe(6);
  });
});
