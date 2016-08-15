# deadtree
A dead simple randomly generated tree for Three.js. There are plenty of other tree generators around but I needed one that required less tweaking to work. 

![Tree](https://dl.dropboxusercontent.com/u/21942940/git/deadtree/sample.jpg)

### Example:
```
var size = 5; // thickness
var material = new THREE.MeshPhongMaterial({ color: 0x555555 }); // material
var children = 5;  // branches

var tree = deadTree(size, material, children);
scene.add(tree);
```

Every branch pivot point can be found under resulting object's ```.branchPivots``` property. It can be used to create a wind effect, for example:
```
var wind = 0;
var clock = new THREE.Clock();

function animate() {
  wind += clock.getDelta() + Math.random();
  for (b in tree.branchPivots) {
    tree.branchPivots[b].rotation.z += Math.cos(wind * Math.random()) * 0.0005;
  }
}
```

Certain things like shrinkage modifier etc. are hard-coded but you can tweak and mess around with the code. If you come up with a great way to improve this, feel free to contribute!
