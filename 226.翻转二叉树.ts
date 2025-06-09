/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  // //1.层序遍历
  // const queue: TreeNode[] = [root];

  // while (queue.length > 0) {
  //     const curNode: TreeNode = queue.shift()!;

  //     const temp = curNode.left;
  //     curNode.left = curNode.right;
  //     curNode.right = temp;

  //     if (curNode.left) {
  //       queue.push(curNode.left);
  //     }
  //     if (curNode.right) {
  //       queue.push(curNode.right);
  //     }
  // }

  // //2.递归（前序遍历）
  // [root.left, root.right] = [root.right, root.left];
  // invertTree(root.left);
  // invertTree(root.right);

  //3.迭代（后序遍历）
  const stack: (TreeNode | null)[] = [root];
  let curNode: TreeNode | null;
  while (stack.length > 0) {
    curNode = stack.pop()!;
    if (curNode) {
      stack.push(curNode);
      stack.push(null);
        
        [curNode.left, curNode.right] = [curNode.right, curNode.left];
        
      if (curNode.right) {
        stack.push(curNode.right);
      } 
      if (curNode.left) {
        stack.push(curNode.left);
      }
      
    } else {
      curNode = stack.pop()!;
    }
  }

  return root;
}
// @lc code=end
