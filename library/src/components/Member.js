import bookStore from "../stores/bookStore";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function Member({ member }) {
  const bookTitles = member.currentlyBorrowedBooks?.map((borrowedBook) => {
    return bookStore.findBookTitle(borrowedBook.id);
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="onemember">
      <h2>
        {member.firstName} {member.lastName}
      </h2>
      <h2>{member.membership}</h2>
      <div className="mx-2">
        <Button variant="light" onClick={handleShow}>
          Show Details
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {member.firstName} {member.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{bookTitles}</Modal.Body>
      </Modal>
    </div>
  );
}
export default Member;
