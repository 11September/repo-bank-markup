// window.onload = function( ) {
//
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera( 55, window.innerWidth/window.innerHeight, 0.1, 10000 );
//
//     var renderer = new THREE.WebGLRenderer({ antialias:true, alpha: true });
//
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     renderer.setClearColor( 0x000000, 0 );
//     document.body.appendChild( renderer.domElement);
//     camera.position.z = 70;
//     camera.position.y = 40;
//     camera.position.x=0;
//
//     var light = new THREE.DirectionalLight( 0xfcf9e8, 1 );
//     scene.add(light);
//
//     var ambiColor = "#cbc9bb";
//     var ambientLight = new THREE.AmbientLight(ambiColor);
//     scene.add(ambientLight);
//
//     var manager = new THREE.LoadingManager();
//
//     var loader  = new THREE.ImageLoader( manager );
//
//     manager.onProgress = function ( item, loaded, total ) {
//
//     };
//
//     var textureBody = new THREE.Texture();
//     var textureHead = new THREE.Texture();
//
//     var onProgress = function ( xhr ) {
//         if ( xhr.lengthComputable ) {
//             var percentComplete = xhr.loaded / xhr.total * 100;
//             console.log( Math.round(percentComplete, 2) + '% downloaded' );
//         }
//     };
//
//
//     var meshes = [];
//
//     var objLoader = new THREE.OBJLoader();
//
//     objLoader.load( 'model/bb8.obj', function ( object ) {
//
//         console.log(object);
//
//         object.traverse( function ( child )
//         {
//             if ( child instanceof THREE.Mesh )
//             {
//                 meshes.push(child);
//             }
//         });
//
//         var head = meshes[0];
//         var body = meshes[1];
//
//
//
//         console.log('head', head);
//
//         scene.add(head);
//         scene.add(body);
//
//     }, onProgress);
//
//     controls = new THREE.TrackballControls( camera );
//
//     controls.rotateSpeed = 10.0;
//     controls.zoomSpeed = 3.2;
//     controls.panSpeed = 6.8;
//
//     var render = function () {
//         requestAnimationFrame( render );
//         controls.update();
//         renderer.render(scene, camera);
//     };
//
//
//
//     render();
//
// };