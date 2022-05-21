import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import memberStore from "../stores/memberStore";
function MemberAdd() {
  const [show, setShow] = useState(false);

  const [theMember, setTheMember] = useState({
    firstName: "",
    lastName: "",
    membership: "",
  });

  const handleChange = (event) => {
    setTheMember({ ...theMember, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    memberStore.createMember(theMember);
    handleClose();
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mx-2" id="addmember">
        <Button variant="dark" onClick={handleShow}>
          Add Member
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First Name..."
                name="firstName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last Name..."
                name="lastName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMembership">
              <Form.Select
                required
                name="membership"
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Membership</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary mx-2" type="submit">
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default MemberAdd;
