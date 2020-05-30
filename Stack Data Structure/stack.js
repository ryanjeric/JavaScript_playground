class Stack{
    constructor(){
        this.items = [];
        this.count = 0
    }
    // add element to top of stack
    push(element){
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`)
        this.count+=1
        return this.count -1
    }
    // return undefine if stack is empty // return and remove top element in stack
    pop(){
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count-1] // 3 - 1
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }
    // Check top element in stack
    peek(){
        console.log(`Top elemt is ${this.items[this.count-1]}`)
        return this.items[this.count -1]
    }
    // Check if stack is empty
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is Empty': 'Stack is not Empty')
        return this.count == 0
    }
    // check size
    size(){
        console.log(`${this.count} element on stack`);
        return this.count
    }
    // print elements in stack
    print() {
        let str = ''
        for(let i=0;i<this.count;i++){
            str+=this.items[i] + ' '
        }
        return str;
    }
    //clear stack
    clear(){
        this.items = [];
        this.count = 0;
        console.log(`Stack cleared`);
        return this.items;
    }
}

const stack = new Stack()

stack.isEmpty()

stack.push(100) // 0
stack.push(200) // 1
stack.peek(); 

stack.push(300) // 2
console.log(stack.print())

stack.isEmpty()

stack.pop() // 2
stack.pop() // 1
console.log(stack.print())
stack.size();

stack.clear();
console.log(stack.print())

stack.size();


