import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'MSc Data Science',
      school: 'University of Glasgow',
      location: 'Glasgow, UK',
      period: 'Sep 2025 – Sep 2026',
      icon: '🎓',
      color: '#3b82f6',
      courses: ['Deep Learning', 'Machine Learning & AI', 'Big Data Systems', 'Information Visualization', 'Bayesian Statistics']
    },
    {
      degree: 'BSc Data Science',
      school: 'Kumaraguru College of Liberal Arts and Science',
      location: 'Coimbatore, India',
      period: 'Jul 2022 – May 2025',
      icon: '📚',
      color: '#8b5cf6',
      courses: ['Machine Learning', 'Natural Language Processing', 'Data Structures & Algorithms', 'Database Systems']
    }
  ];

  const certifications = [
    { name: 'Oracle Cloud Infrastructure 2024 Foundations', icon: '☁️', color: '#ef4444' },
    { name: 'Google IT Automation with Python', icon: '🐍', color: '#10b981' },
    { name: 'AI-Powered Business Analytics (NUS)', icon: '📊', color: '#f59e0b' }
  ];

  const styles = {
    section: {
      padding: '100px 24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    educationGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '24px',
      marginBottom: '60px'
    },
    card: (color) => ({
      padding: '32px',
      background: 'rgba(17, 24, 39, 0.6)',
      borderRadius: '20px',
      border: '1px solid rgba(99, 102, 241, 0.1)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }),
    cardBorder: (color) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: `linear-gradient(90deg, ${color}, ${color}88)`
    }),
    iconWrapper: (color) => ({
      width: '64px',
      height: '64px',
      background: `${color}15`,
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      fontSize: '32px'
    }),
    degree: {
      fontSize: '22px',
      fontWeight: 700,
      color: '#f9fafb',
      marginBottom: '8px'
    },
    school: (color) => ({
      fontSize: '16px',
      fontWeight: 600,
      color: color,
      marginBottom: '4px'
    }),
    location: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '4px'
    },
    period: {
      display: 'inline-block',
      padding: '6px 14px',
      background: 'rgba(99, 102, 241, 0.1)',
      borderRadius: '6px',
      fontSize: '13px',
      color: '#a5b4fc',
      fontFamily: "'JetBrains Mono', monospace",
      marginBottom: '20px'
    },
    coursesLabel: {
      fontSize: '13px',
      fontWeight: 600,
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '12px'
    },
    coursesList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    courseTag: (color) => ({
      padding: '6px 12px',
      background: `${color}10`,
      border: `1px solid ${color}30`,
      borderRadius: '6px',
      fontSize: '12px',
      color: color
    }),
    certSection: {
      textAlign: 'center'
    },
    certTitle: {
      fontSize: '24px',
      fontWeight: 700,
      marginBottom: '32px',
      color: '#f9fafb'
    },
    certGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '16px'
    },
    certCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px 24px',
      background: 'rgba(17, 24, 39, 0.6)',
      borderRadius: '12px',
      border: '1px solid rgba(99, 102, 241, 0.1)',
      transition: 'all 0.3s ease'
    },
    certIcon: {
      fontSize: '28px'
    },
    certName: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#e5e7eb'
    }
  };

  return (
    <section id="education" style={styles.section}>
      <div className="section-header">
        <p className="section-label">// Background</p>
        <h2 className="section-title">Education</h2>
      </div>

      {/* Education Cards */}
      <div style={styles.educationGrid}>
        {education.map((edu, index) => (
          <div
            key={index}
            style={styles.card(edu.color)}
            className="glass-card"
          >
            <div style={styles.cardBorder(edu.color)} />
            
            <div style={styles.iconWrapper(edu.color)}>
              {edu.icon}
            </div>
            
            <h3 style={styles.degree}>{edu.degree}</h3>
            <p style={styles.school(edu.color)}>{edu.school}</p>
            <p style={styles.location}>📍 {edu.location}</p>
            <span style={styles.period}>{edu.period}</span>
            
            <p style={styles.coursesLabel}>Key Coursework</p>
            <div style={styles.coursesList}>
              {edu.courses.map((course, i) => (
                <span key={i} style={styles.courseTag(edu.color)}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={styles.certSection}>
        <h3 style={styles.certTitle}>Certifications</h3>
        <div style={styles.certGrid}>
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={styles.certCard}
              className="glass-card"
            >
              <span style={styles.certIcon}>{cert.icon}</span>
              <span style={styles.certName}>{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
