function reverseWords(input) {
    return input.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

let input = "This is sunny day";
let output = reverseWords(input);

console.log(output);
