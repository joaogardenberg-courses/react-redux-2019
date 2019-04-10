import React from "react";

const CommentDetail = ({ author, date, text, avatar }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={ avatar } alt="Avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          { author }
        </a>
        <div className="metadata">
          <span className="date">
          { date }
          </span>
        </div>
        <div className="text">
          { text }
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;