import bookStore from "../stores/bookStore";
function Book({ book }) {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&family=Playball&family=Press+Start+2P&family=Sanchez&display=swap');
  </style>;
  let genres = book.genres.map((genre) => genre);
  return (
    <div className="onebook">
      <div className="bookimage">
        <img src={book.image} className="bookimage"></img>
      </div>
      <div className="booknames">
        <h1 className="booktitle">{book.title}</h1>

        <h2 className="bookauthor">By {book.author}</h2>

        <h3 className="bookgenres">{book.genres}</h3>
      </div>
    </div>
  );
}
export default Book;
