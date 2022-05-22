import bookStore from "../stores/bookStore";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function Member({ member }) {
  const bookTitles = member.currentlyBorrowedBooks?.map((borrowedBook) => {
    return bookStore.findBookTitle(borrowedBook);
  });
  console.log(bookTitles);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="onemember">
      <div className="membernames">
        <h1 className="membername">
          {member.firstName} {member.lastName}
        </h1>

        <h2 className="membermembership">{member.membership}</h2>
      </div>
      <div className="mx-2">
        <Button variant="light" onClick={handleShow}>
          Show Profile
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="titlefont">
            {member.firstName} {member.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalmembership">Membership: {member.membership}</div>
          <div className="modalbrorrowed"> Currently Borrowed Books </div>
          <div className="modalbooketitle">
            <ul>
              {bookTitles.map((element) => (
                <li>{element}</li>
              ))}
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Member;
