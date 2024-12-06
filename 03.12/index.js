const employees = [
    { firstName: 'Karen', lastName: 'Sargsyan', department: 'HR' },
    { firstName: 'John', lastName: 'Gasparyan', department: 'IT' },
    { firstName: 'Margarita', lastName: 'Hovsepyan', department: 'HR' },
    { firstName: "Aram", lastName: 'Manukyan', department: 'Finance' },
    { firstName: "Nina", lastName: 'Grigoryan',  department: 'IT' }
];
function transforUserData (data = []) {
    // if (data===undefined) {
    //     data = [];
    // }
const result = [];
for (let i = 0; i < data.length; i++){
    let item = data[i];
    result.push({
        fullName: `${item.firstName} ${item.lastName}`
});


}
return result;
}
console.log(transforUserData(employees));