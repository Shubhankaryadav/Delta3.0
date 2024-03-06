console.log("Hello World!")
console.log("Welcome to Javascript")
let p = 10;
let q = 20;
console.log("sum is :", p + q);
//this is a comment

let pencilPrice = 10;
let erasorPrice = 5;
// let output = "The total price is :" (pencilPrice + erasorPrice) + " Rupees. ";
let output = `The total price is : ${pencilPrice + erasorPrice} Rupees.`; //back ticks
console.log(output);

//Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Unary
console.log(a++); //10
console.log(++a); //12

//Operators
let w = 10;
let e = 5;
e = w;
console.log(e); //10

//comparsion
let age = 16;
console.log(age < 18); //false

//for non-number (Uni code)
'a' > 'A'
//true
'a' > 'b'
//false

//conditional statements

//if statement
console.log("before my if statement");
let years = 21;
if (years >= 18) {
    console.log("you can vote")
    console.log("you can drive")
    let a = 5;
    console.log(5 * a);
}
if(age < 18) {
    console.log("you are in your 20s")
    console.log("You cannot vote!")
}
console.log("after my if statement")

let firstname = "shubhankar";
if(firstname == "shubhankar") {
    console.log(`Welcome ${firstname}`)
}
