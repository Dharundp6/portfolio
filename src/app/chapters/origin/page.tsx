"use client";

import { motion } from "framer-motion";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SpeechBubble, MangaAvatar, NarratorBox } from "@/components/comic";

const timelineEvents = [
  {
    year: "2022",
    title: "Academic Foundation",
    description: "Started BSc Data Science at Kumaraguru College of Technology. Built strong foundations in Python, SQL, and data analysis.",
    icon: "🎓",
  },
  {
    year: "2024",
    title: "Industry Experience",
    description: "Software Engineer Intern at Wise Work - developed production RAG pipelines, NLP infrastructure, and scalable APIs.",
    icon: "💼",
  },
  {
    year: "2025",
    title: "Research & Growth",
    description: "Completed BSc in Data Science. Research Analyst at Kumaraguru Business School, delivering AI-powered insights.",
    icon: "🧠",
  },
  {
    year: "2025-26",
    title: "Advanced Studies",
    description: "MSc Data Science at University of Glasgow. Focusing on advanced ML techniques and production systems.",
    icon: "🚀",
  },
];

export default function OriginStoryPage() {
  return (
    <ChapterLayout
      chapterNumber={1}
      title="About Me"
      subtitle="Background & journey"
      nextChapter={{ href: "/chapters/skills", label: "Skills" }}
    >
      {/* Opening Panel */}
      <ComicPanel className="mb-8">
        <NarratorBox position="top-left" className="mb-6">
          From academic foundations to production systems - building AI solutions
          that deliver real business value.
        </NarratorBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <MangaAvatar expression="thinking" size="lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <SpeechBubble tailPosition="left">
              <p className="text-[#1a1a1a] leading-relaxed">
                I&apos;m <strong>Dharun Prasanth</strong>, an MSc Data Science student
                at University of Glasgow with a focus on building production-grade
                AI systems.
              </p>
            </SpeechBubble>

            <SpeechBubble tailPosition="left">
              <p className="text-[#1a1a1a] leading-relaxed">
                My core expertise: End-to-end RAG pipelines, NLP infrastructure,
                and scalable APIs that deliver measurable business outcomes.
              </p>
            </SpeechBubble>
          </motion.div>
        </div>
      </ComicPanel>

      {/* Timeline Panel */}
      <ComicPanel className="mb-8">
        <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6 text-center">
          THE JOURNEY SO FAR
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#d4a84b] transform md:-translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className={`relative flex items-start gap-4 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#b5544a] border-4 border-[#f5f0e1] rounded-full transform -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] comic-panel p-4 ${
                    index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 justify-start md:justify-end">
                    <span className="text-2xl">{event.icon}</span>
                    <span className="font-[family-name:var(--font-bangers)] text-xl text-[#b5544a]">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a] mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ComicPanel>

      {/* Core Motivation Panel */}
      <ComicPanel>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6">
            PROFESSIONAL FOCUS
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="comic-panel p-6 bg-[#d4a84b]/20 max-w-2xl mx-auto"
          >
            <p className="font-[family-name:var(--font-courier-prime)] text-lg text-[#1a1a1a] leading-relaxed">
              &ldquo;Building production systems that scale beyond notebooks -
              from RAG pipelines processing 10,000+ documents to NLP APIs handling
              200+ daily requests with 92% accuracy. I deliver solutions with
              measurable impact.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex justify-center gap-4 flex-wrap"
          >
            <span className="px-3 py-1 bg-[#4a6fa5] text-white text-sm font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a]">
              📍 Glasgow, UK
            </span>
            <span className="px-3 py-1 bg-[#6b8e4e] text-white text-sm font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a]">
              ✓ Open to Opportunities
            </span>
            <span className="px-3 py-1 bg-[#7a5c91] text-white text-sm font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a]">
              🎓 MSc @ UofG
            </span>
          </motion.div>
        </div>
      </ComicPanel>
    </ChapterLayout>
  );
}
