/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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
//   left?: TreeNode;
//   right?: TreeNode;
// }
function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];

  let res: number[] = [];
  //模拟栈
  const stack: TreeNode[] = [];
  //初始化指向根节点
  let cur: TreeNode = root;

  //先将根节点压入栈，作为遍历起点
  stack.push(cur);
  while (stack.length > 0) {
    //弹出栈顶元素
    cur = stack.pop()!;
    res.push(cur.val);
    //将右节点和左节点依次压入栈
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return res;
}
// @lc code=end
