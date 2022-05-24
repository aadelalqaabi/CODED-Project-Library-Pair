import { useParams } from "react-router-dom";
import memberStore from "../stores/memberStore";
import bookStore from "../stores/bookStore";
import { Navigate } from "react-router-dom";
function MemberPage() {
  const memberIdM = useParams().memberId;
  const member = memberStore.findMemberObj(memberIdM);

  if (!member) return <Navigate to="/MemberList" />;
  const capitalMembership = (ourString) => {
    return ourString.charAt(0).toUpperCase() + ourString.slice(1);
  };
  const bookTitles = member.currentlyBorrowedBooks?.map((borrowedBook) => {
    return bookStore.findBookTitle(borrowedBook);
  });
  return (
    <>
      <div className="mpage-container">
        <div className="mpage-name">
          {memberStore.findMemberName(memberIdM)}
        </div>
        <div className="mpage-membership">
          {" "}
          {member.membership === "silver" ? (
            <h2 className="membersilver">
              {capitalMembership(member.membership)}
            </h2>
          ) : null}
          {member.membership === "gold" ? (
            <h2 className="membergold">
              {capitalMembership(member.membership)}
            </h2>
          ) : null}
          {member.membership === "platinum" ? (
            <h2 className="memberplatinum">
              {capitalMembership(member.membership)}
            </h2>
          ) : null}
        </div>
      </div>
      <div className="mpage-cbb-title">Currently borrowing</div>

      <div className="mpage-cbb-container">
        {bookTitles.map((element) => {
          if (bookTitles?.indexOf(element) === bookTitles?.length - 1) {
            return (
              <div
                className="mpage-cbb-single-last"
                key={bookTitles.indexOf(element)}
              >
                {element}
              </div>
            );
          } else {
            return (
              <div
                className="mpage-cbb-single"
                key={bookTitles.indexOf(element)}
              >
                {element}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
export default MemberPage;
