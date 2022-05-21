import { makeObservable, observable, action } from "mobx";
import axios from "axios";
class MemberStore {
  members = [
    {
      firstName: "Aziz",
      lastName: "AlSaffar",
      membership: "gold",
      currentlyBorrowedBooks: "62853a01d8ec5d3d4a29fa5b",
    },
  ];
  constructor() {
    makeObservable(this, {
      members: observable,
      createMember: action,
    });
  }

  findBorrowingMember = (bookId) => {
    if (bookId === "x") {
      return "";
    }
    const theMember = this.members.find(
      (member) => bookId === member.currentlyBorrowedBooks
    );
    return `${theMember.firstName} ${theMember.lastName}`;
  };

  createMember = async (member) => {
    try {
      const response = await axios.post(
        "https://library-borrow-system.herokuapp.com/api/members",
        member
      );
      this.members.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchMembers = async () => {
    try {
      console.log("I am here");
      const response = await axios.get(
        "https://library-borrow-system.herokuapp.com/api/members"
      );
      this.members = response.data;
      console.log(this.members);
    } catch (error) {
      console.error(error);
    }
  };
}
const memberStore = new MemberStore();
memberStore.fetchMembers();
export default memberStore;
