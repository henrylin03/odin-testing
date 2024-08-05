const analyzeArray = (nums) => {
  if (nums === undefined)
    throw new Error("You have not provided an array of numbers");

  const isEmptyArray = !nums?.length;

  const average = isEmptyArray
    ? null
    : nums.reduce((accumulator, currentValue) => accumulator + currentValue) /
      nums.length;

  const min = isEmptyArray ? null : Math.min(...nums);
  const max = isEmptyArray ? null : Math.max(...nums);
  const length = nums.length;

  return { average, min, max, length };
};

export default analyzeArray;
