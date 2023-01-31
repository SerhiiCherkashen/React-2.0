import React from "react";
import c from "./ProfiImege.module.css";

const ProfiImege = (props) => {
  return (
    <div>
      <img
        className={c.panorama}
        src="https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?cs=srgb&dl=pexels-pixabay-358482.jpg&fm=jpg"
      />
      <img
        className={c.ava}
        src="https://i.pinimg.com/originals/84/0f/fa/840ffab85ec531641d8959eee7ecf33a.png"
      />
    </div>
  );
};

export default ProfiImege;
