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

//Pratice Qs
console.log("Traffic Light")
let light = "green";
if (light == "red") {
    console.log("STOP! ")
}

if (light == "yellow") {
    console.log("SLOW DOWN")
}

if (light == "green") {
    console.log("GO")
}

//else-if statement
let year = 14;
if (year >= 18) {
    console.log("you can vote")
} else if (year <= 18) {
    console.log ("you cannot vote")
} else if (year < 18) {
    console.log ("you cannot vote")
}

let marks = 20;
if(marks >= 80) {
    console.log("A+");
} else if(marks >= 60) {
    console.log("A")
} else if (marks >= 33) {
    console.log("B")
} else if (marks < 33) {
    console.log("F");
}


//else statement
if (age >= 18) {
    console.log("you can vote")
} else {
    console.log("toy can't vote")
}

//pratice Qs
let size = "L";
if (size === "XL") {
    console.log("if size is 'XL', price is Rs. 250")
}
else if (size === "L") {
    console.log("if size is 'L', price is Rs. 200")
}
else if (size === "M") {
    console.log("if size is 'M', price is Rs. 100")
}
else {
    console.log("if size is 'S', price is Rs. 50")
}

//nested if-else  

let mark= 88;

if (mark >= 33) {
    console.group("Pass");
    if (marks >= 80) {
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
} else {
    console.log("Better luck next time!");
}
