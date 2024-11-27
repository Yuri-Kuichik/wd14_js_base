let increaseCounterValue = function() {
  let el = document.querySelector('.counter__value');
  let count = el.innerText
  el.innerText = +count + 1;
}

let decreaseCounterValue = () => {
  let el = document.querySelector('.counter__value');
  let count = el.innerText;
  el.innerText = Number(count) - 1;
}

let btnCounterDecrease = document.querySelector('.decrease-counter');
btnCounterDecrease.addEventListener('click', decreaseCounterValue);

let btnCounterIncrease = document.querySelector('.increase-counter');
btnCounterIncrease.addEventListener('click', increaseCounterValue );