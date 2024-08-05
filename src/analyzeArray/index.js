const analyzeArray = (nums) => {
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
