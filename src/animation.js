import "./style.css";
import * as THREE from "three";
//import { OrbitControls } from "three/addons/controls/orbitControls";

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
  color: 0xfa829e, // Pink color
  metalness: 0.7, // Fully metallic for a shiny appearance
  roughness: 0.6, // Adjust the roughness for shininess
  transparent: true, // Enable transparency
  opacity: 1,
});

const shape = new THREE.Mesh(geometry, material);

scene.add(shape);

const pointLight1 = new THREE.PointLight(0xf7f0e6, 90);
pointLight1.position.set(5, 0, 17);
const pointLight2 = new THREE.PointLight(0xf7f0e6, 90);
pointLight2.position.set(-10, 0, -15);
const ambientLight = new THREE.AmbientLight(0xf7f0e6);
scene.add(pointLight1, pointLight2, ambientLight);

// const lightHelper1 = new THREE.PointLightHelper(pointLight1);
// const lightHelper2 = new THREE.PointLightHelper(pointLight2);
// scene.add(lightHelper1, lightHelper2);
//const controls = new OrbitControls(camera, renderer.domElement);

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
const moveShape = () => {
  const currentScrollY = window.scrollY;
  const scrollDirection = currentScrollY > scrollY ? "down" : "up";
  const rotationSpeed = 0.03;
  if (scrollDirection === "up") {
    shape.rotation.x += rotationSpeed;
    // shape.rotation.y += rotationSpeed;
    // shape.rotation.z += rotationSpeed;
  } else {
    shape.rotation.x -= rotationSpeed;
    // shape.rotation.y -= rotationSpeed;
    // shape.rotation.z -= rotationSpeed;
  }
  scrollY = currentScrollY;
};

const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

document.body.addEventListener("wheel", moveShape);
document.addEventListener("touchmove", moveShape);
window.addEventListener("resize", handleResize);

function animation() {
  requestAnimationFrame(animation);
  //controls.update();
  renderer.render(scene, camera);
}
export default animation();
