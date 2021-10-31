import React, { useEffect, useState } from "react";
import { Book } from "../components/book";
import { books } from "../books.json";

export const BookList = ({ onBookClick }) => {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setData(books);
    console.log(books);
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded && (
        <div className="ui link cards">
          {data.map((book, i) => (
            <Book data={book} key={i} onClick={() => onBookClick(book)} />
          ))}
        </div>
      )}
    </>
  );
};
