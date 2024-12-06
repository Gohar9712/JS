 import { arra, sumnum } from "./constan.js";
 function indexOfSum (arr = [], sumNumber) {
     const result = [];
     const middleArray = [];
      for (let i = 0; i < arr.length; i++) {
        const middleSum = sumNumber - arr[i];  
         if (arr.includes(middleSum)) {
            result.push(i,arr.indexOf(middleSum));
         }
         return(result);
    }

 }
 console.log(indexOfSum([1,2,3,4,5],5));