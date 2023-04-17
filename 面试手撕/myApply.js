Function.prototype.myApply = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
      throw new TypeError("Error");
    }
    let result = null;
    // 判断 context 是否存在，如果未传入则为 window
    context = context || window;
    // 将函数设为对象的方法
    context.fn = this;
    // 调用方法，使用参数列表传参
    if (arguments[1]) {
      result = context.fn(...arguments[1]);
    } else {
      result = context.fn();
    }
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

fn.myApply(obj, [1, 2, 3, 4]);
// { myname: '张三', fn: [Function: fn] } [ 1, 2, 3, 4 ]




Function.prototype.myApply = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('error')
    }
    let result = null
    context = context || window
    context.fn = this
    if(arguments[1]){
        result = context.fn(...arguments[1])
    }else{
        result = context.fn()
    }
    delete context.fn
    return result
}

Function.prototype.myCall = function(context){
    if(typeof this !=='function'){
        throw new TypeError('error')
    }
    let result = null, args = [...arguments].slice(1)
    context = context || window
    context.fn = this
    result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myBind = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('error')
    }
    let args = [...arguments].slice(1)
    let fn = this
    return function Fn(){
        return fn.apply(
            typeof this === 'function' ? this : Fn
        , args.concat(...arguments))
    }

}