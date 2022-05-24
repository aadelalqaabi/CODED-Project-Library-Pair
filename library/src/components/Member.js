import bookStore from "../stores/bookStore";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import MemberModal from "./MemberModal";
import { Link } from "react-router-dom";
function Member({ member }) {
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
      <Link to={`/MemberList/${member._id}`}>
        <Button variant="light">Page</Button>
      </Link>
    </div>
  );
}
export default Member;

//<MemberModal key={member._id} member={member} />
