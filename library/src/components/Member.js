function Member({ member }) {
  return (
    <div>
      <h2>{member.firstName}</h2>
      <h2>{member.lastName}</h2>
      <h2>{member.membership}</h2>
    </div>
  );
}
export default Member;
