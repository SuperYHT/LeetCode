/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 
 * https://leetcode.cn/problems/minimum-window-substring/
 */

var minWindow = function(s, t){
    let target = {}, window={},left=0,right=0;
    for(let w of t){
        target[w] = (target[w]||0)+1;
    }
    let match = 0;
    let  start = 0, end = 0,len = Number.MAX_SAFE_INTEGER;
    while(right<s.length){
        let c = s[right];
        right++;
        if(target[c]){
            window[c]= (window[c]||0)+1;
            if(window[c] === target[c]){
                match++;
            }
        }
        //右窗口暂时停止前进，左窗口开始收缩
        while(match === Object.keys(target).length){
            if(right - left < len){
                start = left;
                end = right;
                len = right-left;
            }
            let rm = s[left];
            //左移窗口
            left++;
            if(target[rm]){
                if(target[rm] === window[rm]){
                    match -- ;
                }
                window[rm]=  window[rm]-1
            }
       
        }
    }
    console.log(len ===  Number.MAX_SAFE_INTEGER? "":s.slice(start, end))
    return len ===  Number.MAX_SAFE_INTEGER? "":s.slice(start, end)
}

minWindow("ADOBECODEBANC", "ABC");