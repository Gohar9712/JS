//include implementation
const arr = [NaN, 'JS', 'gh'];
const item = 'JS';
let result;
 for (let i = 0; i < arr.length; i++){
    if (isNaN(arr[i]) && isNaN(item)) {
        result = true; break;
    }
    if (arr[i] == item){
        result=true; break;
    } else {result = false;}
 }
 console.log(result);