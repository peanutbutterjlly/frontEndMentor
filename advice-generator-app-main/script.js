async function getAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function updateAdvice() {
  const adviceData = await getAdvice();
  const { id, advice } = adviceData.slip;
  document.querySelector('.adviceText').innerHTML = `"${advice}"`;
  document.querySelector('.adviceId').innerHTML = id;
}

updateAdvice();
