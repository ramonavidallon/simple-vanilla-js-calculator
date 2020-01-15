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


// creating the decimal, clear, backspace, display value

var decimalBtn = document.getElementById('calcDecimal');
var clearBtn = document.getElementById('calcClear');
var backSpaceBtn = document.getElementById('calcBackSpace');
var displayValElement = document.getElementById('calcDisplayVal');

var calcNumBtns = document.getElementsByClassName('calcNumBtn');
var calcOperatorBtns = document.getElementsByClassName('calcBtnOperator');


for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateDisplayVal(), false)
}

for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener('click', peformOperation(), false)
}

