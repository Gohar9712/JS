const arr = [10, 11, 12, 13, 14, 15, 16, 17];
Array.prototype.customIndexOf = function (searchElement) {
    for (let i = 0; i<this.length; i++ ){
        if (searchElement == this[i]){
            return i;
        }
    }
    return -1;
}

const indexNumber = arr.customIndexOf(16);
console.log(indexNumber);