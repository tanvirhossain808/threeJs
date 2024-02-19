import "./style.css"
import gsap from 'gsap';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const canvas = document.querySelector('canvas.webgl')

// // import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
/* Cursor */
const cursor = {
    x: 0,
    y: 0
};
const sizes = {
    // width: 800,
    // height: 600
    width: window.innerWidth,
    height: window.innerHeight

};
window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height)
})
window.addEventListener("mousemove", (e) => {
    // console.log(e.clientY);
    cursor.x = -(e.clientX / sizes.width - .5);
    cursor.y = -(e.clientY / sizes.height - .5);

    // console.log(cursor.y);
});

// // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// const scene = new THREE.Scene();
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh)
// // Sizes
// const sizes = {
//     width: 800,
//     height: 600
// }

// // Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// // scene.add(canvas)
// // const controls = new OrbitControls(camera, renderer.domElement);
// // const loader = new GLTFLoader()
// console.log(canvas);
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })

// camera.position.z = 3
// scene.add(camera)
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

// const geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material);
// const zs = mesh.scale.x = 2
// mesh.position.y = 3
// mesh.position.z = 0
// mesh.position.x = 0
// mesh.scale.z = 3
// mesh.rotation.x = 2
// mesh.rotation.y = 2
// mesh.rotation.z = 1
// const axesHelper = new THREE.AxesHelper(3);
// scene.add(axesHelper)
scene.add(mesh);
// mesh.position.normalize();

// Sizes

const aspetRation = sizes.width / sizes.height

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000);
// const camera = new THREE.OrthographicCamera(-1 * aspetRation, 1 * aspetRation, 1, -1, 0.1, 1000);
// const camera = new THREE.PerspectiveCamera(75, 6000 / 600, 1, 1000);
// console.log(camera);
camera.position.x = .1,
    // camera.position.y = 2,
    camera.position.z = 3,
    // camera.position.y = 1
    // camera.lookAt(mesh.position)
    // camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Assuming your object is at the origin

    scene.add(camera);
/* orbit */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
// controls.target.y = 1;
// controls.update();
// controls.enabled = false


/*  */
// camera.position.z = 2
// mesh.position.x = .22
// camera.position.x = 1
// camera.position.y = .2

// console.log(mesh.position.distanceTo(camera.position))
// console.log(mesh.position.length())
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
window.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen();
    }
    else {
        console.log('object');
        document.exitFullscreen()
    };
})



let time = Date.now();
renderer.setSize(sizes.width, sizes.height);
const clock = new THREE.Clock();
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

const tick = () => {
    // const currentTime = Date.now();
    // const deltaTime = currentTime - time;
    // time = currentTime;
    const elaspedTime = clock.getElapsedTime();

    // console.log('tick');

    // camera.lookAt(mesh.position)
    // console.log(a, 'd');
    // console.log(mesh.rotation.y, 'rotaion');
    // mesh.rotation.y = elaspedTime * Math.PI * 2
    // mesh.position.x = Math.cos(elaspedTime) * 2
    // mesh.rotation.y = Math.sin(elaspedTime);
    // mesh.rotation.y = elaspedTime
    // mesh.position.z = 4
    // mesh.rotation.y += .01
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // console.log(Math.sin(cursor.x * Math.PI * 2) * 3);
    // camera.rotation.x += Math.PI * elaspedTime
    // mesh.position.y = cursor.x * 10
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
    // camera.position.y = cursor.y * 5;
    // camera.lookAt(mesh.position)
    // 

    /* 
    update controls
    */
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick)
    // console.log(mesh.position.length());
};

tick();
// setInterval(() => console.log('hey'), 1000)
// setInterval(() => console.log('oi'), 1000)
// for (let i = 0; i < 100000; i++) {
//     console.log('loop');   
// }