/* WINDOW */
const windowX = 700;
const windowY = 500;

THREE.ImageUtils.crossOrigin = '';

/* RENDER SCENE VARIABLES */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, windowX/windowY, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

/* OBJECTS OF THE SCENE */
var floor = null;
var skybox = null;
var terrain = null;
var fish1 = null;
var starship = null;

/* LIGHTS */
var globalLight = null;

/* CAMERAS */
var currentCamera = 0;
var mainCamera = new THREE.PerspectiveCamera(75, windowX / windowY, 0.1, 1000);
var camera1 = new THREE.PerspectiveCamera(75, windowX / windowY, 0.1, 1000);
var camera2 = new THREE.PerspectiveCamera(75, windowX / windowY, 0.1, 1000);

/* ANIMATIONS */
var waterMovedOfX = 0;
var waterMovementX = false;
var waterMovedOfY = 0;
var waterMovementY = false;

var currentFishCheckpoint = 0;
const fishCheckpoints = [
  [2, 2],
  [2, -2],
  [-2, -2],
  [-2, 2]
];

/* HEIGHT MAP */
var heightMapImage = new Image();
heightMapImage.src = './ressources/heightmap.bmp';

const init = () => {
  renderer.setSize(windowX, windowY);
  document.body.appendChild(renderer.domElement);

  floor = createFloor();
  skybox = createSkybox();
  terrain = createTerrain();

  globalLight = new THREE.AmbientLight(0x404090);

  scene.add(floor);
  scene.add(skybox);
  scene.add(terrain);
  scene.add(globalLight);

  camera.position.z = 10;
  camera.position.y = 4;

  mainCamera.position.x = 0;
  mainCamera.position.y = 4;
  mainCamera.position.z = 10;

  camera1.position.x = 0;
  camera1.position.y = 0.8;
  camera1.position.z = -8.6;

  camera2.position.x = 40;
  camera2.position.y = 5.5;
  camera2.position.z = -15;

  // Detect key press
  document.addEventListener('keydown', onKeyPress, false);
}

const render = () => {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
};

const animate = () => {
  // Animating water
  animateWater();

  // ANIMATING FISH
  if (fish1 != null) {
    animateFish();
  }

  if (starship != null) {
    animateStarship();
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

const main = () => {
  init();
  addLife();
  requestAnimationFrame(animate);
}

main();
