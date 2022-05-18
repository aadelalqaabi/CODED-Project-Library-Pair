import Book from "./Book";
import { observer } from "mobx-react";
import bookStore from "../stores/bookStore";
function BookList() {
  let bookList = bookStore.books.map((book) => {
    return <Book book={book} key={book.id} />;
  });
  return <div>{bookList}</div>;
}
export default observer(BookList);
