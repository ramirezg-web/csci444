let camera, renderer, scene, controls, model, light, mesh;

let loader;
let geometry, material;

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
  img.src = "media/test.png";
  console.log(width);
  console.log(height);
  img.onload = function(){
    context.drawImage(img, 0, 0, width, height);
  }
};


const container = document.getElementById('container');
//foreground
// function init() {
//   scene = new THREE.Scene();
//   let width = window.innerWidth;
//   let height = window.innerHeight;
//
//   camera = new THREE.PerspectiveCamera(45, width/height, 2, 15000);
//   camera.position.set(0, 400, 900);
//   scene.add(camera);
//
//   let light = new THREE.DirectionalLight(0xffffff,1);
//   light.position.set(1,1,1);
//   scene.add(light);
//
//   geometry= new THREE.SphereGeometry(100,10,10);
//   material= new THREE.MeshBasicMaterial({color:0xffff00, wireframe: true});
//
//   mesh = new THREE.Mesh(geometry,material);
//   mesh.position.y=120;
//   scene.add(mesh);
//
//   // let planeGeometry= new THREE.PlaneGeometry(1000,1000,10,10);
//   // let planeMaterial=new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true});
//   // let plane= new THREE.Mesh(planeGeometry, planeMaterial);
//   // plane.rotation.x=Math.PI/2;
//   // scene.add(plane);
//
//   renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(width, height);
//   renderer.shadowMap.enabled=true;
//   renderer.setClearColor(0xffffff, 0);
//   controls = new THREE.OrbitControls(camera, renderer.domElement);
//   document.body.appendChild(renderer.domElement);
//
// }
function init() {
  scene = new THREE.Scene();
  // scene.background= new THREE.Color(0xffff00);//set background color;
  //make it transparent to see through it
  let width = window.innerWidth;
  let height = window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.z = 50;
  camera.position.y = -22; //
  scene.add(camera);
  let light = new THREE.DirectionalLight(0xffffff,2);
  light.position.set(1,1,1);
  scene.add(light);
//gltf loader
let loader= new THREE.GLTFLoader();
loader.load('scene.gltf',function(gltf){
  model = gltf.scene;
  scene.add(model);
  gltf.animations;
  gltf.scene;
  gltf.scenes;
  gltf.asset;
});
console.log('loaded');
  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled=true;
  renderer.setClearColor(0xffffff, 0);// keep background transparent
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  document.body.appendChild(renderer.domElement);
}




// function animate(){
//   // mesh.rotation.x += 0.01;
//   // mesh.rotation.y += 0.02;
// //rotation based on date
// let date = new Date();
// timer= date.getTime()*0.0004;
// camera.position.x=800*Math.cos(timer);
// camera.position.z=800*Math.sin(timer);
// mesh.rotation.x += 0.01;
// mesh.rotation.y += 0.02;
// // renderer.render(scene, camera);
//   renderer.render(scene, camera);
//   // controls.update();
//   // requestAnimationFrame(animate);
// }

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
  model.rotation.y +=0.01;
}


function windowResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  // animate();


  camera.aspect = (width / height);
  camera.updateProjectionMatrix(); // update camera

  renderer.setSize(width, height)
};

window.addEventListener('load', () => {
  init();
  background_2d();

  // vertices();
  animate();
});
window.addEventListener('resize', ()=>{
  // init();
  background_2d();
  // animate();
  windowResize();
});
