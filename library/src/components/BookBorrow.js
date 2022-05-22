import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import memberStore from "../stores/memberStore";
import bookStore from "../stores/bookStore";
function BookBorrow({ book }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event, book) => {
    event.preventDefault();
    bookStore.borrowBook(book, memberStore.findMemberObj(event.target.name));
    handleClose();
  };

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
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {memberStore.members.map((member) => (
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name={member.id}
                  id="flexRadioDefault1"
                ></input>
                <label class="form-check-label" for="flexRadioDefault1">
                  {member.firstName} {member.lastName}
                </label>
              </div>
            ))}
            <div className="borrow-button">
              <Button
                variant="primary mx-2"
                type="submit"
                onClick={(event, book) => handleSubmit(event, book)}
              >
                Submit
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default BookBorrow;
