/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    const operatorMap:Map<string,(a:number,b:number)=>number> = new Map([
       ['+', (a, b) => a + b],
       ['-', (a, b) => a - b],  
       ['*', (a, b) => a * b],
        ['/', (a, b) => Math.trunc(a / b)],// 注意这里要向零取整
    ])
    let a:number, b:number;
    for (let t of tokens) {
        
        if (operatorMap.has(t)) {
            b = stack.pop()!;
            a = stack.pop()!;
            const operator = operatorMap.get(t)!;
            stack.push(operator(a, b));
        } else {
            stack.push(Number(t));
        }
    }
    return stack.pop()!;
};
// @lc code=end

