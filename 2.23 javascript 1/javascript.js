console.log("hello");
//comment javascript basics

let student="Claudia";
let year = 2022;

const semester= "Spring";
//dont intend to change variable throughout the rest of the program use const
console.log(student);

//Operations

let message = student + " will graduate in " + year;
console.log(message);

let students = [
  'stephanie',
  'owen',
  'julissa',
  'sirai',
  'yichen',
];

//index position to identify items in array
firstStudent= students[0];
console.log(firstStudent);

for (let i =0; i <students.length; i++){
  let s=students[i];
  console.log(s);
}
for (let i =0; i <101; i++){
  if (i%3==0 && i%5!=0){
    console.log("fizz");
  }
  else if(i%5==0 && i%3!=0){
    console.log("buzz");
  }
  else if(i%5==0 && i%3==0){
    console.log("FizzBuzz")
  }
  else{
  console.log(i);}
}
//comparison operators:
//functions are blocks of code executed when told to

// let myMessage=function(){
//   console.log("have a nice weekend");
// };
// myMessage();

// function myMessage(){
//   console.log("have a nice weekend");
// };
// myMessage();

 myMessage= () => {
    console.log("have a nice weekend");
}
myMessage();

myMessage =()=> console.log('have a  weekend');
myMessage();

let paragraph=document.getElementById('text');
console.log(paragraph);

let chess=" # # # #"
console.log(chess)

for (let i=0; i<9; i++){
  console.log(chess)
}

let triangle = "#"
for (let i =0; i<8; i++){
  triangle=triangle + triangle
  console.log(triangle)
}

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
