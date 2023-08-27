import "./Button.css";
import React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isDisabled?: boolean;
  big?: boolean;
}

const Button: React.FC<Props> = (props: Props) => {
  const className = `${props.isDisabled ? "disabled-button" : ""} ${
    props.big ? "big-button" : ""
  }`;

  return (
    <button {...props} className={className}>
      {props.title}
    </button>
  );
};
export default Button;
