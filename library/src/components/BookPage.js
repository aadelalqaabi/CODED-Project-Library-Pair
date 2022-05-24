import { useParams } from "react-router-dom";
import memberStore from "../stores/memberStore";
import bookStore from "../stores/bookStore";
import { Navigate, Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import MemberPage from "./MemberPage";
function BookPage() {
  const bookIdM = useParams().bookId;
  const book = bookStore.findBookObj(bookIdM);

  const membersWhoBorrowed = book.borrowedBy?.map((memberID) =>
    memberStore.findMemberName(memberID)
  );

  const membersWhoBorrowedObj = book.borrowedBy?.map((memberID) =>
    memberStore.findMemberObj(memberID)
  );

  if (!book) return <Navigate to="/BookList" />;
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
    <div className="upcontainer">
      <div className="mpage-namebook">{bookStore.findBookTitle(bookIdM)}</div>
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
              <Link to={`/MemberList/${member?._id}`}>
                <Button variant="light">Go to profile</Button>
              </Link>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BookPage;
