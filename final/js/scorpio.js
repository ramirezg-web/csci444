let hrElement;
let counter = 100;
for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");

    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
    hrElement.style.animationDelay = Math.random() * 5 + "s";

  document.body.appendChild(hrElement);
}
let grow=document.getElementById('yoga1');
let stop=document.getElementById('yoga2');
grow.addEventListener('click',c);
stop.addEventListener('click',s);

let a=document.querySelector('audio');



  function c(){
    a.play();
    console.log('clicked')
  }

function s(){
  a.pause();
  console.log('paused')
}

  function windowResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    // location.reload();


  };


  const video=document.querySelector('video');
  let pulse = [
    {transform: 'rotateZ(-0deg'},
    {transform: 'rotateZ(-360deg'},
  ];
  let vAnimate = {duration: 9000, iterations: Infinity};
let video1=video.animate(pulse, vAnimate);
  window.addEventListener('resize', ()=>{

  // windowResize();
});
