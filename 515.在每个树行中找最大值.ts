/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
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
interface TreeNode{
    val: number,
    left: TreeNode | null,
    right: TreeNode | null
}

function largestValues(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;

    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const size = queue.length;
        const curArr: number[] = [];

        for (let i = 0; i < size; i++){
            const curNode: TreeNode = queue.shift()!;
            curArr.push(curNode.val);

            curNode.left && queue.push(curNode.left);
            curNode.right && queue.push(curNode.right);
        }
        const maxNode: number = Math.max(...curArr);
        res.push(maxNode);
    }
    return res;
};
// @lc code=end

