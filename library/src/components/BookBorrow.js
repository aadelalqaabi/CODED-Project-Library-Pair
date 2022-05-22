import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import memberStore from "../stores/memberStore";
import bookStore from "../stores/bookStore";

function BookBorrow({ book }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [option, setOption] = useState("hi");

  const handleSubmit = (event) => {
    console.log(option, "----", book?.title);
    event.preventDefault();
    const memberOption = memberStore.findMemberObj(option);
    bookStore.borrowBook(book, memberOption);
    handleClose();
  };

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <div className="mx-22">
        <Button variant="success" onClick={(event) => handleShow(event, book)}>
          Borrow
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="titlefont">{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Select
              aria-label="Default select example"
              onChange={handleChange}
            >
              <option>Select member</option>

              {memberStore.members?.map((member) => (
                <option value={member._id}>
                  {member?.firstName} {member?.lastName}
                </option>
              ))}
            </Form.Select>

            <div className="borrow-button">
              <Button variant="primary mx-2" type="submit">
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
