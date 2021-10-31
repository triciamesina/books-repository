import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { useState } from "react";
import { BooksPage } from "./pages/home-page";
import { NavigationBar } from "./layout/navigation-bar";
import { BookDetailsList } from "./components/books-details-list";

function App() {
  const [page, setPage] = useState("Home");

  const handleHashChange = () => {
    // eslint-disable-next-line no-restricted-globals
    const page = location.hash.replace("#", "");
    console.log(page);
    setPage(page === "" ? "home" : page);
  };

  return (
    <div className="App">
      <NavigationBar onHashChange={handleHashChange} />
      <div className="ui main text container">
        {page === "home" && <BooksPage />}
        {page === "list" && <BookDetailsList />}
      </div>
    </div>
  );
}

export default App;
