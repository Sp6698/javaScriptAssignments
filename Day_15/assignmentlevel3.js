//1. Let's try to develop a program which calculate measure of central tendency of a 3
// sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
//  In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
// You can create a class called Statistics and create all the functions which do statistical calculations 
// as method for the Statistics class. Check the output below.


let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(array) {
        this.array = array
    }

     count() { return this.array.length }
     sum() { return this.array.reduce((acc, cur) => { return acc + cur }, 0) }
     min() {
        return this.array.reduce((acc, cur) => {
            if (acc < cur) {
                return acc
            }
            return cur
        })
    }
     max() {
        return this.array.reduce((acc, cur) => {
            if (acc > cur) {
                return acc
            }
            return cur
        })
    }
     range() {
        return this.max() - this.min()
    }
     mean() {
        return Math.round(this.sum() / this.count())
    }
     median() {
        const mid = Math.floor(this.count() / 2),
            nums = [...this.array].sort((a, b) => a - b);
        return this.count() % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    }
     mode() {
        let obj = {}
        let modeAge, modeCount = 0
        this.array.forEach((age) => {
            if (obj[age]) {
                obj[age]++
            } else {
                obj[age] = 1
            }
        })
        for (const key in obj) {
            if (obj[key] >= modeCount) {
                modeAge = key
                modeCount = obj[key]
            }
        }
        obj = { 'mode': modeAge, 'count': modeCount }
        return obj
    }
     var() {
        let calculateMean = (values) => {
            let mean = (values.reduce((sum, current) => sum + current)) / values.length;
            return mean;
        }

        let average = calculateMean(this.array);
        let squareDiffs = this.array.map((value) => {
            let diff = value - average;
            return diff * diff;
        });
        let variance = calculateMean(squareDiffs);
        return variance;
    }
    freqDist() {
        let obj = {}, freqDistArray = []
        // let ages, count, modeAge, modeCount = 0
        this.array.forEach((age) => {
            if (obj[age]) {
                obj[age]++
            } else {
                obj[age] = 1
            }
        })
        // console.log(obj)
        for (const key in obj) {
            let freq = (obj[key] / this.count()) * 100
            freqDistArray.push({ 'freq': freq, 'age': key })
        }
        return freqDistArray.sort((a, b) => {
            if (a['freq'] > b['freq']) return -1
            if (a['freq'] < b['freq']) return 1
            return 0
        })
    }
    std () {
        const n = this.array.length
        const mean = this.array.reduce((a, b) => a + b) / n
        return Math.sqrt(this.array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
      }
}


// let statistics = new Statistics(ages)
// // const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() )// 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) 
// console.log('Standard Deviation: ', statistics.std()) // 4.2

//2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and 
//it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount{

    constructor(firstname, lastname, incomes, expenses){
        this.firstname=firstname
        this.lastname=lastname
        this.incomes=incomes
        this.expenses=expenses
    }

    totalIncome(){
        return (this.incomes*12)
    } 
    totalExpense(){
        return (this.expenses*12)
    } 
    accountBalance(){
        let balance =this.incomes-this.expenses
        return balance
    }
    accountInfo(){
        let info=` Account Holder Name ${this.firstname} ${this.lastname} Total Income is ${this.totalIncome()}
         and total Expense is ${this.totalExpense()} and account balance is ${this.accountBalance()}`
        return info
    }
    addIncome(income){
        this.incomes+=income
    } 
    addExpense(expense){
        this.expenses+=expense
    } 

}

let person=new PersonAccount('Shubham','Patil',15000,10000)

console.log(person.accountInfo())

