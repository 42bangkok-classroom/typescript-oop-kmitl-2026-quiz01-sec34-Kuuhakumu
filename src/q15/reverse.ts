const input = process.argv[2];
let result = '';
for (let i = input.length - 1; i >= 0; i--) {
    result += input[i];
}
console.log(result);