const createCalculator = () => {
  const add = (num1, num2) => num1 + num2;
  const subtract = (num1, num2) => num1 - num2;
  const divide = (num1, num2) => num1 / num2;
  const multiply = (num1, num2) => num1 * num2;

  return { add, subtract, divide, multiply };
};

const calculator = createCalculator();

export default calculator;
