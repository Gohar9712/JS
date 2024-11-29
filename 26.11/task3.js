//Student Grades:
//You are provided with an array of students, where each student is represented as an object. 
//Each object contains the student’s name and their score. Your task is to determine the grade status of each student
// using a for loop and a switch statement.
//The grade categories are as follows:

//- i >= 90 → “Excellent”
//- i >= 75 → “Good”
//- i >= 50 → “Pass”
//- default → “Fail”

const students = [
  { name: "Anna", grade: 85 }, 
  { name: "Mariam", grade: 92 },
  { name: "Olivia", grade: 76 },
  { name: "Emma", grade: 59 },
];
let obj1 ={};

const output = [];

for (let i = 0; i<students.length; i++) {
obj1 = students[i];
switch (true) {
   case  obj1.grade >= 90 : obj1.grade = 'Excellent'; break;
   case  obj1.grade >= 75 : obj1.grade = 'Good'; break;
   case  obj1.grade >= 50 : obj1.grade = 'Pass'; break;
   default : grade = 'Fail'; obj1.break;
}
output[i] = obj1;
}
console.log(output);