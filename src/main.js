/* WINDOW */
const windowX = 700;
const windowY = 500;

/* RENDER SCENE VARIABLES */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, windowX/windowY, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

/* OBJECTS OF THE SCENE */
var floor = null;
var skybox = null;

/* WATER MOVEMENT */
var waterMovedOfX = 0;
var waterMovementX = false;
var waterMovedOfY = 0;
var waterMovementY = false;

const init = () => {
  renderer.setSize( windowX, windowY );
  document.body.appendChild(renderer.domElement);

  floor = createFloor();
  skybox = createSkybox();

  scene.add(floor);
  scene.add(skybox);

  camera.position.z = 2;

  // Detect key press
  document.addEventListener('keydown', onKeyPress, false);
}

const render = () => {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
};

const animate = () => {
  // Setting the way water move
  const waterShift = 0.001
  var waterShiftX = waterShift;
  if (waterMovementX == true) {
    waterShiftX = -waterShift;
  }
  var waterShiftY = waterShift;
  if (waterMovementY == true) {
    waterShiftY = - waterShift;
  }



  // Make the water change direction X
  if (waterMovedOfX >= 1.0) {
    waterMovementX = true;
  }
  else if (waterMovedOfX <= 0.0) {
    waterMovementX = false;
  }

  // Make the water change direction Y
  if (waterMovedOfY >= 1.0) {
    waterMovementY = true;
  }
  else if (waterMovedOfY <= 0.0) {
    waterMovementY = false;
  }

  waterMovedOfX += waterShiftX;
  waterMovedOfY += waterShiftY;
  floor.translateX(waterShiftX);
  floor.translateY(waterShiftY);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

const main = () => {
  init();
  requestAnimationFrame(animate);
}

main();
