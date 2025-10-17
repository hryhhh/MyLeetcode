/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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
function sortList(head: ListNode | null): ListNode | null {
    // 归并排序
    if (!head || !head.next) return head
    let slow:ListNode| null = head, fast:ListNode| null = head.next
    // 找到中间节点
    while (fast && fast.next) {
        slow = slow!.next
        fast = fast!.next.next
    }
    // 断开链表，将mid指向后半部分
    const mid:ListNode| null = slow!.next
    slow!.next = null

    // 排序左右两部分
    const left:ListNode | null =sortList(head)
    const right: ListNode | null = sortList(mid)
    // 合并两个有序链表
    const dummy:ListNode= { val: 0, next: null }
    let cur:ListNode= dummy
    let l:ListNode | null = left
    let r: ListNode | null = right
    
    while (l && r) {
        if(l.val < r.val) {
            cur.next = l
            l = l.next
        } else {
            cur.next = r
            r = r.next
        }
        cur = cur.next
    }
    cur.next = l ? l : r// 合并剩余节点
    return dummy.next
};
// @lc code=end

