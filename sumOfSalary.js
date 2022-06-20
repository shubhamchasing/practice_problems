//4. Find the sum of all salaries 

const employees = require('./Practise_Problems');

let sum = employees.reduce((sumOfSalary,currDetails) =>{
  
    sumOfSalary += parseFloat(currDetails['salary'].slice(1))

    return sumOfSalary
    
},0)

console.log(sum)
