function throttle(fn, wait){
    let timer = null;
    return function(){
        if(timer){
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(this,arguments)
            timer = null;
        }, wait);
    }
}