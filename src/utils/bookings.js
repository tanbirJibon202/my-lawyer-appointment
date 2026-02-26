const getStoredBookings = () => {
  const storedData = localStorage.getItem("lawyer_bookings");
  return storedData ? JSON.parse(storedData) : [];
};
export const addLawyerAppointment = (newLawyer) => {
  const currentBookings = getStoredBookings();
  const isExist = currentBookings.find((lawyer) => lawyer.id === newLawyer.id);
  if (isExist) {
    console.warn("This lawyer is already booked!");
    return { success: false, message: "Already booked this lawyer!" };
  }
  const updatedBookings = [...currentBookings, newLawyer];
  localStorage.setItem("lawyer_bookings", JSON.stringify(updatedBookings));
  console.log("Appointment Successfully Added:", newLawyer);
  return { success: true, message: "Appointment confirmed!" };
};
export const removeLawyerAppointment = (id) => {
  const currentBookings = getStoredBookings();
  const remaining = currentBookings.filter((lawyer) => lawyer.id !== id);
  localStorage.setItem("lawyer_bookings", JSON.stringify(remaining));
  return remaining;
};
