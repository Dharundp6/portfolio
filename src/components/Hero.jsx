import React, { useState, useEffect } from 'react';
import FloatingTechIcons from './ui/FloatingTechIcons';

const Hero = () => {
  const roles = ['ML Engineer', 'Deep Learning Developer', 'Data Scientist', 'AI Researcher'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          if (displayText === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          if (displayText === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      position: 'relative'
    },
    content: {
      textAlign: 'center',
      maxWidth: '900px',
      zIndex: 10
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 20px',
      background: 'rgba(99, 102, 241, 0.1)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      borderRadius: '50px',
      marginBottom: '24px',
      animation: 'fadeInUp 0.8s ease'
    },
    badgeDot: {
      width: '8px',
      height: '8px',
      background: '#10b981',
      borderRadius: '50%',
      animation: 'pulse 2s ease-in-out infinite'
    },
    badgeText: {
      color: '#a5b4fc',
      fontSize: '14px',
      fontWeight: 500,
      fontFamily: "'JetBrains Mono', monospace"
    },
    greeting: {
      fontSize: '20px',
      color: '#9ca3af',
      marginBottom: '8px',
      fontFamily: "'JetBrains Mono', monospace",
      animation: 'fadeInUp 0.8s ease 0.1s backwards'
    },
    name: {
      fontSize: 'clamp(40px, 8vw, 72px)',
      fontWeight: 800,
      marginBottom: '16px',
      lineHeight: 1.1,
      animation: 'fadeInUp 0.8s ease 0.2s backwards'
    },
    nameGradient: {
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    roleContainer: {
      fontSize: 'clamp(20px, 4vw, 32px)',
      marginBottom: '24px',
      height: '45px',
      fontFamily: "'JetBrains Mono', monospace",
      animation: 'fadeInUp 0.8s ease 0.3s backwards'
    },
    roleText: {
      color: '#6366f1'
    },
    cursor: {
      color: '#6366f1',
      animation: 'pulse 1s ease-in-out infinite'
    },
    description: {
      fontSize: '18px',
      color: '#9ca3af',
      maxWidth: '650px',
      margin: '0 auto 40px',
      lineHeight: 1.8,
      animation: 'fadeInUp 0.8s ease 0.4s backwards'
    },
    buttons: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      animation: 'fadeInUp 0.8s ease 0.5s backwards'
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '48px',
      marginTop: '60px',
      animation: 'fadeInUp 0.8s ease 0.6s backwards'
    },
    stat: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280',
      marginTop: '4px'
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      animation: 'float 2s ease-in-out infinite'
    },
    scrollMouse: {
      width: '24px',
      height: '40px',
      border: '2px solid rgba(99, 102, 241, 0.5)',
      borderRadius: '12px',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '8px'
    },
    scrollDot: {
      width: '4px',
      height: '8px',
      background: '#6366f1',
      borderRadius: '2px',
      animation: 'pulse 1.5s ease-in-out infinite'
    },
    scrollText: {
      fontSize: '12px',
      color: '#6b7280',
      letterSpacing: '2px',
      textTransform: 'uppercase'
    }
  };

  return (
    <section id="home" style={styles.section}>
      <FloatingTechIcons />
      <div style={styles.content}>
        <div style={styles.badge}>
          <span style={styles.badgeDot} />
          <span style={styles.badgeText}>Open to Opportunities</span>
        </div>

        <p style={styles.greeting}>Hello, I'm</p>
        
        <h1 style={styles.name}>
          <span style={styles.nameGradient}>Dharun Prasanth S</span>
        </h1>

        <div style={styles.roleContainer}>
          <span style={{ color: '#6b7280' }}>&lt;</span>
          <span style={styles.roleText}>{displayText}</span>
          <span style={styles.cursor}>|</span>
          <span style={{ color: '#6b7280' }}>/&gt;</span>
        </div>

        <p style={styles.description}>
          Building production ML systems that serve real users. Passionate about computer vision, 
          generative AI, and creating innovative products that millions of people enjoy using.
        </p>

        <div style={styles.buttons}>
          <a href="#contact" className="btn-primary">
            <span>Get In Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects
          </a>
          <a 
            href="/resume.pdf" 
            className="btn-secondary"
            style={{ borderColor: '#8b5cf6', color: '#8b5cf6' }}
          >
            Download CV
          </a>
        </div>

        <div style={styles.statsContainer}>
          {[
            { number: '2+', label: 'Years Experience' },
            { number: '10+', label: 'Projects Built' },
            { number: '3', label: 'Awards Won' }
          ].map((stat, i) => (
            <div key={i} style={styles.stat}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.scrollIndicator}>
        <div style={styles.scrollMouse}>
          <div style={styles.scrollDot} />
        </div>
        <span style={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
