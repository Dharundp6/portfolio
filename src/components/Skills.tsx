"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ComicPanel, ChapterHeader, SoundEffect } from "./comic";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "ML & Deep Learning",
      icon: "🧠",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Hugging Face", level: 88 },
        { name: "CNNs", level: 85 },
        { name: "Transfer Learning", level: 82 },
        { name: "Model Fine-tuning", level: 85 },
      ],
    },
    {
      title: "Generative AI",
      icon: "🤖",
      skills: [
        { name: "LangChain", level: 88 },
        { name: "RAG Architectures", level: 90 },
        { name: "Vector Embeddings", level: 85 },
        { name: "Prompt Engineering", level: 82 },
        { name: "LLM Integration", level: 85 },
        { name: "Groq API", level: 80 },
      ],
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      skills: [
        { name: "YOLOv8", level: 85 },
        { name: "OpenCV", level: 82 },
        { name: "Object Detection", level: 85 },
        { name: "Image Processing", level: 80 },
        { name: "Data Augmentation", level: 88 },
        { name: "Feature Extraction", level: 78 },
      ],
    },
    {
      title: "Data Science",
      icon: "📊",
      skills: [
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 90 },
        { name: "Scikit-Learn", level: 88 },
        { name: "Power BI", level: 85 },
        { name: "Statistical Modeling", level: 82 },
        { name: "Data Visualization", level: 85 },
      ],
    },
    {
      title: "Production & MLOps",
      icon: "🚀",
      skills: [
        { name: "FastAPI", level: 88 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 82 },
        { name: "REST APIs", level: 88 },
        { name: "AWS", level: 78 },
        { name: "Git", level: 90 },
      ],
    },
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 88 },
        { name: "R", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "Bash", level: 78 },
        { name: "Linux", level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-8 px-4 md:px-8">
      <ComicPanel className="max-w-6xl mx-auto">
        {/* Sound Effect */}
        <div className="flex justify-center mb-4">
          <SoundEffect text="LEVEL UP!" size="lg" color="yellow" rotate={-3} />
        </div>

        {/* Chapter Header */}
        <ChapterHeader
          chapterNumber={3}
          title="Powers & Abilities"
          subtitle="Skills acquired through countless training..."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 mt-8">
          {/* Power Categories */}
          <div className="flex flex-col gap-3">
            <h4 className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355] mb-2">
              SELECT POWER TYPE:
            </h4>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={cn(
                  "flex items-center gap-4 p-4 border-[3px] border-[#1a1a1a] text-left transition-all duration-300",
                  activeCategory === index
                    ? "bg-[#d4a84b] comic-shadow translate-x-1 -translate-y-1"
                    : "bg-[#f5f0e1] hover:bg-[#e8dcc8]"
                )}
              >
                <span className="text-2xl">{category.icon}</span>
                <span
                  className={cn(
                    "font-[family-name:var(--font-bangers)] text-lg",
                    activeCategory === index ? "text-[#1a1a1a]" : "text-[#5c4d3c]"
                  )}
                >
                  {category.title}
                </span>
              </button>
            ))}
          </div>

          {/* Skills Panel */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="comic-panel p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b-4 border-[#1a1a1a] border-dashed">
              <span className="text-5xl">{categories[activeCategory].icon}</span>
              <div>
                <h3 className="font-[family-name:var(--font-bangers)] text-2xl md:text-3xl text-[#1a1a1a]">
                  {categories[activeCategory].title}
                </h3>
                <span className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                  Power Tree Unlocked
                </span>
              </div>
            </div>

            <div className="space-y-5">
              {categories[activeCategory].skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#1a1a1a]">{skill.name}</span>
                    <span className="font-[family-name:var(--font-bangers)] text-[#b5544a]">
                      LVL {skill.level}
                    </span>
                  </div>
                  <div className="power-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="power-bar-fill"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Total Power */}
            <div className="mt-6 pt-4 border-t-2 border-[#e8dcc8]">
              <div className="flex justify-between items-center">
                <span className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355]">
                  TOTAL POWER:
                </span>
                <span className="font-[family-name:var(--font-bangers)] text-2xl text-[#b5544a]">
                  {Math.round(
                    categories[activeCategory].skills.reduce((acc, s) => acc + s.level, 0) /
                      categories[activeCategory].skills.length
                  )}
                  %
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </ComicPanel>

      {/* Panel gutter */}
      <div className="panel-gutter h-4 max-w-6xl mx-auto" />
    </section>
  );
};

export default Skills;
