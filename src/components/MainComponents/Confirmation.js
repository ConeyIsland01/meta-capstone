import React from "react";

const Confirmation = ({
  formData,
  confirmationOpen,
  setConfirmationOpen,
  setFormData,
  initialState,
}) => {
  return (
    <div>
      {confirmationOpen && (
        <div className="confirmation">
          <div className="confirmation-content">
            <h2>Thanks for making a recervation</h2>
            <p
              style={{ fontSize: "18px" }}
            >{`Reservation confirmed for a party of ${formData.guests} on ${formData.date} at ${formData.time}`}</p>
            <button
              disabled={formData.time === ""}
              style={{ height: "45px" }}
              className="button"
              onClick={() => {
                setConfirmationOpen(false);
                //setFormData({ initialState });
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
