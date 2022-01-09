const inputEl = document.querySelectorAll('.form__input');
const btnEl = document.querySelector('.form__btn');
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', submitHandler);
formEl.addEventListener('input', formHandler);

function submitHandler(e) {
  e.preventDefault();
  inputEl.forEach(input => {
    if(input.value === '' || input.value === ' ') {
      input.classList.add('form__input--danger');
    } else {
      input.value = '';
      return true;
    }
  });
}

function formHandler(e) {
  e.target.classList.remove('form__input--danger');
}