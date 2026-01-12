"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SoundEffect } from "@/components/comic";

interface Project {
  id: number;
  title: string;
  icon: string;
  classification: "TOP SECRET" | "CLASSIFIED" | "RESTRICTED";
  brief: string;
  approach: string[];
  tools: string[];
  impact: string;
  link?: string;
}

const caseFiles: Project[] = [
  {
    id: 1,
    title: "Financial Data Processing System",
    icon: "📊",
    classification: "TOP SECRET",
    brief:
      "End-to-end pipeline for automated financial document analysis, KPI extraction, and trend summarization using LLMs.",
    approach: [
      "Built intelligent document processing pipeline for financial reports",
      "Implemented automated KPI extraction with validation logic",
      "Created trend summarization using LangChain and LLM APIs",
      "Designed robust error handling and data quality checks",
    ],
    tools: ["LangChain", "FastAPI", "Python", "LLM APIs", "PostgreSQL"],
    impact: "Automated analysis workflow reducing manual processing by 80%",
    link: "https://github.com/Dharundp6",
  },
  {
    id: 2,
    title: "Multimodal AI Research",
    icon: "🧬",
    classification: "TOP SECRET",
    brief:
      "Research project combining visual feature extraction with RAG for enhanced decision support systems.",
    approach: [
      "Developed hybrid CNN-RAG architecture for multimodal understanding",
      "Combined visual features with contextual retrieval",
      "Presented research findings at National University of Singapore",
      "Published insights on AI-powered business analytics",
    ],
    tools: ["CNN", "RAG", "PyTorch", "Multimodal AI", "Research"],
    impact: "Presented at NUS; demonstrated measurable accuracy improvements",
  },
  {
    id: 3,
    title: "Production RAG Pipeline",
    icon: "🤖",
    classification: "TOP SECRET",
    brief:
      "Scalable retrieval-augmented generation system processing 10,000+ documents for production AI applications.",
    approach: [
      "Architected document chunking and embedding generation pipeline",
      "Implemented vector indexing with ChromaDB for semantic search",
      "Optimized for high throughput and low latency in production",
      "Built A/B testing framework for model evaluation",
    ],
    tools: ["LangChain", "ChromaDB", "FastAPI", "OpenAI API", "Docker"],
    impact: "10K+ documents processed with 30% accuracy improvement",
  },
  {
    id: 4,
    title: "NLP Classification API",
    icon: "💬",
    classification: "CLASSIFIED",
    brief:
      "High-performance NLP API for text classification serving 200+ daily requests with 92% accuracy.",
    approach: [
      "Built scalable FastAPI backend with PostgreSQL",
      "Trained custom classification models for domain-specific tasks",
      "Implemented caching and optimization for production load",
      "Created comprehensive API documentation and monitoring",
    ],
    tools: ["FastAPI", "NLP", "PostgreSQL", "Python", "Docker"],
    impact: "92% accuracy handling 200+ requests/day in production",
  },
  {
    id: 5,
    title: "Smart Agriculture Advisor",
    icon: "🌱",
    classification: "CLASSIFIED",
    brief:
      "Award-winning AI solution for sustainable agriculture recommendations at Wise-Ai-Thon 2024.",
    approach: [
      "Built ML-powered recommendation engine for farmers",
      "Integrated RAG for contextual farming advice",
      "Designed intuitive user interface for non-technical users",
    ],
    tools: ["ML", "RAG", "Python", "LangChain"],
    impact: "Won 1st Place at Wise-Ai-Thon 2024",
    link: "https://github.com/Dharundp6",
  },
  {
    id: 6,
    title: "This Portfolio",
    icon: "🎨",
    classification: "RESTRICTED",
    brief:
      "Manga-styled comic book portfolio built with Next.js, showcasing creative frontend development.",
    approach: [
      "Designed unique comic book aesthetic with Framer Motion animations",
      "Built reusable comic UI components (panels, speech bubbles, effects)",
      "Implemented chapter-based navigation with page transitions",
      "Created responsive design for all device sizes",
    ],
    tools: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    impact: "Unique portfolio demonstrating frontend creativity",
    link: "https://github.com/Dharundp6",
  },
];

