import { useState } from "react";

const useFetching = callback => {
  //? ниже стейт это переключатель колесика ожидания. этот стейт данный хук будет возвращать в родительский компоенет app и там в зависимости от статуса отрисовываем или скрываем крутилку
  const [isLoading, setIsLoading] = useState(false);
  //? далее стейе ошибки, в который запишутся ошибки из функции если они будут и дальше мы передадим их в родительский компонет где отрисуем в случае если в стейт что то попадёт
  const [error, setError] = useState("");

  async function fetching() {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }
  return [fetching, isLoading, error];
};

export default useFetching;
