import "./App.css";
import HomePage from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/booking" element={{}} />
      </Routes>
    </Router>
  );
}

export default App;
