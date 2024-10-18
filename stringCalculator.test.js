const stringCalculator = require('./stringCalculator');

describe('StringCalculator.add', () => {
    test('should return 0 for an empty string', () => {
        const result = stringCalculator.add("");
        console.log(`Test Output for empty string: ${result}`);
        expect(result).toBe(0);
    });

    test('should return the number itself when there is one number', () => {
        const result = stringCalculator.add("1");
        console.log(`Test Output for "1": ${result}`);
        expect(result).toBe(1);
    });

    test('should return the sum of two comma-separated numbers', () => {
        const result = stringCalculator.add("1,5");
        console.log(`Test Output for "1,5": ${result}`);
        expect(result).toBe(6);
    });

    test('should return the sum of multiple comma-separated numbers', () => {
        const result = stringCalculator.add("1,2,3");
        console.log(`Test Output for "1,2,3": ${result}`);
        expect(result).toBe(6);
    });

    test('should handle newlines between numbers', () => {
        const result = stringCalculator.add("1\n2,3");
        console.log(`Test Output for "1\\n2,3": ${result}`);
        expect(result).toBe(6);
    });

    test('should support custom delimiters', () => {
        const result = stringCalculator.add("//;\n1;2");
        console.log(`Test Output for "//;\\n1;2": ${result}`);
        expect(result).toBe(3);
    });

    test('should throw an exception for negative numbers', () => {
        expect(() => stringCalculator.add("1,-2,3")).toThrow('negative numbers not allowed: -2');
        expect(() => stringCalculator.add("-1,-2,3")).toThrow('negative numbers not allowed: -1, -2');
    });

    test('should ignore non-numeric inputs and calculate valid numbers', () => {
        expect(stringCalculator.add("1,a,3")).toBe(4);
        expect(stringCalculator.add("2,,5")).toBe(7);
    });
});
