Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    // 获取参数
    let args = [...arguments].slice(1);
    let fn = this;
    return function Fn() {
        // 根据调用方式，传入不同绑定值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        );
    };
};

function fn(...args) {
    console.log(this, args);
}
let obj = {
    myname: "张三"
}

const bindFn = fn.bind(obj, 1, 2);
bindFn(3, 4);
// { myname: '张三' } [ 1, 2, 3, 4 ]

