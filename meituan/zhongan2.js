function flattenAndSort( str ) {
    // write code here
    let arr = str.split(',')
    let set = new Set()
    for(let i=0; i<arr.length;i++ ){
        arr[i] = arr[i].replace(' ','')
        arr[i] = arr[i].replace('\[','')
        arr[i] = arr[i].replace('\]','')
        let temp = parseInt(arr[i])
        set.add(parseInt(arr[i]))
    }
    let res = Array.from(set)
    res.sort((a,b)=>{
        return b-a
    })
    return res
}

flattenAndSort("[[1, 2], 3, 4, [5, 6, 7, 3, 1], 8, [9]]")