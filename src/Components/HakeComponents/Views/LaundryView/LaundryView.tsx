import Block from "./Block/Block";
import Calendar from "./Calendar/Calendar";
import "./LaundryView.css";
const LaundryView = () => {
  return (
    <>
      <div className="laundry-view">
        <div className="top">
          <div className="laundry-header">
            <div className="panel left">
              <h2>Tvättmaskin</h2>
              <div className="block-spawner">
                <Block />
              </div>
            </div>
            <div className="laundry-title-container">
              <h1>Boka tvätt</h1>
              <h4>Dra blocken för att boka en tid</h4>
            </div>
            <div className="panel right">
              <h2>Torkskåp</h2>
              <div className="block-spawner"></div>
            </div>
          </div>
        </div>
        <div className="booker-wrapper">
          <div className="calendar-wrapper">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default LaundryView;
