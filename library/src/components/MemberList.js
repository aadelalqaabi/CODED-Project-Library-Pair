import Member from "./Member";
import { observer } from "mobx-react";
import memberStore from "../stores/memberStore";
import MemberAdd from "./MemberAdd";
import { useState } from "react";
function MemberList() {
  const [query, setQuery] = useState("");
  const memberList = memberStore.members
    .filter(
      (member) =>
        member.firstName.toLowerCase().includes(query.toLowerCase()) ||
        member.lastName.toLowerCase().includes(query.toLowerCase())
    )
    .map((member) => <Member member={member} key={member._id} />);
  return (
    <div className="searchaddmember">
      <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          id="searchinputmember"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <MemberAdd />
      <div className="memberList">{memberList}</div>
    </div>
  );
}
export default observer(MemberList);
