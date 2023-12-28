import React from "react";
import BookingForm from "./BookingForm";
import { useReducer, useEffect, useState } from "react";
import BookingSlot from "./BookingSlot";
import { fetchAPI } from "../../APICalls";

export const updateTimes = (date, time) => {
  const resp = fetchAPI(date, time);
  return resp;
};

export const initializeTimes = (date) => {
  const data = fetchAPI(date);
  return data;
};

const Bookings = () => {
  // This page should be treated to what instrctuions refer as Main page
  // since the api code didnt work had to write mock functions

  const initialState = {
    date: "",
    time: "",
    guests: "1",
    occasion: "No Special Occasion",
  };

  const [formData, setFormData] = useState(initialState);
  const reducer = (availableTimes, action) => {
    switch (action.type) {
      case "UPDATE":
        return updateTimes(action.date, action.time);
      default:
        return initializeTimes(action.date);
    }
  };

  useEffect(() => {
    dispatch({ date: formData.date });
  }, [formData.date]);

  const [availableTimes, dispatch] = useReducer(reducer, []);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Available Slots</h1>
        <BookingSlot availableTimes={availableTimes} />
        <h1>Make a Reservation</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatchUpdateTime={dispatch}
          formData={formData}
          setFormData={setFormData}
          initialState={initialState}
        />
      </div>
    </div>
  );
};

export default Bookings;
