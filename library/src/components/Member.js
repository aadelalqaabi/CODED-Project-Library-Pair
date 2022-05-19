import bookStore from "../stores/bookStore";
function Member({ member }) {
  const bookTitles = member.currentlyBorrowedBooks.map((borrowedBook) => {
    return bookStore.findBookTitle(borrowedBook.id);
  });
  return (
    <div className="onemember">
      <h2>
        {member.firstName} {member.lastName}
      </h2>
      <h2>{member.membership}</h2>
      <p>{bookTitles}</p>
    </div>
  );
}
export default Member;
