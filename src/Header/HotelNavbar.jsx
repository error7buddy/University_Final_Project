import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HotelNavbar() {
  const defaultStyle = {
    fontFamily: 'Luckiest Guy, cursive',
    color: '#1e3a8a',
    fontSize: '18px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    padding: '8px 12px',
    borderRadius: '8px',
  };

  const hoverStyle = {
    backgroundColor: '#1e3a8a',
    color: 'white',
  };

  const [hoveredLink, setHoveredLink] = useState(null);

  const getStyle = (linkId) =>
    hoveredLink === linkId
      ? { ...defaultStyle, ...hoverStyle }
      : defaultStyle;

  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        borderBottom: '2px solid #e2e8f0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left - Logo */}
      <div style={{ flex: 1 }}>
        <Link
          to="/"
          style={{
            fontFamily: 'Luckiest Guy, cursive',
            fontSize: '36px',
            color: '#1e3a8a',
            textDecoration: 'none',
          }}
        >
          H&R
        </Link>
      </div>

      {/* Center - "Order Food Fast" */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        <Link
          to="/Home"
          style={getStyle('hotel')}
          onMouseEnter={() => setHoveredLink('hotel')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Order Food Fast
        </Link>
      </div>

      {/* Right - Login / Sign Up */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        <Link
          to="/login"
          style={getStyle('login')}
          onMouseEnter={() => setHoveredLink('login')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Login
        </Link>

        <Link
          to="/registration"
          style={getStyle('signup')}
          onMouseEnter={() => setHoveredLink('signup')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
