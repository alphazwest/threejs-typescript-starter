import * as THREE from 'three';


// Resize the canvas on window resize
export function addWindowResizing(camera: THREE.PerspectiveCamera, renderer: THREE.Renderer){

    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
}
