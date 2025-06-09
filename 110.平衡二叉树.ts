/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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
function isBalanced(root: TreeNode | null): boolean {
    function getDepth(root: TreeNode | null): number{
      if (!root) return 0;
      let curNode: TreeNode = root;

      let leftDep = getDepth(curNode.left);
      if (leftDep === -1) return -1;
      //如果发现左子树不平衡，直接返回 -1
      //这会导致当前节点的 getDepth 也返回 -1，从而使得父节点也判断为不平衡。这个过程会向上递归，直到根节点，最终确定整棵树是否平衡。
      let rightDep = getDepth(curNode.right);
      if (rightDep === -1) return -1;
      if (Math.abs(leftDep - rightDep) > 1) return -1;
      return 1 + Math.max(leftDep, rightDep);
    
    }
    return getDepth(root) !== -1;   
};
// @lc code=end

