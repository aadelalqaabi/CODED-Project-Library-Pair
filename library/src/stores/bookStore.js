import { makeAutoObservable } from "mobx";
import axios from "axios";
class BookStore {
  books = [
    {
      author: "Jordoan Peterson",
      title: "12 Rules",
      genres: ["self-Help"],
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  createBook = async (book) => {
    try {
      const response = await axios.post(
        "https://library-borrow-system.herokuapp.com/api/books",
        book
      );
      this.books.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchBooks = async () => {
    try {
      console.log("I am here");
      const response = await axios.get(
        "https://library-borrow-system.herokuapp.com/api/books"
      );
      this.books = response.data;
    } catch (error) {
      console.error(error);
    }
  };
}
const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
