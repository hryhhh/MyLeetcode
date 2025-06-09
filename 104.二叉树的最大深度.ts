/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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
function maxDepth(root: TreeNode | null): number {
    var level: number = 0;
    if (!root) return level;
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++){
            const curNode: TreeNode = queue.shift()!;
            curNode.left && queue.push(curNode.left);
            curNode.right && queue.push(curNode.right);
            
        }
        level++;
    }
    return level;
};
// @lc code=end

