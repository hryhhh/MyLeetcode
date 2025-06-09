/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
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
        let preNode: _Node | null = null;
        for (let i = 0; i < size; i++) {
            const curNode: _Node = queue.shift()!;

            if (preNode) {
                preNode.next = curNode;
            }
            preNode = curNode;
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
            
        }
        if (preNode) {
            //前面每次迭代时都会将pre赋值为cur，当遍历到该层的最后一个节点时为pre
            preNode.next = null;
        }
       
    }
    return root;
};
// @lc code=end

