/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity =capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){
        let val = this.map.get(key)
        this.map.delete(key)
        this.map.set(key,val);
        return val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        this.map.delete(key)
    }
    this.map.set(key, value);
    if(this.capacity < this.map.size){
        this.map.delete(this.map.keys().next().value)
    }
};






/**
 * @param {number} capacity
 */
class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.pre = null
    }
}
class LRUCache{
    constructor(capacity){
        this.capacity = capacity
        this.map = new Map()
        this.count = 0
        this.dummyHead = new ListNode()
        this.dummyTail = new ListNode()
        this.dummyHead.next = this.dummyTail
        this.dummyTail.pre = this.dummyHead
    }
    get(key) {
        if(this.map.has(key)){
            this.moveToHead(this.map.get(key))
            return this.map.get(key).value
        }else
            return -1
    }

    put(key, value) {
        if(this.map.has(key)){
            this.map.get(key).value = value
            this.moveToHead(this.map.get(key))
        }else{
            if (this.count == this.capacity) {
                this.removeLRUItem()
            }
            let newNode = new ListNode(key, value)
            this.map.set(key, newNode)
            this.addToHead(newNode)
            this.count++
        }
    }

    moveToHead(node) {
        this.removeFromList(node)
        this.addToHead(node)
    }

    removeFromList(node) {
        let temp1 = node.prev
        let temp2 = node.next
        temp1.next = temp2
        temp2.prev = temp1
    }

    addToHead(node) {
        node.prev = this.dummyHead
        node.next = this.dummyHead.next
        this.dummyHead.next.prev = node
        this.dummyHead.next = node
    }

    removeLRUItem() {
        let tail = this.popTail()
        this.map.delete(tail.key)
        this.count--
    }

    popTail() {
        let tail = this.dummyTail.prev
        this.removeFromList(tail)
        return tail
    }
}