import React from "react";

function Avatar({ photo }) {
  return (
    <img
      src={photo}
      alt="gambar user"
      style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "12px" }}
    />
  );
}

function UserInfo({ name, photo }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar photo={photo} />
      <span style={{ fontWeight: "bold" }}>{name}</span>
    </div>
  );
}

function CommentText({ text }) {
  return <p style={{ marginTop: "6px" }}>{text}</p>;
}

function Comment({ nama, photo, text }) {
  const boxStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    margin: "10px 0",
    maxWidth: "400px",
    backgroundColor: "white",
    color: "black"
  };
  return (
    <div style={boxStyle}>
      <UserInfo name={nama} photo={photo} />
      <CommentText text={text} />
    </div>
  );
}

export default Comment;