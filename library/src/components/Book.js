import bookStore from "../stores/bookStore";
function Book({ book }) {
  return (
    <div className="onebook">
      <img src={book.image} className="bookimage"></img>
      <h2>{book.author}</h2>
      <h2>{book.title}</h2>
      <h2>{[...book.genres]}</h2>
    </div>
  );
}
export default Book;
