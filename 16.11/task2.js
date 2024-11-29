//Write a for loop to replace all spaces in a string with hyphens (-).
//Example Input:
//let sentence = "I am learning JavaScript";
//Expected Output: “I-am-learning-JavaScript”

const input = "I am learning JavaScript";
let output = ""; 
for (let i = 0; i < input.length; i++) {
    if (input[i] == ' ') { 
        output += '-'; 
    } else {
        output += input[i]; 
    }
}
console.log(output);