//Dom Query: getElementById

// let firstButton= document.querySelector("svg.btn");
// console.log(firstButton);

// console.log(allButtons);
//
// let lastButton= allButtons[2];
// console.log(lastButton);
//SELECT ALL BUTTONS
let buttons= document.querySelectorAll("svg.btn");
let cyanBtn=buttons[0];
let magentaBtn=buttons[1];
let yellowBtn=buttons[2];

//select the background
const background = document.querySelector('body');
//tie interaction

// function cyanBg(){
//   background.style.backgroundColor = 'cyan';
// }

cyanBg =()=> background.style.backgroundColor="cyan";
magentaBg = () => background.style.backgroundColor="magenta";
yellowBg = () => background.style.backgroundColor="yellow";

//eventlistener
cyanBtn.addEventListener('click', cyanBg);
magentaBtn.addEventListener('click', magentaBg);
yellowBtn.addEventListener('click', yellowBg);
