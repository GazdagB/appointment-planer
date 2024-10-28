import {  Outlet, NavLink } from "react-router-dom";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";




export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    return (
        <>
            <nav className="bg-blue-400 text-[23px] flex items-center justify-center py-5 gap-5">
                <NavLink
                className={({isActive}) => (isActive? "bg-blue-800 text-white " : "text-blue-950") + " px-10 py-2 rounded-full font-bold flex gap-2 items-center justify-center " }
                to={ROUTES.CONTACTS} >
                <RiContactsBook2Fill className="text-[25px] mb-1" />
                Contacts
                </NavLink>
                <NavLink
                className={({isActive}) => (isActive? "bg-blue-800 text-white" : "text-blue-950") + " p-2 px-10 rounded-full font-bold flex gap-2 justify-center items-center"}
                to={ROUTES.APPOINTMENTS} >
                <FaRegCalendarAlt  className="text-[25px] mb-1" />
                Appointments
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;