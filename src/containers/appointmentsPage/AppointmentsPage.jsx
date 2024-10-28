import React, { useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments,contacts,addAppointment,handleDeleteAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
 const [name, setName] = useState("");
 const [contact, setContact] = useState("");
 const [date, setDate] = useState("");
 const [time, setTime] = useState("");
 

 function clearForm(){
  setName(""); 
  setContact(""); 
  setDate(""); 
  setTime(""); 
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   const newAppointment = {
    name,
    id: uuidv4(), 
    contact,
    date,
    time
   }
   
   addAppointment(newAppointment)

   clearForm()
  };


  return (
    <div>
      <section>
        <h2 className="text-3xl font-bold mt-10 mb-7 text-center">Add Appointment</h2>
        <AppointmentForm  contact={contact} setContact={setContact} date={date} setDate={setDate} setTime={setTime} handleSubmit={handleSubmit} contacts={contacts} title={name} setTitle={setName} />
      </section>
      <hr />
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mt-10 mb-7 text-center">Appointments</h2>
        <TileList handleDeleteAppointment={handleDeleteAppointment}  list={appointments}/>
      </section>
    </div>
  );
};