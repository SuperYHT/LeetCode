/**
 * @param {string} s
 * @return {number}
 */
//暴力求解
 var lengthOfLongestSubstring_1 = function(s) {
    const charMap = new Map();
    let max_length = 0;
    if(s.length == 0){
        return 0;
    }  
    for(var i = 0 ; i< s.length ; i++){
        temp = "";
        charMap.clear()
        for(var j = i  ; j < s.length ; j++){
            if(!charMap.has(s.charAt(j))){
                charMap.set(s.charAt(j), j);
                temp += s.charAt(j);    
            }else{
                break;
            }
        }
        max_length = (temp.length > max_length) ? temp.length : max_length;
    }
    return max_length;
};

//使用滑动窗口 map跳转
var lengthOfLongestSubstring_2 = function(s) {
    const charMap = new Map();
    let max_length = 0;
    if(s.length == 0){
        return 0;
    }  
    for(var end = 0 , start = 0; end< s.length ; end++){
        let c = s.charAt(end);
        if(charMap.has(c)){
            start = Math.max(charMap.get(c) , start);
        }
        charMap.set(c, end + 1);
        max_length = Math.max(max_length, end-start+1);
    }
    return max_length;
};



s1 = "abcabcbb"
s2 = "aab"
s3 = "dvdf"
result = lengthOfLongestSubstring(s1)
console.log(result)