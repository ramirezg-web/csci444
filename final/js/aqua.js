const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  let width;
  let height;

  // set the number of canvas pixels, scaled for screen resolution
  let pxScale = window.devicePixelRatio;

  const image =document.querySelector('img');
  let redShift=0;
  let greenShift=0;
  let redPolarity=1;
  let greenPolarity=-1;
  let factor=12;//speed of shift a multiple of 4

  function setup() {
    // fixed canvas size
    // width=window.innerWidth;
    // height=height.innerHeight;
    width = window.innerWidth/2;
          height = window.innerHeight/2;
    // width = canvas.width;
    //   height = canvas.height;
    // set the CSS display size
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    canvas.width = width * pxScale;
    canvas.height = height * pxScale;

    // normalize the coordinate system
    context.scale(pxScale, pxScale);
  }

  function draw() {
    context.drawImage(image,0,0,width,height);
    let imageData=context.getImageData(0,0,canvas.width, canvas.height);
    let data= imageData.data;

    //clear Canvas
    context.clearRect(0,0,canvas.width, canvas.height);

    //scale shift degree
    redShift+=redPolarity*factor;
    greenShift+=greenPolarity*factor;
    // console.log(redShift);

    //locate and shift Pixels

    for (let y=0; y<imageData.height; y++){
      for (let x=0; x<imageData.width; x++){
        let index=(x+y*imageData.width)*4;
        data[index+0]= data[(index+0)+redShift];
        data[index+1]= data[(index+1)+greenShift];
      }
    }





    context.putImageData(imageData, 0,0);
    requestAnimationFrame(draw);

  }

  function hover(){
    width=width/2;
    height=height/2;
    console.log(width, height);

  }
  function reset(){
    width=canvas.width;
    height=canvas.height;
    console.log(width, height);
  }

// (x+7*width)*4 is find pixel coordinates
  // when the whole page has loaded, including all dependent resources
  window.addEventListener('load', () => {
    setup();
    draw();
  });
  window.addEventListener('resize', () => {
    setup();
    draw();
  });
