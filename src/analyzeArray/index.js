const analyzeArray = (nums) => {
  const average =
    nums.reduce((accumulator, currentValue) => accumulator + currentValue) /
    nums.length;

  return { average };
};

export default analyzeArray;
