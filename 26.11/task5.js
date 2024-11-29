//Employee Departments
//You are given an array of employees, where each employee has a name and a department. 
//Your task is to determine how many employees work in each department.

const employees = [
    { name: "Karen", department: "HR" },
    { name: "John", department: "IT" },
    { name: "Margarita", department: "HR" },
    { name: "Aram", department: "Finance" },
    { name: "Nina", department: "IT" }
];

const departmentCount = {};
let dep ;
for (let i = 0; i < employees.length; i++) {
dep = employees[i].department; //department: "HR" },
if (departmentCount[dep]) { // HR
departmentCount[dep] = departmentCount[dep]+ 1;
} else {departmentCount[dep] = 1;}
}
console.log(departmentCount);