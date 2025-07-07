import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const baseLinkStyle = {
    fontFamily: 'Luckiest Guy, cursive',
    color: 'white',
    fontSize: '18px',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  };

  const hoverLinkStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  };

  const getLinkStyle = (linkId) =>
    hoveredLink === linkId
      ? { ...baseLinkStyle, ...hoverLinkStyle }
      : baseLinkStyle;

  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#e82a2e',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}
    >
      {/* Left - Logo */}
      <div style={{ flex: 1 }}>
        <Link
          to="/"
          style={{
            fontFamily: 'Luckiest Guy, cursive',
            fontSize: '36px',
            color: 'white',
            textDecoration: 'none',
            userSelect: 'none',
          }}
        >
          H&R
        </Link>
      </div>

      {/* Center - Hotel Booking */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        <Link
          to="/HotelHome"
          style={getLinkStyle('hotel')}
          onMouseEnter={() => setHoveredLink('hotel')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Hotel Booking
        </Link>
      </div>

      {/* Right - Login and Sign Up */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1rem',
        }}
      >
        <Link
          to="/login"
          style={getLinkStyle('login')}
          onMouseEnter={() => setHoveredLink('login')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Login
        </Link>

        <Link
          to="/registration"
          style={getLinkStyle('registration')}
          onMouseEnter={() => setHoveredLink('registration')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
