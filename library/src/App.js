import "./App.css";
import MemberList from "./components/MemberList";
import BookList from "./components/BookList";
import Header from "./components/Header";
import MemberAdd from "./components/MemberAdd";
import BookAdd from "./components/BookAdd";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="book-container">
          <BookAdd />
          <BookList className="book-list" />
        </div>
        <div className="member-container">
          <MemberAdd />
          <MemberList className="member-list" />
        </div>
      </div>
    </div>
  );
}

export default App;
