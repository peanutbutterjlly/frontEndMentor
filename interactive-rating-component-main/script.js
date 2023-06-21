const choices = document.querySelectorAll('.choice');
const answer = document.querySelector('.answer');
const submit = document.querySelector('button');
const form = document.querySelector('form');
const main = document.querySelector('main');

submit.disabled = true;

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    choices.forEach((choice) => {
      choice.classList.remove('active');
    });
    choice.classList.add('active');
    submit.disabled = false;
    answer.textContent = choice.dataset.choice;
  });
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  form.classList.add('hide');
  main.classList.remove('hide');
  main.classList.add('show');
});
