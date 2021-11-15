const btnNode = document.querySelector('.j-btn-request-1');
const resultNode = document.querySelector('.j-result');
const btnClear = document.querySelector('.j-btn-request-2');

function renderImages(data) {
  const fragment = new DocumentFragment();
  data.map(function (item) {
    const image = document.createElement('img');
    image.src = item.download_url;
    fragment.append(image);
  });
  resultNode.append(fragment);
}

btnNode.addEventListener(`click`, () => {
  const value1 = Number(document.querySelector('.j-input-1').value);
  const value2 = Number(document.querySelector('.j-input-2').value);

  if (!isNaN(value1) && !isNaN(value2)) {
    if (value1 >= 1 && value1 <= 10 && value2 >= 1 && value2 <= 10) {
      const link = `https://picsum.photos/v2/list?page=${value1}&limit=${value2}`;
      fetch(link, {
        method: 'GET',
        mode: 'cors',
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('resultData', JSON.stringify(data));
          renderImages(data);
        })
        .catch(() => console.error('error'));
    } else if ((value1 < 1 || value1 > 10) && value2 >= 1 && value2 <= 10) {
      resultNode.innerHTML = `<span class = 'span'>Номер страницы вне диапазона от  1 до 10</span>`;
    } else if ((value2 < 1 || value2 > 10) && value1 >= 1 && value1 <= 10) {
      resultNode.innerHTML = `<span class = 'span'>Лимит вне диапазона от 1 до 10</span>`;
    }
  } else {
    resultNode.innerHTML = `<span class = 'span'>Введите два числа</span>`;
  }
});
const result = JSON.parse(localStorage.getItem('resultData'));
renderImages(result);

btnClear.addEventListener(`click`, () => {
  localStorage.removeItem('resultData');
  resultNode.innerHTML = '';
});