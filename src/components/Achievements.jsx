import React, { useState } from 'react';

const Achievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const achievements = [
    {
      icon: '🏆',
      title: 'First Place - BYTEBEAT\'24',
      description: 'Led a team to win the Overall Championship at a competition focused on AI tools and innovation.',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      year: '2024'
    },
    {
      icon: '⭐',
      title: 'Student Innovation Award 2025',
      description: 'Recognized for outstanding innovation and excellence in developing cutting-edge ML solutions by Kumaraguru Institutions.',
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      year: '2025'
    },
    {
      icon: '🥇',
      title: 'Winners - Wise-Ai-Thon\'24',
      description: 'Developed Smart Agriculture Advisor under Sustainable Agriculture initiative, conducted by KSI and Wise Work.',
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      year: '2024'
    },
    {
      icon: '📄',
      title: 'Paper Presenter - ICOCF\'22',
      description: 'Presented research on tomato leaf disease recognition at international conference, collaborating with team to showcase findings.',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      year: '2022'
    }
  ];

  const styles = {
    section: {
      padding: '100px 24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '24px'
    },
    card: (bgColor, isHovered) => ({
      padding: '32px',
      background: bgColor,
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: isHovered ? '0 20px 60px rgba(99, 102, 241, 0.3)' : 'none'
    }),
    iconWrapper: (gradient, isHovered) => ({
      width: '80px',
      height: '80px',
      background: gradient,
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 24px',
      fontSize: '40px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0deg) scale(1)',
      animation: isHovered ? 'pulse 1s ease-in-out infinite' : 'none'
    }),
    title: {
      fontSize: '20px',
      fontWeight: 700,
      color: '#f9fafb',
      marginBottom: '12px'
    },
    description: {
      fontSize: '15px',
      color: '#9ca3af',
      lineHeight: 1.7
    },
    decorLine: (gradient, isHovered) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: gradient,
      transition: 'all 0.3s ease',
      boxShadow: isHovered ? `0 0 20px ${gradient.match(/#[0-9a-f]{6}/i)?.[0] || '#6366f1'}` : 'none'
    }),
    yearBadge: (gradient) => ({
      position: 'absolute',
      top: '16px',
      right: '16px',
      padding: '6px 12px',
      background: gradient,
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 700,
      color: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
    }),
    sparkle: (isHovered) => ({
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      background: isHovered ? 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)' : 'transparent',
      transition: 'all 0.5s ease'
    })
  };

  return (
    <section id="achievements" style={styles.section}>
      <div className="section-header">
        <p className="section-label">// Recognition</p>
        <h2 className="section-title">Achievements</h2>
      </div>

      <div style={styles.grid}>
        {achievements.map((achievement, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              style={styles.card(achievement.bgColor, isHovered)}
              className="glass-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={styles.sparkle(isHovered)} />
              <div style={styles.decorLine(achievement.gradient, isHovered)} />
              <div style={styles.yearBadge(achievement.gradient)}>
                {achievement.year}
              </div>

              <div style={styles.iconWrapper(achievement.gradient, isHovered)}>
                {achievement.icon}
              </div>

              <h3 style={styles.title}>{achievement.title}</h3>
              <p style={styles.description}>{achievement.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
