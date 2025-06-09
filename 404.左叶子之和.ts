/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
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
    val: number
    left: TreeNode | null
    right: TreeNode | null
}
function sumOfLeftLeaves(root: TreeNode | null): number {
    // //递归
    // if (!root) return 0;
    // let value: number = 0;
    // if (root.left !== null && !root.left.left && !root.left.right) {//判断是否为左叶子节点
    //     value = root.left.val;
    // }
    // return value + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);

    //迭代
    let res: number = 0;
    if (!root) {
        return 0;
    }
    let stack: TreeNode[] = [root];
    while (stack.length > 0) {
        let cur: TreeNode = stack.pop()!;
        if (cur.left !== null && !cur.left.left && !cur.left.right) {
            res += cur.left.val;
        }
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
        
    }
    return res;
};
// @lc code=end

