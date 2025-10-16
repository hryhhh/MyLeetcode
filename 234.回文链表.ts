/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface ListNode {
    val: number
    next: ListNode | null
}
function isPalindrome(head: ListNode | null): boolean {
    //复制到数组
    const arr: number[] = []
    while (head) {
        arr.push(head.val)
        head=head.next
        
    }
    let left = 0, right = arr.length - 1
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false
        }
        left++
        right--
    }
    return true
};
// @lc code=end

