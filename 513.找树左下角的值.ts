/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
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
function findBottomLeftValue(root: TreeNode | null): number {
//   let res: number = 0;
//   if (!root) return 0;
//   let queue: TreeNode[] = [root];
//   while (queue.length > 0) {
//     let len = queue.length; //缓存当前队列长度
//     for (let i = 0; i < len; i++) {
//       let cur: TreeNode = queue.shift()!;
//       if (i === 0) res = cur.val;
//       cur.left && queue.push(cur.left);
//       cur.right && queue.push(cur.right);
//     }
//   }

  // //递归
    let maxDep: number = 0;
    let res: number=0;
    function maxDepth(root: TreeNode, depth: number): void{
        if (root.left === null && root.right === null) {
            if (depth > maxDep) {
                maxDep = depth;
                res = root.val;
            }
            return;
        }
        if (root.left) maxDepth(root.left, depth + 1);
        if (root.right) maxDepth(root.right, depth + 1);
    }
    if (!root) return res;
    maxDepth(root, 1);
    return res;
  
}
// @lc code=end
