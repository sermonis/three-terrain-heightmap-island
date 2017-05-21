const animateWater = () => {
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
}

const fishChangeDirection = () => {
  if (currentFishCheckpoint == fishCheckpoints.length - 1) {
    currentFishCheckpoint = 0;
  }
  else {
    currentFishCheckpoint += 1;
  }
}

const roundPosition = (num) => {
  return Math.round(num * 1000) / 1000;
}

const animateFish = () => {
  const fishSpeed = 0.004;
  for (var i = 0; i < fishCheckpoints.length; i++) {
    if ((roundPosition(fish1.position.x) == roundPosition(fishCheckpoints[i][0]))
    && (roundPosition(fish1.position.z) == roundPosition(fishCheckpoints[i][1]))) {
      fishChangeDirection();
      break;
    }
  }

  // Move X
  if (fish1.position.x < fishCheckpoints[currentFishCheckpoint][0]) {
    fish1.translateX(fishSpeed);
  }
  else {
    fish1.translateX(-fishSpeed);
  }

  // Move Z
  if (fish1.position.z < fishCheckpoints[currentFishCheckpoint][1]) {
    fish1.translateZ(fishSpeed);
  }
  else {
    fish1.translateZ(-fishSpeed);
  }
}

const animateStarship = () => {
  const starshipSpeed = 0.1;
  const starshipSpeed2 = 0.02;

  // Move X
  if (starship.position.x > -30) {
    starship.translateX(-starshipSpeed);
    if (currentCamera == 2) {
      camera.position.x -= starshipSpeed;
    }
  }
  else {
    starship.position.x = 40;
    starship.position.y = -5;
    if (currentCamera == 2) {
      const newPosition = starship.position;
      camera.position.x = newPosition.x - 3;
      camera.position.y = newPosition.y + 5.5;
      camera.position.z = newPosition.z + 1.75;
    }
  }

  // Move Y
  var tmpSpeed = 0;
  if (starship.position.x > 10) {
    tmpSpeed = starshipSpeed2;
  }
  else if ((starship.position.x < 0) && (starship.position.x > -20)) {
    tmpSpeed = -starshipSpeed2;
  }
  starship.translateY(tmpSpeed);
  if (currentCamera == 2) {
    camera.position.y += tmpSpeed;
  }
}
