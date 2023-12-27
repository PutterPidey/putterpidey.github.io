import React from "react";
import "./SectionDivider.css";
const SectionDivider = ({ text }: { text: string }) => {
  return (
    <div className="section-divider">
      <i>{text}</i>
    </div>
  );
};

export default SectionDivider;
