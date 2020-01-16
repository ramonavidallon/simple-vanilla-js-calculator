// creating the number btns
var oneBtn = document.getElementById('calcOne');
var twoBtn = document.getElementById('calcTwo');
var threeBtn = document.getElementById('calcThree');
var fourBtn = document.getElementById('calcFour');
var fiveBtn = document.getElementById('calcFive');
var sixBtn = document.getElementById('calcSix');
var sevenBtn = document.getElementById('calcSeven');
var eightBtn = document.getElementById('calcEight');
var nineBtn = document.getElementById('calcNine');
var zeroBtn = document.getElementById('calcZero');


// creating the decimal, clear, backspace, display value, grouped number buttons, operator buttons
var decimalBtn = document.getElementById('calcDecimal');
var clearBtn = document.getElementById('calcClear');
var backSpaceBtn = document.getElementById('calcBackSpace');
var displayValElement = document.getElementById('calcDisplayVal');
var displayVal = '0';
var pendingVal;
var evalStringArray = [];
var calcNumBtns = document.getElementsByClassName('calcNumBtn');
var calcOperatorBtns = document.getElementsByClassName('calcBtnOperator');

// function to display numbers onto the calculator
var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText;

  if (displayVal === '0') 
    displayVal = '';
  displayVal += btnText;

  displayValElement.innerText = displayVal;
}

var calcOperation = (clickObj) => {
  var operator = clickObj.target.innerText;

  // switch statement to determine which operator is fired at the time of click
 switch (operator) {
   case '+':
     pendingVal = displayVal;
     displayVal = '0';
     displayValElement.innerText = displayVal
     evalStringArray.push(pendingVal)
     evalStringArray.push('+')
     break;

   case '-':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal
    evalStringArray.push(pendingVal)
    evalStringArray.push('-')
     break;

   case 'x':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal
    evalStringArray.push(pendingVal)
    evalStringArray.push('*')
     break;

   case '÷':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal
    evalStringArray.push(pendingVal)
    evalStringArray.push('/')
     break;

    case '=':
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(''));
      displayVal = evaluation + '';
      displayValElement.innerText = displayVal;
      evalStringArray = [];

 
   default:
     break;
 }
}

// for loop to loop through all of the calculator number buttons
for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false)
}

// for loop to loop through all of the operations
for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener('click', calcOperation, false)
}

// decimal button onclick function
decimalBtn.onclick = () => {
  if (!displayVal.includes('.'))
  displayVal += '.';
  displayValElement.innerText = displayVal;
}

// 'ac' clear button onclick function
clearBtn.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
}

// backspace button onclick function
backSpaceBtn.onclick = () => {
  var lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

  // if statement to always make the value either the entered value or '0'
  if (displayVal === '')
    displayVal = '0';

  displayValElement.innerText = displayVal;
}






