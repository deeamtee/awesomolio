import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const sizes = { width: window.innerWidth, height: window.innerHeight }
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(0,0.8,2);

scene.add(camera);

const canvas = document.getElementById('avatar3d');
const renderer = new THREE.WebGL1Renderer({ alpha: true, antialias: true, canvas });
renderer.setSize(sizes.width/1.5, sizes.height /1.5);

const loader = new GLTFLoader();

loader.load('../avatar3d.glb', (model) => {
    model.scene.position.y = -0.95;
    model.scene.scale.set(0.95, 0.95, 0.95)
    scene.add(model.scene)
})

const aLight = new THREE.AmbientLight(0x404040, 1.6);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF, 1.6);
pLight.position.set(-0.1, 0.9, 0.9);
scene.add(pLight)

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.minPolarAngle = Math.PI/4;
controls.maxPolarAngle = Math.PI/2;

function animate () {
    requestAnimationFrame(animate);
    controls.update(); // update controls
    renderer.render(scene, camera)
}

animate();