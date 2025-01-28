const arr = [1,2,3,4,5,6,7];
Array.prototype.customIncludes = function(searchValue){
    for(let i = 0; this.length; i++){
        if(searchValue == this[i]){
            return true;
        }
    }
    return false;
}
const value = arr.customIncludes(5);
console.log(value);