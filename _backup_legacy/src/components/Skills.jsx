import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: 'ML & Deep Learning',
      icon: '🧠',
      color: '#3b82f6',
      skills: [
        { name: 'PyTorch', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Hugging Face', level: 88 },
        { name: 'CNNs', level: 85 },
        { name: 'Transfer Learning', level: 82 },
        { name: 'Model Fine-tuning', level: 85 }
      ]
    },
    {
      title: 'Generative AI',
      icon: '🤖',
      color: '#8b5cf6',
      skills: [
        { name: 'LangChain', level: 88 },
        { name: 'RAG Architectures', level: 90 },
        { name: 'Vector Embeddings', level: 85 },
        { name: 'Prompt Engineering', level: 82 },
        { name: 'LLM Integration', level: 85 },
        { name: 'Groq API', level: 80 }
      ]
    },
    {
      title: 'Computer Vision',
      icon: '👁️',
      color: '#ec4899',
      skills: [
        { name: 'YOLOv8', level: 85 },
        { name: 'OpenCV', level: 82 },
        { name: 'Object Detection', level: 85 },
        { name: 'Image Processing', level: 80 },
        { name: 'Data Augmentation', level: 88 },
        { name: 'Feature Extraction', level: 78 }
      ]
    },
    {
      title: 'Data Science',
      icon: '📊',
      color: '#06b6d4',
      skills: [
        { name: 'Pandas', level: 92 },
        { name: 'NumPy', level: 90 },
        { name: 'Scikit-Learn', level: 88 },
        { name: 'Power BI', level: 85 },
        { name: 'Statistical Modeling', level: 82 },
        { name: 'Data Visualization', level: 85 }
      ]
    },
    {
      title: 'Production & MLOps',
      icon: '🚀',
      color: '#10b981',
      skills: [
        { name: 'FastAPI', level: 88 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 82 },
        { name: 'REST APIs', level: 88 },
        { name: 'AWS', level: 78 },
        { name: 'Git', level: 90 }
      ]
    },
    {
      title: 'Languages',
      icon: '💻',
      color: '#f59e0b',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 88 },
        { name: 'R', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'Bash', level: 78 },
        { name: 'Linux', level: 82 }
      ]
    }
  ];

  const styles = {
    section: {
      padding: '100px 24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    container: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: '40px',
      marginTop: '40px'
    },
    categoriesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    categoryBtn: (isActive, color) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px 20px',
      background: isActive ? `${color}15` : 'rgba(17, 24, 39, 0.6)',
      border: `1px solid ${isActive ? color : 'rgba(99, 102, 241, 0.1)'}`,
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'left'
    }),
    categoryIcon: {
      fontSize: '28px'
    },
    categoryTitle: {
      fontSize: '15px',
      fontWeight: 600,
      color: '#f9fafb'
    },
    skillsPanel: {
      padding: '32px',
      background: 'rgba(17, 24, 39, 0.6)',
      borderRadius: '20px',
      border: '1px solid rgba(99, 102, 241, 0.1)'
    },
    panelHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '32px'
    },
    panelIcon: {
      fontSize: '40px'
    },
    panelTitle: {
      fontSize: '24px',
      fontWeight: 700
    },
    skillsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    skillItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    skillName: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#e5e7eb'
    },
    skillLevel: {
      fontSize: '14px',
      fontWeight: 600,
      fontFamily: "'JetBrains Mono', monospace"
    },
    progressBar: {
      height: '8px',
      background: 'rgba(99, 102, 241, 0.1)',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    progressFill: (level, color) => ({
      width: `${level}%`,
      height: '100%',
      background: `linear-gradient(90deg, ${color}, ${color}aa)`,
      borderRadius: '4px',
      transition: 'width 0.8s ease'
    }),
    mobileContainer: {
      display: 'none'
    }
  };

  // Check if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  if (isMobile) {
    return (
      <section id="skills" style={styles.section}>
        <div className="section-header">
          <p className="section-label">// What I Do</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div style={{ display: 'grid', gap: '24px', marginTop: '40px' }}>
          {categories.map((category, index) => (
            <div
              key={index}
              style={styles.skillsPanel}
              className="glass-card"
            >
              <div style={styles.panelHeader}>
                <span style={styles.panelIcon}>{category.icon}</span>
                <h3 style={styles.panelTitle}>{category.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '8px 16px',
                      background: `${category.color}15`,
                      border: `1px solid ${category.color}40`,
                      borderRadius: '20px',
                      fontSize: '13px',
                      color: category.color
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="skills" style={styles.section}>
      <div className="section-header">
        <p className="section-label">// What I Do</p>
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div style={styles.container}>
        {/* Categories List */}
        <div style={styles.categoriesList}>
          {categories.map((category, index) => (
            <button
              key={index}
              style={styles.categoryBtn(activeCategory === index, category.color)}
              onClick={() => setActiveCategory(index)}
              onMouseEnter={(e) => {
                if (activeCategory !== index) {
                  e.currentTarget.style.borderColor = category.color + '50';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== index) {
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.1)';
                }
              }}
            >
              <span style={styles.categoryIcon}>{category.icon}</span>
              <span style={styles.categoryTitle}>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Panel */}
        <div style={styles.skillsPanel} className="glass-card">
          <div style={styles.panelHeader}>
            <span style={styles.panelIcon}>{categories[activeCategory].icon}</span>
            <h3 style={styles.panelTitle}>{categories[activeCategory].title}</h3>
          </div>

          <div style={styles.skillsList}>
            {categories[activeCategory].skills.map((skill, index) => (
              <div key={index} style={styles.skillItem}>
                <div style={styles.skillHeader}>
                  <span style={styles.skillName}>{skill.name}</span>
                  <span
                    style={{
                      ...styles.skillLevel,
                      color: categories[activeCategory].color
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div style={styles.progressBar}>
                  <div
                    style={styles.progressFill(skill.level, categories[activeCategory].color)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
