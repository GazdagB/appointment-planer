import React from "react";

export const ContactPicker = ({contacts, onChange, value, name }) => {

  console.log(contacts);
  
  return (
    <select required className="border-gray-400 border-solid border-[2px] rounded-full px-4 py-2 w-full" name={name} onChange={onChange} value={JSON.stringify(value)}>
        <option value="">No Contact Selected</option>
        {contacts.map((contact,id)=>{
          return( <option key={id} value={JSON.stringify(contact)}>{contact.name}</option>)
        })}
    </select>
  );
};

export default ContactPicker; 