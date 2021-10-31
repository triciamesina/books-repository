import React, { useEffect } from "react";

export const NavigationBar = ({ onHashChange }) => {
  useEffect(() => {
    window.addEventListener("hashchange", onHashChange, false);
  }, []);

  return (
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <a href="#" className="header item">
          Books Repository
        </a>
        <a href="#home" className="item">
          Home
        </a>
        <a href="#list" className="item">
          List
        </a>
      </div>
    </div>
  );
};
