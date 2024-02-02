import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 30;

renderer.render(scene, camera);

const geometry = new THREE.DodecahedronGeometry(10, 0);

const material = new THREE.MeshBasicMaterial({
  color: 0x44bb87,
  wireframe: true,
});

const shape = new THREE.Mesh(geometry, material);

scene.add(shape);

function animation() {
  requestAnimationFrame(animation);
  shape.rotation.x += 0.01;
  shape.rotation.y += 0.005;
  shape.rotation.z += 0.01;
  renderer.render(scene, camera);
}
export default animation();
