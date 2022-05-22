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

  borrowBook = async (book, member) => {
    try {
      switch (member.membership) {
        case "silver":
          if (member.currentlyBorrowedBooks.length > 2) {
            alert("Cannot borrow");
            return;
          }
          break;
        case "gold":
          if (member.currentlyBorrowedBooks.length > 3) {
            alert("Cannot borrow");
            return;
          }
          break;
        case "platinum":
          if (member.currentlyBorrowedBooks.length > 5) {
            alert("Cannot borrow");
            return;
          }
          break;
      }
      member.currentlyBorrowedBooks.push(book._id);
      book.borrowedBy.push(member._id);

      await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${book._id}/borrow/${member._id}`,
        book,
        member
      );
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
