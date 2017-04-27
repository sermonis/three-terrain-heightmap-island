const createMaterial = (path) => {
    var texture = THREE.ImageUtils.loadTexture(path);
    var material = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.5 });

    return material;
}

const createFloor = () => {
  var floorTexture = new THREE.ImageUtils.loadTexture('ressources/SkyBox/SkyBox5.bmp');
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(500, 500);
  var floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.DoubleSide });
  var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.position.y = -0.5;
  floor.rotation.x = Math.PI / 2;
  return floor;
}

const createSkybox = () => {
  const path = "ressources/SkyBox/";
  const materials = [
    createMaterial(path + "SkyBox3.bmp"),
    createMaterial(path + "SkyBox1.bmp"),
    createMaterial(path + "SkyBox4.bmp"),
    createMaterial(path + "SkyBox5.bmp"),
    createMaterial(path + "SkyBox2.bmp"),
    createMaterial(path + "SkyBox0.bmp"),
  ];

  var mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1500, 1500, 1500),
    materials
  );

  mesh.scale.set(-1,1,1);
  mesh.translateY(745);
  mesh.translateZ(-200);
  return mesh;
}
