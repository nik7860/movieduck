import React from "react";
import "../styles.css";

export default function Footer() {
  const cyear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>©{cyear} Movie Ducx All rights reserved!</p>
    </div>
  );
}
