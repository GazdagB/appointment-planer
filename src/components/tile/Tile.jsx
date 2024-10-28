/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";





export const Tile = ({ name = "No Name", description, handleDeleteAppointment ,handleDelete }) => {

  const [isContactModalOpen, setisContactModalOpen] = useState(false); 
  const [isAppointmentModalOpen,setIsAppointmentModalOpen] = useState(false)

  function closeContactModal(){
    setisContactModalOpen(false); 
  }

  function closeAppointmentModal(){
    setIsAppointmentModalOpen(false)
  }

  function openAppointmentModal(){
    setIsAppointmentModalOpen(true)
  }

  function openContactModal(){
    setisContactModalOpen(true); 
  }

  //APPOINTMENT 
  if(description.type === 'appointment'){
    const contact = JSON.parse(description.contact)
    
    return (
      <div className="tile-container flex flex-col gap-5 shadow-lg rounded-xl relative py-7 px-10">
        <TiDeleteOutline onClick={openAppointmentModal} className="cursor-pointer absolute top-4 right-4 text-3xl text-gray-600" />
        <div>
          <p className="text-xl font-bold">{name}</p>
          <div className="flex gap-4 items-center text-gray-500">
            <p>{description.date}</p>
            <p>{description.time}</p>
          </div>
        </div>

        <div className="contact flex items-center opacity-75 gap-6">
          <img className="w-[100px] h-[100px] object-cover rounded-full" src={contact.image} alt="" />
          <div>
            <p className="font-bold">{contact.name}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </div>

      {/*DELETE APPOINTMENT MODAL*/}
      {isAppointmentModalOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-10"
      onClick={closeAppointmentModal} // This closes the modal when clicking outside
    ></div>

    {/* Modal */}
    <div className="delete-modal fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-6 rounded shadow-lg flex flex-col items-center justify-center gap-4">
      <p className="cursor-pointer self-end me-3" onClick={closeAppointmentModal}><TiDeleteOutline  className="text-3xl text-gray-600" /></p>
      <p className="mb-3">Are you sure you want to delete this appointment?</p>
      <div className="flex flex-col gap-4 items-center justify-center opacity-75">
        <div className="flex flex-col self-start w-full">
          <div className="text-xl font-bold">{name}</div>
          <div className="flex gap-3">
            <p>{description.date}</p>
            <p>{description.time}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="w-[80px] h-[80px] rounded-full" src={contact.image} alt="" />
          <div>
          <p className="tile-title font-bold">{name}</p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="bg-red-700 text-white font-bold py-3 px-6 rounded-full" onClick={() => {
          closeAppointmentModal()
          handleDeleteAppointment(description.id)}}>Delete</button>
        <button className="bg-gray-300 font-bold py-3 px-6 rounded-full" onClick={closeAppointmentModal}>Cancel</button>
      </div>
    </div>
  </>
)}
    </div>
    )
    
  } 
  //CONTACT 
  else if(description.type === 'contact'){
    return (<div className="tile-container flex gap-4 items-center justify-center relative shadow-lg rounded-lg py-4 px-10">
        <img className={"h-[100px] w-[100px]  rounded-full object-contain"} src={description.image} alt="" />
        <div>
        <p className="tile-title font-bold text-lg ">{name}</p>
        <p className="flex items-center gap-2"><BsFillTelephoneFill className="translate-y-[-1px] text-gray-400" /> {description.phone}</p>
        <p className="flex items-center gap-2"><MdEmail className="text-lg mt-1 text-gray-400" /> {description.email}</p>
        <p onClick={openContactModal} className="cursor-pointer absolute top-4 right-4"><TiDeleteOutline  className="text-3xl text-red-700" /></p>
      </div>


    {/*DELETE MODAL*/}
      {isContactModalOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-10"
      onClick={closeContactModal} // This closes the modal when clicking outside
    ></div>

    {/* Modal */}
    <div className="delete-modal fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-6 rounded shadow-lg flex flex-col items-center justify-center gap-4">
      <p className="cursor-pointer self-end me-3" onClick={closeContactModal}><TiDeleteOutline  className="text-3xl text-gray-600" /></p>
      <p className="mb-3">Are you sure you want to delete the contact?</p>
      <div className="flex gap-4 items-center justify-center opacity-75">
        <img className="w-[80px] h-[80px] rounded-full" src={description.image} alt="" />
        <div>
        <p className="tile-title font-bold">{name}</p>
        <p>{description.phone}</p>
        <p>{description.email}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="bg-red-700 text-white font-bold py-3 px-6 rounded-full" onClick={() => {
          closeContactModal()
          handleDelete(description.id)}}>Delete</button>
        <button className="bg-gray-300 font-bold py-3 px-6 rounded-full" onClick={closeContactModal}>Cancel</button>
      </div>
    </div>
  </>
)}
    </div>
    
  )
  }

  return (
    <div className="tile-container">
     
    </div>
  );
};

export default Tile;