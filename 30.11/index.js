//Problem 1:  Find Common Characters Between Two Strings
//Description: Write a program that checks how many characters are common between two strings, 
//without using new Set, and  function.
import { str1,str2} from "./constant.js";
let commonCount = 0; 
let checkedChars;
for (let i = 0; i < str1.length; i++) {
checkedChars = str1[i]; 
if (str2.includes(checkedChars)) {
commonCount=commonCount+1;
} 
}
console.log(commonCount);
