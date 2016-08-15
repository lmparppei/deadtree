# deadtree
A dead simple randomly generated tree for Three.js.

![Tree](https://dl.dropboxusercontent.com/u/21942940/git/deadtree/sample.jpg)

### Example:
```
var size = 5; // thickness
var material = new THREE.MeshPhongMaterial({ color: 0x555555 }); // material
var children = 5;  // branches

var tree = deadTree(size, material, children);
scene.add(tree);
```

Every branch pivot point can be found under resulting objects .branchPivots property. You can use it to create something like a wind effect:
```
var tree = deadTree(size, material, children);
scene.add(tree)
function animate() 
```
