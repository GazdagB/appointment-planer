import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import placeHolderUser from "../../assets/placeholder_user.png";
import { FaEdit } from "react-icons/fa";


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  formMessage,
  image,
  setImage
}) => {
  
  const fileInputRef = useRef(null);
  

  // Trigger file input click when image is clicked
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleDiscardImage = ()=>{
    setImage(placeHolderUser)
  }

  // Update preview and handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Update preview to selected image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      className="text-[22px] min-w-[400px] flex flex-col mb-20 items-center justify-center cursor-pointer"
      onSubmit={handleSubmit}
    >
      {/* Display image as clickable button to open file input */}
      <div className="relative group w-[140px] h-[140px] mb-5 "
       onClick={(e) => {
      e.preventDefault();
      handleImageClick();
      }}>
        <input
          className="rounded-full h-full w-full object-contain group-hover:brightness-50 transition duration-300 ease-in-out"
          type="image"
          src={image}
          alt="Upload your image"
        />
        
        <div className="absolute inset-0  flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <FaEdit className="text-3xl text-white ml-1"  />
        </div>
        
        
      </div>

        {image !== placeHolderUser && <p className="underline cursor-pointer" onClick={handleDiscardImage}>Discard Image</p>}

      {/* Hidden file input for image upload */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      <div className="input-container flex flex-col mb-4 w-full">
        <label className="mb-2 font-bold ms-4" htmlFor="name">
          Name:
        </label>
        <input
          placeholder="Your name..."
          className="border-gray-400 border-solid border-[2px] rounded-full px-4 py-2"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
        />
      </div>

      <div className="input-container flex flex-col mb-4 w-full">
        <label className="mb-2 font-bold ms-4" htmlFor="email">
          E-mail:
        </label>
        <input
          placeholder="Your Email..."
          className="border-gray-400 border-solid border-[2px] rounded-full px-4 py-2"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          type="email"
        />
      </div>

      <div className="input-container flex flex-col mb-4 w-full">
        <label className="mb-2 font-bold ms-4" htmlFor="phone">
          Phone:
        </label>
        <input
          placeholder="Your phone..."
          className="border-gray-400 border-solid border-[2px] rounded-full px-4 py-2 mb-5"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          name="phone"
          id="phone"
        />
      </div>
      <button
        className="rounded-full bg-pink-600 px-5 py-2 font-bold text-white mb-4"
        type="submit"
      >
        Submit Contact
      </button>
      <p className="text-red-600 text-center">{formMessage}</p>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  phone: PropTypes.string,
  setPhone: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  handleSubmit: PropTypes.func,
  formMessage: PropTypes.string,
};

export default ContactForm;
