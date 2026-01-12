import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: '💼', href: 'https://linkedin.com/in/dharun-prasanth-300429211', label: 'LinkedIn' },
    { icon: '🐙', href: 'https://github.com/Dharundp6', label: 'GitHub' },
    { icon: '📧', href: 'mailto:dharunjagan009@gmail.com', label: 'Email' }
  ];

  const styles = {
    footer: {
      padding: '40px 24px',
      borderTop: '1px solid rgba(99, 102, 241, 0.1)',
      background: 'rgba(10, 15, 28, 0.8)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px'
    },
    socialLinks: {
      display: 'flex',
      gap: '16px'
    },
    socialLink: {
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(99, 102, 241, 0.1)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      borderRadius: '12px',
      fontSize: '20px',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    divider: {
      width: '60px',
      height: '2px',
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      borderRadius: '1px'
    },
    text: {
      textAlign: 'center'
    },
    copyright: {
      fontSize: '14px',
      color: '#6b7280'
    },
    highlight: {
      color: '#6366f1',
      fontWeight: 600
    },
    madeWith: {
      fontSize: '13px',
      color: '#4b5563',
      marginTop: '8px'
    },
    heart: {
      color: '#ec4899'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              aria-label={link.label}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
                e.currentTarget.style.borderColor = '#6366f1';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div style={styles.divider} />

        <div style={styles.text}>
          <p style={styles.copyright}>
            Designed & Built by{' '}
            <span style={styles.highlight}>Dharun Prasanth S</span>
            {' '}| © {currentYear}
          </p>
          <p style={styles.madeWith}>
            Made with <span style={styles.heart}>♥</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
