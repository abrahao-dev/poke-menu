import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from 'react-icons/fa';
import logo from "../logo-png.png";
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) { // Only show after scrolling one full viewport height
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Poke Restaurant Logo" />
        </div>
        <div className="footer-info">
          <ul className="row">
            <li className="col">
              <h4>Nossa unidade</h4>
              <ul className="list-unstyled">
                <li>11 98851-2788</li>
                <li>São Paulo, Brasil</li>
                <li>123 São Paulo, SP</li>
              </ul>
            </li>
            <li className="col">
              <h4>Horários de funcionamento</h4>
              <ul className="list-unstyled">
                <li>Segunda-Sábado</li>
                <li>11:30 às 22:30</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <div className="icon-wrapper">
              <FaFacebookF />
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <div className="icon-wrapper">
              <FaInstagram />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <div className="icon-wrapper">
              <FaTwitter />
            </div>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} <a href="https://github.com/abrahao-dev" target="_blank" rel="noopener noreferrer">Matheus Abrahão</a> | 
          Todos os direitos reservados | Termos de Serviço | Privacidade
        </p>
      </div>
      {isVisible && (
        <div onClick={scrollToTop} className="back-to-top">
          <FaArrowUp />
        </div>
      )}
    </footer>
  );
};

export default Footer;