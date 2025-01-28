const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.customReverse = function (callback){
    for (let i = this.length-1; i>=0; i--){
        callback(this[i],i,this);
    }
}
arr.customReverse((item, index, arr)=>{
    console.log(item);

});