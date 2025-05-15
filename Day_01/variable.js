//Variable declaration (Assignment 1.4)
// Declaring different variables of different data types

// Declaring variables with number values
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)

//(assignment 1.6)
//Declare four variables without assigning values 
let address
let country_code
let $number1
let sumOfTwoNumber 
{
    let address = "xyz";
    console.log("Address in inner scope",address);
    console.log(b);
}


//(assignment 1.7)
//Declare four variables with assigned values
let num1=10;
let name="shubham"
let dob= "06-06-1998"
let mobileNo = `9623326963`

//(assignment 1.8)
//Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName = 'Shubham' // first name of a person
let lastName = 'Patil' // last name of a person
let country = 'India' // country
let city = 'KOlhapur' // capital city
let age = 26 // age in years
let isMarried = false
console.log("from Multiline declaration")
console.log("First name:- "+firstName,"Last Name:- "+lastName,"Country:- "+country,"City:- "+city,"Age:- "+ age,"IsMarried:- "+ isMarried)

//(assignment 1.9)
let first_name="shubham" ,last_name="patil",_country="India",$city="Kolhapur",_age=26,is_married=true
console.log("from SingleLine declaration")
console.log("First name:- "+first_name,"Last Name:- "+last_name,"Country:- "+_country,"City:- "+$city,"Age:- "+ _age,"IsMarried:- "+ is_married)


//(assignment 1.10)


let myAge="I am 25 years old."
let yourAge ="You are 30 years old."

console.log(myAge)
console.log(yourAge)