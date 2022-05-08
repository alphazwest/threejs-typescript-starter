import * as utils from "./utils";
import BasicScene from "./BasicScene";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


// sets up the basic elements of the scene
let scene = new BasicScene();
scene.initialize();

// sets up the camera's orbital controls
let orbital = new OrbitControls(scene.camera, scene.renderer.domElement)

// Configures window resizing to scale canvas
utils.addWindowResizing(scene.camera, scene.renderer);

// loops updates
function loop(){
    scene.camera.updateProjectionMatrix();
    scene.renderer.render(scene, scene.camera);
    orbital.update()
    requestAnimationFrame(loop);
}

// runs a continuous loop
loop()

