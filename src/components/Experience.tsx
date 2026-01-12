"use client";

import { motion } from "framer-motion";
import {
  ComicPanel,
  SpeechBubble,
  ChapterHeader,
  NarratorBox,
  SoundEffect,
} from "./comic";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Wise Work",
      location: "Bangalore, India",
      period: "Sep 2024 – Mar 2025",
      arc: "The RAG Master Arc",
      icon: "⚔️",
      highlights: [
        "Architected production RAG system using LangChain, PyTorch, and Hugging Face, achieving 30% improvement in retrieval accuracy",
        "Designed end-to-end ML pipeline: document chunking, embedding generation, vector indexing, semantic retrieval—reducing time-to-result by 40%",
        "Evaluated open-source models and third-party AI APIs through systematic A/B testing to inform build-vs-buy decisions",
        "Built CI/CD infrastructure with Docker and GitHub Actions, reducing QA cycles by 40%",
      ],
      technologies: [
        "LangChain",
        "PyTorch",
        "Hugging Face",
        "FastAPI",
        "Docker",
        "GitHub Actions",
      ],
    },
    {
      title: "Deep Learning Intern",
      company: "Council on Energy, Environment and Water (CEEW)",
      location: "New Delhi, India",
      period: "Mar 2024 – Jul 2024",
      arc: "The Vision Quest Arc",
      icon: "👁️",
      highlights: [
        "Developed YOLOv8 model for identifying Indian Bolivian breeds, achieving 79% mAP score",
        "Curated and augmented dataset to 4,800 images across 32 classes over 20 training iterations",
        "Implemented 8 data augmentation techniques, enhancing image diversity and model performance",
        "Integrated RAG chatbot using Groq API (LLAMA-8b), improving user interaction and query resolution",
      ],
      technologies: [
        "YOLOv8",
        "Computer Vision",
        "Groq API",
        "LLAMA",
        "Python",
        "Data Augmentation",
      ],
    },
    {
      title: "Research Analyst Intern",
      company: "Kumaraguru Business School",
      location: "Coimbatore, India",
      period: "Jul 2023 – Oct 2023",
      arc: "The Data Origins Arc",
      icon: "📊",
      highlights: [
        "Designed Data pipelines to automate preprocessing, analysis, and visualization—resulting in 30% faster insights generation",
        "Developed text preprocessing methods: tokenization, stemming, lemmatization, and stop word removal",
        "Utilized Power BI to design real-time reporting systems, enhancing operational efficiency",
        "Built NLP pipelines processing 10,000+ messages to uncover insights for stakeholders",
      ],
      technologies: [
        "Python",
        "NLP",
        "Power BI",
        "SQL",
        "Pandas",
        "Data Visualization",
      ],
    },
  ];

  return (
    <section id="experience" className="py-8 px-4 md:px-8">
      <ComicPanel className="max-w-6xl mx-auto">
        {/* Sound Effect */}
        <div className="flex justify-center mb-4">
          <SoundEffect text="TRAINING!" size="lg" color="blue" rotate={3} />
        </div>

        {/* Chapter Header */}
        <ChapterHeader
          chapterNumber={4}
          title="Training Arc"
          subtitle="Every master was once a student..."
        />

        {/* Narrator Box */}
        <NarratorBox position="top-left" className="mt-6 mb-8">
          Through countless battles and challenges, our hero honed their skills
          at legendary guilds across the land...
        </NarratorBox>

        {/* Experience Timeline */}
        <div className="space-y-8 mt-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Arc Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="action-burst w-12 h-12 flex items-center justify-center">
                  <span className="text-2xl">{exp.icon}</span>
                </div>
                <h3 className="font-[family-name:var(--font-bangers)] text-xl text-[#b5544a] tracking-wide">
                  {exp.arc}
                </h3>
              </div>

              {/* Main Card */}
              <div className="comic-panel p-6 md:p-8 ml-4 border-l-4 border-[#d4a84b]">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h4 className="font-[family-name:var(--font-bangers)] text-2xl text-[#1a1a1a] mb-1">
                      {exp.title}
                    </h4>
                    <p className="font-semibold text-lg text-[#4a6fa5]">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[#8b7355] mt-1 font-[family-name:var(--font-courier-prime)]">
                      📍 {exp.location}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-[#d4a84b] text-[#1a1a1a] border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-sm">
                    {exp.period}
                  </span>
                </div>

                {/* Achievements in Speech Bubble */}
                <SpeechBubble tailPosition="left" className="mb-6">
                  <h5 className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355] mb-3">
                    ACHIEVEMENTS UNLOCKED:
                  </h5>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[#1a1a1a] text-sm leading-relaxed"
                      >
                        <span className="text-[#b5544a] font-bold">★</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </SpeechBubble>

                {/* Technologies as Items Acquired */}
                <div className="pt-4 border-t-2 border-dashed border-[#e8dcc8]">
                  <h5 className="font-[family-name:var(--font-bangers)] text-sm text-[#8b7355] mb-3">
                    ITEMS ACQUIRED:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="item-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connection line between experiences */}
              {index < experiences.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-1 h-8 bg-[#d4a84b]" />
                    <span className="font-[family-name:var(--font-bangers)] text-xs text-[#8b7355]">
                      NEXT
                    </span>
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#d4a84b]" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Training Complete Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="comic-panel p-6 bg-[#d4a84b] text-center">
            <SoundEffect
              text="LEVEL UP!"
              size="md"
              color="red"
              className="mb-2"
            />
            <p className="font-[family-name:var(--font-bangers)] text-xl text-[#1a1a1a]">
              Training Arc Complete!
            </p>
            <p className="text-sm text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
              +500 XP Earned
            </p>
          </div>
        </motion.div>
      </ComicPanel>

      {/* Panel gutter */}
      <div className="panel-gutter h-4 max-w-6xl mx-auto" />
    </section>
  );
};

export default Experience;
