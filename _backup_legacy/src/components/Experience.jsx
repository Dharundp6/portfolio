import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Wise Work',
      location: 'Bangalore, India',
      period: 'Sep 2024 – Mar 2025',
      type: 'Full-time',
      color: '#3b82f6',
      highlights: [
        'Architected production RAG system using LangChain, PyTorch, and Hugging Face, achieving 30% improvement in retrieval accuracy',
        'Designed end-to-end ML pipeline: document chunking, embedding generation, vector indexing, semantic retrieval—reducing time-to-result by 40%',
        'Evaluated open-source models and third-party AI APIs through systematic A/B testing to inform build-vs-buy decisions',
        'Built CI/CD infrastructure with Docker and GitHub Actions, reducing QA cycles by 40%'
      ],
      technologies: ['LangChain', 'PyTorch', 'Hugging Face', 'FastAPI', 'Docker', 'GitHub Actions']
    },
    {
      title: 'Deep Learning Intern',
      company: 'Council on Energy, Environment and Water (CEEW)',
      location: 'New Delhi, India',
      period: 'Mar 2024 – Jul 2024',
      type: 'Internship',
      color: '#8b5cf6',
      highlights: [
        'Developed YOLOv8 model for identifying Indian Bolivian breeds, achieving 79% mAP score',
        'Curated and augmented dataset to 4,800 images across 32 classes over 20 training iterations',
        'Implemented 8 data augmentation techniques, enhancing image diversity and model performance',
        'Integrated RAG chatbot using Groq API (LLAMA-8b), improving user interaction and query resolution'
      ],
      technologies: ['YOLOv8', 'Computer Vision', 'Groq API', 'LLAMA', 'Python', 'Data Augmentation']
    },
    {
      title: 'Research Analyst Intern',
      company: 'Kumaraguru Business School',
      location: 'Coimbatore, India',
      period: 'Jul 2023 – Oct 2023',
      type: 'Internship',
      color: '#10b981',
      highlights: [
        'Designed Data pipelines to automate preprocessing, analysis, and visualization—resulting in 30% faster insights generation',
        'Developed text preprocessing methods: tokenization, stemming, lemmatization, and stop word removal',
        'Utilized Power BI to design real-time reporting systems, enhancing operational efficiency',
        'Built NLP pipelines processing 10,000+ messages to uncover insights for stakeholders'
      ],
      technologies: ['Python', 'NLP', 'Power BI', 'SQL', 'Pandas', 'Data Visualization']
    }
  ];

  const styles = {
    section: {
      padding: '100px 24px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    timeline: {
      position: 'relative',
      marginTop: '60px'
    },
    timelineLine: {
      position: 'absolute',
      left: '20px',
      top: '0',
      bottom: '0',
      width: '2px',
      background: 'linear-gradient(180deg, #3b82f6, #8b5cf6, #10b981)',
      borderRadius: '2px'
    },
    item: {
      position: 'relative',
      paddingLeft: '60px',
      marginBottom: '48px'
    },
    dot: (color) => ({
      position: 'absolute',
      left: '11px',
      top: '8px',
      width: '20px',
      height: '20px',
      background: '#0a0f1c',
      border: `3px solid ${color}`,
      borderRadius: '50%',
      boxShadow: `0 0 20px ${color}60`
    }),
    card: {
      padding: '28px',
      background: 'rgba(17, 24, 39, 0.6)',
      borderRadius: '16px',
      border: '1px solid rgba(99, 102, 241, 0.1)',
      transition: 'all 0.3s ease'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '16px'
    },
    titleGroup: {
      flex: 1
    },
    title: {
      fontSize: '20px',
      fontWeight: 700,
      color: '#f9fafb',
      marginBottom: '4px'
    },
    company: (color) => ({
      fontSize: '16px',
      fontWeight: 600,
      color: color
    }),
    location: {
      fontSize: '14px',
      color: '#6b7280',
      marginTop: '4px'
    },
    badge: {
      padding: '6px 16px',
      background: 'rgba(99, 102, 241, 0.1)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      borderRadius: '20px',
      fontSize: '13px',
      color: '#a5b4fc',
      fontFamily: "'JetBrains Mono', monospace",
      whiteSpace: 'nowrap'
    },
    highlights: {
      listStyle: 'none',
      padding: 0,
      marginBottom: '20px'
    },
    highlightItem: {
      position: 'relative',
      paddingLeft: '20px',
      marginBottom: '12px',
      fontSize: '14px',
      color: '#9ca3af',
      lineHeight: 1.7
    },
    bullet: (color) => ({
      position: 'absolute',
      left: '0',
      top: '8px',
      width: '6px',
      height: '6px',
      background: color,
      borderRadius: '50%'
    }),
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    tech: (color) => ({
      padding: '4px 12px',
      background: `${color}10`,
      border: `1px solid ${color}30`,
      borderRadius: '6px',
      fontSize: '12px',
      color: color,
      fontFamily: "'JetBrains Mono', monospace"
    })
  };

  return (
    <section id="experience" style={styles.section}>
      <div className="section-header">
        <p className="section-label">// Career Path</p>
        <h2 className="section-title">Experience</h2>
      </div>

      <div style={styles.timeline}>
        <div style={styles.timelineLine} />
        
        {experiences.map((exp, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.dot(exp.color)} />
            
            <div style={styles.card} className="glass-card">
              <div style={styles.header}>
                <div style={styles.titleGroup}>
                  <h3 style={styles.title}>{exp.title}</h3>
                  <p style={styles.company(exp.color)}>{exp.company}</p>
                  <p style={styles.location}>📍 {exp.location}</p>
                </div>
                <span style={styles.badge}>{exp.period}</span>
              </div>

              <ul style={styles.highlights}>
                {exp.highlights.map((highlight, i) => (
                  <li key={i} style={styles.highlightItem}>
                    <span style={styles.bullet(exp.color)} />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div style={styles.techStack}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} style={styles.tech(exp.color)}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
