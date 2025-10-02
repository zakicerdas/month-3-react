import React from "react";

export default function ProfileCard({ name, photo, bio, skills = [] }) {
  const container = {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    padding: "16px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    backgroundColor: "#f9fafb",
    maxWidth: "400px",
    marginTop: "30px",
    marginBottom: "30px"
  };

  const img = {
    width: "96px",
    height: "96px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  };

  const nameStyle = {
    margin: "0",
    fontSize: "18px",
    fontWeight: "600"
  };

  const bioStyle = {
    margin: "8px 0",
    color: "#4b5563",
    fontSize: "14px"
  };

  const skillsWrapper = {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "8px"
  };

  const skillBadge = {
    background: "#e0e7ff",
    color: "#1e3a8a",
    padding: "4px 10px",
    borderRadius: "9999px",
    fontSize: "12px",
    fontWeight: "500",
    marginRight: "6px",
    marginBottom: "6px"
  };

  return (
    <div style={container}>
      <img src={photo} alt={`${name} avatar`} style={img} />
      <div>
        <h3 style={nameStyle}>{name}</h3>
        <p style={bioStyle}>{bio}</p>
        <div style={skillsWrapper}>
          {skills.length > 0 ? (
            skills.map((s) => (
              <span key={s} style={skillBadge}>
                {s}
              </span>
            ))
          ) : (
            <em style={{ color: "#9ca3af" }}>No skills listed</em>
          )}
        </div>
      </div>
    </div>
  );
}
