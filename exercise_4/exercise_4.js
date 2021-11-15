const btnNode = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result');

btnNode.addEventListener(`click`, () => {
  let value1;
  let value2;
  value1 = Number(document.querySelector('.j-input-1').value);
  value2 = Number(document.querySelector('.j-input-2').value);
  
  if(typeof value1 == `number` && !isNaN(value1) && typeof value2 == `number` && !isNaN(value2)) {
    if(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300) {
      let link = `https://picsum.photos/${value1}/${value2}`;
      fetch(link)
      .then((response) => {
        resultNode.innerHTML = 
        `<div class="card">
        <img src="${response.url}"/>
        </div>`;
      })
    } else {
      resultNode.innerHTML = 
    `<span class = 'span'>Одно из чисел вне диапазона от 100 до 300</span>`;
    }
  } else {
    resultNode.innerHTML = 
    `<span class = 'span'>Введите два числа</span>`;
  }
})
