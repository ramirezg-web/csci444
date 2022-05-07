let moon=document.querySelector('#moon');
let audio=document.querySelector('audio');
accessData=async()=>{
// let url="https://eodhistoricaldata.com/api/options/AAPL.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX"
let url="https://api.ipgeolocation.io/astronomy?apiKey=bd07b5e9be2b4ebd8f0ea9d7ee65c38c&location=New%20York,%20US";
let response= await fetch (url);
if (response.ok){
  let json=await response.json();
  console.log(json);
  dailyPercent(json);

} else{
  console.log('error')
}
}
dailyPercent= (response)=>{
  let percent= response.moon_distance;
  console.log('Daily Change Percent = '+percent);

let blurExtent=Math.round(percent/100000);
console.log(blurExtent);
let blurValue = 'blur(' + blurExtent + 'px)';
    moon.style.filter = blurValue
  };






//api key bd07b5e9be2b4ebd8f0ea9d7ee65c38c

// https://ipgeolocation.io/documentation/astronomy-api.html
// const sag=document.getElementById('sagittarius');
const aqua=document.getElementById('aquarius');
const pisces=document.getElementById('pisces');
const scorpio=document.getElementById('scorpio');
const aries=document.getElementById('aries');
//keyframe object
// let movement = [
//   {transform: 'translate(-10%, -10%'},
//   {transform: 'translate(10%, 10%'},
// ];
let pulse = [
  {transform: 'rotateZ(-0deg'},
  {transform: 'rotateZ(-360deg'},
];
let swim = [
  {transform: 'rotateZ(0deg'},
  {transform: 'rotateZ(360deg'},
];
let dance = [
  {transform: 'rotateY(0deg'},
  {transform: 'rotateY(360deg'},
];
let spin = [
  {transform: 'rotateX(90deg'},
  {tranform: 'rotateX(-360deg'},
];
//put together with animate method

//timing object
// let sagAnimate = {duration: 1000, iterations: Infinity};
// let bounce= sag.animate(movement,sagAnimate);

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


   window.addEventListener('resize', () => {
     // setup();
     // draw();
     accessData();
   });

   window.addEventListener('load',function() {
     accessData();
     audio.play();
     // setup();
     // draw();
   });
