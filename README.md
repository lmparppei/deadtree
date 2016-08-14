# deadtree
A dead simple randomly generated tree for Three.js.

![Tree](https://dl.dropboxusercontent.com/u/21942940/git/deadtree/sample.jpg)

Note that the first object in hierarchy is an Object3D. All branches are children to it in tree-like recursive manner, all with their own Object3D pivot so you can control the rotation of individual branches easily.

### Example:
```
var size = 5; // thickness
var material = new THREE.MeshPhongMaterial({ color: 0x555555 }); // material
var children = 5;  // branches

var tree = deadTree(size, material, children);
scene.add(tree);
```
