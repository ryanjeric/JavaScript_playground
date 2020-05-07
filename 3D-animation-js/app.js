//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init(){
    container = document.querySelector('.scene')

    // create scene
    scene = new THREE.Scene();

    //setup the camera
    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(0,-3,25);

    //ambientlight
    const ambient = new THREE.AmbientLight(0x404040,2);
    scene.add(ambient);

    //light
    const light = new THREE.DirectionalLight(0xffffff,2)
    light.position.set(10,10,30);
    scene.add(light);

    //Renderer
    renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
    renderer.setSize(container.clientWidth,container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement)

    // load model
    let loader = new THREE.GLTFLoader();
    loader.load('./3d/scene.gltf', (gltf) => {
        scene.add(gltf.scene)
        house = gltf.scene.children[0];
        animate();
    });
}

function animate(){
    requestAnimationFrame(animate);
    house.rotation.z +=0.005;
    renderer.render(scene,camera);
}

init();

function onWindowResize(){
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth,container.clientHeight)
}

window.addEventListener("resize",onWindowResize);