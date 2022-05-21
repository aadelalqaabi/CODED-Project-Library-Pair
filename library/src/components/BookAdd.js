import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import bookStore from "../stores/bookStore";
function BookAdd() {
  const [show, setShow] = useState(false);
  const genresArray = [
    "Action",
    "Fantasy",
    "Sci-Fi",
    "Romance",
    "Fiction",
    "Self-Help",
    "Thriller",
    "Suspense",
    "Biography",
    "Business",
    "Entrepreneurship",
    "Crime",
    "Mystery",
  ];

  const [theBook, setTheBook] = useState({
    image: "",
    author: "",
    title: "",
    genres: [],
  });

  const handleChange = (event) => {
    setTheBook({ ...theBook, [event.target.name]: event.target.value });
  };
  const handleGenres = (current) => {
    let newArray = [];
    newArray.push(current);
    setTheBook({ ...theBook, genres: newArray });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    bookStore.createBook(theBook);
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
            <Form.Group className="mb-3" controlId="formBasicGenres">
              {genresArray.map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={"checkbox"}
                    onChange={(type) => handleGenres(type)}
                    id={`${type}`}
                    label={`${type}`}
                    name="genres"
                  />
                </div>
              ))}
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
export default BookAdd;
