/*给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：
    1.左括号必须用相同类型的右括号闭合。
    2.左括号必须以正确的顺序闭合。
    3.每个右括号都有一个对应的相同类型的左括号。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var isValid = function (s) {
    var stack = new Array();
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack.push(s[i]);
                break;
            case ')':
                if (stack.length === 0 || stack[stack.length - 1] !== '(') {
                    return false;
                }
                stack.pop();
                break;
            case '[':
                stack.push(s[i]);
                break;
            case ']':
                if (stack.length === 0 || stack[stack.length - 1] !== '[') {
                    return false;
                }
                stack.pop();
                break;
            case '{':
                stack.push(s[i]);
                break;
            case '}':
                if (stack.length === 0 || stack[stack.length - 1] !== '{') {
                    return false;
                }
                stack.pop();
                break;
        }
    }
    return !stack.length;
};
console.log(isValid('(]'))
