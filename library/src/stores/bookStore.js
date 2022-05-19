import { makeAutoObservable } from "mobx";
import axios from "axios";
class BookStore {
  books = [
    {
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1491842507l/34076952.jpg",
      author: "Jordoan Peterson",
      title: "12 Rules",
      genres: ["self-Help"],
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  findBookTitle = (bookId) => {
    const theBook = this.books.find((book) => bookId === book.id);
    return theBook.title;
  };

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
