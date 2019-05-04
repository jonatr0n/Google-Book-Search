import React from "react";

const BookDetail = props => {
  return (
    <span>
      <div className="col-md-3" style={{ float: "left", marginTop: "10px" }}>
        <p>
          <img
            alt={props.title}
            className="img-fluid"
            src={props.src}
            style={{ margin: "0 auto" }}
          />
        </p>
        <p style={{ fontSize: "20px" }}>{props.title}</p>
        <p>
          <strong>Author(s):</strong> {props.authors}
        </p>

        <button
          onClick={props.handleSaveBook}
          className="btn btn-primary save-btn"
          style={{ marginBottom: "10px" }}
        >
          Save for later
        </button>
      </div>
      <div className="col-md-9" style={{ float: "right", marginTop: "10px" }}>
        <p style={{ marginBottom: "30px" }}>
          <strong>Summary:</strong> {props.description}
        </p>
        <p>
          <strong>Date of Publish:</strong> {props.date}
        </p>
        <p>
          <strong>Link:</strong>{" "}
          <a href={props.link} target={"_blank"}>
            {props.title}
          </a>
        </p>
      </div>
      <hr style={{ clear: "both" }} />
    </span>
  );
};

export default BookDetail;
