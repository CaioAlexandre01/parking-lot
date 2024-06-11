import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboarding from "./components/Dashboarding";

function App() {
  return (
    <>
      <div className="flex bg-[#171818]">
        <Sidebar />
        <Dashboarding />
      </div>
    </>
  );
}

export default App;
