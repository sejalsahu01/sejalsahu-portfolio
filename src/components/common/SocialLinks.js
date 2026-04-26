import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SOCIAL_LINKS from "../../data/socialLinks";

/**
 * SocialLinks — single reusable social icon list.
 * Eliminates duplicate JSX previously in Home.js and Footer.js.
 *
 * @param {string} [iconClassName] — optional class for icon styling
 * @param {object} [style] — optional inline style for <a> tags
 */
function SocialLinks({ iconClassName = "", style = { color: "white" } }) {
  const links = [
    { href: SOCIAL_LINKS.github, icon: <AiFillGithub />, label: "GitHub" },
    { href: SOCIAL_LINKS.email, icon: <MdEmail />, label: "Email" },
    { href: SOCIAL_LINKS.linkedin, icon: <FaLinkedinIn />, label: "LinkedIn" },
  ];

  return (
    <>
      {links.map(({ href, icon, label }) => (
        <li className="social-icons" key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClassName}
            style={style}
            aria-label={label}
          >
            {icon}
          </a>
        </li>
      ))}
    </>
  );
}

export default SocialLinks;
