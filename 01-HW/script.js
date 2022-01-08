window.addEventListener('load', () => {
  const select = document.getElementById('operation');
  const firstArg = document.getElementById('firstArg');
  const secondArg = document.getElementById('secondArg');
  const resButton = document.getElementById('button');
  const resultEl = document.getElementById('result');

  resButton.addEventListener('click', calculateResult);

  function calculateResult() {
    let result = 0;
    switch (select.value) {
      case '+':
        result = Math.floor(Number(firstArg.value) + Number(secondArg.value));
        break;
      case '-':
        result = Math.floor(Number(firstArg.value) - Number(secondArg.value));
        break;
      case '*':
        result = Math.floor(Number(firstArg.value) * Number(secondArg.value));
        break;
      case '/':
        result = Math.floor(Number(firstArg.value) / Number(secondArg.value));
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
    this.value = this.value.replace(/[^0-9]/g, '');
  }


  firstArg.addEventListener('input', activeButton);
  secondArg.addEventListener('input', activeButton);
  select.addEventListener('click', activeButton);











});