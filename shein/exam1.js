function setUppercase(str){
    const arr = str.split('-');
    let ans = '';
    let i = 0;
    for(i=0; i<arr.length;i++){
        if(arr[i]===''){
            continue;
        }else{
            break;
        }
    }
    ans += arr[i];
    i++;
    for(; i< arr.length;i++){
        const prefix =  arr[i][0].toUpperCase()
        ans +=  prefix
        for (let j = 1; j < arr[i].length; j++) {
            ans += arr[i][j]
        }
      
    }
    console.log(ans)
}
setUppercase('-webkit-border-image')
setUppercase('font-size')
