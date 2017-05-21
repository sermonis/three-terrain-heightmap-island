const camera0Clicked = () => {
  const newPosition = mainCamera.position;
  camera.position.x = newPosition.x;
  camera.position.y = newPosition.y;
  camera.position.z = newPosition.z;
  camera.lookAt(new THREE.Vector3(0, 3, 0));

  currentCamera = 0;
}

const camera1Clicked = () => {
  const newPosition = camera1.position;

  camera.position.x = newPosition.x;
  camera.position.y = newPosition.y;
  camera.position.z = newPosition.z;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  currentCamera = 1;
}

const camera2Clicked = () => {
  const newPosition = starship.position

  camera.position.x = newPosition.x - 3;
  camera.position.y = newPosition.y + 6;
  camera.position.z = newPosition.z + 1.75;
  camera.lookAt(new THREE.Vector3(-100, -5, -15));

  currentCamera = 2;
}
