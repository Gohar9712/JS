const arr = [10, 20, 30, 40];
Array.prototype.customForEach = function (callback) {
   for (let i =  0; i < this.length; i++) {
    callback(this[i], i, this)
   }

}
arr.customForEach((item , index, arr) => {
    console.log(item, index,arr);
});