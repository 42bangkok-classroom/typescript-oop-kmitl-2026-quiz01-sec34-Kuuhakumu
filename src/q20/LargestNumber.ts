//**1. Accepts multiple arguments from the command line (numbers).
//2. Finds the largest number among all the inputs.
//3. Prints the largest number.
//
// ts-node LargestNumber.ts 5 8 -3 99 0 20
//99 */
const input = process.argv.slice(2);