//? функция определения колличества страниц с округлением в большую сторону
export function getPageCount(totalCount, limit) {
  return Math.ceil(totalCount / limit);
}

//? функция создания массива с номерами страниц для отрисовки постраничной пагинации
export function getPagesArray(totalPages) {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
}
