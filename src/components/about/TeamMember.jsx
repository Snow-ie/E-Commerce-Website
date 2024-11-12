import React from "react";

const TeamMember = ({ name, title, img, socialLinks }) => {
  return (
    <div className="">
      <div className="w-full h-[80%] bg-secondary4 flex items-center justify-center ">
        <img src={img} alt={name} className="mt-auto h-3/4" />
      </div>
      <div className="">
        <h2 className="mt-4 text-lg font-medium lg:text-2xl">{name}</h2>
        <p className="text-sm text-gray-600">{title}</p>
        <div className="flex items-center space-x-3 mt-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
