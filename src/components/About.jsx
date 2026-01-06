import React from 'react';
import AnimatedAvatar from './ui/AnimatedAvatar';

const About = () => {
  const highlights = [
    { icon: '🧠', label: 'Deep Learning', desc: 'PyTorch, TensorFlow, CNNs' },
    { icon: '🤖', label: 'Generative AI', desc: 'RAG, LangChain, LLMs' },
    { icon: '👁️', label: 'Computer Vision', desc: 'YOLOv8, OpenCV' },
    { icon: '🚀', label: 'Production ML', desc: 'FastAPI, Docker, CI/CD' }
  ];

  const styles = {
    section: {
      padding: '100px 24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px',
      alignItems: 'center'
    },
    imageContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    },
    imageWrapper: {
      width: '320px',
      height: '320px',
      borderRadius: '24px',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    emoji: {
      fontSize: '120px'
    },
    glowOrb: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      filter: 'blur(60px)',
      opacity: 0.4
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    label: {
      fontSize: '14px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '3px',
      color: '#6366f1',
      fontFamily: "'JetBrains Mono', monospace"
    },
    title: {
      fontSize: '36px',
      fontWeight: 800,
      lineHeight: 1.2
    },
    titleGradient: {
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    paragraph: {
      fontSize: '16px',
      color: '#9ca3af',
      lineHeight: 1.8
    },
    highlightsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      marginTop: '16px'
    },
    highlightCard: {
      padding: '16px',
      background: 'rgba(17, 24, 39, 0.6)',
      borderRadius: '12px',
      border: '1px solid rgba(99, 102, 241, 0.1)',
      transition: 'all 0.3s ease'
    },
    highlightIcon: {
      fontSize: '24px',
      marginBottom: '8px'
    },
    highlightLabel: {
      fontSize: '14px',
      fontWeight: 600,
      color: '#f9fafb',
      marginBottom: '4px'
    },
    highlightDesc: {
      fontSize: '12px',
      color: '#6b7280'
    }
  };

  return (
    <section id="about" style={styles.section}>
      <div className="section-header">
        <p className="section-label">// Introduction</p>
        <h2 className="section-title">About Me</h2>
      </div>

      <div style={styles.grid}>
        <div style={styles.imageContainer}>
          <div
            style={{
              ...styles.glowOrb,
              background: '#6366f1',
              top: '-50px',
              left: '-50px'
            }}
          />
          <div
            style={{
              ...styles.glowOrb,
              background: '#8b5cf6',
              bottom: '-50px',
              right: '-50px'
            }}
          />
          <div style={styles.imageWrapper}>
            <AnimatedAvatar size={320} />
          </div>
        </div>

        <div style={styles.content}>
          <p style={styles.paragraph}>
            I've spent the last few years building production ML systems: RAG pipelines, 
            embedding architectures, real-time inference APIs that serve real users every day. 
            What I've come to appreciate is that the most interesting problems sit at the 
            intersection of <span style={{ color: '#6366f1' }}>cutting-edge ML</span> and 
            <span style={{ color: '#8b5cf6' }}> delightful user experiences</span>.
          </p>

          <p style={styles.paragraph}>
            My research in multimodal AI (CNN + RAG) gave me a taste of visual understanding, 
            and I'm eager to go deeper. From building YOLOv8 models achieving 79% mAP to 
            creating intelligent RAG chatbots with Groq API, I thrive on solving complex 
            problems with elegant solutions.
          </p>

          <p style={styles.paragraph}>
            I'm currently finishing my MSc at the University of Glasgow and looking for a 
            role where I can push the boundaries of generative AI while building products 
            that millions of people actually enjoy using.
          </p>

          <div style={styles.highlightsGrid}>
            {highlights.map((item, i) => (
              <div
                key={i}
                style={styles.highlightCard}
                className="glass-card"
              >
                <div style={styles.highlightIcon}>{item.icon}</div>
                <div style={styles.highlightLabel}>{item.label}</div>
                <div style={styles.highlightDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
