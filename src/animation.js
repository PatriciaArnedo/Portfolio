import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000112);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

const geometry = new THREE.DodecahedronGeometry(10, 0);

const material = new THREE.MeshStandardMaterial({
  color: 0xfa829e,
  metalness: 0.8,
  roughness: 0.6,
});

const shape = new THREE.Mesh(geometry, material);

scene.add(shape);

const pointLight1 = new THREE.PointLight(0xf7f0e6, 150);
const pointLight2 = new THREE.PointLight(0xf7f0e6, 150);
pointLight1.position.set(5, 0, 17);
const ambientLight = new THREE.AmbientLight(0xf7f0e6, 4);
pointLight2.position.set(-10, 0, -15);
scene.add(pointLight1, pointLight2, ambientLight);

const addStar = () => {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);

  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);

  scene.add(star);
};

Array(200).fill().forEach(addStar);

let scrollY = window.scrollY;
let startY = 0;
const rotationSpeed = 0.05;

const moveShape = () => {
  const currentScrollY = window.scrollY;
  const scrollDirection = currentScrollY > scrollY ? "down" : "up";
  if (scrollDirection === "up") {
    shape.rotation.x += rotationSpeed;
  } else {
    shape.rotation.x -= rotationSpeed;
  }
  scrollY = currentScrollY;
};

const moveShapeMobile = (e) => {
  const currentY = e.touches[0].clientY;
  const deltaY = currentY - startY;

  if (deltaY < 0) {
    shape.rotation.x += rotationSpeed;
  } else {
    shape.rotation.x -= rotationSpeed;
  }
};

document.body.addEventListener("wheel", (e) => {
  e.preventDefault();
  moveShape();
});
document.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});
document.addEventListener("touchmove", (e) => {
  e.preventDefault();
  moveShapeMobile(e);
});

function animation() {
  requestAnimationFrame(animation);
  renderer.render(scene, camera);
}
export default animation();
