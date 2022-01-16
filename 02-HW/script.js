window.addEventListener('load', () => {
  const inputEl = document.querySelectorAll('.form__input');
  const btnEl = document.querySelector('.form__btn');
  const formEl = document.querySelector('.form');

  let patterns = {
    notEmpty: /.+/,
    phone: /^\d{7,14}$/,
    email: /^.+@.+\..+$/,
  };

  formEl.addEventListener('submit', submitHandler);
  formEl.addEventListener('input', formHandler);

  function submitHandler(e) {
    inputEl.forEach(input => {
      let pattern = patterns[input.dataset.valid];
      input.value = input.value.trim();
      if (!pattern.test(input.value)) {
        e.preventDefault();
        input.classList.add('form__input--danger');
      }
    });
  }

  function formHandler(e) {
    e.target.classList.remove('form__input--danger');
  }









});