import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { HomePage } from "./HomePage";

function App() {
  const [dashboard, setDashboard] = useState(false);

  return (
    <div className="App">
      {dashboard !== false ? (
        <Dashboard logout={setDashboard} />
      ) : (
        <HomePage login={setDashboard} />
      )}
    </div>
  );
}

export default App;
