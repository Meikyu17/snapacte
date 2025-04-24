import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logo">
          <Link to="/">
            <img src="/img/logo.svg" alt="SnapActe Logo" />
          </Link>
          <p className="copyright">2022 - Par Snapacte</p>
        </div>
        
        <div className="footer-links">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">A propos</Link></li>
            <li><Link to="/professionnels">Snapacte pour les professsionnels</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-mon-espace">
          <Link to="/mon-espace" className="mon-espace-button">MON ESPACE</Link>
          <div className="social-links">
            <p>Suivez-nous :</p>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="legal-links">
          <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
          <Link to="/cgu-cgv">CGU/CGV</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 