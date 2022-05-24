import { makeAutoObservable } from "mobx";
import axios from "axios";

class BookStore {
  books = [];
  constructor() {
    makeAutoObservable(this);
  }

  findBookTitle = (bookId) => {
    const theBook = this.books?.find((book) => bookId === book?._id);
    return theBook?.title;
  };

  findBookObj = (bookID) => {
    const theBook = this.books?.find((book) => bookID === book?._id);
    return theBook;
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
    console.log(
      member.membership +
        " yuyfjyfjyf   " +
        member.currentlyBorrowedBooks.length
    );
    try {
      switch (member.membership) {
        case "silver":
          if (member.currentlyBorrowedBooks.length > 1) {
            alert("Cannot borrow");
            return;
          }
          break;
        case "gold":
          if (member.currentlyBorrowedBooks.length > 2) {
            alert("Cannot borrow");
            return;
          }
          break;
        case "platinum":
          if (member.currentlyBorrowedBooks.length > 4) {
            alert("Cannot borrow");
            return;
          }
          break;
      }
      member.currentlyBorrowedBooks.push(book._id);
      book.borrowedBy.push(member._id);
      book["available"] = false;
      await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${book?._id}/borrow/${member?._id}`,
        book,
        member
      );
    } catch (error) {
      console.error(error);
    }
  };

  returnBook = async (book, member) => {
    try {
      book["available"] = true;
      console.log(member.firstName);
      member.currentlyBorrowedBooks?.splice(
        member.currentlyBorrowedBooks?.indexOf(book._id),
        1
      );

      await axios.put(
        `https://library-borrow-system.herokuapp.com/api/books/${book._id}/return/${member._id}`,
        book,
        member
      );
    } catch (error) {
      console.error(error);
    }
  };

  fetchBooks = async () => {
    try {
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
