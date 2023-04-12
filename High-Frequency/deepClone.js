// 深拷贝的实现
// function deepCopy(object) {
//     if (!object || typeof object !== "object") return object;
  
//     let newObject = Array.isArray(object) ? [] : {};
  
//     for (let key in object) {
//       if (object.hasOwnProperty(key)) {
//         newObject[key] =
//           typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
//       }
//     }
  
//     return newObject;
//   }



let obj = {a:1,b:{
    name:'yht',
    age:25
}}
  function deepCopy(object){
    if(!object || typeof object !=='object') return object;
    let newObj = Array.isArray(object)?[]:{}
    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObj[key] = object[key].constructor === Object ? deepCopy(object[key]):object[key]
        }
    }
    return newObj;
  }

  console.log(deepCopy(obj))