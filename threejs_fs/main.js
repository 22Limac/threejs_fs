import './style.css'

import * as THREE from 'three';
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
let mixer;
var loading;
const clock = new THREE.Clock();

const canvas = document.querySelector('#bg');
const scene = new THREE.Scene();
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const loader = new GLTFLoader()
loader.load('swimming_animation.glb', function(gltf){
  console.log(gltf);
  const root = gltf.scene;
  root.scale.set(0.8,0.8,0.8)
  root.rotation.set(-0.50,0.75,-0.0);
  root.position.set(-0.5,0.5,0)
  scene.add(root);
  
  mixer = new THREE.AnimationMixer(gltf.scene.children[0]);
  mixer.clipAction(gltf.animations[0]).play();

}, function(xhr){
  console.log(xhr.loaded/xhr.total*100);
  loading = xhr.loaded/xhr.total*100;
}, function(error){
  console.log("Error occured")
})

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2,2,5);
scene.add(light);

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100);
camera.position.set(0,1,2);
scene.add(camera);

const renderer = new THREE.WebGL1Renderer({
  canvas: canvas, alpha: true
})

renderer.setSize(400, 300);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = false;

console.log(renderer);

const animate = () =>{
  
  requestAnimationFrame(animate);
  var delta = clock.getDelta();
  mixer.update(delta);
  
  renderer.render(scene, camera);
}

animate();