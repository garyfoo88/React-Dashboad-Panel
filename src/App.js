import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
