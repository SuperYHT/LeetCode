//普通深拷贝
function deepCopy(obj){
  if(!obj || typeof obj !== 'object') return obj
  let cloneObj = Array.isArray(obj)? [] : {}
  for(let key of obj){
    if(obj.hasOwnProperty(key)){
      cloneObj[key] = typeof obj === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return cloneObj
}

//解决环引用的深拷贝
function deepClone(obj, hash = new WeakMap()) {
    if (obj instanceof Map) return new Map([...obj])
    if (obj instanceof Set) return new Set([...obj])
    if (obj instanceof Function) return new Function("return" + obj.toString())()
    if (obj === null || typeof obj !== "object") return obj
    //解决循环引用
    if (hash.get(obj)) return hash.get(obj)

    let cloneObj = new obj.constructor();
    hash.set(obj, cloneObj)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash)
        }
    }
    return cloneObj;
}


//数组乱序
function randomArray1(list){
    return list.sort(()=> Math.random()-0.5)
}

function randomArray2(list){
  for(let i = list.length-1 ;i>=0;i--){
    let randomIndex = Math.floor(Math.random()*(i+1))
    [list[i], list[randomIndex]] = [list[randomIndex] , list[i]]
  }
  return list
}


//数组打平
function flattenArray1(list){
  while(list.some((item)=>Array.isArray(item))){
    list  =  [].concat(...list)
  }
  return list
}

function flattenArray2(list){
  list = list.toString().split('.')
  for (let i = 0; i < list.length; i++) {
    list[i] = Number(list[i])
  }
  return list
}

function flattenArray3(list){
  let ans = []
  for(let i =0;i<list.length;i++){
    if(Array.isArray(list[i])){
      ans = ans.concat(flattenArray2(list[i]))
    }else{
      ans.push(list[i])
    }
  }
  return ans
}

//数组去重
function removeDuplicate1(list){
  return Array.from(new Set(list))
}

function removeDuplicate2(list){
  for(let i =0 ;i<list.length;i++){
    for(let j= i+1;i<list.length;j++){
      if(list[i]===list[j]){
        list.splice(j,1)
        j--
      }
    }
  }
  return list
}

function removeDuplicate3(list){
  let ans = []
  list.forEach(item => {
    if(ans.indexOf(item)===-1){
      ans.push(item)
    }
  })
  return ans
}

function removeDuplicate4(list){
  let ans = []
  list.forEach(item =>{
    if(!ans.includes(item)){
      ans.push(item)
    }
  })
  return ans
}


//冒泡排序
function bubbleSort(nums){
  for(let i=0;i<nums.length;i++){
    let exchange = true
    for(let j = nums.length-1;i>=0;i--){
      if(nums[j]<nums[j-1]){
        [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
        exchange = false
      }
    }
    if(exchange) break
  }
  return nums
}

//快速排序
function quickSort(list, start, end){
  if(start > end) return
  let left = start, right = end
  let pivot = list[start]
  while(left!==right){
    while(list[right]>= pivot && left < right) right--
    while(list[left]<=pivot && left < right) left++
    if(left<right){
      [list[left], list[right]] = [list[right], list[left]]
    }
  }
  [list[left], list[start]] = [list[start], list[left]]
  quickSort(list, start, left-1)
  quickSort(list, left+1, end)
  return list
}




//回文数
var isPalindrome = function(x) {
  if(x<0)
      return false
  let arr = []
  while(x/10!==0){
      arr.push(x%10)
      x = Math.floor(x/10)
  }
  let l=0,r=arr.length-1
  while(l<=r){
      if(arr[l]!==arr[r]){
          return false
      }
      l++
      r--
  }
  return true
};

//无重复的子串
var lengthOfLongestSubstring = function(s){
  let left=0
  let res=0
  let map=new Map()
  for(let i=0;i<s.length;i++){
      if(map.has(s[i])&&map.get(s[i])>=left)
       {
          left=map.get(s[i])+1
      }
      res=Math.max(res,i-left+1)
      map.set(s[i],i)
  }
  return res
}


//防抖
function debounce(fn, delay){
  let timer = null
  return function(){
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      fn.call(this, arguments)
      timer =null
    },delay)
  }
}

//节流
function throttle(fn, delay){
  let timer = null
  return function(){
    if(timer) return
    timer = setTimeout(()=>{
      fn.call(this, arguments)
      timer = null
    }, null)
  }
}


//发布订阅模式
class EventEmitter{
  constructor(){
    this.events = {}
  }
  on(event, fn){
    if(!this.events[event]){
      this.events[event] = fn
    }else{
      this.events[event].push(fn)
    }
  }
  emit(event){
    if(this.events[event]){
      this.events[event].forEach(callback => callback())
    }
  }
}

