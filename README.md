## String Calculator TDD Kata

This is a simple implementation of a String Calculator using Test-Driven Development (TDD) in Node.js with Jest.

## Features

- Supports addition of comma-separated numbers in a string.
- Handles newlines between numbers.
- Supports custom delimiters.
- Throws exceptions for negative numbers.

## Installation

1. Clone the repository:
   git clone https://github.com/denish-dharsandiya/string-calculator-tdd.git
   cd string-calculator-tdd

2. Install dependencies:
   npm install


## Running Tests

npm test


## Example Usage
const stringCalculator = require('./stringCalculator');

const result = stringCalculator.add('1,2,3');
console.log(result);  // Output: 6

// Empty string
console.log(stringCalculator.add(''));  // Output: 0

// Single number
console.log(stringCalculator.add('5'));  // Output: 5

// Custom delimiter
console.log(stringCalculator.add('//;\n1;2;3'));  // Output: 6