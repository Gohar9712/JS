//Longest Text Given an array of strings ["React", "JavaScript", "Redux", "PHP", "C#"]: 
//Write a program to find the longest word in the array. 
//Solution in JavaScript using only for loop and arrays:
const words = ["React", "JavaScript", "Redux", "PHP", "C#"];
let longestWord = words[0];
for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}
console.log(longestWord);