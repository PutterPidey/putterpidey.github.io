import "./HakeLanding.css";
import LaundryView from "../../Components/HakeComponents/Views/LaundryView/LaundryView";
import { useState } from "react";

const views = {
  laundry: LaundryView,
};

const HakeLanding = () => {
  const [currentView, setCurrentView] = useState<"laundry">("laundry");
  const CurrentView = views[currentView];
  return (
    <div>
      <CurrentView />
    </div>
  );
};

export default HakeLanding;
