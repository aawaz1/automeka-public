import React from "react";

const Items = ({ Links, title }) => {
  return (
    <ul className="">
      <h1 className="mb-1 font-semibold">{ }</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <img src={link.image} style={{ width: "7rem", height: "7rem" }} />
          <div className="flex justify-start gap-2">
            <div className="pr-1"><img src={link.image1} style={{ width: "6rem", height: "2rem" }} /></div>  <div><img src={link.image2} style={{ width: "6rem", height: "2rem" }} /></div>
          </div>

        </li>
      ))}
    </ul>
  );
};

export default Items;
