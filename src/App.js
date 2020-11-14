import DashboardSection from "./DashboardSection";
import AlertSection from "./AlertSection";

import "./style.css";

const App = () => {
  return (
    <>
      <p>DBP Dashboard</p>
      <div className="row">
        <div className="column">
          <DashboardSection></DashboardSection>
        </div>
        <div className="column">
          <AlertSection></AlertSection>
        </div>
      </div>
    </>
  );
};

export default App;
