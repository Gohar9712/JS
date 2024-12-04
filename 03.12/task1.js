// tpel zangvaci ayn indexy voi arjeqneri gumary havasar e trvac tvin
import { sumnum, arra } from "./constan.js";
function indexOfSum(arr = [],sumNumber) {
let sum = 0;
const result = [];
for (let i = 0; i < arr.length; i++) {

for (let j = i; j < arr.length; j++){
if (arr[j] + arr[i] === sumNumber) {
result.push(i,j); 
}
}
}
return result;
}
console.log(indexOfSum(arra,sumnum));
