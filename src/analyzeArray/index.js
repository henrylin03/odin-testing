const analyzeArray = (nums) => {
  const average =
    nums.reduce((accumulator, currentValue) => accumulator + currentValue) /
    nums.length;

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return { average, min, max };
};

export default analyzeArray;
