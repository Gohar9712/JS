//Number of Days in a Month
//Write a function that takes the name of a month as an argument and returns the number of days in that month.


function getDaysInMonth(month) {
    const normalizedMonth = month.toLowerCase();
    switch (normalizedMonth) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            return 31;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            return 30;
        case 'february':
            return 28;
        default:
            return "Invalid month";
    }
}

console.log(getDaysInMonth("February")); // Returns 28 or 29, depending on the year
console.log(getDaysInMonth("April"));    // Returns 30
console.log(getDaysInMonth("November")); // Returns 30
console.log(getDaysInMonth("Invalid"));  // Returns "Invalid month"

