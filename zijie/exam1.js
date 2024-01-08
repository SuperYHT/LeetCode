function getGVal(input){
    let sum = 0;
    for(let i=0;i<input.length-1; i++){
        const val = Math.abs(input[i] - input[i+1]);
        sum += val;
    }
    console.log(sum)
    let result = []
    for (let i = 0; i < input.length; i++) {
        if(i===0){
            result[i] = sum - Math.abs(input[0]- input[1])
        }else if(i===input.length-1){
            result [i] = sum -  Math.abs(input[input.length-1] - input[input.length-2])
        }else{
            result[i] = sum - Math.abs(input[i] -Math.abs(input[i+1] - input[i-1]))
        }
    }
    result.join(' ')
    console.log(result)
}

getGVal([1,3,1,4,2])