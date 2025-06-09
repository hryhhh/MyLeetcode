/*
 * @lc app=leetcode.cn id=117 lang=typescript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  next: _Node | null;
}

function connect(root: _Node | null): _Node | null {
  if (!root) return root;
  const queue: _Node[] = [root];

  while (queue.length > 0) {
      const size = queue.length;
      
    //pre为可变的变量，每处理一层就一个重新初始化pre
    let preNode: _Node | null = null;
    for (let i = 0; i < size; i++) {
      const curNode: _Node = queue.shift()!;

      if (preNode) {
        preNode.next = curNode;
      }
      preNode = curNode;

      if (preNode.left) queue.push(preNode.left);
      if (preNode.right) queue.push(preNode.right);
    }
    if (preNode) {
      preNode.next = null;
    }
  }
  return root;
}
// @lc code=end
