import React from "react";
import { Link } from "react-router-dom";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 text-lg">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <Link to={`/${link.link}`}
            className="text-gray-400 hover:text-customOrange duration-300 font-semibold
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Item;
