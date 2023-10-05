
// //         //This is my veruy first JS code
// //         // console.log('Hello World');
// //     // let name ='Calleb' + 'Otieno';
// //     console.log(name);

// //     let message ='My name is '
// //     // let firstName = 'Kamau';
// //     let secondName = 'Omondi';
// //     console.log(message , firstName, secondName);



// // // alert("Do you really want to leave this page\n Please Click OK to confirm");

// // // var user = prompt("Please enter your name first")
// // // alert(user)

// // const interestRate = 0.3

// // console.log(interestRate)


// // let name = 'Olele'; //String
// // let age = 20 //Number
// // let isApproved = true; //Booleon
// // let firstName = undefined //



// //Notations
// let person = {
//     name : 'Okello',
//     age : 30, 
// }
// person.age = 30;
// console.log(person.age);

// //Arrays
// let selectedColors = ['Red' , 'Blue' , 'Green'];
// selectedColors [3] = 1000 
// console.log (selectedColors)


// let cars = ['V8' ,'Ford', 'Lamb.' ,'Subaru']
// console.log(cars)


// //Funstions
// function greet (name, lastName) {
//     console.log ('Hello '+ name + ' ' +  lastName);
// }

// greet('Kevin' ,  'Opondo'); 

// //Calculating a value

// function square (number){
//     return number* number
// }

// let number = square[2]
// console.log (square[2]);


// // var  myFname = 1;
// // var  myLname = 2;
// // if (myFname > myLname);
// // alert('Js is the easiest')



// //OPERATORS
// let x = 10
// let y = 50

// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)//Remainder in operation
// console.log(x **y)


// //Increment operators(++)
// console.log(x++)
// console.log(x)

// //Decrement Operation(--)
// console.log(--x)


// //Assignment operators
// x += 5;


// x *= 3;
// console.log(x)

// y +=9;
// console.log(y);

// //Relational  Operators
// x = 1;
// console.log(x>=0);
// console.log(x>=1);
// console.log(x<=1);

// //Strict Equality  Operators (Type + Value are compatible)
// // console.log(x ===1)
// // console.log(x !==1) //Whether x is equal to 1
// // console.log('x' ===1)

// //Lose Equality  Operators (If vlaues are equal)
// console.log(x ===1)
// console.log('1' ==1)
// console.log(true ==1)
// console.log(false ==1)


// //Greetings
//  let message = 'Hello, my name is'
//  let firstName = 'Kelvin'
//  let lastName = 'Kip'

//  console.log(message, firstName+ ' ' +lastName);
//  alert('Thanks for your time')



//Conditionl/Ternary Operators
//If a customer has more than 100 points, 
//they earn 'gold', otherwise they will earn 'sylver'

// let points = 110;
// let type = points > 100 ? 'Gold' : 'Sylver';
// console.log(type);


// Logical Opetaors (||)
// Returns TRUE if both operators are true
console.log(true && true)

let highIncome = false;
let goodCredit = true;
let eligibleForLoan = highIncome || goodCredit;
console.log(eligibleForLoan)

//NOT operator (!)

let lowIncome = true;
let badCredit = true;
let applicationRefused = !eligibleForLoan;

console.log('Application Refused');

let child = true;
let adult = false
let schoolfees = child || adult

console.log(schoolfees)




//Swiping Variables
// let a = 'red'
// let b = 'blue'

// [a, b] = [b, a];


// console.log(a);
// console.log(b);

// let userColor= b
// let constantColor = a




// let gradeB = 'University'
// let gradeE = 'Faled'
// let joinUni = gradeB || gradeE;

// let willNotJoinUni = !joinUni
// console.log('Just go to Colllege!') ,  'Join Uni'





// let age = 60; 
// let scenario = age < 60 ? 'Should receive Pension' : 'Should be given employment' ;

// console.log(scenario);




//If and else conditions
//if the hour is between 6 and 12 , print 'Good Morning'
//If i is between 12 pm and 6 pm. print 'Good Everning
//Otherwise just 'Good night'
let hour = 18;
if (hour >= 6 && hour < 12) {
  console.log('Good Morning');
}

else if (hour >= 13 && hour < 17) {
  console.log('Good Afternoon');
}
else if (hour >= 18 && hour < 22) {
  console.log('Good Evening!')
}
else {
  console.log('Good Night')
}



