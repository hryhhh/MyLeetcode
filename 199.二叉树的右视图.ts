/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
function rightSideView(root: TreeNode | null): number[] {
    const res: number[] = [];
    if (!root) return res;
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let rightNode: TreeNode | null = null;
        for (let i = 0; i < levelSize; i++){
            const curNode = queue.pop()!;
            rightNode = curNode;

            //将子节点添加到数组前面
            curNode.left && queue.unshift(curNode.left);
            curNode.right && queue.unshift(curNode.right);
        }
        
        if (rightNode !== null) {
          res.push(rightNode.val);
        }
        
        
    }

    return res;
};
// @lc code=end

