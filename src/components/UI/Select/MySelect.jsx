import React from "react";

//? disabled делает пункт не активным в нашем случае он становиться заголовком меню. при выборе одного из критериев сортировки это value передаётся в родительский компонет App где сразу подставляется в параметры вызванной функции которая записывает выбранный критерий в стейт selectedSort

const MySelect = ({ option, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {option.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
