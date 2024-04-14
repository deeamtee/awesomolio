import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import avatar3d from '/avatar3d.glb';

const scene = new THREE.Scene();
const container = document.getElementById('3d-model-container');

const sizes = { width: window.innerWidth, height: window.innerHeight }
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(0,0.8,2);

scene.add(camera);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
const canvas = renderer.domElement;
container.append(canvas);

const loader = new GLTFLoader();

loader.load(avatar3d, (model) => {
    model.scene.position.y = -0.8;
    model.scene.scale.set(0.83, 0.83, 0.83)
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

function onWindowResize() {
    const width = container.clientWidth * 0.9;
    const height = container.clientHeight;

    camera.aspect = width / height;
    renderer.setSize(width, height);
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', onWindowResize, false);
window.addEventListener('load', onWindowResize, false);