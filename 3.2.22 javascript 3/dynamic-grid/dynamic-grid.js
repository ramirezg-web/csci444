// Dynamic Grid

const background = document.querySelector('body');
displayHeight = () => background.style.height = window.innerHeight + 'px';

window.addEventListener('load', function(){
  displayHeight();
  scaleRatio();
});

window.addEventListener('resize', function(){
  displayHeight();
  scaleRatio();
});

/*
Opacity Transitions
*/

const grid = document.querySelector("#context");
const squares = document.querySelectorAll('.square');

function changeOpacity(event) {
  if (event.target.className == 'square') { // only work with grid items
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.opacity = '0.6'; // make all squares semitransparent
    }
    event.target.style.opacity = '1.0'; // keep target square opaque
    event.target.addEventListener('pointerout', resetOpacity, false);
  }
  event.stopPropagation();
}

function resetOpacity() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.opacity = '1.0'; // change all back to opaque
  }
}

grid.addEventListener('pointerover', changeOpacity, false);


// hovering, interaction changing elements youre not directly interacting with.
//changing all squares that you're not hovering over to be translucent,
//taken further that all the suqares follow the pointer as move around the screen
// Transform grid items

let xBrowserRatio;
let yBrowserRatio;

function scaleRatio() {
  //determine how much to rotate based on size of browser
  let browserWidth=window.innerWidth;
  let browserHeight=window.innerHeight;

  xBrowserRatio = browserWidth/120;
  //for an almost rotation
  yBrowserRatio = browserHeight/120;
}
function coordinates(event){
  let xPos = event.clientX;
  let yPos= event.clientY;

  updateRotation(xPos, yPos);
}

function updateRotation(xPos, yPos){
  //map horizontal rotation to X position (relative to browser window)
  let xRotation=  60- Math.ceil(yPos/yBrowserRatio);// 60 becuase half the scaled
  console.log("x" +xRotation);
  let yRotation= -60+Math.ceil(xPos/xBrowserRatio);
  console.log("y"+yRotation);

  //set perspective of grid shapes
  for (let i = 0; i<squares.length; i++){
    squares[i].style.transform = "rotateX("+xRotation +'deg)'+ ' ' + "rotateY("+yRotation+'deg)';

  }
}
//detect pointer movement in browser window

window.addEventListener('pointermove',coordinates);
window.addEventListener('pointerdown', coordinates);
