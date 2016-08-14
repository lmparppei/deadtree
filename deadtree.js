/*

DEAD TREE 1.0

A simple randomly generated tree for Three.js.
Results vary quite a bit.

Example:
var material = new THREE.MeshPhongMaterial({ color: 0x555555 });
var tree = deadTree(5, material, 5);
scene.add(tree);

*/

function deadTree (size, material, children) {
    // Recursive branch function
    function createBranch (size, material, children, isChild) {
        var branchPivot = new THREE.Object3D();
        var branchEnd = new THREE.Object3D();

        var length = Math.random() * (size * 10) + size * 5;
        
        if (children == 0) { var endSize = 0; } else { var endSize = size * .75; }

        var branch = new THREE.Mesh(new THREE.CylinderGeometry(endSize, size, length, 5, 1, true), material);

        branchPivot.add(branch);
        branch.add(branchEnd);

        branch.position.y = length / 2;
        branchEnd.position.y = length / 2;
        
        if (isChild) {
            branchPivot.rotation.z += Math.random() * 1.5 - .75;
            branchPivot.rotation.x += Math.random() * 1.5 - .75;
        } else {
            branch.castShadow = true;
            branch.receiveShadow = true;

            branchPivot.rotation.z += Math.random() * .2 - .1;
            branchPivot.rotation.x += Math.random() * .2 - .1;  
        }

        if (children > 0) {
            for (var c=0; c<children; c++) {
                var child = createBranch(size * .75, material, children - 1, true);
                branchEnd.add(child);
            }
        }

        return branchPivot;
    }

    var tree = createBranch(size, material, children, false)
    return tree;
}