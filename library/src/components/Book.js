import memberStore from "../stores/memberStore";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import BookBorrow from "./BookBorrow";
import bookStore from "../stores/bookStore";
function Book({ book }) {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&family=Playball&family=Press+Start+2P&family=Sanchez&display=swap');
  </style>;
  let genres = book.genres.map((genre) => genre);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const membersWhoBorrowed = book.borrowedBy?.map((memberID) =>
    memberStore.findMemberName(memberID)
  );

  return (
    <div className="onebook">
      <div className="bookcontainer">
        <div className="imagecontainer">
          <img src={book.image} className="bookimage"></img>
        </div>
        <div className="booknames">
          <h1 className="booktitle">{book.title}</h1>
          <div className="mx-2">
            <Button variant="light" onClick={handleShow}>
              Show Details
            </Button>
            <BookBorrow book={book} />
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="titlefont">{book.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modalbookgenres">
              {book.genres.map((element) => (
                <div className="bookgenres">{element} </div>
              ))}
            </div>
            <div className="modalbrorrowed">Written By {book.author}</div>
            <div className="modalbrorrowed"> ~ Borrowed History ~ </div>
            <div className="bookborrowedbydiv">
              {membersWhoBorrowed.map((element) => (
                <div className="bookborrowedby">{element} </div>
              ))}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
export default Book;
