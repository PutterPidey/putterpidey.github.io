import meSrc from "./Programmer.webp";
import "./IntroBox.css";

const IntroBox = () => {
  return (
    <div className="intro-box project-box">
      <div className="intro-box-primary-content">
        <h2>Yo!</h2>
        <p>My name's Mattias! I program and stuff. Wowee check me out!</p>
      </div>
      <img src={meSrc} />
    </div>
  );
};

export default IntroBox;
