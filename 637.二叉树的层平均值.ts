/*
 * @lc app=leetcode.cn id=637 lang=typescript
 *
 * [637] 二叉树的层平均值
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
function averageOfLevels(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const size = queue.length;
        let sum: number = 0;
        let num: number = queue.length;
        for (let i = 0; i < size; i++){
            const curNode = queue.shift()!;
            
            sum += curNode.val;
            curNode.left && queue.push(curNode.left);
            curNode.right && queue.push(curNode.right);


        }
        res.push(sum/num);
    }
    return res;
};
// @lc code=end

