import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <span className="logo-text">tizar</span>
      </div>
      
      <nav className="header-nav">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#diferenciais">Diferenciais</a></li>
          <li><a href="#como-funciona">Como funciona</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <div className="header-cta">
        <a href="#contato" className="btn-cta">Falar com a Tizar</a>
      </div>
    </header>
  );
};

export default Header;