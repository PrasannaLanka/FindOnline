import "./App.css";
import Home from "./pages/Home";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Final from "./pages/Final";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/first" element={<First />} />
          <Route exact path="/second" element={<Second />} />
          <Route exact path="/third" element={<Third />} />
          <Route exact path="/final" element={<Final />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
