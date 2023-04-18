const form = document.getElementById('calendar');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
// answer elements
const years = document.querySelector('.years span');
const months = document.querySelector('.months span');
const days = document.querySelector('.days span');

function generateDate(event) {
  event.preventDefault();
  const date = new Date(year.value, month.value - 1, day.value);
  const today = new Date();
  const diff = today - date;
  const age = new Date(diff);
  years.textContent = Math.abs(age.getUTCFullYear() - 1970);
  months.textContent = Math.abs(age.getUTCMonth());
  days.textContent = Math.abs(age.getUTCDate() - 1);
}

form.addEventListener('submit', generateDate);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    form.reset();
  }
});

form.addEventListener('reset', (e) => {
  years.textContent = '--';
  months.textContent = '--';
  days.textContent = '--';
});