const classificationColors = {
  "TOP SECRET": "bg-[#b5544a]",
  CLASSIFIED: "bg-[#d4a84b]",
  RESTRICTED: "bg-[#4a6fa5]",
};

export default function ProjectsPage() {
  const [selectedCase, setSelectedCase] = useState<Project | null>(null);

  return (
    <ChapterLayout
      chapterNumber={4}
      title="Projects"
      subtitle="Selected work & implementations"
      prevChapter={{ href: "/chapters/experience", label: "Experience" }}
      nextChapter={{ href: "/chapters/education", label: "Education" }}
    >
      {/* Header Effect */}
      <div className="flex justify-center mb-8">
        <SoundEffect text="PORTFOLIO" size="lg" color="red" rotate={3} />
      </div>

      {/* Case Files Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {caseFiles.map((caseFile, index) => (
          <motion.button
            key={caseFile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedCase(caseFile)}
            className="text-left"
          >
            <ComicPanel className="h-full p-4 hover:translate-x-1 hover:-translate-y-1 transition-transform cursor-pointer">
              {/* Classification Badge */}
              <div className="flex justify-between items-start mb-3">
                <span className="text-3xl">{caseFile.icon}</span>
                <span
                  className={`px-2 py-0.5 text-[10px] font-[family-name:var(--font-bangers)] text-white border-2 border-[#1a1a1a] ${
                    classificationColors[caseFile.classification]
                  }`}
                >
                  {caseFile.classification}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a] mb-2">
                {caseFile.title}
              </h3>

              {/* Brief Preview */}
              <p className="text-xs text-[#8b7355] font-[family-name:var(--font-courier-prime)] line-clamp-2 mb-3">
                {caseFile.brief}
              </p>

              {/* Tools Preview */}
              <div className="flex flex-wrap gap-1">
                {caseFile.tools.slice(0, 2).map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-[#e8dcc8] text-[10px] text-[#5c4d3c]"
                  >
                    {tool}
                  </span>
                ))}
                {caseFile.tools.length > 2 && (
                  <span className="px-2 py-0.5 bg-[#e8dcc8] text-[10px] text-[#5c4d3c]">
                    +{caseFile.tools.length - 2}
                  </span>
                )}
              </div>

              {/* Click Hint */}
              <p className="mt-3 text-xs text-[#b5544a] font-[family-name:var(--font-bangers)]">
                CLICK TO OPEN DOSSIER →
              </p>
            </ComicPanel>
          </motion.button>
        ))}
      </div>

      {/* Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1a1a1a]/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#f5f0e1] border-[4px] border-[#1a1a1a] max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#1a1a1a] text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedCase.icon}</span>
                  <h2 className="font-[family-name:var(--font-bangers)] text-xl">
                    {selectedCase.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-1 hover:bg-white/20 rounded"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Classification */}
                <div className="flex justify-center">
                  <span
                    className={`px-4 py-1 text-sm font-[family-name:var(--font-bangers)] text-white border-2 border-[#1a1a1a] ${
                      classificationColors[selectedCase.classification]
                    }`}
                  >
                    {selectedCase.classification}
                  </span>
                </div>

                {/* Brief */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-[#8b7355] mb-2">
                    BRIEF:
                  </h3>
                  <p className="text-[#1a1a1a] font-[family-name:var(--font-courier-prime)]">
                    {selectedCase.brief}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-[#8b7355] mb-2">
                    APPROACH:
                  </h3>
                  <ul className="space-y-2">
                    {selectedCase.approach.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#b5544a] font-bold">
                          {index + 1}.
                        </span>
                        <span className="text-[#1a1a1a] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-[#8b7355] mb-2">
                    TOOLS:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-[#1a1a1a] text-[#f5f0e1] text-sm font-[family-name:var(--font-courier-prime)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-[#8b7355] mb-2">
                    IMPACT:
                  </h3>
                  <div className="p-4 bg-[#6b8e4e]/20 border-2 border-[#6b8e4e]">
                    <p className="text-[#1a1a1a] font-semibold">
                      {selectedCase.impact}
                    </p>
                  </div>
                </div>

                {/* Link */}
                {selectedCase.link && (
                  <div className="flex justify-center">
                    <a
                      href={selectedCase.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#4a6fa5] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] hover:bg-[#3a5f95] transition-colors"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ChapterLayout>
  );
}
