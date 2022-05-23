import bookStore from "../stores/bookStore";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function MemberModal({ member }) {
  const bookTitles = member.currentlyBorrowedBooks?.map((borrowedBook) => {
    return bookStore.findBookTitle(borrowedBook);
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
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
          <div className="modalbrorrowed">~ Currently Borrowed Books ~</div>
          <div className="modalbooketitle">
            {bookTitles.map((element) => (
              <div
                className="currentlyborrowed"
                key={bookTitles.indexOf(element)}
              >
                {element}
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default MemberModal;
