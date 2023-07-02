const button = document.querySelector('.btn');
const emailInput = document.getElementById('email');
const error = document.querySelector('.error');

/**
 * Validates an email input field.
 *
 * @param {HTMLInputElement} emailInput - The email input element.
 * @param {HTMLElement} error - The error message element.
 */
function validateEmail(emailInput, error) {
  emailInput.setCustomValidity('');
  error.style.visibility = 'hidden';

  if (!emailInput.checkValidity()) {
    emailInput.classList.add('invalid');
    error.textContent = emailInput.value === '' ? `Whoops! It looks like you forgot to add your email` : `Please, provide a valid email address.`;
    error.style.visibility = 'visible';
    emailInput.setCustomValidity(' ');
  } else {
    emailInput.classList.remove('invalid');
    alert('Thank you for subscribing!');
  }
}

button.addEventListener('click', () => {
  validateEmail(emailInput, error);
});
