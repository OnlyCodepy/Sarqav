import React from "react";
import "./Footer.css";
import Copyright from "../Copyright";
import siteConfig from "../../constants/site.config";
// En React, todos los iconos que usas deben ser importados explícitamente.
//import { Facebook, Github } from "lucide-react";
import { FaXTwitter, FaGithub, FaInstagram, FaFacebook ,FaLinkedin} from "react-icons/fa6"; // ← Ícono oficial de X

const { author, socialLinks } = siteConfig;//Extrae los valores author y socialLinks del objeto siteConfig para usarlos más cómodamente dentro del componente.

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{siteConfig.projectName}</p>

        <div className="footer-socials">
          <a
            href={socialLinks.facebook}
            className="social-icon facebook"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href={socialLinks.instagram}
            className="social-icon instagram"
            target="_blank"
            rel="noreferrer"
            title="instagram"
          >
            <FaInstagram />
          </a>

          <a
            href={socialLinks.twitter}
            className="social-icon x"
            target="_blank"
            rel="noreferrer"
            title="X"
          >
            <FaXTwitter />
          </a>
          <a
            href={socialLinks.github}
            className="social-icon github"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={socialLinks.linkedin}
            className="social-icon linkedin"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <Copyright author={author} />
      </div>
    </footer>
  );
}

export default Footer;
