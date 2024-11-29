//Car Speeds
//You are given an array of cars, where each car has a model and speed (in km/h). 
//Your task is to identify which cars are exceeding 120 km/h and which are safe (≤120 km/h). 
//Store the safe cars and speeding cars in separate arrays. Use a for loop and a if else statement.

const cars = [
    { model: "Toyota", speed: 100 },
    { model: "BMW", speed: 150 },
    { model: "Lada", speed: 80 },
    { model: "Audi", speed: 130 },
    { model: "Mercedes-Benz", speed: 260 }
];
const safeCars = [];
const speedingCars = [];
let obj = {};

for (let i = 0; i< cars.length; i++) {
obj = cars[i];
if (obj.speed > 120) {
    speedingCars.push(obj);
}
if (obj.speed <= 120) {
    safeCars.push(obj);
}
}
console.log('Safe cars', safeCars);
console.log('Speeding cars', speedingCars);
