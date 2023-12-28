//Code creating fake api calls since those provided by the course dont work

function getRandomTimeSlots(date) {
  const timeSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  // random 4 out of 5 supposed to imitate real life where some slots might be already booked
  const randomTimeSlots = [];
  if (timeSlots.length >= 4) {
    while (randomTimeSlots.length < 4) {
      const randomIndex = Math.floor(
        Math.random(parseInt(date)) * timeSlots.length
      );
      const randomTimeSlot = timeSlots.splice(randomIndex, 1)[0];
      randomTimeSlots.push(randomTimeSlot);
    }
  }
  return randomTimeSlots.sort();
}

function updateAndRemoveReservedSlot(date, slot) {
  if (date === "") {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  if (slot) {
    if (localStorage.getItem(date)) {
      const new_item = JSON.stringify(
        JSON.parse(localStorage.getItem(date)).filter((item) => item !== slot)
      );
      localStorage.setItem(date, new_item);
      return localStorage.getItem(date)
        ? JSON.parse(localStorage.getItem(date))
        : [];
    }
  } else if (localStorage.getItem(date)) {
    return localStorage.getItem(date)
      ? JSON.parse(localStorage.getItem(date))
      : [];
  } else {
    const randomSlots = getRandomTimeSlots(date);
    localStorage.setItem(date, JSON.stringify(randomSlots));
    return localStorage.getItem(date)
      ? JSON.parse(localStorage.getItem(date))
      : [];
  }
}

export const fetchAPI = (date) => {
  return updateAndRemoveReservedSlot(date);
};

export const submitAPI = (formData) => {
  updateAndRemoveReservedSlot(formData.date, formData.time);
  return true;
};
