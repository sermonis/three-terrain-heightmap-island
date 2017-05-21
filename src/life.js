const addLife = () => {
  createFish(2, 2);
  createSpaceship();
}

const createFish = (x, z) => {
  var loader = new THREE.ObjectLoader();
  loader.load('./ressources/3DModels/fish.json', (obj) => {
    obj.position.x = x;
    obj.position.z = z;
    obj.position.y = -1.5;
    obj.scale.set(0.02, 0.02, 0.02);
    fish1 = obj
    scene.add(fish1);
  });
}

const createSpaceship = () => {
  var loader = new THREE.ObjectLoader();
  loader.load('./ressources/3DModels/starship.json', (obj) => {
    obj.position.x = 40;
    obj.position.y = -5;
    obj.position.z = -15;
    starship = obj;
    scene.add(starship);
  });
}
