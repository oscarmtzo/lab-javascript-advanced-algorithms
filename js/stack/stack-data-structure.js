class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if(this.stackControl.length<this.MAX_SIZE){
      return true
    }
    else{
      return false
    }
  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    // ... your code goes here
    if(this.stackControl.length == 0){
      return true
    }else {
      return false
    }
  }

  push(item) {
    // ... your code goes here
    if(this.stackControl.length === this.MAX_SIZE){
      return `Stack Overflow`
    }
    this.stackControl.push(item)
    return this.stackControl
  }

  pop() {
    // ... your code goes here
    if(this.stackControl.length === 0){
      return `Stack Underflow`
    }
    return this.stackControl.pop()
  }
}
