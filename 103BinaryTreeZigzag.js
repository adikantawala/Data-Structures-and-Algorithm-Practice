// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let final = []
    dfs(root, 0);
    return final;

    function dfs(node, level){
        if(!node) return
        if(!final[level]) final[level] = []
        if(level % 2 === 0){
            final[level].push(node.val)
        } else{
            final[level].unshift(node.val)
        }
        dfs(node.left, level+1)
    dfs(node.right, level+1)
    }

};
