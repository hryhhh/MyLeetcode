/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */
interface _Node{
    val: number;
    children: _Node[];
}

function levelOrder(root: _Node | null): number[][] {
    const res: number[][] = [];
    if (!root) return res;

    const queue: _Node[] = [root];
    while (queue.length > 0) {
        
        const size = queue.length;

        const curArr: number[] = [];
        for (let i = 0; i < size; i++){
            const curNode = queue.shift()!;
            curArr.push(curNode.val);
            //扩展运算符，将数组中的每个元素提取出来再放入队列
            queue.push(...curNode.children);
        }
        res.push(curArr);
    }
    return res;
};
// @lc code=end

