/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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
function levelOrderBottom(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    if (!root) return res;
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const size = queue.length;
        const curArr: number[] = [];
        for (let i = 0; i < size; i++){

            const curNode: TreeNode = queue.shift()!;
            
            curArr.push(curNode.val);

            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
        }
        res.push(curArr);
        
    }
    return res.reverse();
};
// @lc code=end

