import { useHake } from "../../../../Contexts/HakeContext";
import brfSplash from "./HakeSplash.jpeg";
import "./HomeView.css";

const HomeView = () => {
  const { view } = useHake();
  return (
    <div className="home-view">
      <img src={brfSplash} alt="splash" />
      <h1>BRF Hake</h1>
    </div>
  );
};

export default HomeView;
