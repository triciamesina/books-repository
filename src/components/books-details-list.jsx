import React, { useEffect, useState } from "react";
import { BookDetails } from "./book-details";
import { books } from "../books.json";

export const BookDetailsList = () => {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setData(books);
    console.log(books);
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="ui main text container">
        <h1>Books Details</h1>
        <br />
      </div>
      {loaded && (
        <div className="ui one cards">
          {data.map((book, i) => (
            <BookDetails data={book} key={i} />
          ))}
        </div>
      )}
    </>
  );
};
