import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useEffect, useState } from "react";
import placeHolderUser from "./assets/placeholder_user.png";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts,setContacts] = useState([]); 
 const [appointments, setAppointments] = useState([]);
 const [image, setImage] = useState(placeHolderUser);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }

    const storedAppointments = localStorage.getItem("appointments"); 
    if(storedAppointments){
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);



  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter(contact => contact.id !== id);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const handleDeleteAppointment = (id) =>{
    setAppointments((prevApp) => {
      const updatedApps = prevApp.filter(app => app.id !== id); 
      localStorage.setItem("appointments",JSON.stringify(updatedApps));
      return updatedApps; 
    })
  }
  const addContact = (newContact) => {
    newContact.type = "contact";
    setImage(placeHolderUser)
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const addAppointment = (newAppointment)=>{
    newAppointment.type = "appointment";
    setAppointments((prevAppointments)=>{
      const updatedAppointments = [...prevAppointments, newAppointment]; 
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments))
      return updatedAppointments
    })
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage setImage={setImage} image={image} contacts={contacts} addContact={addContact} handleDelete={handleDelete} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} handleDeleteAppointment={handleDeleteAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}


export default App;
