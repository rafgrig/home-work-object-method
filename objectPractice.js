const payments = [
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    
    year: 2020
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023
    }
    ];

function getHigestPayment(arr=[]){
    let higestPaymentObj = arr.reduce((acc, item)=>{
        if(item.payedAmount > acc.payedAmount){
            return item
        }else{
            return acc
        }
    }, arr[0])
    return higestPaymentObj.payedAmount
}

console.log("higest payment:",getHigestPayment(payments))

function getSumOfPayments(arr=[]){
    let sumOfPayments = arr.reduce((acc, item)=>{
        acc += item.payedAmount
        return acc
    }, 0)
    return sumOfPayments
}

console.log("sum of payments: ", getSumOfPayments(payments))

function getGoodEarn(arr=[]){
    let goodEarn = arr.reduce((acc, item)=>{
        if(item.payedAmount>1500)acc+=1
        return acc
    }, 0)
    return goodEarn
}

console.log("count of all payments that are more than 1500:",getGoodEarn(payments) )

function getAveregeOfPayments(arr=[]){
    let averegeOfPayments = arr.reduce((acc, item)=>{
        acc = Math.floor((acc + item.payedAmount)/arr.length)
        return acc
    }, 0)
    return averegeOfPayments
}

console.log("averege of all payments:", getAveregeOfPayments(payments))

let uniqueStudents = {};
payments.forEach(item => {
  if (!uniqueStudents[item.studentId]) {
    uniqueStudents[item.studentId] = true;
  }
});
const studentCount = Object.keys(uniqueStudents).length;

function getTotalSum(arr=[]){
    let totalSum = arr.reduce((acc, item)=>{
        acc[item.studentName] = (acc[item.studentName] ?? item.payedAmount) + item.payedAmount
        return acc
    }, {})

    let unSortedArr = arr.map((item)=>{
        return[item.studentId, item.studentName, totalSum[item.studentName]]
    })

    let sortedArr = [unSortedArr[0],unSortedArr.at(-1)]

    return sortedArr
}

console.log(getTotalSum(payments))