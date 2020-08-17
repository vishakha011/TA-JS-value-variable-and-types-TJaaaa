// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = prompt("Enter a number");
if(Number(number) % 2 === 0) {
  alert("Entered number is Even");
}else {
  alert("Entered number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
if(Number(num1) > Number(num2)) {
  alert("The max value is first number");
}else{
  alert("The max value is second number");
}

// 3. Convert the above code using`?` terniary operator
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
Number(num1) > Number(num2) ? alert("The max value is first number"): 
alert("The max value is second number")
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter your house name");
if(houseName === "stark" || houseName === "Stark"){
  alert("Winter is coming!");
} else if(houseName === "lannister" || houseName === "Lannister"){
  alert("A lannister always pays his debt");
} else{
  alert("All men must die")
}


// 5. Convert the above code using`?` terniary operator
let houseName = prompt("Enter your house name");
(houseName === "stark" || houseName === "Stark") ? alert("Winter is coming!") :
(houseName === "lannister" || houseName === "Lannister") ? alert("A lannister always pays his debt") : alert("All men must die")


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber = prompt("Enter number of month");
switch(monthNumber) {
  case '1':
  case '3':
  case '5':
  case '7':
  case '8':
  case '10':
  case '12':
    alert("Total number of days are 31");
    break;
  case '2':
    alert("Total number of days are 28");
    break;
  case '4':
  case '6':
  case '9':
  case '11':
    alert("Toatal number of days are 30")
    break;
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amount from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = prompt("Enter your salary");
switch(true) {
  case(Number(salary) <= 2000):
      alert(Number(salary) - ((Number(salary)) * 10/ 100))
      break; 
  case(Number(salary) > 2000 && Number(salary) <=4000):
      alert(Number(salary) - ((Number(salary)) * 20/ 100))
      break; 
  case(Number(salary) > 5000):
      alert(Number(salary) - ((Number(salary)) * 30/ 100))
      break; 
}

let salary = prompt("Enter your salary");
if(Number(salary) <= 2000){
  alert(Number(salary) - ((Number(salary)) * 10/ 100));
} else if(Number(salary) > 2000 && Number(salary) <=4000) {
  alert(Number(salary) - ((Number(salary)) * 20/ 100));
} else if(Number(salary) > 5000){
  alert(Number(salary) - ((Number(salary)) * 30/ 100));
}else {
  alert("Enter valid number");
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = prompt("Enter marks");
if(Number(marks) > 100){
  alert("Marks can't be greater than 100");
}else if(Number(marks) >= 80 && Number(marks) <= 100){
  alert("Grade A");
}else if(Number(marks) >= 50 && Number(marks) < 80){
  alert("Grade B");
}else if(Number(marks) >= 30 && Number(marks) < 50){
  alert("Grade C");
}else if(Number(marks) >= 0 && Number(marks) < 30){
  alert("Grade D");
}else {
  alert("Enter valid number");
}

// SWITCH STATEMENT
let marks = prompt("Enter marks");
switch(true){
  case (Number(marks) > 100):
    alert("Marks can't be greater than 100");
    break;
  case(Number(marks) >=80 && Number(marks) <= 100):
    alert("Grade A");
    break;
  case(Number(marks) >= 50 && Number(marks) < 80):
    alert("Grade B");
    break;
  case(Number(marks) >= 30 && Number(marks) < 50):
    alert("Grade C");
    break;
  case(Number(marks) >= 0 && Number(marks) < 30):
    alert("Grade D");
    break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let temperature = prompt("What is the weather like outside?");
if(temperature === "sunny"){
  alert("Wear a T-shirt");
}else if(temperature === "rainy"){
  alert("Don't forget to take your raincoat");
}else if(temperature === "hot"){
  alert("Get a hanky");
}else if(temperature === "freezing"){
  alert("Get your sweeter on");
}else {
  alert("Not a valid input");
}
