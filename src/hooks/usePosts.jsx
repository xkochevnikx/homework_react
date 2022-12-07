import { useMemo } from "react";

export const useSortedPosts = (posts, selectedSort) => {
  //? сюда мы помешаем выбранный критерий сортировки и далее ниже запускаем функцию которая сначала проводит проверку - если в стейте есть выбранный критерий то функция по этому критерию проводит сотрировку копии исходного массива posts, возвращает результат и присваивает его в переменную
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, selectedSort, searchQery) => {
  //? ниже в переменную (которая не связана никак с такой же переменной в функции выше) сохраняем результат функции сортировки
  const sortedPosts = useSortedPosts(posts, selectedSort);
  //? дальше в переменную сохраняем результат фильтрации. В каждом элементе проходимся по ключу title это заголовок и если функция includes видит в заголовке введённое в поле поиска то возвращает результат.
  const sortedAndSeachedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(searchQery)
    );
  }, [searchQery, sortedPosts]);

  return sortedAndSeachedPosts;
};
