# deadtree
A dead simple randomly generated tree for Three.js. Nothing fancy but (usually) works.

Example:
```
var size = 5; // thickness
var material = new THREE.MeshPhongMaterial({ color: 0x555555 }); // material
var children = 5;  // branches

var tree = deadTree(size, material, children);
scene.add(tree);
```
