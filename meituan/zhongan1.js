function compareVersion(a, b){
    let tempA = a.split('.')
    let tempB = b.split('.')
    let indexA = 0
    let indexB = 0
    while(indexA< tempA.length && indexB<tempB.length){
        if(parseInt(tempA[indexA])>parseInt(tempB[indexB])){
            return true
        }else if(parseInt(tempA[indexA])<parseInt(tempB[indexB])){
            // console.log(tempA[indexA], tempB[indexB])
            // console.log(tempA[indexA] < tempB[indexB])
            return false
        }
        indexA++;
        indexB++;
    }
    if(indexA < tempA.length){
        return true
    }
     if(indexB < tempB.length){
        return false
    }
    return false
}
function sortVersion( versions ) {
    // write code here
    for(let i =0;i< versions.length-1;i++){
        for(let j=0; j<versions.length-1-i;j++){
            let flag = compareVersion(versions[j],versions[j+1])
            if(flag){
                [versions[j],versions[j+1]] =  [versions[j+1],versions[j]]
            }
        }
    }
    console.log(versions)
    return versions
}
// sortVersion([5,2,4,3,1,0])

// console.log(compareVersion('1.32.0', '1.4'))
sortVersion(["1.32.0","1.4","4","2.1.2","3.3.3.3.3.3.3"])