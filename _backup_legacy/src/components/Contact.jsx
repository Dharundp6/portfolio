import React from 'react';

const Contact = () => {
  const contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'dharunjagan009@gmail.com',
      href: 'mailto:dharunjagan009@gmail.com',
      color: '#3b82f6'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+44 7887768789',
      href: 'tel:+447887768789',
      color: '#10b981'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'dharun-prasanth',
      href: 'https://linkedin.com/in/dharun-prasanth-300429211',
      color: '#0077b5'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'Dharundp6',
      href: 'https://github.com/Dharundp6',
      color: '#8b5cf6'
    }
  ];

  const styles = {
    section: {
      padding: '100px 24px',
      maxWidth: '900px',
      margin: '0 auto'
    },
    content: {
      textAlign: 'center'
    },
    description: {
      fontSize: '18px',
      color: '#9ca3af',
      maxWidth: '600px',
      margin: '0 auto 48px',
      lineHeight: 1.8
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '48px'
    },
    card: (color) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '28px 20px',
      background: 'rgba(17, 24, 39, 0.6)',
      borderRadius: '16px',
      border: '1px solid rgba(99, 102, 241, 0.1)',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }),
    icon: {
      fontSize: '36px',
      marginBottom: '12px'
    },
    label: {
      fontSize: '12px',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '4px'
    },
    value: {
      fontSize: '15px',
      fontWeight: 600,
      color: '#f9fafb'
    },
    statusCard: {
      padding: '24px 32px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
      borderRadius: '16px',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      flexWrap: 'wrap'
    },
    statusItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    statusDot: {
      width: '10px',
      height: '10px',
      background: '#10b981',
      borderRadius: '50%',
      boxShadow: '0 0 10px #10b981'
    },
    statusText: {
      fontSize: '14px',
      color: '#e5e7eb'
    },
    ctaSection: {
      marginTop: '48px'
    },
    ctaTitle: {
      fontSize: '28px',
      fontWeight: 700,
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    ctaText: {
      fontSize: '16px',
      color: '#9ca3af',
      marginBottom: '24px'
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div className="section-header">
        <p className="section-label">// Get In Touch</p>
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div style={styles.content}>
        <p style={styles.description}>
          I'm currently looking for ML Engineer opportunities where I can build innovative AI products. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        {/* Contact Cards */}
        <div style={styles.grid}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.label === 'Email' || contact.label === 'Phone' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              style={styles.card(contact.color)}
              className="glass-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = contact.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.1)';
              }}
            >
              <span style={styles.icon}>{contact.icon}</span>
              <span style={styles.label}>{contact.label}</span>
              <span style={styles.value}>{contact.value}</span>
            </a>
          ))}
        </div>

        {/* Status Card */}
        <div style={styles.statusCard}>
          <div style={styles.statusItem}>
            <span>📍</span>
            <span style={styles.statusText}>Glasgow, Scotland</span>
          </div>
          <div style={styles.statusItem}>
            <span style={styles.statusDot} />
            <span style={styles.statusText}>Open to Opportunities</span>
          </div>
          <div style={styles.statusItem}>
            <span>✓</span>
            <span style={styles.statusText}>UK Graduate Route Visa Eligible</span>
          </div>
        </div>

        {/* CTA */}
        <div style={styles.ctaSection}>
          <h3 style={styles.ctaTitle}>Let's Build Something Amazing</h3>
          <p style={styles.ctaText}>
            No sponsorship required for UK-based roles
          </p>
          <a href="mailto:dharunjagan009@gmail.com" className="btn-primary">
            Say Hello
            <span>👋</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
