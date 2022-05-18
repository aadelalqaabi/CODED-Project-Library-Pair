import Member from "./Member";
import { observer } from "mobx-react";
import memberStore from "../stores/memberStore";
function MemberList() {
  let memberList = memberStore.members.map((member) => {
    return <Member member={member} key={member.id} />;
  });
  return <div>{memberList}</div>;
}
export default observer(MemberList);
