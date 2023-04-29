export const solveEquation = (equation: any) => {
    const operators = ['+', '-', '*', '/'];
    let operands = equation.match(/(\d+\.?\d*)/g);
    let operatorsFound = equation.match(/[\+\-\*\/]/g);

    if (!operands || !operatorsFound || operands.length <= 1) {
        return NaN;
    }

    while (operatorsFound.length > 0) {
        let operatorIndex = operators.indexOf(operatorsFound[0]);
        if (operatorIndex === -1) {
            return NaN;
        }

        let operand1 = parseFloat(operands.shift());
        let operand2 = parseFloat(operands.shift());
        let result;

        switch (operatorsFound.shift()) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            default:
                return NaN;
        }

        operands.unshift(result.toString());
    }

    return parseFloat(operands[0]);
}
