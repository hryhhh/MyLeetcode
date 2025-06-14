/*
 * @lc app=leetcode.cn id=700 lang=typescript
 *
 * [700] 二叉搜索树中的搜索
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    // if (root === null) return null;
    // if (root.val === val) return root;
    // if (val > root.val) return searchBST(root.right,val);
    // return searchBST(root.left, val);

    //迭代
    let curNode: TreeNode|null = root;
    while (curNode) {
        if (curNode.val === val) return curNode;
        if (val > curNode.val) {
            curNode = curNode.right;
        } else {
            curNode = curNode.left;
        }
            
    }
    return null;
    
};
// @lc code=end

