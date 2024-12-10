let elFirstNumber = document.querySelector('.calculator__first-number');
let elSecondNumber = document.querySelector('.calculator__second-number');
let elCalcButton = document.querySelectorAll('.calculator__calc-btn');

let firstNumber = '';
let secondNumber = '';
let calcResult = '';

elFirstNumber.addEventListener('input', (event) => {
  firstNumber = Number(event.target.value);
})

elSecondNumber.addEventListener('input', (e) => {
  secondNumber = Number(e.target.value);
})

function addCalcButtonsLisener() {
  elCalcButton.forEach(el => {

    el.addEventListener('click', () => {
      console.log(el.innerText);
      const operator = el.innerText;

      if (firstNumber && secondNumber) {
        switch(operator) {
          case '+':
            calcResult = firstNumber + secondNumber;
            break;
          case '-':
            calcResult = firstNumber - secondNumber;
            break;
          case '/':
            calcResult = firstNumber / secondNumber;
            break;
          case '*':
            calcResult = firstNumber * secondNumber;
            break;
        }
  
        document.querySelector('.calculator__result').innerText = calcResult;
      }
    })
  })
}

addCalcButtonsLisener();