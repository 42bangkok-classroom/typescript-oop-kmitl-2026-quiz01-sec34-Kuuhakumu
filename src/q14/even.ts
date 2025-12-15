//Write a program that:Accepts one argument from the command line (a number N).
// Validates the input
// - Must be a valid number
// If the input is valid, prints all even numbers from 0 to N (inclusive), each on a new line.
// If the input is invalid or missing, prints nothing.
const input = process.argv[2];
if (!isNaN(Number(input))) {
    const N = Number(input);
    for (let i = 0; i <= N; i += 2) {
        console.log(i);
    }
} else {}
