import React from "react";

// takes in icon, subtitle and para as properties from the Highlights component and passes them into the Highlight function.

const Highlight = ({icon, subtitle, para}) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">{subtitle}</h3>
      <p className="highlight__para">
        {para}        
      </p>
    </div>
  );
};

export default Highlight;
