class LinkedList {
    constructor(){
        this.head = null
        this.length = 0
        this.index = null
    }

    append(value){
        if(!this.head){
            this.head = new Node(value, null);
            this.length++
            return this.head;
            
        }
        let current = this.head
        while(current.next){
            current = current.next
        }

        current.next = new Node(value, null)
        this.length++
    }
    prepend(value){
        const createNode = new Node(value, this.head)
        this.head = createNode;
        this.length++
    }
    size(){
        return this.length;
    }
    getHead(){
        let head = this.head
        return head;
    }
    getTail(){
        let current = this.head
        while(current.next !== null) current = current.next;
        if (current.next == null) return current;
    }    
    at(index){
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next
        }
        return current;
    }
    pop(){
        let current = this.head
        while(current.next.next !== null) current = current.next;
        current.next = null;
        this.length--;
    }
    contains(value){
        let current = this.head;
        for(let i = 0; i <= this.length; i++){
            if(current.value == value){
                return true
            } else if (current.next == null){
                return false
            } else {
                current = current.next;
            }
        }
    }   
    find(value){
        let current = this.head;
        for(let i = 0; i <= this.length; i++){
            if(current.value == value){
                return i;
            } else if (current.next == null){
                return null
            } else {
                current = current.next;
            }
        }

    }
    toString(){
        let arr = []
        let current = this.head;
        while(current.next !== null){
            arr.push(`(${current.value}) -> `)
            current = current.next;
        }
        if(current.next == null){
            arr.push('null')
        }
        return arr.join('');
    }
}
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

let one = new LinkedList()
one.prepend(10)


one.prepend(20)


one.prepend(30)


one.prepend(60)

console.log(one.toString())





