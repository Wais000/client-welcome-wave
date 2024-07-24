import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { List, X } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInModal from '../User/SignInModel';
import '../../assets/styles/Header.css'; // Ensure your CSS is correctly imported

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle state based on previous state
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeMenu(); // Ensure the menu is closed when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Close the modal when the location changes
    closeModal();
  }, [location]);

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        {/* Logo */}
        <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
          <h1 className="sitename">GP</h1>
          <span>.</span>
        </Link>

        {/* Navigation Menu */}
        <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'mobile-nav-active' : ''}`}>
          <ul className="nav-links">
            <li><NavLink to="/institutions" onClick={closeMenu}>Institutions</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
            <li><NavLink to="/donation" onClick={closeMenu}>Donation</NavLink></li>
            <li><NavLink to="/volunteer" onClick={closeMenu}>Become A Volunteer</NavLink></li>
          </ul>
          {/* Mobile Nav Toggle Button */}
          <i className="mobile-nav-toggle d-xl-none" onClick={toggleMobileNav}>
            {isMenuOpen ? <X /> : <List />}
          </i>
        </nav>

        {/* Get Started Button */}
        <Link className="btn-getstarted" to="#" onClick={openModal}>Sign In</Link>

      </div>
      <SignInModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;
