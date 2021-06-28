//find the display
const displayWin = document.getElementById('display');
let displayNum = "";
let firstTotal =0;
let secondTotal=0;
let thirdTotal=0;
let operator ="";
displayWin.innerText=displayNum;

function showNum (displayNum) {
    if (displayNum.length > 10) {
        displayNum ="ERROR";}

    displayWin.innerText=displayNum;
}
//program the buttons
const buttonOne = document.getElementById('one');
buttonOne.addEventListener('click', function() {
    displayNum=displayNum + '1';
    showNum(displayNum);
})
const buttonTwo = document.getElementById('two');
buttonTwo.addEventListener('click', function() {
    displayNum=displayNum + '2';
    showNum(displayNum);
})
const buttonThree = document.getElementById('three');
buttonThree.addEventListener('click', function() {
    displayNum=displayNum + '3';
    showNum(displayNum);
})
const buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', function() {
    displayNum=displayNum + '4';
    showNum(displayNum);
})
const buttonFive = document.getElementById('five');
buttonFive.addEventListener('click', function() {
    displayNum=displayNum + '5';
    showNum(displayNum);
})
const buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', function() {
    displayNum=displayNum + '6';
    showNum(displayNum);
})
const buttonSeven = document.getElementById('seven');
buttonSeven.addEventListener('click', function() {
    displayNum=displayNum + '7';
    showNum(displayNum);
})
const buttonEight = document.getElementById('eight');
buttonEight.addEventListener('click', function() {
    displayNum=displayNum + '8';
    showNum(displayNum);
})
const buttonNine = document.getElementById('nine');
buttonNine.addEventListener('click', function() {
    displayNum=displayNum + '9';
    showNum(displayNum);
})
const buttonZero = document.getElementById('zero');
buttonZero.addEventListener('click', function() {
    displayNum=displayNum + '0';
    showNum(displayNum);
})
const buttonPlus = document.getElementById('plus');
buttonPlus.addEventListener('click', function() {
    firstTotal=parseInt(displayNum);
    operator ="+";
    displayNum = "";
    showNum(displayNum);
})
const buttonSubtract = document.getElementById('subtract');
buttonSubtract.addEventListener('click', function() {
    firstTotal=parseInt(displayNum);
    operator ="-";
    displayNum = "";
    showNum(displayNum);
})
const buttonMultiply = document.getElementById('multiply');
buttonMultiply.addEventListener('click', function() {
    firstTotal=parseInt(displayNum);
    operator ="*";
    displayNum = "";
    showNum(displayNum);
})
const buttonDivide = document.getElementById('divide');
buttonDivide.addEventListener('click', function() {
    firstTotal=parseInt(displayNum);
    operator ="/";
    displayNum = "";
    showNum(displayNum);
})
const buttonEqual = document.getElementById('equal');
buttonEqual.addEventListener('click', function() {
    secondTotal = parseInt(displayNum);
    if (operator=='+') {
        thirdTotal=firstTotal+secondTotal;
    } else if (operator=='-') {
        thirdTotal=firstTotal-secondTotal;
    } else if (operator=='*') {
        thirdTotal=firstTotal*secondTotal;
    } else if (operator =='/') {
        thirdTotal=firstTotal/secondTotal;
    }
    displayNum=thirdTotal;
    showNum(displayNum);
})
const buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', function() {
    displayNum="";
    firstTotal=0;
    secondTotal=0;
    thirdTotal=0;
    showNum(displayNum);
})

