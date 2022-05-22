import { makeAutoObservable } from "mobx";
import axios from "axios";
class MemberStore {
  members = [];
  constructor() {
    makeAutoObservable(this);
  }

  findMemberName = (memberID) => {
    const theMember = this.members?.find((member) => memberID === member?._id);
    return `${theMember?.firstName} ${theMember?.lastName}`;
  };

  findMemberObj = (memberID) => {
    const theMember = this.members?.find((member) => memberID === member?._id);
    return theMember;
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
    } catch (error) {
      console.error(error);
    }
  };
}
const memberStore = new MemberStore();
memberStore.fetchMembers();
export default memberStore;
