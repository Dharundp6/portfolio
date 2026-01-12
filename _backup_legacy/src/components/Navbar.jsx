import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '16px 24px',
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(10, 15, 28, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(99, 102, 241, 0.1)' : 'none'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textDecoration: 'none',
      fontFamily: "'JetBrains Mono', monospace"
    },
    desktopMenu: {
      display: 'flex',
      gap: '32px',
      listStyle: 'none',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    navLink: (isActive) => ({
      color: isActive ? '#6366f1' : '#9ca3af',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 500,
      transition: 'color 0.3s ease',
      position: 'relative',
      cursor: 'pointer'
    }),
    mobileMenuBtn: {
      display: 'none',
      flexDirection: 'column',
      gap: '5px',
      cursor: 'pointer',
      padding: '8px',
      background: 'none',
      border: 'none',
      '@media (max-width: 768px)': {
        display: 'flex'
      }
    },
    menuLine: (isOpen, index) => ({
      width: '24px',
      height: '2px',
      background: '#6366f1',
      transition: 'all 0.3s ease',
      transform: isOpen
        ? index === 0
          ? 'rotate(45deg) translateY(7px)'
          : index === 2
          ? 'rotate(-45deg) translateY(-7px)'
          : 'scale(0)'
        : 'none'
    }),
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(10, 15, 28, 0.98)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px',
      opacity: isMobileMenuOpen ? 1 : 0,
      visibility: isMobileMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.3s ease',
      zIndex: 999
    },
    mobileLink: {
      color: '#f9fafb',
      textDecoration: 'none',
      fontSize: '24px',
      fontWeight: 600,
      transition: 'color 0.3s ease'
    }
  };

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.container}>
          <a href="#home" style={styles.logo}>
            &lt;DP/&gt;
          </a>

          {/* Desktop Menu */}
          <ul style={{ ...styles.desktopMenu, display: window.innerWidth > 768 ? 'flex' : 'none' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={styles.navLink(activeSection === item.href.substring(1))}
                  onMouseEnter={(e) => (e.target.style.color = '#6366f1')}
                  onMouseLeave={(e) =>
                    (e.target.style.color =
                      activeSection === item.href.substring(1) ? '#6366f1' : '#9ca3af')
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            style={{ ...styles.mobileMenuBtn, display: window.innerWidth <= 768 ? 'flex' : 'none' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={styles.menuLine(isMobileMenuOpen, i)} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={styles.mobileMenu}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={styles.mobileLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
