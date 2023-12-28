import React from "react";
import { useState } from "react";
import { submitAPI } from "../../APICalls";
import Confirmation from "./Confirmation";

const BookingForm = ({
  availableTimes,
  dispatchUpdateTime,
  formData,
  setFormData,
  initialState,
}) => {
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log("name-value", name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchUpdateTime({
      type: "UPDATE",
      date: formData.date,
      time: formData.time,
    });
    console.log("here", formData.date, formData.time);
    const response = submitAPI(formData);
    if (response) {
      setConfirmationOpen(true);
    }
  };
  console.log("availableTimes", availableTimes);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input
          name="date"
          min="2023-12-25"
          max="2024-01-20"
          onChange={onChange}
          type="date"
          id="date"
          required
        />
        <label htmlFor="time">Choose time</label>
        <select id="time" name="time" onChange={onChange} required>
          {["", ...availableTimes].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          name="guests"
          onChange={onChange}
          type="number"
          placeholder="1"
          defaultValue={"1"}
          min="1"
          max="10"
          id="guests"
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select onChange={onChange} name="occasion" id="occasion" required>
          <option>No Special Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
        </select>
        <div style={{ marginTop: "40px", marginBottom: "150px" }}>
          {availableTimes.length > 0 ? (
            <button
              className="button"
              style={{ height: "40px", fontSize: "18px" }}
              type="submit"
            >
              Make your reservation
            </button>
          ) : (
            <div
              style={{
                fontSize: "18px",
              }}
              type="submit"
            >
              No Slots Available
            </div>
          )}
        </div>
      </form>
      <Confirmation
        formData={formData}
        confirmationOpen={confirmationOpen}
        setConfirmationOpen={setConfirmationOpen}
        setFormData={setFormData}
        initialState={initialState}
      />
    </>
  );
};

export default BookingForm;
