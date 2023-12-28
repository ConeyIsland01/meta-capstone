import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reservation from "./components/MainComponents/Reservation";

function ReservationPage() {
  return (
    <>
      <div className="grid-container">
        <Header />

        <div style={{ gridColumn: "span 12" }}>
          <div className="reservation">
            <Reservation />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ReservationPage;
