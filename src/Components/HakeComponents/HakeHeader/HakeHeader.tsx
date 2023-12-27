import { HakeView, useHake } from "../../../Contexts/HakeContext";
import "./HakeHeader.css";

const HakeHeader = () => {
  const { setView, currentChoreIsMowing } = useHake();
  const views: HakeView[] = ["CHORE", "CONTACT", "LAUNDRY"];
  const viewToTitle = {
    CHORE: currentChoreIsMowing ? "Gräsklippning" : "Snöskottning",
    CONTACT: "Kontakt",
    LAUNDRY: "Boka tvätt",
  };

  return (
    <div className="hake-header">
      {views.map((view) => (
        <button key={`header-button-${view}`} onClick={() => setView(view)}>
          {viewToTitle[view]}
        </button>
      ))}
    </div>
  );
};
export default HakeHeader;
