//5. Find the sum of all salaries based on country using only HOF method

const employees = require('./Practise_Problems');

let sumBycountry = employees.reduce((salaryBycountry,currDetails) =>{
    let salaryInNum = parseFloat(currDetails['salary'].slice(1))

    if(salaryBycountry.hasOwnProperty(currDetails['location'])){
        salaryBycountry[currDetails['location']] += salaryInNum
    }
    else{

        salaryBycountry[currDetails['location']] = salaryInNum
    }
    
    return salaryBycountry
    
},{})

console.log(sumBycountry)

module.exports = sumBycountry;
