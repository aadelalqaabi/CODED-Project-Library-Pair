import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import memberStore from "../stores/memberStore";
function BookBorrow({ book }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="mx-22">
        <Button variant="success" onClick={handleShow}>
          Borrow
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="titlefont">{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </div>
  );
}
export default BookBorrow;
