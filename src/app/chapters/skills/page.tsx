"use client";

import { motion } from "framer-motion";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SoundEffect } from "@/components/comic";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    color: "bg-[#4a6fa5]",
    description: "Core programming languages",
    tools: [
      { name: "Python", usage: "Primary" },
      { name: "SQL", usage: "Data queries" },
      { name: "Java", usage: "Backend" },
      { name: "JavaScript", usage: "Frontend" },
    ],
  },
  {
    title: "Frameworks",
    icon: "🏗️",
    color: "bg-[#7a5c91]",
    description: "Building production systems",
    tools: [
      { name: "FastAPI", usage: "REST APIs" },
      { name: "LangChain", usage: "RAG pipelines" },
      { name: "React", usage: "UI development" },
      { name: "Next.js", usage: "Full-stack" },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    color: "bg-[#6b8e4e]",
    description: "Data storage & retrieval",
    tools: [
      { name: "PostgreSQL", usage: "Relational DB" },
      { name: "MongoDB", usage: "Document DB" },
      { name: "ChromaDB", usage: "Vector store" },
      { name: "Pinecone", usage: "Vector search" },
    ],
  },
  {
    title: "ML & Data",
    icon: "🧠",
    color: "bg-[#d4a84b]",
    description: "Machine learning & analysis",
    tools: [
      { name: "Pandas", usage: "Data processing" },
      { name: "NumPy", usage: "Numerical ops" },
      { name: "Scikit-Learn", usage: "ML models" },
      { name: "NLTK/spaCy", usage: "NLP tools" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    color: "bg-[#b5544a]",
    description: "Deployment & infrastructure",
    tools: [
      { name: "Docker", usage: "Containers" },
      { name: "Git/GitHub", usage: "Version control" },
      { name: "AWS", usage: "Cloud services" },
      { name: "CI/CD", usage: "Automation" },
    ],
  },
  {
    title: "Gen AI & LLMs",
    icon: "🤖",
    color: "bg-[#1a1a1a]",
    description: "Large language models & RAG",
    tools: [
      { name: "OpenAI API", usage: "GPT models" },
      { name: "Groq", usage: "Fast inference" },
      { name: "Embeddings", usage: "Semantic search" },
      { name: "Prompt Eng.", usage: "LLM optimization" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <ChapterLayout
      chapterNumber={2}
      title="Skills"
      subtitle="Technical expertise & tools"
      prevChapter={{ href: "/chapters/origin", label: "About Me" }}
      nextChapter={{ href: "/chapters/experience", label: "Experience" }}
    >
      {/* Header Effect */}
      <div className="flex justify-center mb-8">
        <SoundEffect text="TECH STACK" size="lg" color="yellow" rotate={-3} />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ComicPanel className="h-full p-0 overflow-hidden">
              {/* Header */}
              <div
                className={`${category.color} text-white p-4 border-b-4 border-[#1a1a1a]`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-bangers)] text-xl">
                      {category.title}
                    </h3>
                    <p className="text-xs opacity-90 font-[family-name:var(--font-courier-prime)]">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="p-4 space-y-3">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between p-2 bg-[#f5f0e1] border-2 border-[#e8dcc8] hover:border-[#1a1a1a] transition-colors"
                  >
                    <span className="font-[family-name:var(--font-bangers)] text-[#1a1a1a]">
                      {tool.name}
                    </span>
                    <span className="text-xs text-[#8b7355] font-[family-name:var(--font-courier-prime)] bg-[#e8dcc8] px-2 py-0.5">
                      {tool.usage}
                    </span>
                  </div>
                ))}
              </div>
            </ComicPanel>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <ComicPanel className="bg-[#d4a84b]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#b5544a]">
                6
              </span>
              <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                Skill Categories
              </p>
            </div>
            <div className="p-4">
              <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#4a6fa5]">
                24+
              </span>
              <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                Technologies
              </p>
            </div>
            <div className="p-4">
              <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#6b8e4e]">
                2+
              </span>
              <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                Years Experience
              </p>
            </div>
            <div className="p-4">
              <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#7a5c91]">
                10K+
              </span>
              <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                Docs Processed
              </p>
            </div>
          </div>
        </ComicPanel>
      </motion.div>
    </ChapterLayout>
  );
}
