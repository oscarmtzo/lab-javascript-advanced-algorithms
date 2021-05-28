class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    // ... your code goes here
    if(this.queueControl.length < this.MAX_SIZE){
      return true
    }
    return false
  }

  isEmpty() {
    // ... your code goes here
    if(this.queueControl.length === 0){
      return true
    }
    return false
  }

  enqueue(item) {
    // ... your code goes here
    if(this.queueControl.length == this.MAX_SIZE){
      return `Queue Overflow`
    }
    this.queueControl.splice(0,0,item)
    return this.queueControl
  }

  dequeue() {
    // ... your code goes here
    if(this.queueControl.length === 0){
      return `Queue Underflow`
    }
    console.log(this.queueControl)
    return this.queueControl.pop()
  }
}
