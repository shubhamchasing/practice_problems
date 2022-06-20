//6. Find the average salary of based on country using only HOF method

const employees = require('./Practise_Problems');

let avgSalaryByCountry = employees.reduce((salaryBycountry,currDetails) =>{
    let salaryInNum = parseFloat(currDetails['salary'].slice(1))

    if(salaryBycountry.hasOwnProperty(currDetails['location'])){
        salaryBycountry[currDetails['location']] = (salaryBycountry[currDetails['location']] + salaryInNum)/2
    }
    else{

        salaryBycountry[currDetails['location']] = salaryInNum
    }
    
    return salaryBycountry
    
},{})

console.log(avgSalaryByCountry)

