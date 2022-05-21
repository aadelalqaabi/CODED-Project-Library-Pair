import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import bookStore from "../stores/bookStore";
import { MultiSelect } from "react-multi-select-component";
function BookAdd() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);

  //const [onselect, setOnselect] = useState(selected);

  const options = [
    { label: "Action", value: "Action" },
    { label: "Fantasy", value: "Fantasy" },
    { label: "Sci-Fi", value: "Sci-Fi" },
    { label: "Romance", value: "Romance" },

    { label: "Fiction", value: "Fiction" },

    { label: "Self-Help", value: "Self-Help" },

    { label: "Thriller", value: "Thriller" },

    { label: "Suspense", value: "Suspense" },

    { label: "Biography", value: "Biography" },

    { label: "Business", value: "Business" },

    { label: "Entrepreneurship", value: "Entrepreneurship" },

    { label: "Crime", value: "Crime" },

    { label: "Mystery", value: "Mystery" },
  ];

  const [theBook, setTheBook] = useState({
    image: "",
    author: "",
    title: "",
    genres: ["Fantasy"],
  });

  const handleChange = (event) => {
    setTheBook({ ...theBook, [event.target.name]: event.target.value });
  };
  const handleGenres = (current) => {
    let newArray = [];
    if (current.length === 0) {
      newArray = ["Fantasy"];
    } else {
      newArray = current.map((genre) => genre.value);
    }
    setTheBook({ ...theBook, genres: newArray });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    bookStore.createBook(theBook);
    setSelected([]);
    handleClose();
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mx-2" id="addbook">
        <Button variant="dark" onClick={handleShow}>
          Add Book
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Image..."
                name="image"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Author..."
                name="author"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title..."
                name="title"
                onChange={handleChange}
              />
            </Form.Group>
            <MultiSelect
              options={options}
              value={selected}
              onChange={(selected) => {
                setSelected(selected);
                handleGenres(selected);
              }}
              name="genres"
              labelledBy="Select"
            />
            <br />
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
export default BookAdd;
