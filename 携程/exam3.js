function getGoodStr(str) {
    let left = 0, right = 0;
    let ans = 0;
    for (; left < str.length; left++) {
        let curPrefix = 0;
        if (str[left] === '1') {
            continue;
        } else {
            for (right = left; right < str.length; right++) {
                if(str[right]==='1'){
                    curPrefix--;
                }else{
                    curPrefix++;
                }
                if(curPrefix===0){
                    break;
                }
                ans++
            }
        }
    }
    console.log(ans);
}


getGoodStr('10010')