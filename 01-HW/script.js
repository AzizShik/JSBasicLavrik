window.addEventListener('load', () => {
  const select = document.getElementById('operation');
  const firstArg = document.getElementById('firstArg');
  const secondArg = document.getElementById('secondArg');
  const resButton = document.getElementById('button');
  const resultEl = document.getElementById('result');
  const calcEl = document.querySelector('.calc');

  resButton.addEventListener('click', calculateResult);

  function calculateResult() {
    let result = 0;
    const n1 = Number(firstArg.value);
    const n2 = Number(secondArg.value)
    switch (select.value) {
      case '+':
        result = Math.floor(n1 + n2);
        break;
      case '-':
        result = Math.floor(n1 - n2);
        break;
      case '*':
        result = Math.floor(n1 * n2);
        break;
      case '/':
        result = Math.floor(n1 / n2);
        break;
    }
    resultEl.textContent = result;
    disabledButton();
  }

  function disabledButton() {
    resButton.disabled = true;
    resButton.classList.add('button--disabled');
  }

  function activeButton() {
    resButton.disabled = false;
    resButton.classList.remove('button--disabled');
  }


  calcEl.addEventListener('input', e => {
    activeButton();
    if (e.target.classList.contains('calc__input')) {
      e.target.value = e.target.replace(/[^0-9]/g, '');
    }
  });






  

});