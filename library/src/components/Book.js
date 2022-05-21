import memberStore from "../stores/memberStore";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
function Book({ book }) {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&family=Playball&family=Press+Start+2P&family=Sanchez&display=swap');
  </style>;
  let genres = book.genres.map((genre) => genre);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currentlyBorrowingMember = memberStore.findBorrowingMember(
    book.borrowedBy.length === 0
      ? "x"
      : book.borrowedBy[book.borrowedBy.length - 1]
  );

  return (
    <div className="onebook">
      <div className="bookimage">
        <img src={book.image} className="bookimage"></img>
      </div>
      <div className="booknames">
        <h1 className="booktitle">{book.title}</h1>
        <div className="mx-2">
          <Button variant="light" onClick={handleShow}>
            Show Details
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{book.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="bookauthor">By {book.author}</div>
            <div className="bookborrowedby"> {book.borrowedBy} </div>
            <div className="bookgenres"> {[...book.genres]} </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
export default Book;
