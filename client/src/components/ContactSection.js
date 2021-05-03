import React from "react";
import "./ContactSection.scss";

const ContactSection = ({ src, name, header, row1, row2 }) => {
  return (
    <div className="contactSection">
      <span className="headerRow">
        <img src={src} alt="imgContact"></img>
        {`${header} ${name}`}
      </span>
      <p className="textRow">{row1}</p>
      <p className="textRow">{row2}</p>
    </div>
  );
};

export default ContactSection;
