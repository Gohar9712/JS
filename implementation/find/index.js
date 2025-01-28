const arr = [10, 20, 30, 55, 61, 72];
Array.prototype.customFind = function (callback) {
    for (let i=0; i<this.length; i++){
        if(callback(this[i], i, this)){
            return this[i]; 
        }
    }
    return undefined;
}

let findNumber = arr.customFind((num) => num > 80);
console.log(findNumber);