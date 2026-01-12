"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SpeechBubble, SoundEffect } from "@/components/comic";

const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Wise Work",
    role: "Software Engineer Intern",
    location: "Bangalore, India",
    period: "Sep 2024 – Mar 2025",
    brief:
      "Developed production-ready RAG systems and NLP infrastructure to power AI products at scale.",
    contributions: [
      "Built end-to-end RAG pipeline processing 10,000+ documents with LangChain and vector databases",
      "Developed NLP classification API achieving 92% accuracy, handling 200+ daily requests",
      "Architected scalable backend services using FastAPI with PostgreSQL and MongoDB",
      "Implemented CI/CD pipelines with Docker, reducing deployment time by 40%",
    ],
    results: [
      { metric: "10K+", label: "Docs processed" },
      { metric: "92%", label: "API accuracy" },
      { metric: "200+", label: "Daily requests" },
    ],
    tech: ["LangChain", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "OpenAI API"],
  },
  {
    id: 2,
    title: "Research Analyst Intern",
    company: "Kumaraguru Business School",
    role: "Research Analyst Intern",
    location: "Coimbatore, India",
    period: "Jan 2025 – May 2025",
    brief:
      "Built automated analysis pipelines and delivered AI-powered insights from qualitative research data.",
    contributions: [
      "Designed data preprocessing and analysis pipelines for research projects",
      "Applied NLP techniques for sentiment analysis and text classification",
      "Built interactive dashboards for visualizing research findings",
      "Automated report generation, reducing manual effort by 60%",
    ],
    results: [
      { metric: "60%", label: "Time saved" },
      { metric: "100%", label: "Automation" },
      { metric: "5+", label: "Research projects" },
    ],
    tech: ["Python", "NLP", "Pandas", "Power BI", "SQL"],
  },
];

export default function ExperiencePage() {
  const [currentExp, setCurrentExp] = useState(0);

  const goToPrev = () => {
    setCurrentExp((prev) => (prev > 0 ? prev - 1 : experiences.length - 1));
  };

  const goToNext = () => {
    setCurrentExp((prev) => (prev < experiences.length - 1 ? prev + 1 : 0));
  };

  const experience = experiences[currentExp];

  return (
    <ChapterLayout
      chapterNumber={3}
      title="Experience"
      subtitle="Professional roles & internships"
      prevChapter={{ href: "/chapters/skills", label: "Skills" }}
      nextChapter={{ href: "/chapters/projects", label: "Projects" }}
    >
      {/* Experience Counter */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          onClick={goToPrev}
          className="p-2 bg-[#f5f0e1] border-[3px] border-[#1a1a1a] hover:bg-[#d4a84b] transition-colors"
          aria-label="Previous experience"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="font-[family-name:var(--font-bangers)] text-xl text-[#8b7355]">
          ROLE {currentExp + 1} OF {experiences.length}
        </span>

        <button
          onClick={goToNext}
          className="p-2 bg-[#f5f0e1] border-[3px] border-[#1a1a1a] hover:bg-[#d4a84b] transition-colors"
          aria-label="Next experience"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Experience Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ComicPanel className="mb-6">
            {/* Experience Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-4 border-b-4 border-dashed border-[#e8dcc8]">
              <div>
                <SoundEffect
                  text={`ROLE ${experience.id}`}
                  size="sm"
                  color="red"
                  className="mb-2"
                />
                <h2 className="font-[family-name:var(--font-bangers)] text-3xl text-[#1a1a1a]">
                  {experience.title}
                </h2>
                <p className="font-[family-name:var(--font-bangers)] text-lg text-[#4a6fa5]">
                  {experience.company}
                </p>
                <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                  {experience.location}
                </p>
              </div>
              <span className="px-4 py-2 bg-[#d4a84b] text-[#1a1a1a] border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)]">
                {experience.period}
              </span>
            </div>

            {/* Overview */}
            <div className="mb-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355] mb-2">
                OVERVIEW:
              </h3>
              <SpeechBubble>
                <p className="text-[#1a1a1a]">{experience.brief}</p>
              </SpeechBubble>
            </div>

            {/* Key Contributions */}
            <div className="mb-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355] mb-3">
                KEY CONTRIBUTIONS:
              </h3>
              <ul className="space-y-2">
                {experience.contributions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#b5544a] font-bold">→</span>
                    <span className="text-[#1a1a1a] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="mb-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355] mb-3">
                IMPACT:
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {experience.results.map((result, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-[#6b8e4e]/20 border-2 border-[#6b8e4e]"
                  >
                    <span className="font-[family-name:var(--font-bangers)] text-2xl text-[#6b8e4e]">
                      {result.metric}
                    </span>
                    <p className="text-xs text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-[family-name:var(--font-bangers)] text-sm text-[#8b7355] mb-2">
                TECHNOLOGIES:
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#1a1a1a] text-[#f5f0e1] text-xs font-[family-name:var(--font-courier-prime)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ComicPanel>
        </motion.div>
      </AnimatePresence>

      {/* Experience Dots */}
      <div className="flex justify-center gap-2" role="tablist" aria-label="Experience navigation">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setCurrentExp(index)}
            className={`w-3 h-3 rounded-full border-2 border-[#1a1a1a] transition-colors ${
              index === currentExp ? "bg-[#b5544a]" : "bg-[#f5f0e1]"
            }`}
            aria-label={`Go to ${exp.company} experience`}
            aria-selected={index === currentExp}
            role="tab"
          />
        ))}
      </div>
    </ChapterLayout>
  );
}
