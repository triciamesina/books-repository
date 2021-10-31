import React from "react";

export const Book = ({ data, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="content">
        <div className="header">{data.title}</div>
        <div className="meta">{data.subtitle}</div>
        <div className="description">{data.author}</div>
      </div>
    </div>
  );
};
