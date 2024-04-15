import React from "react";
import { Link } from "react-router-dom";

const Item = ({ Links, title }) => {
    return (
        <ul>
            <h1 className="mb-4 text-lg">{title}</h1>
            {Links.map((link) => (
                <li key={link.name}>
                    <div to={``}
                        className="text-gray-400  duration-300 font-semibold
          text-sm  leading-6"

                    >
                        {link.name}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Item;
