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



let obj = {
  a: 1, b: {
    name: 'yht',
    age: 25
  }
}
function deepCopy(object) {
  if (!object || typeof object !== 'object') return object;
  let newObj = Array.isArray(object) ? [] : {}
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObj[key] = object[key].constructor === Object ? deepCopy(object[key]) : object[key]
    }
  }
  return newObj;
}

console.log(deepCopy(obj))



//解决环引用的深拷贝
function deepClone(obj, hash = new WeakMap()) {
  if (obj instanceof Map) return new Map([...obj])
  if (obj instanceof Set) return new Set([...obj])
  if (obj instanceof Function) return new Function("return" + obj.toString())()
  if (obj === null || typeof obj !== "object") return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

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