import { useNavigate } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="title-container">
        <h1 className="crooked">4</h1>
        <h1 className="swinging">0</h1>
        <h1 className="fallen">4</h1>
      </div>
      <h3>Look what you've done... 😡</h3>
      <button onClick={() => navigate("./")}>Back to start</button>

      <div className="fire-container">
        <div className="swinging fire">🔥</div>
        <div className="swinging fire">🔥</div>
        <div className="swinging fire">🔥</div>
        <div className="swinging fire">🔥</div>
      </div>
    </div>
  );
};

export default NotFound;
