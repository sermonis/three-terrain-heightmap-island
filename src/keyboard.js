const onKeyPress = (event) => {
  const delta = 0.2;
  event = event || window.event;
  var keycode = event.keyCode;
  if (currentCamera == 2) {
    return;
  }
  switch(keycode){
    case 37: // LEFT
      if (camera.position.x > -20) {
        if (currentCamera == 1) {
          camera.position.x += delta;
        }
        else {
          camera.position.x -= delta;
        }
      }
      break;
    case 38: // UP
      if (camera.position.z > -20) {
        if (currentCamera == 1) {
          camera.position.z += delta;
        }
        else {
          camera.position.z -= delta;
        }
      }
      break;
    case 39: // RIGHT
      if (camera.position.x < 20) {
        if (currentCamera == 1) {
          camera.position.x -= delta;
        }
        else {
          camera.position.x += delta;
        }
      }
      break;
    case 40: // DOWN
      if (camera.position.z < 20) {
        if (currentCamera == 1) {
          camera.position.z -= delta;
        }
        else {
          camera.position.z += delta;
        }
      }
      break;
    case 81: // Q
      if (camera.position.y < 10) {
        camera.position.y = camera.position.y + delta;
      }
      break;
    case 87: // W
      if (camera.position.y > -4) {
        camera.position.y = camera.position.y - delta;
      }
      break;
  }
}
