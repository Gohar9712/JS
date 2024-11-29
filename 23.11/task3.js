//Remove Duplicates
//Given an array [1, 2, 2, 3, 4, 4, 5]:
//Write a program to create a new array where duplicate elements are removed.
//The result should be [1, 2, 3, 4, 5].
const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [];
const obj = {};
for (let i = 0; i<arr.length; i++){
    let item = arr[i];
    if (!obj[item])) {
        unique.push(item);
    }
}
console.log(unique);