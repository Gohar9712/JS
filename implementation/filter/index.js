const arr = [11, 20, 30, 41, 50];

Array.prototype.customFilter = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

let num = arr.customFilter((num) => num % 2 == 0);
console.log(num);
