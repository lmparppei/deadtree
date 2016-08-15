/*

DEADTREE 1.1

A dead simple randomly generated tree for Three.js.
Some parameters (such as shrink modifier) are hard-coded but you can
tweak them yourself.

Example:
var material = new THREE.MeshPhongMaterial({ color: 0x555555 });
var tree = deadTree(5, material, 5);
scene.add(tree);

*/

function deadTree (size, material, children) {
    var sizeModifier = .65;
    var branchPivots = [];

    var tree = createBranch(size, material, children, false, sizeModifier)
    tree.branchPivots = branchPivots;
    return tree;

    // Recursive branch function
    function createBranch (size, material, children, isChild, sizeModifier) {
        var branchPivot = new THREE.Object3D();
        var branchEnd = new THREE.Object3D();

        branchPivots.push(branchPivot);

        var length = Math.random() * (size * 10) + size * 5;
        
        if (children == 0) { var endSize = 0; } else { var endSize = size * sizeModifier; }

        var branch = new THREE.Mesh(new THREE.CylinderGeometry(endSize, size, length, 5, 1, true), material);

        branchPivot.add(branch);
        branch.add(branchEnd);

        branch.position.y = length / 2;
        branchEnd.position.y = length / 2 - size * .4;
        
        if (isChild) {
            branchPivot.rotation.z += Math.random() * 1.5 - sizeModifier * 1.05;
            branchPivot.rotation.x += Math.random() * 1.5 - sizeModifier * 1.05;
        } else {
            branch.castShadow = true;
            branch.receiveShadow = true;

            branchPivot.rotation.z += Math.random() * .1 - .05;
            branchPivot.rotation.x += Math.random() * .1 - .05;  
        }

        if (children > 0) {
            for (var c=0; c<children; c++) {
                var child = createBranch(size * sizeModifier, material, children - 1, true, sizeModifier);
                branchEnd.add(child);
            }
        }

        return branchPivot;
    }
}