//Swith Conditions
//  let role;
//     switch (role){
//         case 'great Job!'
//     }



//LOOPS
//While, Do while loops
//Infinite loops
//for loops


//for loop
//this is  the initial expression; then the condition, then finally the increment statement

// for  (let i = 1; i =>1; i--){
//   if (i % 2 !==0) console.log();
//   // console.log('Hello World', i)
// } 


//while loop
// let i = 0 ; 
// while (i <= 5){
//    if (i % 2 !==0) console.log(i);
//    i++;
// }


//do - while loop
// let i = 0;
// do {
//   if (i % 2 !==0) console.log(i);
//   i++;
// }
// while (i<=5);


//infinite loops
//And if you don't include the increment statement, it will automatically run an infinite comand!
// let i =0; 
// while (i<5){
//   console.log(i);
// i++;
// }

//for-in loop
// const person= {
//   Name: 'Caleb',
//   age: 30};
//   for (let key in person)
//   console.log(key, person [key])



//My own example
//   const school = {
// Institution : 'Kenyatta Uni',
// Year : 1995
//   };
//    for (let key  in school)
//    console.log(key , school [key]);



// const color = ['red' , 'green', 'blue'];
//     for (let index  in color)
//     console.log(key, index[key]);



let number = max(10, 10);
console.log(number);

function max(a, b) {
  if (a > b) return a;
  return b;
}


//Landscape or portrait exercise

// console.log(isLandscape (800, 450));
// function isLandscape(width, height) {
//   return (width > height) ? true : false;
// };


// FizzBuzz Exercise
// for (var i = 1; i < 101; i++) {
//   if (i % 15 == 0) console.log("FizzBuzz");
//   else if (i % 3 == 0) console.log("Fizz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else console.log(i);
// }




// for (var i = 1 ; i <51; i++) {
//     if (i % 10 ==0) console.log('Perfect Color!');
//     else if (i % 2 ==0) console.log('Blue');
//     else if (i % 5 ==0) console.log('Red');
//     else console.log(i);
// }




//    for (var i =1; i<180; i++ ) {
//       if (i<70){
//        console.log('OK');
//       }
//     else if (i< 72){
//       console.log('You Earned 2 points!');
//     }
//     else if (i<120){
//       console.log('You Earned 5 points!');
//     }
//     else console.log('Lisence Expired')
// }



//If the driver drives past  the speedLimit of 70km/h/ the he starts earning points
//For every Km he drives past 70km, he earns 5 points
// -----------------------------


checkSpeed(130);
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint)
    console.log('OK');
  else {
    const points = Math.floor((speed - speedLimit)) / kmPerPoint
    if (points >= 12)
      console.log('Lisence Suspended');
    if (points >= 15)
      console.log('Risk Arrest!');
    else
      console.log('points' + points);
  }
}

// //EVEN AND ODD NOS; 
// for  (let i = 0; i <=10; i++){
//   if (i % 2 ==0) console.log(i, 'Even');
//   else console.log(i, 'Odd')
// } 

// const message = (i % 2==0 ) ? 'EVEN' :  'ODD'
// console.log(i, message);
 

//COUNTING TRUTHY VALUES EXS;
const array = [1,2,5,7,8,5,6,4,5,2, '', null , '!' ];
console.log (nameTruthys (array));

function nameTruthys (arrays){
  let count = 0;
  for (let value of array)
  if (value)
    count ++;
  return count;

};


let user = {
  name: 'Aloyse' ,
  age : 20,
  message : "He is very handsome :)"
}
console.log(user.name);




//Sum of Multiple of 5 and 3
console.log(sum(10));

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <=10; i++)
    if (i % 3 === 0 || i % 5 === 0)
    sum += i
    return sum;
}
 


//Student Grades
function calculateGrade(marks) {
  if (marks >= 90) {
    return 'A';
  } else if (marks >= 80) {
    return 'B';
  } else if (marks >= 70) {
    return 'C';
  } else if (marks >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Example usage:
const studentMarks = 50;
const grade = calculateGrade(studentMarks);
console.log(`Grade for ${studentMarks} marks is ${grade}`);





// Ex 10, Stars
for (let i = 1; i <= 10; i++) {
  let stars = '*'.repeat(i);
  console.log(stars);
}



 




















