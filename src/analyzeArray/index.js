const analyzeArray = (nums) => {
  const average =
    nums.reduce((accumulator, currentValue) => accumulator + currentValue) /
    nums.length;

  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const length = nums.length;

  return { average, min, max, length };
};

export default analyzeArray;
