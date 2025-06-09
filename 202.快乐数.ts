/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
    const numSum = (n: number): number => {

        // //普通求和
        // let sum: number = 0;
        // while (n) {
        //     sum += (n % 10)*(n%10);
        //     n =Math.floor(n/10);//消除浮点数
        // }
        // return sum;

        //reduce求和
        let sum: number = 0;
        //将n转换为字符串，并分割成字符数组
        let arr = ('' + (sum || n)).split('');
        //遍历字符数组，将每个字符转换为数字，求平方和
        sum = arr.reduce((total:number, n:string) => {//total为累加器，初始值为0，由reduce第二个参数指定
            return total + Number(n) * Number(n);
        },0)
        return sum;
    }
    let storeSet: Set<number> = new Set();
    while (n !== 1 && !storeSet.has(n)) {
        storeSet.add(n);
        n = numSum(n);
    }
    return n === 1;

   



};
// @lc code=end

