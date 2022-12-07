import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ page, totalPages, changePage }) => {
  //? после того как мы подсчитали общее колличество страниц это ниже в функции setTotalPages - создаём массив для постраничной отрисовки и вызов функции getPagesArray возвращает массив с числами. далее мы отрисуем этот массив в кнопки с номерами
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page_wrapper">
      {pagesArray.map(p => (
        <span
          onClick={() => changePage(p)}
          className={page === p ? "page page_current" : "page"}
          key={p}>
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
