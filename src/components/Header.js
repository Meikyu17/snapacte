import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="logo-container">
        <Link to="/">
          <img src="/img/logo.svg" alt="SnapActe Logo" className="logo" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="nav-list">
          <li><Link to="/a-propos">A PROPOS</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/pros">PROS</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/mon-espace" className="mon-espace-link">MON ESPACE</Link></li>
          <li><Link to="/valeur-juridique" className="valeur-juridique-link">VALEUR JURIDIQUE</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 