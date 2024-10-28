import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};



export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  function onChange(e){
    e.preventDefault(); 

    setContact(e.target.value);
  }

  return (
    <form className="flex flex-col items-center justify-center " onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center w-[300px] gap-3">
          <input className="border-gray-400 border-solid border-[2px] rounded-full px-4 py-2 w-full" required value={title} onChange={e => setTitle(e.target.value)} placeholder="Appointment Name" type="text" name="name" id="name" />
          <input className="border-gray-400 border-solid border-[2px] rounded-full px-4 py-2 w-full" required type="date" value={date} onChange={e=> setDate(e.target.value)} min={getTodayString()} />
          <input className="border-gray-400 border-solid border-[2px] rounded-full px-4 py-2 w-full" type="time" value={time} onChange={e =>{setTime(e.target.value)}} />
          <ContactPicker contacts={contacts} onChange={onChange} />
          <button className="rounded-full bg-pink-600 px-5 py-2 font-bold text-white mb-4" type="submit">Submit Appointment</button>
        </div>
    </form>
  );
};

export default AppointmentForm; 