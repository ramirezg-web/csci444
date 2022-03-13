// Part 1: a CSS transition or animation applied indirectly with Javascript 2Points

let x= document.getElementById('img');
spinning=()=>{
  console.log(x);
  x.style.animation="rotation 2s infinite ease-in-out alternate";
}

//AT least 2 JS Domquieries
// CHANGE BACKGROUND COLOR
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
    document.body.style.backgroundImage="url('starry2.jpeg')";

  }
  else{
    document.body.style.backgroundImage="url('starry.jpeg')";
  }
}
// At least two JS Functions
window.addEventListener('load', function(){
  randomColor();
  colorScale();
  spinning();
});
window.addEventListener('resize', function() {
  displayHeight();
  colorScale();

});
//At least 1 JS event listener to respond to a user
window.addEventListener('pointermove', getPosition);
window.addEventListener('pointerdown', getPosition);
