const analyzeArray = (nums) => {
  const average =
    nums.reduce((accumulator, currentValue) => accumulator + currentValue) /
    nums.length;

  const min = Math.min(...nums);

  return { average, min };
};

export default analyzeArray;
