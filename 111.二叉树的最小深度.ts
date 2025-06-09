/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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
function minDepth(root: TreeNode | null): number {
    let level: number = 0;
    if (!root) return level;
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        level++;
        const size = queue.length;
        for (let i = 0; i < size; i++){
            const curNode = queue.shift()!;
            //当前节点的左右子节点都为空才是最小深度
            if (!curNode.left && !curNode.right) return level;
            
            curNode.left && queue.push(curNode.left);
            curNode.right && queue.push(curNode.right);

        }
    }
    return level;
};
// @lc code=end

