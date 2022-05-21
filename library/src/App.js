import "./App.css";
import MemberList from "./components/MemberList";
import BookList from "./components/BookList";
import Nav from "./components/Nav";
import Home from "./components/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/BookList" element={<BookList className="book-list" />} />
        <Route
          path="/MemberList"
          element={<MemberList className="member-list" />}
        />
      </Routes>
    </div>
  );
}

export default App;
