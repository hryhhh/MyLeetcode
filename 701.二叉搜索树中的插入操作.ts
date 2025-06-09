/*
 * @lc app=leetcode.cn id=701 lang=typescript
 *
 * [701] 二叉搜索树中的插入操作
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
// interface TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
// }
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root == null) {
        return new TreeNode(val);
    }
    // if (root.val > val) {
    //     //若val小，则继续和根节点的左子树进行比较
    //     root.left = insertIntoBST(root.left, val);
    // } else {
    //     root.right = insertIntoBST(root.right, val);
    // }
    // return root;

    //迭代
    let cur: TreeNode | null = root;
    let pre: TreeNode = root;
    while (cur!==null) {
        pre = cur;
        if (cur.val > val) {
            cur = cur.left;
        } else {
            cur = cur.right;
        }
    }
    if (pre.val > val) {
        pre.left = new TreeNode(val);

    } else {
        pre.right = new TreeNode(val);
    }
    return root;

};
// @lc code=end

