import { useRef } from "react";
import { useEffect, useState } from "react";
import PostServise from "../components/API/PostServise";
import PostList from "../components/PostList";
import MyButton from "../components/UI/Button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import Pagination from "../components/UI/Pagination/Pagination";
import PostFilter from "../components/UI/PostFilter/PostFilter";
import useFetching from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePosts";
import { getPageCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([]);

  //? переключатель модального окна на создание карточки
  const [modal, setModal] = useState(false);
  //? в этот стейт по ключам сначала сохраняем выбранный критерий сортировки и вторым строку из поискового инпута
  const [filter, setFilter] = useState({ selectedSort: "", searchQuery: "" });
  //? сохраняем в переменную разультат работы кастомного хука который сначала сортирует потом фильтрует и потом передаём этот массив на отображение в PostList
  const sortedAndSeachedPosts = usePosts(
    posts,
    filter.selectedSort,
    filter.searchQuery
  );
  //? эти два стейта передаём в параметры запроса на бэк в компонент PostPages
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  //? это последний элемент, хук вытаскивает и сохраняет элемент дом-дерева
  const lastElementRef = useRef();

  //? тут вызываем хук и в коллбэк передаем функцию которая запрашивает данные и возвращает объект. этот объект мы сохраняем в переменную response и далее перезаписываем полученный результат в стейт posts. Кроме этого хук возвращает функцию запроса которая должна отработать один раз при загрузке страницы поэтому ниже она находиться в useEffect. То есть если код читается сверху то сначала хук нам возвращает результаты и только если он что то возвращает код идёт ниже. Так же возвращает статус запроса если он тру то ниже отрисовываем крутилку. и ошибку если она тру её тоже отрисовываем над постами
  const [fetching, isPostLoading, postError] = useFetching(async () => {
    const response = await PostServise.getAll(limit, page);
    //? тут под функционал бесконечной ленты каждый раз новую возвращаемую порцию данных мы записываем в конец уже существующего стейта с постами.
    setPosts([...posts, ...response.data]);
    //? сохраняем в переменную общее число элементов в массиве. при получении общего объекта запроса это колличество лежит под ключём headers
    const totalCount = response.headers["x-total-count"];
    //? дальше что бы посчитать общее колличество страниц totalPages вызываем setTotalPages и в аргументы передаём общее колличество элементов и лимит на отображение
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElementRef, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });

  function changePage(p) {
    setPage(p);
  }

  useEffect(() => {
    fetching();
  }, [page]);

  //? функция создания карточки
  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function delitePost(post) {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  return (
    <>
      <div className="app">
        <MyButton onClick={() => setModal(true)}>добавить карточку</MyButton>
        <MyModal create={createPost} modal={modal} setModal={setModal} />
        <hr style={{ margin: "15px 0" }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <br />
        <Pagination
          page={page}
          totalPages={totalPages}
          changePage={changePage}
        />
        {postError && <h1>Произошла ошибка ${postError}</h1>}

        <PostList
          delitePost={delitePost}
          post={sortedAndSeachedPosts}
          title={"список постов 1"}
        />
        <div style={{ height: "20px" }} ref={lastElementRef}></div>

        {isPostLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 30,
            }}>
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}

export default Posts;
