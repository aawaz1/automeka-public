import React from "react";
import { Link } from "react-router-dom";

const Items = ({ Links, title }) => {
  return (
    <ul className="">
      <h1 className="mb-1 font-semibold">{ }</h1>
      {Links.map((link) => (
        <li key={link.name}>
         <Link to={'/'}> <img src={link.image} style={{ width: "7rem", height: "7rem" }} /></Link>
          <div className="flex  justify-start gap-2 mt-1">
            <div className="pr-1">
              <a href={'https://play.google.com/store/apps/details?id=com.anintl.automeka&pli=1'} target="_blank" rel="noopener noreferrer"><img src={link.image1} style={{ width: "6rem", height: "2rem" }} /></a>
            </div>  <div><img src={link.image2} style={{ width: "6rem", height: "2rem" }} /></div>
          </div>

        </li>
      ))}
    </ul>
  );
};

export default Items;
