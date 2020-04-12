/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(node) {
    let maxDiameter = 0;

    (function traverseDFS(node) {
        if(node === null) return 0;
        if(!node.left && !node.right) return 1;

        let leftNode = traverseDFS(node.left);
        let rightNode = traverseDFS(node.right);

        maxDiameter = Math.max(maxDiameter, leftNode + rightNode);
        return 1 + Math.max(leftNode, rightNode);
    })(node);

    return maxDiameter;
};
