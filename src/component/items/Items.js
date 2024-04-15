import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Items = ({ Links, title }) => {
  const navigate = useNavigate();
  return (
    <ul className="">
      <h1 className="mb-4 font-semibold">{ }</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <img onClick={() => navigate("/")} className="cursor-pointer" src={link.image} style={{ width: "7rem", height: "7rem" }} />
          <div className="flex  justify-start gap-2 mt-1 flex-col">
            <div className="pr-1">
              <a href={'https://play.google.com/store/apps/details?id=com.anintl.automeka&pli=1'} target="_blank" rel="noopener noreferrer"><img src={link.image1} style={{ width: "6rem", height: "2rem" }} /></a>
            </div>  <div> <a href={'https://apps.apple.com/in/app/auto-meka/id6467641600'} target="_blank" rel="noopener noreferrer"><img src={link.image2} style={{ width: "6rem", height: "2rem" }} /></a></div>
          </div>

        </li>
      ))}
    </ul>
  );
};

export default Items;
