import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";
import placeHolderUser from "../../assets/placeholder_user.png";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { v4 as uuidv4 } from 'uuid';

export const ContactsPage = ({contacts,addContact,handleDelete, image, setImage}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState("");
 const [phone, setPhone] = useState(""); 
 const [email, setEmail] = useState(""); 

 const [formMessage,setFormMessage] = useState("")


 const [nameIsDuplicate, setNameIsDuplicate] = useState(false)

 function clearTheForm(){
  setName("")
  setPhone("")
  setEmail("");
 } 

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!nameIsDuplicate){
    const newContact = {
      id: uuidv4(),
      name,
      phone,
      email,
      image
    }
    addContact(newContact)
    clearTheForm()
   }


  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(()=>{
  const isDuplicate = contacts.some(contact => contact.name === name)

  if(isDuplicate){
    setNameIsDuplicate(true)
    setFormMessage("The name you entered already exists!")
  }else{
    setNameIsDuplicate(false)
    setFormMessage("")
  }
 },[name,contacts])

  return (
    <div className="flex flex-col items-center justify-center min-h-[92vh]">
      <section className="flex flex-col">
        <h2 className="text-3xl font-bold mt-10 mb-7 text-center">Add Contact</h2> 
        <ContactForm image={image} setImage={setImage} formMessage={formMessage} name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2 className="text-3xl font-bold mt-10 mb-7 text-center">Contacts</h2>
        <TileList list={contacts} handleDelete={handleDelete}/>
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  addContact: PropTypes.func
}

export default ContactsPage; 