import { useHake } from "../../../../Contexts/HakeContext";
import "./ChoreView.css";
import MowingTracker from "./MowingTracker/MowingTracker";
import SnowTracker from "./SnowTracker/SnowTracker";

const ChoreView = () => {
  const { currentChoreIsMowing } = useHake();

  return (
    <div className="chore-view">
      {currentChoreIsMowing ? (
        <MowingTracker />
      ) : (
        <SnowTracker person={"ldld"} />
      )}
    </div>
  );
};

export default ChoreView;
