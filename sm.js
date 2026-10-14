
var a=1
a=2
var a=3
console.log(a)

let b="marvel"
b="dc"
console.log(b)

const c='m'
console.log(c)

let name="vishnupriyan"
let age=23
console.log(typeof(name))
console.log(typeof(age))

let fruits=["apple","mango","orange","grapes"]
console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])

let dc={
    name1:"vishnupriyan",
    age1:23,
    cgpa:7.5

}
console.log(dc.name1)
console.log(dc.age1)
console.log(dc.cgpa)

prompt(name)
prompt(age)
alert(name)
console.log(age)

let d=4
let d2=5
console.log(d+d2)
console.log(d-d2)
console.log(d*d2)
console.log(d/d2)
console.log(d%d2)

let e=5
console.log(e++)
console.log(e)
console.log(++e)

let g1=10
let g2=g1--
let g3=--g1
console.log(g1)
console.log(g2)
console.log(g3)

let h1=10
let h2=20
console.log(h1+=h2)
console.log(h1-=h2)
console.log(h1*=h2)
console.log(h1/=h2)
console.log(h1%=h2)

console.log(5=="5")
console.log(5==="5")
console.log(10!="10")
console.log(10!=="10")

let h3=51
let h4=52
let h5=53
let h6=54
console.log(h3<h4&&h6>h5)
console.log(h3<h4||h6<h5)
console.log(h3!=h4)

let age2=18
console.log((age2>=18)?"eligible":"not eligible")

console.log(typeof("marvel"+10))
console.log(typeof(10+true))
console.log(typeof(10+null))
console.log(typeof("marvel"+undefined))

var num=Number(prompt("10"))
var res=num+10
console.log(res)

console.log(Boolean(" "))
console.log(Boolean("true"))
console.log(Boolean(0))
console.log(Boolean(true))

let a5=5
if(a5>0){
    console.log("positive")
}
else{
     console.log("negative")
}

let time=Number(prompt("enter the time:"))
if(time>=4&&time<6){
    console.log("early morning")
}
else if(time>=6&&time<12){
     console.log(" morning")
}
else if(time>=12&&time<16){
     console.log(" afternoon")
}
else if(time>=16&&time<19){
     console.log(" afternoon")
}
else if(time>=19&&time<=23||(time>=0&&time<4)){
     console.log(" night")
}
else{
    console.log("good night")
}



let age4=Number(prompt("enter the age:"))
let height=Number(prompt("enter the heigth:"))
let weigth=Number(prompt("enter the weigth:"))
if(age4>=18){
if(height>=155){
if(weigth>=60){
     console.log(" eligible")
}
else
 console.log("weigth not eligible")
}
else{
     console.log("height not eligible")
}


}
else{
    console.log("not eligible")
}

let signal=String(prompt("enter signal"))
switch(signal){
    case "red":
       console.log(" stop") 
       case "yellow":
         console.log(" start") 
         case "green":
             console.log(" go")   

}

for(let a=1;a<=10;a++){
    console.log(a)
}

for(let i=2;i<=20;i++){
    if(i%2==0){
       console.log(i) 
    }
}

let b10=10
while(b10>=1){
    b10--
    console.log(b10)
}

// 24. Print each character using for-of

let text = "JavaScript";

for (let char of text) {
    console.log(char);
}


// 25. Print 5 student names using for-of

let students = ["Priya", "Ravi", "Kumar", "Divya", "Arun"];

for (let student of students) {
    console.log(student);
}


// 26. Print object keys and values using for-in

let student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}


// 27. Take two numbers and perform arithmetic operations

let a = Number(prompt("Enter first number:"));
let b2 = Number(prompt("Enter second number:"));

console.log("Sum:", a + b2);
console.log("Difference:", a - b2);
console.log("Product:", a * b2);
console.log("Remainder:", a % b2);


// 28. Print numbers greater than 10

let numbers = [5, 12, 8, 20, 15];

for (let num of numbers) {
    if (num > 10) {
        console.log(num);
    }
}


// 29. Check age eligibility using alert

let age5 = Number(prompt("Enter your age:"));

if (age5 >= 18) {
    alert("You are eligible");
} else {
    alert("You are not eligible");
}


// 30. Simple calculator using switch

let operation = prompt(
    "Enter operation: addition, subtraction, multiplication, division"
).toLowerCase();

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

switch (operation) {
    case "addition":
        alert(num1 + num2);
        break;

    case "subtraction":
        alert(num1 - num2);
        break;

    case "multiplication":
        alert(num1 * num2);
        break;

    case "division":
        if (num2 !== 0) {
            alert(num1 / num2);
        } else {
            alert("Cannot divide by zero");
        }
        break;

    default:
        alert("Invalid operation");
}

