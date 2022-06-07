
const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    let img=document.querySelector('img');
    let pxScale = window.devicePixelRatio;

function background_2d (){
  // scale window pixel
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
  canvas.style.zIndex="-1";

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  canvas.width = width * pxScale;
  canvas.height = height * pxScale;
  context.scale(pxScale, pxScale);
  img.src = "../media/starry.jpeg";
  console.log(width);
  console.log(height);
  img.onload = function(){
    context.drawImage(img, 0, 0, width, height);
  }
};


const container = document.getElementById('container');

function animate() {

}
let b= document.getElementById('breathing-button');
b.addEventListener('click',reveal);
let a=document.querySelector('audio');
let v=document.querySelector('video');

function reveal(){
  console.log('clicked');
  a.src="../media/pisces.mp3"
  v.src="../media/moon.mp4"
  a.play();
  v.play();
  v.style.display="inline";

};



function windowResize() {
  width = window.innerWidth;
  height = window.innerHeight;

};

window.addEventListener('load', () => {
  background_2d();

});
window.addEventListener('resize', ()=>{
  background_2d();
  windowResize();
});
