import React from "react";

const BookingSlot = ({ availableTimes }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "inline-row", width: "300px" }}
    >
      {availableTimes.length > 0
        ? availableTimes.map((option, index) => <h4 key={index}>{option}</h4>)
        : "No slots available"}
    </div>
  );
};
export default BookingSlot;
