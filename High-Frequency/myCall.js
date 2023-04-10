Function.prototype.myCall = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    // 获取参数
    let args = [...arguments].slice(1);
    let result = null;
    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    // 调用函数，使用参数列表传参
    result = context.fn(...args);
    // 将属性删除
    delete context.fn;
    return result;
};

function fn(...args) {
    console.log(this, args);
}
let obj = {
    myname: "张三"
}

fn.myCall(obj, 1, 2, 3, 4);
// { myname: '张三', fn: [Function: fn] } [ 1, 2, 3, 4 ]