import React from "react";

export const BookDetails = ({ data, onBackClick }) => {
  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="header">{data.title}</div>
        <div className="meta">{data.subtitle}</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">Author</h4>
        <div class="description">{data.author}</div>
        <h4 className="ui sub header">Publisher</h4>
        <div class="description">{data.publisher}</div>
        <h4 className="ui sub header">Description</h4>
        <div class="description">{data.description}</div>
      </div>
      {onBackClick !== undefined && (
        <div className="extra content">
          <button className="ui button" onClick={onBackClick}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};
