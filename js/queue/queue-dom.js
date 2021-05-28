const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = ''
};

const generateListQueue = () => {
  // ... your code goes here
  for( let i=0; i<queue.MAX_SIZE; i++){
    const liTag = document.createElement('li')
    liTag.setAttribute('class', 'inactive')
    liTag.innerHTML = '&nbsp'
    queueUL.appendChild(liTag)
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
    if(queue.isEmpty()){
      warningTopQueue.innerHTML = 'Underflow'
      warningTopQueue.setAttribute('style', 'display: block')
    }
  } else if (type === 'overflow') {
    // ... your code goes here
    warningBottomQueue.innerHTML = 'Overflow'
    warningBottomQueue.setAttribute('style', 'display: block')
  }
};

const addToQueue = () => {
  // ... your code goes here
  if(queue.canEnqueue()){
    const queueLIset =  queueUL.querySelectorAll('.inactive')
    //console.log(queueLIset)
    // for( let i = 0; i<queue.)
    queueLIset[0].innerHTML = queueInput.value
    queueLIset[0].setAttribute('class', 'active')
    queue.enqueue(queueInput.value)
    clearQueueInput()
    warningBottomQueue.setAttribute('style', 'display: none')
    warningTopQueue.setAttribute('style', 'display: none')
    
  }else{
    generateWarningQueue('overflow')
  }

};

const removeFromQueue = () => {
  // ... your code goes here
  if(queue.isEmpty()){
    generateWarningQueue('underflow')
  }else{
    const queueLIset = queueUL.querySelectorAll('.active')
    warningBottomQueue.setAttribute('style', 'display: none')
    // console.log(queueLIset)
    // console.log(queueLIset[queueLIset.length-1])
    queueLIset[queueLIset.length - 1].setAttribute('class', 'inactive')
    queue.dequeue()
    queueLIset[queueLIset.length - 1].innerHTML = '&nbsp'
    //console.log(queue)
  }

};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
