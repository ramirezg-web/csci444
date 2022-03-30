const grid=document.getElementById('context');
const squares=document.querySelectorAll('.square');
//change opacity as hover hover

function changeOpacity(event) {
  if (event.target.className == 'square') { // only work with grid items
   for (let i = 0; i < squares.length; i++) {
      squares[i].style.opacity="0.6";
    }
    event.target.style.opacity= '1.0';
    // event.target.addEventListener('pointerout', resetOpacity);
  }
  event.stopPropagation();
}
grid.addEventListener('pointerover', changeOpacity);
// hovering, interaction changing elements youre not directly interacting with.
//changing all squares that you're not hovering over to be translucent,
//taken further that all the suqares follow the pointer as move around the screen
