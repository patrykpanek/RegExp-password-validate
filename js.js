const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
  if (
    pass.value.length > 10 &&
    pass.value.match(letters) &&
    pass.value.match(numbers) &&
    pass.value.match(special)
  ) {
    p.textContent = 'You have really good password!';
    p.style.color = 'lime';
  } else if (
    pass.value.length > 10 &&
    pass.value.match(letters) &&
    pass.value.match(numbers)
  ) {
    p.textContent = 'Your password is good!';
    p.style.color = 'green';
  } else {
    p.textContent = 'Your password is weak!';
    p.style.color = 'red';
  }
};

const checkPassword = () => {
  if (pass.value !== '') {
    showMsg();
  } else {
    p.textContent = 'You did not enter a passsword';
    p.style.color = '';
  }
};

pass.addEventListener('keyup', checkPassword);
