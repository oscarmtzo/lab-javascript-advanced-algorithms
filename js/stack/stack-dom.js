const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = ''
};

const renderListStack = () => {
  // ... your code goes here
  for( let i = 0; i<newStack.MAX_SIZE; i++){
    const liTag = document.createElement('li')
    liTag.setAttribute('class', 'inactive')
    liTag.innerHTML = '&nbsp'
    stackList.appendChild(liTag)
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
    if(newStack.isEmpty()){
      warningBottomStack.setAttribute('style', 'display: block')
      warningBottomStack.innerHTML = 'Underflow'
    }
  } else if (type === 'overflow') {
    // ... your code goes here
    if(!newStack.canPush()){
      warningTopStack.setAttribute('style', 'display: block')
      warningTopStack.innerHTML = 'Overflow'
    }
  }
};

const addToStack = () => {
  // ... your code goes here
  if(newStack.canPush()){
    const liTagset = stackList.querySelectorAll('.inactive')
    newStack.push(stackInput.value)
    console.log(liTagset)
    liTagset[0].innerHTML = stackInput.value
    liTagset[0].setAttribute('class', 'active')
    generateWarningStack('overflow')
    warningBottomStack.setAttribute('style','display: none')
    clearStackInput()
  }else{
    warningTopStack.setAttribute('style', 'display: none')
  }
};

const removeFromStack = () => {
  // ... your code goes here
  generateWarningStack('underflow')
  newStack.pop()
  const liTagset = stackList.querySelectorAll('.active')
  liTagset[liTagset.length - 1 ].setAttribute('class','inactive')
  liTagset[liTagset.length - 1].innerHTML = '&nbsp'
  warningTopStack.setAttribute('style', 'display: none')
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
