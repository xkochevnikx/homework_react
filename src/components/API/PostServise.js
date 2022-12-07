import axios from "axios";
//? почему это классовый компонент я не понял но этот компонент нужен для отправки запроса на бэк и ПОЛУЧЕНИЕ и сохранения нужного нам объекта  в переменную. в параметры передаём query параметры
export default class PostServise {
  static async getAll(limit, page) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
  static async getById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response;
  }
  static async getByCom(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  }
}
