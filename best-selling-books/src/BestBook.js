import React from "react";
import "./BestBook.css";

const BestBook = ({ title, author, description, amazonURL, image }) => {
  return (
    <div className="container">
      <div className="box">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <h2>{author}</h2>
          <p>{description}</p>
          <a href={amazonURL}>
            <button className="button">Buy</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BestBook;
