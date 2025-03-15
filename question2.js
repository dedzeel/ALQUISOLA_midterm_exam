// Function to sum an array of numbers using reduce
function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Example usage
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
