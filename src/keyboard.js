const onKeyPress = (event) => {
  const delta = 0.1;
  event = event || window.event;
  var keycode = event.keyCode;
  switch(keycode){
    case 37: // LEFT
      camera.position.x = camera.position.x - delta;
      break;
    case 38: // UP
      camera.position.z = camera.position.z - delta;
      break;
    case 39: // RIGHT
      camera.position.x = camera.position.x + delta;
      break;
    case 40: // DOWN
      camera.position.z = camera.position.z + delta;
      break;
    case 81: // Q
      camera.position.y = camera.position.y + delta;
      break;
    case 87: // W
      camera.position.y = camera.position.y - delta;
      break;
  }
}
