/* Get the Height from the BMP file */
const getHeightData = (img,scale) => {
 if (scale == undefined) scale = 1;

  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const context = canvas.getContext('2d');

  const size = img.width * img.height;
  var data = new Float32Array(size);

  context.drawImage(img, 0, 0);

  for (var i = 0; i < size; i++) {
    data[i] = 0
  }

  //var imgd = context.getImageData(0, 0, img.width, img.height);
  var imgd = context.getImageData(0, 0, 256, 256);
  var pix = imgd.data;

  var j=0;
  for (var i = 0; i < pix.length; i += 4) {
    var all = pix[i]+ pix[i + 1] + pix[i + 2];
    data[j++] = all / (12 * scale);
  }
  return data;
}

const createTerrain = () => {
  const heightData = getHeightData(heightMapImage);
  var geometry = new THREE.PlaneGeometry(10, 10, 255, 255);
  for (var i = 0, l = geometry.vertices.length; i < l; i++) {
    geometry.vertices[i].z = heightData[i] * 0.03;
  }
  const texture = THREE.ImageUtils.loadTexture('./ressources/terrain.bmp');
  const material = new THREE.MeshPhongMaterial({
    color: 0x777777,
    map: texture,
  });

  var plane = new THREE.Mesh(geometry, material);
  plane.rotation.x = 300;
  plane.position.z = -5;
  plane.position.y = -1.05;

  return plane;
}
