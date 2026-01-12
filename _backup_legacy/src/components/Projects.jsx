import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects = [
    {
      title: 'Multimodal AI for Visual Decision Support',
      description: 'Developed hybrid CNN + RAG architecture combining convolutional networks for visual feature extraction with retrieval-augmented generation. Demonstrated measurable accuracy improvements over baselines.',
      venue: 'Presented at National University of Singapore',
      category: 'research',
      technologies: ['CNN', 'RAG', 'PyTorch', 'Multimodal AI'],
      icon: '🧬',
      color: '#3b82f6',
      featured: true
    },
    {
      title: 'YOLOv8 Breed Detection System',
      description: 'Built computer vision model for identifying Indian Bolivian breeds with 79% mAP. Curated 4,800 image dataset across 32 classes with 8 augmentation techniques.',
      venue: 'CEEW Research Project',
      category: 'cv',
      technologies: ['YOLOv8', 'Computer Vision', 'Python', 'Data Augmentation'],
      icon: '🔍',
      color: '#8b5cf6',
      featured: true
    },
    {
      title: 'Production RAG System',
      description: 'Architected end-to-end RAG pipeline with document chunking, embedding generation, vector indexing, and semantic retrieval. Achieved 30% accuracy improvement.',
      venue: 'Wise Work',
      category: 'ml',
      technologies: ['LangChain', 'Hugging Face', 'FastAPI', 'Vector DB'],
      icon: '🤖',
      color: '#10b981',
      featured: true
    },
    {
      title: 'Smart Agriculture Advisor',
      description: 'Award-winning sustainable agriculture solution providing intelligent recommendations for crop management, pest detection, and yield optimization.',
      venue: 'Wise-Ai-Thon 2024 Winner',
      category: 'ml',
      technologies: ['ML', 'RAG', 'Agriculture AI', 'Python'],
      icon: '🌱',
      color: '#f59e0b'
    },
    {
      title: 'RAG Chatbot with Groq API',
      description: 'Integrated conversational AI using Groq API with LLAMA-8b model, improving user interaction and enabling natural language query resolution.',
      venue: 'CEEW Integration',
      category: 'ml',
      technologies: ['Groq API', 'LLAMA', 'RAG', 'NLP'],
      icon: '💬',
      color: '#ec4899'
    },
    {
      title: 'Financial Analyst RAG Agent',
      description: 'Intelligent pipeline with automated KPI extraction, trend summarization, real-time inference, and validation logic ensuring numerical accuracy.',
      venue: 'Personal Project',
      category: 'ml',
      technologies: ['LangChain', 'FastAPI', 'LLM', 'Python'],
      icon: '📈',
      color: '#06b6d4'
    },
    {
      title: 'Career Planning Analytics Dashboard',
      description: 'Comprehensive student survey analysis system with interactive Power BI dashboards. Presented insights to university leadership.',
      venue: 'University Project',
      category: 'data',
      technologies: ['Power BI', 'Data Analysis', 'SQL', 'Visualization'],
      icon: '📊',
      color: '#8b5cf6'
    },
    {
      title: 'WhatsApp Data Pipeline',
      description: 'Automated preprocessing, analysis, and visualization pipeline resulting in 30% faster insights generation for research stakeholders.',
      venue: 'Research Project',
      category: 'data',
      technologies: ['Python', 'NLP', 'Pandas', 'Automation'],
      icon: '⚡',
      color: '#3b82f6'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'cv', label: 'Computer Vision' },
    { id: 'research', label: 'Research' },
    { id: 'data', label: 'Data Science' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const styles = {
    section: {
      padding: '100px 24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    filters: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      flexWrap: 'wrap',
      marginBottom: '48px'
    },
    filterBtn: (isActive) => ({
      padding: '10px 24px',
      background: isActive ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'rgba(17, 24, 39, 0.6)',
      border: isActive ? 'none' : '1px solid rgba(99, 102, 241, 0.2)',
      borderRadius: '8px',
      color: isActive ? '#fff' : '#9ca3af',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '24px'
    },
    card: (featured, isHovered, tiltX, tiltY) => ({
      padding: '28px',
      background: 'rgba(17, 24, 39, 0.6)',
      borderRadius: '16px',
      border: featured ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(99, 102, 241, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transform: isHovered
        ? `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(1.02)`
        : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      boxShadow: isHovered ? '0 20px 40px rgba(99, 102, 241, 0.3)' : 'none'
    }),
    featuredBadge: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      padding: '4px 10px',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 600,
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    iconWrapper: (color, isHovered) => ({
      width: '56px',
      height: '56px',
      background: `${color}15`,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      fontSize: '28px',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
      boxShadow: isHovered ? `0 0 30px ${color}40` : 'none'
    }),
    cardShine: (isHovered, mouseX, mouseY) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: isHovered
        ? `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.08) 0%, transparent 50%)`
        : 'transparent',
      pointerEvents: 'none',
      transition: 'background 0.3s ease'
    }),
    title: {
      fontSize: '18px',
      fontWeight: 700,
      color: '#f9fafb',
      marginBottom: '8px'
    },
    venue: (color) => ({
      fontSize: '13px',
      color: color,
      marginBottom: '12px',
      fontFamily: "'JetBrains Mono', monospace"
    }),
    description: {
      fontSize: '14px',
      color: '#9ca3af',
      lineHeight: 1.7,
      flex: 1,
      marginBottom: '20px'
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    tech: {
      padding: '4px 10px',
      background: 'rgba(99, 102, 241, 0.1)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      borderRadius: '4px',
      fontSize: '12px',
      color: '#a5b4fc',
      fontFamily: "'JetBrains Mono', monospace"
    }
  };

  return (
    <section id="projects" style={styles.section}>
      <div className="section-header">
        <p className="section-label">// My Work</p>
        <h2 className="section-title">Projects & Research</h2>
      </div>

      {/* Filters */}
      <div style={styles.filters}>
        {filters.map((f) => (
          <button
            key={f.id}
            style={styles.filterBtn(filter === f.id)}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={styles.grid}>
        {filteredProjects.map((project, index) => {
          const isHovered = hoveredCard === index;
          const tiltX = isHovered ? (mousePosition.x - 50) / 10 : 0;
          const tiltY = isHovered ? -(mousePosition.y - 50) / 10 : 0;
          const mouseX = mousePosition.x;
          const mouseY = mousePosition.y;

          return (
            <div
              key={index}
              style={styles.card(project.featured, isHovered, tiltX, tiltY)}
              className="glass-card"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setMousePosition({ x, y });
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                setMousePosition({ x: 0, y: 0 });
              }}
            >
              <div style={styles.cardShine(isHovered, mouseX, mouseY)} />
              {project.featured && <span style={styles.featuredBadge}>Featured</span>}

              <div style={styles.iconWrapper(project.color, isHovered)}>
                {project.icon}
              </div>

              <h3 style={styles.title}>{project.title}</h3>
              <p style={styles.venue(project.color)}>📍 {project.venue}</p>
              <p style={styles.description}>{project.description}</p>

              <div style={styles.techStack}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
