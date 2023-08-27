import { useNavigate } from "react-router-dom";
import "./HomeLanding.css";
const HomeLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <h1>Mattias Larsson</h1>
      <p>Some stuff:</p>
      <div className="nav-button-container">
        <div className="nav-button" onClick={() => navigate("./tibber")}>
          Tibber
        </div>
        <div className="nav-button" onClick={() => navigate("./libretto")}>
          Libretto
        </div>
        <div className="nav-button" onClick={() => navigate("./hake")}>
          Hake
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
