import React from "react";
import TeamMember from "./TeamMember";
import TomCruise from "../../assets/images/TomCruise.svg";
import Emma from "../../assets/images/Emma.svg";
import WillSmith from "../../assets/images/WillSmith.svg";
import IconTwitter from "../../assets/footer/IconTwitter";
import IconInstagram from "../../assets/footer/IconInstagram";
import IconLinkedin from "../../assets/footer/IconLinkedin";

const teamMembers = [
  {
    name: "Tom Cruise",
    title: "Founder & Chairman",
    img: TomCruise,
    socialLinks: [
      { icon: <IconTwitter />, href: "https://twitter.com" },
      { icon: <IconInstagram />, href: "https://instagram.com" },
      { icon: <IconLinkedin />, href: "https://linkedin.com" },
    ],
  },
  {
    name: "Emma Watson",
    title: "Managing Director",
    img: Emma,
    socialLinks: [
      { icon: <IconTwitter />, href: "https://twitter.com" },
      { icon: <IconInstagram />, href: "https://instagram.com" },
      { icon: <IconLinkedin />, href: "https://linkedin.com" },
    ],
  },
  {
    name: "Will Smith",
    title: "Product Designer",
    img: WillSmith,
    socialLinks: [
      { icon: <IconTwitter />, href: "https://twitter.com" },
      { icon: <IconInstagram />, href: "https://instagram.com" },
      { icon: <IconLinkedin />, href: "https://linkedin.com" },
    ],
  },
];

const Team = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-[70px]">
      {teamMembers.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </div>
  );
};

export default Team;
