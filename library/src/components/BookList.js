import Book from "./Book";
import { observer } from "mobx-react";
import bookStore from "../stores/bookStore";
import BookAdd from "./BookAdd";
import React, { useState } from "react";
function BookList() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");

  const bookList = bookStore.books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) &&
        (genre === ""
          ? !book.genres.includes(genre)
          : book.genres.includes(genre))
    )
    .map((book) => <Book key={book.id} book={book} />);
  return (
    <div className="searchadd">
      <div>
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            id="searchinput"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            onChange={(e) => setGenre(e.target.value)}
            aria-label="Default select example"
            class="form-select"
            data-mdb-filter="true"
            id="selectinput"
          >
            <option value="" selected>
              All
            </option>
            <option value="Action">Action</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Romance">Romance</option>
            <option value="Fiction">Fiction</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Thriller">Thriller</option>
            <option value="Suspense">Suspense</option>
            <option value="Biography">Biography</option>
            <option value="Business">Business</option>
            <option value="Entrepreneurship">Entrepreneurship</option>
            <option value="Crime">Crime</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>
        <BookAdd />
      </div>
      <div className="booklist">{bookList}</div>
    </div>
  );
}
export default observer(BookList);
