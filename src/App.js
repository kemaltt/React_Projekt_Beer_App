import "./App.css";
import { Routes, Route } from "react-router-dom";
import Random from "./pages/Random";
import Beer from "./pages/Beer";
import Home from "./pages/Home";
import BeerDetail from "./components/BeerDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer" element={<Beer />} />
        <Route path="/random" element={<Random />} />
        <Route path="/detail/:id" element={<BeerDetail />} />
      </Routes>
    </div>
  );
}

export default App;
