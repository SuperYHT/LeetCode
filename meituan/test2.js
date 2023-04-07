let height= 1
for(let i =1 ;i <=height ; i++){
    let blank = ' '.repeat(height-i);
    let star = '*'.repeat(2*i-1)
    console.log(blank+star)
    console.log(blank+'1')
}