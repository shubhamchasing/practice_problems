//2.Convert all the salary values into proper numbers instead of strings 

const employees = require('./Practise_Problems');

let newEmpDetails = employees.reduce((details,currDetails) =>{
    let newDetails = {...currDetails}
    newDetails['salary'] = parseFloat(newDetails['salary'].slice(1))
    details.push(newDetails)
    return details
    
},[])

console.log(newEmpDetails)
