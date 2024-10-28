import React from "react";
import Tile from "../tile/Tile"

export const TileList = ({list= [],handleDelete, handleDeleteAppointment}) => {

  return (
    <div className="gap-6 flex-col flex">
      {list.map(({name,...rest},id)=>{
       return <Tile key={id} name={name} description={rest} handleDeleteAppointment={handleDeleteAppointment} handleDelete={handleDelete}/>
      })}
    </div>
  );
};

export default TileList; 