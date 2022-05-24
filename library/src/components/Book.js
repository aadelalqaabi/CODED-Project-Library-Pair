import memberStore from "../stores/memberStore";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import BookBorrow from "./BookBorrow";
import bookStore from "../stores/bookStore";
import MemberModal from "./MemberModal";
import { Link } from "react-router-dom";
function Book({ book }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const membersWhoBorrowed = book.borrowedBy?.map((memberID) =>
    memberStore.findMemberName(memberID)
  );

  const membersWhoBorrowedObj = book.borrowedBy?.map((memberID) =>
    memberStore.findMemberObj(memberID)
  );

  const currentlyBorrowingShow = () => {
    if (book.available === true) {
      return <></>;
    } else {
      return (
        <div className="modalbrorrowed">
          Currently Borrowed by:{" "}
          <Link
            to={`/MemberList/${
              membersWhoBorrowedObj[membersWhoBorrowedObj.length - 1]?._id
            }`}
            class="currently-link"
          >
            {membersWhoBorrowed[membersWhoBorrowed.length - 1]}
          </Link>
        </div>
      );
    }
  };

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
            <BookBorrow key={book._id} book={book} />
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="titlefont">{book.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modalbookgenres">
              {book.genres.map((element) => (
                <div key={element} className="bookgenres">
                  {element}{" "}
                </div>
              ))}
            </div>

            <div className="modalbrorrowed">Written By {book.author}</div>
            {currentlyBorrowingShow()}
            <div className="modalbrorrowed">Borrowed History</div>
            <div className="bookborrowedbydiv">
              {membersWhoBorrowedObj.map((member) => (
                <div className="bookborrowedby">
                  <div className="specialmembermodal">
                    <div className="memberborrowedname">
                      {member?.firstName} {member?.lastName}
                    </div>
                    <MemberModal key={member?._id} member={member} />
                  </div>
                </div>
              ))}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
export default Book;
