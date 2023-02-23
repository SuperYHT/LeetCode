var singleNumber = function(nums) {
    let map = new Map();
    let single = 0
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],true)
        }else{
            map.set(nums[i],false)
        }
    }
    map.forEach((key,val)=>{
        if(val==true){
            single = key
        }
    })
    console.log(single)
    return single;
};
singleNumber([4,1,2,1,2])