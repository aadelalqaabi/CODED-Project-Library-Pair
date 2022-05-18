function Book({ book }) {
  return (
    <div>
      <h2>{book.author}</h2>
      <h2>{book.title}</h2>
      <h2>{[...book.genres]}</h2>
    </div>
  );
}
export default Book;
