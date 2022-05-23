import bookStore from "../stores/bookStore";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function Member({ member }) {
  const bookTitles = member.currentlyBorrowedBooks?.map((borrowedBook) => {
    return bookStore.findBookTitle(borrowedBook);
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const capitalMembership = (ourString) => {
    return ourString.charAt(0).toUpperCase() + ourString.slice(1);
  };
  return (
    <div className="onemember">
      <div className="membernames">
        <h1 className="membername">
          {member.firstName} {member.lastName}
        </h1>
        {member.membership === "silver" ? (
          <h2 className="membersilver">
            {capitalMembership(member.membership)}
          </h2>
        ) : null}
        {member.membership === "gold" ? (
          <h2 className="membergold">{capitalMembership(member.membership)}</h2>
        ) : null}
        {member.membership === "platinum" ? (
          <h2 className="memberplatinum">
            {capitalMembership(member.membership)}
          </h2>
        ) : null}
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
export default Member;
