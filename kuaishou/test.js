class node {
    constructor(id, name) {
        this.id = id
        this.nanem = name
        this.childern = new Array()
    }
}
function generate(input) {
    let root = null
    input.map((val) =>{
        const node = new node(val.id, val.name)
    input.map((val2)=>{   
        const child = new node(val2.id, val2.name)
        if(val2.parentId === val.id){
            node.childern.push(child)
        else{
            root = child
        }
})
    })

return root
}