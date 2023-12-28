import { render, screen } from "@testing-library/react";
import Bookings, {
  initializeTimes,
  updateTimes,
} from "./components/MainComponents/Reservation";

test("Renders the Reservation heading", () => {
  render(<Bookings />);
  const headingElement = screen.getByText("Make a Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Test initialize times", () => {
  // This test was designed having fake api calls in mind
  const times = initializeTimes("2024-12-26");
  localStorage.clear();
  render(
    <div>
      {times.map((time, index) => (
        <div key={index}>{time}</div>
      ))}
    </div>
  );
  expect(screen.getAllByText(/:00/)[0]).toBeInTheDocument();
  expect(times.length === 4);
});

test("Test update times", () => {
  // This test was designed having fake api calls in mind
  localStorage.clear();
  const times = initializeTimes("2024-12-26");
  const updated_times = updateTimes("2024-12-26", times[0]);
  render(
    <div>
      {updated_times.map((time, index) => (
        <div key={index}>{time}</div>
      ))}
    </div>
  );
  expect(screen.getAllByText(/:00/)[0]).toBeInTheDocument();
  expect(times.length === 3);
});
