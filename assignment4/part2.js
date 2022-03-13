// Part 2: A new web page with a custom animation using JavaScript’s requestAnimationFrame()
// method or Web Animation API (2 points)
// Part 2: For the requestAnimationFrame() method, the drawing
// function should be called recursively to change some aspect of CSS over time; for the Web Animations API,
// the animate() method should be used with keyframe objects and a timing object. (1 point)

//float around the screen /bouncy
const sag=document.getElementById('sagittarius');
const aqua=document.getElementById('aquarius');
const pisces=document.getElementById('pisces');
const scorpio=document.getElementById('scorpio');
const aries=document.getElementById('aries');
//keyframe object
let movement = [
  {transform: 'translate(-10%, -10%'},
  {transform: 'translate(10%, 10%'},
];
let pulse = [
  {transform: 'translate(10%, 10%'},
  {transform: 'translate(-10%, -10%'},
];
let swim = [
  {transform: 'translate(-10%, -10%'},
  {transform: 'translate(10%, 10%'},
];
let dance = [
  {transform: 'translate(-10%, -10%'},
  {transform: 'translate(10%, 10%'},
];
let spin = [
  {transform: 'rotateX(90deg'},
  {tranform: 'rotateX(360deg'},
];
//put together with animate method

//timing object
let sagAnimate = {duration: 1000, iterations: Infinity};
let bounce= sag.animate(movement,sagAnimate);

let aquaAnimate = {duration: 3000, iterations: Infinity};
let aqua1=aqua.animate(pulse, aquaAnimate);

let piscesAnimate = {duration: 5500, iterations: Infinity};
let pisces1=pisces.animate(swim, piscesAnimate);

let scorpioAnimate = {duration: 6500, iterations: Infinity};
let scorpio1=scorpio.animate(dance, scorpioAnimate);

let ariesAnimate = {duration: 5000, iterations: Infinity};
let aries1=aries.animate(spin, ariesAnimate);
stopAnimation=()=> movement.pause();
startAnimation=()=> skate.play();
reverseAnimation=()=> skate.reverse();
const audio= new Audio("media/aquarius.mp3");

let updatetext=document.querySelector('h2');
let stopMusic=document.querySelector('button');
function note(){
  console.log('you clicked me!');
  audio.play();
  updatetext.innerText="You Found the Music!";
  stopMusic.style="inline";
};
function stopMus(){
  audio.pause();
};
aqua.addEventListener("click",note);
stopMusic.addEventListener("click", stopMus);





  const background=document.querySelector('body');
  displayHeight= ()=> background.style.height=window.innerHeight+ "px";

  const textX=document.getElementById('x-pos');
  const textY=document.getElementById('y-pos');
  randomColor = () => {
    let randomNumber = Math.floor(Math.random() * 360);
    console.log(randomNumber);
    background.style.backgroundColor = "hsl(" + randomNumber + ", 100%, 50%)";
  }
  let hueBrowserRatio;
  let lightnessBrowserRatio;

  function colorScale(){
    let browserWidth= window.innerWidth;
    let browserHeight=window.innerHeight;
    console.log("browswer width: "+browserWidth);
    console.log('browser height: '+browserHeight);

    hueBrowserRatio= browserWidth/360;
    lightnessBrowserRatio=browserHeight/100;
    console.log('hue ratio: '+hueBrowserRatio);
    console.log('lightness ratio '+lightnessBrowserRatio);
  }
  function getPosition(event) {
    let xPos = event.clientX;
    let yPos = event.clientY;
    updateColor(xPos, yPos);
  }
  function updateColor(xPos, yPos){
    let hue= Math.ceil (xPos/hueBrowserRatio);
    console.log('Hue: '+hue);

    let lightness=Math.ceil(yPos/lightnessBrowserRatio);
    console.log('Lightness: ' + lightness);

    if(lightness>50 && hue>180){
      document.body.style.backgroundImage="url('starry.jpeg')";
      document.querySelector('h2').style.color="white";
      document.querySelector('h1').style.color="white";



    }
    else{
      document.body.style.backgroundImage="url('starry3.jpeg')";
      sag.style.color="white";
      document.querySelector('h2').style.color="black";
      document.querySelector('h1').style.color="black";

    }
  }
  // At least two JS Functions
  window.addEventListener('load', function(){
    randomColor();
    colorScale();
    // spinning();
  });
  window.addEventListener('resize', function() {
    displayHeight();
    colorScale();
    music();
  });
  //At least 1 JS event listener to respond to a user
  window.addEventListener('pointermove', getPosition);
  window.addEventListener('pointerdown', getPosition);
