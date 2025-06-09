/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;

//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }
function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    if (!root) return res;
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const curArr: number[] = [];//当前层的节点数组
        const size = queue.length;

        for (let i = 0; i < size; i++){
            const curNode = queue.shift()!;//队列弹出的第一个节点
            curArr.push(curNode.val);//将当前节点的值存储到当前层的节点数组

            //将该节点的左右节点也压入队列
            if (curNode.left) {
                queue.push(curNode.left);
            }
            if (curNode.right) {
                queue.push(curNode.right);
            }

        }
        res.push(curArr);
    }

    return res;
};
// @lc code=end

