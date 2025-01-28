const arr = [10, 20, 30, 40, 50];
Array.prototype.customMap = function (callback) {
    const newArray = [];
   for (let i =  0; i < this.length; i++) {
    let value = callback(this[i], i, this)
    newArray.push(value);
   }
   return newArray;
}
arr.customMap((item , index, arr) => {
    console.log(item *2);
});