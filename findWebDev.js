// 1. Find all Web Developers

const employees = require("./Practise_Problems");
//console.log(employees)
let filterEmployees = employees.reduce((details,currDetails) =>{
    let job = currDetails['job']
    let val = /Web Developer/
     if(val.test(job)){
        details.push(currDetails)
     }
     return details
},[])

console.log(filterEmployees)