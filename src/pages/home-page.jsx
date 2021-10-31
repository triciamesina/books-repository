import React, { useState } from "react";
import { BookDetails } from "../components/book-details";
import { BookList } from "./list-page";

export const BooksPage = () => {
  const [detailsView, setDetailsView] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);

  const handleBookClick = (book) => {
    console.log("book clicked ", book);
    setBookDetails(book);
    setDetailsView(true);
  };

  const handleReturn = () => {
    console.log("return clicked ");
    setBookDetails(null);
    setDetailsView(false);
  };
  console.log(handleBookClick);
  return (
    <>
      <div className="ui main text container">
        <h1>{detailsView ? "Books Details" : "Book List"}</h1>
        <br />
      </div>
      <div className="ui container">
        {detailsView ? (
          <BookDetails data={bookDetails} onBackClick={handleReturn} />
        ) : (
          <BookList onBookClick={handleBookClick} />
        )}
      </div>
    </>
  );
};
