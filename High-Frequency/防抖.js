function debounce(fn, wait){
    let timer = null;
    return function(){
        if(timer){
            clearsetTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.call(this, arguments)
        }, wait);
    }
}