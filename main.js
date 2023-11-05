import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1, 
    1000
    );
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const edges = new THREE.EdgesGeometry(geometry);
const cameraPosition = new THREE.Vector3(0, 0, 5);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) ); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00,  });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
scene.add(line);
camera.position.z = 5;
let step = 0;

addEventListener("keypress", e => {
    if (e.key === "w") {
        camera.position.z -= 0.1;
    }
    if (e.key === "s") {
        camera.position.z += 0.1;
    }
    if (e.key === "a") {
        camera.position.x -= 0.1;
    }
    if (e.key === "d") {
        camera.position.x += 0.1;
    }
    
})

addEventListener("keydown", e => {
    console.log(e.key);
    if (e.key === "ArrowDown") {
        camera.rotateX(-0.1);
    }
    if (e.key === "ArrowUp") {
        camera.rotateX(0.1);
    }
    console.log(step)
    if (e.key === "ArrowLeft") {
        step -=0.1;
        const moveOnZ = 5 * Math.cos(step);
        const moveOnX =  5 * Math.sin(step);
        console.log(moveOnX, moveOnZ)
        camera.position.z = moveOnZ
        camera.rotateY(-0.1);
        camera.position.x = moveOnX;
    }
    // if (e.key === "ArrowRight") {
    //     camera.rotateY(-0.1);
    // }
    if (e.key === "ArrowRight") {
        step +=0.1;
        const moveOnZ = 5 * Math.cos(step);
        const moveOnX =  5 * Math.sin(step);
        console.log(moveOnX, moveOnZ)
        
        // camera.rotateY(-0.1);
        camera.position.z = moveOnZ
        camera.rotateY(0.1);
        camera.position.x = moveOnX;
    }
})

function rotate(axis, angle) {
    cube.rotation[axis] += angle;
    line.rotation[axis] += angle;
}


function animate() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // line.rotation.x += 0.01;
    // line.rotation.y += 0.01;
    // rotate("x", 0.01);
    // rotate("y", 0.01);
    
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();