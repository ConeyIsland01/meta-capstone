import React from "react";

const Confirmation = ({ formData, confirmationOpen, setConfirmationOpen }) => {
  return (
    <div>
      {confirmationOpen && (
        <div className="confirmation">
          <div className="confirmation-content">
            <h2>Thanks for making a reservation</h2>
            <p
              style={{ fontSize: "18px" }}
            >{`Reservation confirmed for a party of ${formData.guests} on ${formData.date} at ${formData.time}`}</p>
            <button
              disabled={formData.time === ""}
              style={{ height: "45px" }}
              className="button"
              onClick={() => {
                setConfirmationOpen(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Confirmation;
