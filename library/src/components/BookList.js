import Book from "./Book";
import { observer } from "mobx-react";
import bookStore from "../stores/bookStore";
import BookAdd from "./BookAdd";
function BookList() {
  let bookList = bookStore.books.map((book) => {
    return <Book book={book} key={book.id} />;
  });
  return (
    <div>
      <BookAdd />
      <div className="booklist">{bookList}</div>
    </div>
  );
}
export default observer(BookList);
