import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            iniciamos en abril de 2024 con la promocion de prendas informal y deportiva.
            Apoyamos emprendedores creativos q se dedican a la innovacion
            ofreciendo variedad en telas, tecnologia, confort y calidad.
             
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          sport@singlestyle.com
            
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">singlestyle</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
