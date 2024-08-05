import analyzeArray from ".";

describe("Check all properties are returned for a given array", () => {
  test("Average is 4, min is 1, max is 8, length is 6 for input array", () => {
    const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(obj).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("Empty input array returns an average of null, min of null, max of null, and length of zero", () => {
    const obj = analyzeArray([]);
    expect(obj).toEqual({
      average: null,
      min: null,
      max: null,
      length: 0,
    });
  });
  test("Calling analyzeArray without any argument throws an error", () => {
    expect(() => analyzeArray()).toThrow(
      "You have not provided an array of numbers"
    );
  });
});

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
