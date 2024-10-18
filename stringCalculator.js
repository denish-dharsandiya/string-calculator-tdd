class StringCalculator {
    add(numbers) {
        if (!numbers) {
	    console.log(`Input: "${numbers}", Result: 0`);
            return 0;
        }

        // Support for custom delimiters
        let delimiter = /,|\n/;
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n');
            delimiter = new RegExp(parts[0].slice(2));  // Extract custom delimiter
            numbers = parts[1];
        }

        const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

        const negatives = numArray.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
        }

	const result = numArray.reduce((acc, num) => acc + (isNaN(num) ? 0 : num), 0);
        console.log(`Input: "${numbers}", Result: ${result}`);
        return result;
    }
}

module.exports = new StringCalculator();
