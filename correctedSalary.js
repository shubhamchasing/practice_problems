//3. Assume that each salary amount is a factor of 10000 and correct it but add it as a new key (corrected_salary or something)

const employees = require('./Practise_Problems');

let newEmpDetails = employees.reduce((details,currDetails) =>{
    let newDetails = {...currDetails}
    let numOfDigitsAfterDecimal = newDetails['salary'].split('.')[1].length;

    let salaryInNum = parseFloat(newDetails['salary'].slice(1))

    if(!Number.isInteger(salaryInNum)){
        salaryInNum = salaryInNum * 10000 * (10)**numOfDigitsAfterDecimal
    }
    else{
        salaryInNum = salaryInNum * 10000
    }

    newDetails['corrected_salary'] = salaryInNum

    details.push(newDetails)
    return details

},[])

console.log(newEmpDetails)