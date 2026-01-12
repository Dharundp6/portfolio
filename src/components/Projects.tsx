"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ComicPanel,
  ChapterHeader,
  NarratorBox,
  SoundEffect,
  SpeechBubble,
} from "./comic";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Multimodal AI for Visual Decision Support",
      description:
        "Developed hybrid CNN + RAG architecture combining convolutional networks for visual feature extraction with retrieval-augmented generation. Demonstrated measurable accuracy improvements.",
      venue: "Presented at National University of Singapore",
      category: "research",
      technologies: ["CNN", "RAG", "PyTorch", "Multimodal AI"],
      icon: "🧬",
      difficulty: "LEGENDARY",
      xp: 500,
      featured: true,
    },
    {
      title: "YOLOv8 Breed Detection System",
      description:
        "Built computer vision model for identifying Indian Bolivian breeds with 79% mAP. Curated 4,800 image dataset across 32 classes with 8 augmentation techniques.",
      venue: "CEEW Research Project",
      category: "cv",
      technologies: ["YOLOv8", "Computer Vision", "Python", "Augmentation"],
      icon: "🔍",
      difficulty: "EPIC",
      xp: 400,
      featured: true,
    },
    {
      title: "Production RAG System",
      description:
        "Architected end-to-end RAG pipeline with document chunking, embedding generation, vector indexing, and semantic retrieval. Achieved 30% accuracy improvement.",
      venue: "Wise Work",
      category: "ml",
      technologies: ["LangChain", "Hugging Face", "FastAPI", "Vector DB"],
      icon: "🤖",
      difficulty: "EPIC",
      xp: 450,
      featured: true,
    },
    {
      title: "Smart Agriculture Advisor",
      description:
        "Award-winning sustainable agriculture solution providing intelligent recommendations for crop management, pest detection, and yield optimization.",
      venue: "Wise-Ai-Thon 2024 Winner",
      category: "ml",
      technologies: ["ML", "RAG", "Agriculture AI", "Python"],
      icon: "🌱",
      difficulty: "RARE",
      xp: 350,
      featured: false,
    },
    {
      title: "RAG Chatbot with Groq API",
      description:
        "Integrated conversational AI using Groq API with LLAMA-8b model, improving user interaction and enabling natural language query resolution.",
      venue: "CEEW Integration",
      category: "ml",
      technologies: ["Groq API", "LLAMA", "RAG", "NLP"],
      icon: "💬",
      difficulty: "RARE",
      xp: 300,
      featured: false,
    },
    {
      title: "Financial Analyst RAG Agent",
      description:
        "Intelligent pipeline with automated KPI extraction, trend summarization, real-time inference, and validation logic ensuring numerical accuracy.",
      venue: "Personal Project",
      category: "ml",
      technologies: ["LangChain", "FastAPI", "LLM", "Python"],
      icon: "📈",
      difficulty: "RARE",
      xp: 320,
      featured: false,
    },
    {
      title: "Career Planning Analytics",
      description:
        "Comprehensive student survey analysis system with interactive Power BI dashboards. Presented insights to university leadership.",
      venue: "University Project",
      category: "data",
      technologies: ["Power BI", "Data Analysis", "SQL", "Visualization"],
      icon: "📊",
      difficulty: "COMMON",
      xp: 200,
      featured: false,
    },
    {
      title: "WhatsApp Data Pipeline",
      description:
        "Automated preprocessing, analysis, and visualization pipeline resulting in 30% faster insights generation for research stakeholders.",
      venue: "Research Project",
      category: "data",
      technologies: ["Python", "NLP", "Pandas", "Automation"],
      icon: "⚡",
      difficulty: "COMMON",
      xp: 250,
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Quests", icon: "🗺️" },
    { id: "ml", label: "ML Quests", icon: "🤖" },
    { id: "cv", label: "Vision Quests", icon: "👁️" },
    { id: "research", label: "Research Quests", icon: "🔬" },
    { id: "data", label: "Data Quests", icon: "📊" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "LEGENDARY":
        return "bg-[#d4a84b] text-[#1a1a1a]";
      case "EPIC":
        return "bg-[#7a5c91] text-white";
      case "RARE":
        return "bg-[#4a6fa5] text-white";
      default:
        return "bg-[#6b8e4e] text-white";
    }
  };

  return (
    <section id="projects" className="py-8 px-4 md:px-8">
      <ComicPanel className="max-w-6xl mx-auto">
        {/* Sound Effect */}
        <div className="flex justify-center mb-4">
          <SoundEffect text="QUEST LOG!" size="lg" color="yellow" rotate={-2} />
        </div>

        {/* Chapter Header */}
        <ChapterHeader
          chapterNumber={5}
          title="Side Quests"
          subtitle="Adventures that shaped the hero..."
        />

        {/* Narrator Box */}
        <NarratorBox position="top-left" className="mt-6 mb-8">
          Between training arcs, our hero embarked on numerous side quests, each
          one a chance to apply skills and discover new abilities...
        </NarratorBox>

        {/* Quest Category Selector */}
        <div className="mb-8">
          <h4 className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355] mb-4 text-center">
            SELECT QUEST TYPE:
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-sm transition-all duration-300",
                  filter === f.id
                    ? "bg-[#d4a84b] comic-shadow translate-x-1 -translate-y-1"
                    : "bg-[#f5f0e1] hover:bg-[#e8dcc8]"
                )}
              >
                <span>{f.icon}</span>
                <span>{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Quests (Main Quests) */}
        {filter === "all" && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <SoundEffect text="MAIN!" size="sm" color="red" />
              <h3 className="font-[family-name:var(--font-bangers)] text-xl text-[#b5544a]">
                MAIN QUESTS
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="comic-panel p-5 bg-[#faf7f0] hover:translate-x-1 hover:-translate-y-1 transition-transform"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-3xl">{project.icon}</span>
                      <span
                        className={cn(
                          "px-2 py-1 text-xs font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a]",
                          getDifficultyColor(project.difficulty)
                        )}
                      >
                        {project.difficulty}
                      </span>
                    </div>
                    <h4 className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a] mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#4a6fa5] font-[family-name:var(--font-courier-prime)] mb-3">
                      📍 {project.venue}
                    </p>
                    <p className="text-sm text-[#5c4d3c] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="pt-3 border-t-2 border-dashed border-[#e8dcc8]">
                      <span className="text-xs font-[family-name:var(--font-bangers)] text-[#8b7355]">
                        LOOT:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="item-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <span className="font-[family-name:var(--font-bangers)] text-[#b5544a]">
                        +{project.xp} XP
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        )}

        {/* Side Quests Grid */}
        <div>
          {filter === "all" && (
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl text-[#8b7355]">
                SIDE QUESTS
              </h3>
            </div>
          )}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence>
              {(filter === "all"
                ? filteredProjects.filter((p) => !p.featured)
                : filteredProjects
              ).map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  className="comic-panel p-4 hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-2xl">{project.icon}</span>
                    <span
                      className={cn(
                        "px-2 py-0.5 text-[10px] font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a]",
                        getDifficultyColor(project.difficulty)
                      )}
                    >
                      {project.difficulty}
                    </span>
                  </div>
                  <h4 className="font-[family-name:var(--font-bangers)] text-base text-[#1a1a1a] mb-1">
                    {project.title}
                  </h4>
                  <p className="text-[10px] text-[#4a6fa5] font-[family-name:var(--font-courier-prime)] mb-2">
                    📍 {project.venue}
                  </p>
                  <p className="text-xs text-[#5c4d3c] leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="item-tag text-[10px]">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="item-tag text-[10px]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex justify-end">
                    <span className="font-[family-name:var(--font-bangers)] text-sm text-[#b5544a]">
                      +{project.xp} XP
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Total XP Earned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <SpeechBubble type="shout" className="inline-block">
            <div className="text-center">
              <span className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355]">
                TOTAL QUEST XP:
              </span>
              <span className="font-[family-name:var(--font-bangers)] text-3xl text-[#b5544a] ml-3">
                {projects.reduce((acc, p) => acc + p.xp, 0)}
              </span>
            </div>
          </SpeechBubble>
        </motion.div>
      </ComicPanel>

      {/* Panel gutter */}
      <div className="panel-gutter h-4 max-w-6xl mx-auto" />
    </section>
  );
};

export default Projects;
