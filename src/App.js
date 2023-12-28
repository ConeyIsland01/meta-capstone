import "./App.css";
import HomePage from "./Home";
import ReservationPage from "./ReservationPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/booking" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
